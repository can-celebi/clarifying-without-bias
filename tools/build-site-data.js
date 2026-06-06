#!/usr/bin/env node
"use strict";
/* =====================================================================
 * build-site-data.js — single source of truth for the live site data.
 * ---------------------------------------------------------------------
 * Replaces the old export-site-data.R. Reads the CANONICAL per-turn frame
 * that the report Rmd consumes (turns_corrected_tidy.csv) and re-sources
 * every leak/error number from the STRICT combined judge:
 *     bias  = bias_s   (strict bias)
 *     fact  = fact_s   (strict factual)
 *     cmplx = cpx_v    (complexity = valuation_procedure)
 *     incoh = incoh    (coherence failure)
 * It also assembles the page content (pipelines + Mermaid, personas,
 * classifier, literature) and a curated transcript sample, and writes
 * data/site-data.json + assets/js/site-data.js.
 *
 * SELF-TEST: condition-level aggregates (common-6) must match
 * analysis/corrected-rates-strict-full.csv — that equality proves the page
 * is on the canonical numbers. The script exits non-zero on mismatch.
 *
 * Usage:  node tools/build-site-data.js [STRESS_TEST_DIR]
 * ===================================================================== */

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const ST = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.resolve(REPO, '..', 'code', 'chatbot-stress-test');
const ANALYSIS = path.join(ST, 'analysis');
const RESULTS = path.join(ST, 'results');
const TIDY = path.join(ANALYSIS, 'report', 'turns_corrected_tidy.csv');
const CANON = path.join(ANALYSIS, 'corrected-rates-strict-full.csv');
const OUT_JSON = path.join(REPO, 'data', 'site-data.json');
const OUT_JS = path.join(REPO, 'assets', 'js', 'site-data.js');

const { diagramForPipeline, PIPELINES } = require(path.join(ST, 'src', 'pipeline-diagrams.js'));
const CHATBOT = path.resolve(REPO, '..', 'code', 'instructionBot', 'game', 'client_types', 'modules', 'logic', 'chatbot');

if (!fs.existsSync(TIDY)) { console.error('[build] missing tidy CSV:', TIDY); process.exit(1); }

// ---- tiny CSV parser (handles quoted fields) ------------------------
function parseCSV(text) {
    const rows = [];
    let field = '', row = [], inQ = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inQ) {
            if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
            else field += c;
        } else if (c === '"') inQ = true;
        else if (c === ',') { row.push(field); field = ''; }
        else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
        else if (c === '\r') { /* skip */ }
        else field += c;
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    const header = rows.shift();
    return rows.filter(r => r.length === header.length).map(r => {
        const o = {}; header.forEach((h, j) => o[h] = r[j]); return o;
    });
}

const NUM = ['runIdx', 'turnIdx', 'classification', 'is_error', 'bias', 'fact', 'incoh',
    'cmplx', 'cpx_v', 'fct_v', 'bias_s', 'fact_s', 'bias_v1', 'bot_cost', 'total_cost',
    'pipeline_cost', 'bot_latency'];

console.error('[build] reading', TIDY);
const rowsAll = parseCSV(fs.readFileSync(TIDY, 'utf-8'));
for (const r of rowsAll) for (const k of NUM) if (r[k] !== undefined && r[k] !== '') r[k] = Number(r[k]);
const rows = rowsAll.filter(r => !r.is_error);
console.error('[build] tidy rows (non-error):', rows.length, '/', rowsAll.length);

// strict per-turn values, with friendly aliases
for (const r of rows) {
    r._bias = r.bias_s ? 1 : 0;     // strict bias
    r._fact = r.fact_s ? 1 : 0;     // strict factual error
    r._cmplx = r.cpx_v ? 1 : 0;     // complexity (valuation procedure)
    r._incoh = r.incoh ? 1 : 0;     // coherence failure
}

const PERSONAS_ALL = [...new Set(rows.map(r => r.persona))].sort();
const COMMON6 = PERSONAS_ALL.filter(p => p !== 'frustration-spiral'); // matches --common6 (GATE ONLY)
// Display basis = the 5 core subjects (the report's main basis), shown everywhere on the site.
//  - demand-purpose-prober: excluded by request.
//  - frustration-spiral: ran only in the architecture (nano) phase, so it has no data in the
//    capability/correction conditions; excluded to avoid inconsistent gaps.
const EXCLUDE = ['demand-purpose-prober', 'frustration-spiral'];
const DISPLAY = PERSONAS_ALL.filter(p => !EXCLUDE.includes(p));          // 5 — shown everywhere
const HEADLINE = DISPLAY;                                               // headline pools the same 5
const SCENARIOS = ['random-mid', 'mirror-start'];

// ---- canonical condition labels (from corrected CSV) ----------------
const canonRows = fs.existsSync(CANON) ? parseCSV(fs.readFileSync(CANON, 'utf-8')) : [];
const condLabel = {}; // scenario||condId -> "P-all (mini)"
for (const c of canonRows) condLabel[`${c.scenario}||${c.condId}`] = c.condition;

// ---- stats helpers --------------------------------------------------
function wilson(k, n, z = 1.96) {
    if (!n) return { p: 0, lo: 0, hi: 0, n: 0, k: 0 };
    const p = k / n, d = 1 + z * z / n;
    const ctr = (p + z * z / (2 * n)) / d;
    const hw = (z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))) / d;
    return { p: r4(p), lo: r4(Math.max(0, ctr - hw)), hi: r4(Math.min(1, ctr + hw)), n, k };
}
const r4 = x => Math.round(x * 1e4) / 1e4;
const r2 = x => Math.round(x * 100) / 100;
function mean(a) { return a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0; }
function quantile(a, q) {
    if (!a.length) return 0;
    const s = [...a].sort((x, y) => x - y), pos = (s.length - 1) * q, b = Math.floor(pos), rest = pos - b;
    return s[b + 1] !== undefined ? s[b] + rest * (s[b + 1] - s[b]) : s[b];
}
function groupBy(arr, keyFn) {
    const m = new Map();
    for (const x of arr) { const k = keyFn(x); if (!m.has(k)) m.set(k, []); m.get(k).push(x); }
    return m;
}

// ---- condition catalogue (rich metadata, one per scenario×condId) ---
const condMeta = [];
for (const [key, rs] of groupBy(rows, r => `${r.scenario}||${r.condId}`)) {
    const [scenario, condId] = key.split('||');
    const s = rs[0];
    condMeta.push({
        scenario, condId,
        label: condLabel[key] || s.label || condId,
        dimension: s.dimension, model: s.model, reasoning: s.reasoning, pipeline: s.pipeline,
        n: rs.length,
    });
}

// ---- byCondition: turn-level + run-level (common-6) -----------------
function rateBlock(rs, field) {
    const arr = rs.map(r => r[field]);
    const k = arr.reduce((s, x) => s + x, 0);
    return wilson(k, arr.length);
}
const byCondition = [];
for (const [key, rsAll] of groupBy(rows, r => `${r.scenario}||${r.condId}`)) {
    const [scenario, condId] = key.split('||');
    const rs = rsAll.filter(r => HEADLINE.includes(r.persona));
    const label = condLabel[key] || rsAll[0].label || condId;
    // turn level
    for (const [metric, field] of [['bias', '_bias'], ['fact', '_fact'], ['cmplx', '_cmplx'], ['incoh', '_incoh']]) {
        const b = rateBlock(rs, field);
        byCondition.push({ scenario, condId, label, metric, level: 'turn', ...b });
    }
    // run level (per-conversation "any")
    const convos = [...groupBy(rs, r => `${r.persona}|${r.runIdx}`).values()];
    const anyBias = convos.map(c => c.some(r => r._bias) ? 1 : 0);
    const anyFact = convos.map(c => c.some(r => r._fact) ? 1 : 0);
    const anyCmplx = convos.map(c => c.some(r => r._cmplx) ? 1 : 0);
    const anyIncoh = convos.map(c => c.some(r => r._incoh) ? 1 : 0);
    const runOf = a => wilson(a.reduce((s, x) => s + x, 0), a.length);
    byCondition.push({ scenario, condId, label, metric: 'bias', level: 'run', ...runOf(anyBias) });
    byCondition.push({ scenario, condId, label, metric: 'fact', level: 'run', ...runOf(anyFact) });
    byCondition.push({ scenario, condId, label, metric: 'cmplx', level: 'run', ...runOf(anyCmplx) });
    byCondition.push({ scenario, condId, label, metric: 'incoh', level: 'run', ...runOf(anyIncoh) });
}

// ---- byPersona (all 7, turn-level) ----------------------------------
const byPersona = [];
for (const [key, rs] of groupBy(rows, r => `${r.scenario}||${r.condId}||${r.persona}`)) {
    const [scenario, condId, persona] = key.split('||');
    if (!DISPLAY.includes(persona)) continue;   // exclude demand-purpose-prober
    for (const [metric, field] of [['bias', '_bias'], ['fact', '_fact'], ['cmplx', '_cmplx'], ['incoh', '_incoh']]) {
        byPersona.push({ scenario, condId, persona, metric, ...rateBlock(rs, field) });
    }
}

// ---- byClass (pipeline P-all, all models pooled) --------------------
const CLASS_LABELS = ['Irrelevant', 'Advice', 'Clarification', 'Complexity', 'Example', 'Meta'];
const byClass = [];
const pall = rows.filter(r => r.pipeline === 'P-all' && HEADLINE.includes(r.persona) && r.classification >= 0 && r.classification <= 5);
for (const [key, rs] of groupBy(pall, r => `${r.scenario}||${r.classification}`)) {
    const [scenario, cls] = key.split('||');
    byClass.push({
        scenario, class_idx: Number(cls), class_label: CLASS_LABELS[Number(cls)] || cls,
        n: rs.length,
        bias: r4(mean(rs.map(r => r._bias))), fact: r4(mean(rs.map(r => r._fact))),
        cmplx: r4(mean(rs.map(r => r._cmplx))),
    });
}

// ---- cumulative bias by turn (per condition) ------------------------
const cumulative = [];
for (const [key, rsAll] of groupBy(rows, r => `${r.scenario}||${r.condId}`)) {
    const [scenario, condId] = key.split('||');
    const rs = rsAll.filter(r => HEADLINE.includes(r.persona));
    const convos = groupBy(rs, r => `${r.persona}|${r.runIdx}`);
    const byTurn = new Map(); // turnIdx -> [cum flags]
    for (const turns of convos.values()) {
        turns.sort((a, b) => a.turnIdx - b.turnIdx);
        let cum = 0;
        for (const t of turns) {
            cum = cum || t._bias;
            if (!byTurn.has(t.turnIdx)) byTurn.set(t.turnIdx, []);
            byTurn.get(t.turnIdx).push(cum);
        }
    }
    for (const [turnIdx, flags] of [...byTurn.entries()].sort((a, b) => a[0] - b[0]))
        cumulative.push({ scenario, condId, turn: turnIdx + 1, p: r4(mean(flags)) });
}

// ---- pareto (per condition, common-6) -------------------------------
const pareto = [];
for (const [key, rsAll] of groupBy(rows, r => `${r.scenario}||${r.condId}`)) {
    const [scenario, condId] = key.split('||');
    const rs = rsAll.filter(r => HEADLINE.includes(r.persona));
    pareto.push({
        scenario, condId, label: condLabel[key] || rsAll[0].label || condId,
        model: rsAll[0].model, pipeline: rsAll[0].pipeline, dimension: rsAll[0].dimension,
        bias_perf: r4(100 * (1 - mean(rs.map(r => r._bias)))),
        cost_per_k: r4(mean(rs.map(r => r.total_cost || 0)) * 1000),
        p95_latency_s: r4(quantile(rs.map(r => r.bot_latency || 0), 0.95) / 1000),
    });
}

// =====================================================================
// SELF-TEST: condition aggregates (common-6, turn %) == corrected CSV
// =====================================================================
let gateFail = 0, gateChecked = 0;
for (const c of canonRows) {
    const key = `${c.scenario}||${c.condId}`;
    const rs = rows.filter(r => r.scenario === c.scenario && r.condId === c.condId && COMMON6.includes(r.persona));
    if (!rs.length) continue;
    const cmp = [['bias_strict', '_bias'], ['fact_strict', '_fact'], ['complexity', '_cmplx']];
    for (const [canonCol, field] of cmp) {
        const got = r2(100 * mean(rs.map(r => r[field])));
        const want = r2(Number(c[canonCol]));
        gateChecked++;
        if (Math.abs(got - want) > 0.06) {
            gateFail++;
            console.error(`[gate] MISMATCH ${key} ${canonCol}: got ${got} want ${want}`);
        }
    }
}
console.error(`[gate] checked ${gateChecked} cells; mismatches: ${gateFail}`);
if (gateFail > 0) { console.error('[gate] FAILED — page numbers do not match canonical CSV. Aborting.'); process.exit(2); }

// =====================================================================
// STATIC CONTENT
// =====================================================================
const PIPELINE_CONTENT = {
    'P-all': { label: 'Single call (∅)', short: 'one constrained model call',
        agents: 1, best: true,
        desc: 'A single LLM call that internally classifies the message and replies in one step. No router, no specialists, no corrector. The Pareto-dominant architecture: lowest bias, cost, and latency in every cell.' },
    'P2': { label: 'Classify → specialist (RS)', short: 'router + one of six specialists',
        agents: 7,
        desc: 'A classifier routes the message to one of six specialist agents (deny / reflect / clarify / complex / example / meta), each with its own refusal discipline. Tests whether routing alone helps — it does not; the bare router is the worst architecture.' },
    'P2-probe': { label: 'Classify (+probe) → specialist (RS+P)', short: 'router + clarifying-probe gate + specialist',
        agents: 8,
        desc: 'P2 plus a probe gate: when the classifier is unsure, the bot asks one neutral clarifying question before routing. Pulls back partway from the bare router but never below the single call.' },
    'P-perclass': { label: 'Classify → specialist + per-class corrector (RS+C)', short: 'router + specialist + audited rewrite',
        agents: 10,
        desc: 'P2 with a specialised corrector after the help specialists (clarify / example / meta) that audits and rewrites the draft. The corrector is neutral at best on a capable model and harmful on the weakest one.' },
    'P-probe-perclass': { label: 'Full stack (RS+P+C)', short: 'probe gate + router + specialist + corrector',
        agents: 11,
        desc: 'The most elaborate pipeline: probe gate, classifier, specialist, and per-class corrector combined. The most machinery and, predictably, among the worst on bias.' },
};
// bot agents: per-pipeline lists + which schema file each agent uses
const AGENT_SCHEMA = { allInOne:'allInOne', classify:'classify', probe:'probe', deny:'deny',
  reflect:'reflect', clarify:'clarify', complex:'complex', example:'example', meta:'meta',
  correctorClarify:'corrector', correctorExample:'corrector', correctorMeta:'corrector' };
const AGENT_LABEL = { allInOne:'allInOne — single call', classify:'classify — router',
  probe:'probe — clarifying gate', deny:'deny', reflect:'reflect', clarify:'clarify', complex:'complex',
  example:'example', meta:'meta', correctorClarify:'corrector · clarify',
  correctorExample:'corrector · example', correctorMeta:'corrector · meta' };
const PIPE_AGENTS = {
  'P-all': ['allInOne'],
  'P2': ['classify','deny','reflect','clarify','complex','example','meta'],
  'P2-probe': ['classify','probe','deny','reflect','clarify','complex','example','meta'],
  'P-perclass': ['classify','deny','reflect','clarify','complex','example','meta','correctorClarify','correctorExample','correctorMeta'],
  'P-probe-perclass': ['classify','probe','deny','reflect','clarify','complex','example','meta','correctorClarify','correctorExample','correctorMeta'],
};
const pipelines = PIPELINES.map(id => ({
    id, ...PIPELINE_CONTENT[id], mermaid: diagramForPipeline(id), agents: PIPE_AGENTS[id] || [],
}));

// classifier + specialists
const classifier = {
    categories: [
        { idx: 0, key: 'deny', label: 'Irrelevant', desc: 'Off-topic / outside the experiment.' },
        { idx: 1, key: 'reflect', label: 'Advice', desc: 'Asks which option to pick or how to decide.' },
        { idx: 2, key: 'clarify', label: 'Clarification', desc: 'Asks what a rule means or how the layout works.' },
        { idx: 3, key: 'complex', label: 'Complexity', desc: 'Asks the bot to structure or solve the valuation — set up the value function, relate the parameters, or compute a value.' },
        { idx: 4, key: 'example', label: 'Example', desc: 'Asks for a worked illustration.' },
        { idx: 5, key: 'meta', label: 'Meta', desc: 'Logistics, payment, technical issues, or the study’s purpose.' },
    ],
    specialists: [
        { name: 'deny', fires: 'Irrelevant', role: 'Declines off-topic requests and points back to the rules.', rule: 'State the refusal plainly; never explain or apologise for it.', example: 'I can only help with the rules of this task.' },
        { name: 'reflect', fires: 'Advice', role: 'Refuses to recommend a set or a switching row.', rule: 'No advice, no hints at "how to think about it", no dominance cues.', example: 'I can’t tell you which set to pick. If a rule is unclear, tell me which part.' },
        { name: 'clarify', fires: 'Clarification', role: 'Explains rule mechanics and table layout in plain language.', rule: 'Clarify structure only; never perform the subject’s valuation.', example: 'Set B’s amount steps down by $1 each row; Set A looks the same in every row.' },
        { name: 'complex', fires: 'Complexity', role: 'Refuses to reduce the task’s complexity — structuring the valuation, relating the parameters, or computing values on the subject’s behalf.', rule: 'No setting up the value function and no EV / average / threshold math; no alternative offered.', example: 'I can’t set up or compute the value of your set for you.' },
        { name: 'example', fires: 'Example', role: 'Gives a toy illustration with small invented numbers.', rule: 'Never use the subject’s actual row values, even "as an example".', example: 'As a tiny illustration: imagine 3 boxes holding $2, $2, $0 — not your row.' },
        { name: 'meta', fires: 'Meta', role: 'Answers logistics; refuses purpose, demand cues, and future treatments.', rule: 'No study purpose, no "what most people do", no unseen rules/stages.', example: 'I can’t discuss the study’s purpose or whether other versions exist.' },
    ],
};

// literature — every entry web-verified with a canonical link (see PUSH log)
const literature = [
    { group: 'Confusion as a confound in experiments', blurb: 'Why a clarifier matters: misunderstanding, not preference, can drive observed behaviour — and bias the theory built on it.', items: [
        { cite: 'Andreoni (1995), AER', title: 'Cooperation in Public-Goods Experiments: Kindness or Confusion?', note: 'The original demonstration that apparent cooperation partly reflects confusion, not altruism.', url: 'https://www.jstor.org/stable/2118238' },
        { cite: 'Houser & Kurzban (2002), AER', title: 'Revisiting Kindness and Confusion in Public Goods Experiments', note: 'Isolates the confusion component and shows it is sizeable.', url: 'https://doi.org/10.1257/00028280260344605' },
        { cite: 'Ferraro & Vossler (2010)', title: 'The Source and Significance of Confusion in Public Goods Experiments', note: 'Traces where the confusion comes from and how much it distorts estimates.', url: 'https://doi.org/10.2202/1935-1682.2006' },
        { cite: 'Burton-Chellew et al. (2016), PNAS', title: 'Conditional Cooperation and Confusion in Public-Goods Experiments', note: 'Confusion masquerades as conditional cooperation.', url: 'https://doi.org/10.1073/pnas.1509740113' },
        { cite: 'Wang et al. (2024), PNAS', title: 'Confusion Cannot Explain Cooperative Behavior in Public Goods Games', note: 'The live debate on how far confusion reaches — motivating careful comprehension control.', url: 'https://doi.org/10.1073/pnas.2310109121' },
        { cite: 'Koppel et al. (2025), JEBO', title: 'Comprehension in Economic Games', note: 'Recent, direct evidence on how comprehension shapes game behaviour.', url: 'https://doi.org/10.1016/j.jebo.2025.107039' },
    ]},
    { group: 'Risk, complexity & the Oprea paradigm', blurb: 'The experiment we replicate: anomalies long read as risk preferences are substantially complexity-driven error.', items: [
        { cite: 'Kahneman & Tversky (1979), Econometrica', title: 'Prospect Theory: An Analysis of Decision under Risk', note: 'The classic source of the risk anomalies Oprea reinterprets.', url: 'https://doi.org/10.2307/1914185' },
        { cite: 'Oprea (2024), AER', title: 'Decisions under Risk Are Decisions under Complexity', note: 'The replicated paradigm: the deterministic "mirror" isolates complexity from risk; anomalies persist without any risk.', url: 'https://doi.org/10.1257/aer.20221227' },
        { cite: 'Wakker (2025), working paper', title: 'Relating Risky to Riskless Preferences, and Their Joint Irrationality: A Comment on Oprea (2024)', note: 'A comment refining the risk-vs-complexity interpretation.', url: 'https://personal.eur.nl/wakker/pdf/opreacomment.pdf' },
        { cite: 'Banki, Simonsohn, Walatka & Wu (2025)', title: 'Decisions under Risk Are Decisions under Complexity: Comment', note: 'Re-examines the original result; part of the active exchange the design speaks to.', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5127515' },
        { cite: 'Wu (2025), working paper', title: 'There Is No Smoke with Mirrors when Instructions Are Clear', note: 'Argues clearer instructions shrink the mirror effect — exactly the lever this chatbot pulls.', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5177815' },
    ]},
    { group: 'LLM agents, reasoning & reliability (the chatbot’s design)', blurb: 'The 2024–2026 evidence that bounds the design space: simpler beats elaborate, reasoning can hurt, reliability must be measured over many trials.', items: [
        { cite: 'Anthropic (2024)', title: 'Building Effective Agents', note: 'Practitioner guidance: prefer the simplest workflow that works; keep guardrails separate.', url: 'https://www.anthropic.com/research/building-effective-agents' },
        { cite: 'Kim et al. (Google Research + MIT, 2025)', title: 'Towards a Science of Scaling Agent Systems', note: 'Large config study: multi-agent degrades sequential tasks; wins mainly on parallel work.', url: 'https://arxiv.org/abs/2512.08296' },
        { cite: 'Cemri et al. (2025), NeurIPS', title: 'Why Do Multi-Agent LLM Systems Fail? (MAST)', note: 'A failure taxonomy showing failures are architectural, not model-bound.', url: 'https://arxiv.org/abs/2503.13657' },
        { cite: 'Tran & Kiela (2026)', title: 'Single-Agent LLMs Outperform Multi-Agent Systems on Multi-Hop Reasoning under Equal Thinking Token Budgets', note: 'At matched compute, a single agent beats multi-agent — supporting the single-call result here.', url: 'https://arxiv.org/abs/2604.02460' },
        { cite: 'Šléher et al. (2025)', title: 'Guarded Query Routing for Large Language Models (GQR-Bench)', note: 'Lightweight routers rival LLM routers at far lower cost.', url: 'https://arxiv.org/abs/2505.14524' },
        { cite: 'Ding et al. (2024), ICLR', title: 'Hybrid LLM: Cost-Efficient and Quality-Aware Query Routing', note: 'Difficulty-based routing cuts large-model calls with no quality loss.', url: 'https://arxiv.org/abs/2404.14618' },
        { cite: 'Li et al. (2025), NeurIPS', title: 'When Thinking Fails: The Pitfalls of Reasoning for Instruction-Following in LLMs', note: 'Extended chain-of-thought degraded instruction-following in 13/14 models — why reasoning can hurt here.', url: 'https://arxiv.org/abs/2505.11423' },
        { cite: 'Gema et al. (2025), TMLR', title: 'Inverse Scaling in Test-Time Compute', note: 'Longer reasoning can lower accuracy and amplify off-spec behaviour (Edinburgh-led, with Anthropic co-authors).', url: 'https://arxiv.org/abs/2507.14417' },
        { cite: 'Zhou et al. (2023)', title: 'Instruction-Following Evaluation for LLMs (IFEval)', note: 'The canonical instruction-following benchmark — mostly positive constraints; prohibitions remain a gap this fills.', url: 'https://arxiv.org/abs/2311.07911' },
        { cite: 'Yao et al. (Sierra, 2024)', title: 'τ-bench: Tool-Agent-User Interaction in Real-World Domains', note: 'Introduces pass^k — reliability decays sharply across repeated trials; measure per conversation.', url: 'https://arxiv.org/abs/2406.12045' },
        { cite: 'Cui & Alexander (2026)', title: 'Same Prompt, Different Outcomes: Evaluating the Reproducibility of Data Analysis by LLMs', note: 'LLM outputs vary across runs/temperatures — report distributions, not single shots.', url: 'https://arxiv.org/abs/2602.14349' },
        { cite: 'Soumik (2026)', title: 'Judging the Judges: A Systematic Evaluation of Bias-Mitigation Strategies in LLM-as-a-Judge Pipelines', note: 'LLM judges carry style/position/verbosity bias — why we anchor to a gold control set.', url: 'https://arxiv.org/abs/2604.23178' },
        { cite: 'Chi et al. (1994), Cognitive Science', title: 'Eliciting Self-Explanations Improves Understanding', note: 'Clarification can deepen comprehension without supplying answers — the line the bot must walk.', url: 'https://onlinelibrary.wiley.com/doi/10.1207/s15516709cog1803_3' },
    ]},
    { group: 'Economics × AI', items: [
        { cite: 'Horton, Filippas & Manning (2023), NBER', title: 'LLMs as Simulated Economic Agents: What Can We Learn from Homo Silicus?', note: 'Framing of LLMs inside economic experiments.', url: 'https://www.nber.org/papers/w31122' },
        { cite: 'Geiecke & Jaravel (2024)', title: 'Conversations at Scale: Robust AI-led Interviews with a Simple Open-Source Platform', note: 'Strongest AI-interviewer evidence; stresses full prompt/interface control.', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4974382' },
        { cite: 'DiGiuseppe & Robison (2026)', title: 'Perceived Political Bias in LLMs Reduces Persuasive Abilities', note: 'Preregistered, N≈2144: a bias warning cut persuasion 28% — perceived neutrality materially matters.', url: 'https://arxiv.org/abs/2602.18092' },
    ]},
];

// =====================================================================
// CURATED TRANSCRIPTS
// =====================================================================
const cellCache = new Map();
function loadCell(sweep, scenario, condId) {
    const key = `${sweep}/${scenario}__${condId}`;
    if (cellCache.has(key)) return cellCache.get(key);
    const p = path.join(RESULTS, sweep, `${scenario}__${condId}`, 'turns.jsonl');
    const map = new Map();
    if (fs.existsSync(p)) {
        for (const line of fs.readFileSync(p, 'utf-8').split('\n')) {
            if (!line.trim()) continue;
            try { const o = JSON.parse(line); map.set(`${o.personaId}|${o.runIdx}|${o.turnIdx}`, o); } catch (_) {}
        }
    }
    cellCache.set(key, map);
    return map;
}
// condId -> sweep (per scenario), from tidy
const sweepOf = {};
for (const r of rows) sweepOf[`${r.scenario}||${r.condId}`] = r.sweep;

function liteTrace(o) {
    const tr = (o && o.meta && o.meta.trace) || [];
    return tr.map(s => ({ step: s.step, kind: s.kind, model: s.model,
        classificationLabel: s.classificationLabel })).slice(0, 8);
}
function turnRecord(r, kind, isContext) {
    const cell = loadCell(r.sweep, r.scenario, r.condId);
    const o = cell.get(`${r.persona}|${r.runIdx}|${r.turnIdx}`);
    if (!o) return null;
    return {
        kind, isContext: !!isContext,
        scenario: r.scenario, condId: r.condId,
        label: condLabel[`${r.scenario}||${r.condId}`] || r.label || r.condId,
        persona: r.persona, runIdx: r.runIdx, turnIdx: r.turnIdx,
        pipelineId: r.pipeline, model: r.model,
        classification: r.classification, classificationLabel: CLASS_LABELS[r.classification] || '',
        subjectMsg: o.subjectMsg || '', botReply: o.botReply || '',
        bias_s: r._bias, fact_s: r._fact, cpx_v: r._cmplx, incoh: r._incoh,
        trace: liteTrace(o),
    };
}

const transcripts = [];
// (a) clean refusal conversations: ∅·mini (B3-all-mini), one conversation per persona per scenario
for (const scenario of SCENARIOS) {
    for (const persona of DISPLAY) {
        const cand = rows.filter(r => r.scenario === scenario && r.condId === 'B3-all-mini' && r.persona === persona);
        if (!cand.length) continue;
        const runIdx = Math.min(...cand.map(r => r.runIdx));
        const convo = cand.filter(r => r.runIdx === runIdx).sort((a, b) => a.turnIdx - b.turnIdx);
        for (const r of convo) { const rec = turnRecord(r, 'clean', false); if (rec) transcripts.push(rec); }
    }
}
// (b) leak turns: strict bias==1 across configs, sampled for diversity, with one preceding turn for context
const leakRows = rows.filter(r => r._bias === 1 && DISPLAY.includes(r.persona));
// spread across (persona, condId): take up to 2 per (persona, condId)
const leakBuckets = groupBy(leakRows, r => `${r.persona}||${r.condId}`);
const leakPick = [];
for (const rs of leakBuckets.values()) {
    rs.sort((a, b) => a.runIdx - b.runIdx || a.turnIdx - b.turnIdx);
    leakPick.push(...rs.slice(0, 2));
}
leakPick.sort((a, b) => a.persona.localeCompare(b.persona));
const LEAK_CAP = 60;
for (const r of leakPick.slice(0, LEAK_CAP)) {
    if (r.turnIdx > 0) {
        const prev = rows.find(x => x.scenario === r.scenario && x.condId === r.condId &&
            x.persona === r.persona && x.runIdx === r.runIdx && x.turnIdx === r.turnIdx - 1);
        if (prev) { const pr = turnRecord(prev, 'leak', true); if (pr) transcripts.push(pr); }
    }
    const rec = turnRecord(r, 'leak', false); if (rec) transcripts.push(rec);
}
console.error(`[build] transcripts: ${transcripts.length} turns (clean convos + ${Math.min(leakPick.length, LEAK_CAP)} leak picks)`);

// =====================================================================
// HEADLINE numbers (recommended config, common-6, run+turn)
// =====================================================================
function condTurn(scenario, condId, metric) {
    const row = byCondition.find(b => b.scenario === scenario && b.condId === condId && b.metric === metric && b.level === 'turn');
    return row ? r4(row.p) : null;
}
const headline = {
    recommended: 'B3-all-mini',
    bias_mini: { random: condTurn('random-mid', 'B3-all-mini', 'bias'), mirror: condTurn('mirror-start', 'B3-all-mini', 'bias') },
    fact_mini: { random: condTurn('random-mid', 'B3-all-mini', 'fact'), mirror: condTurn('mirror-start', 'B3-all-mini', 'fact') },
    cmplx_mini: { random: condTurn('random-mid', 'B3-all-mini', 'cmplx'), mirror: condTurn('mirror-start', 'B3-all-mini', 'cmplx') },
    bias_nano: { random: condTurn('random-mid', 'P-all', 'bias'), mirror: condTurn('mirror-start', 'P-all', 'bias') },
    bias_full: { random: condTurn('random-mid', 'C1-P-all-M2', 'bias'), mirror: condTurn('mirror-start', 'C1-P-all-M2', 'bias') },
};

// =====================================================================
// ASSEMBLE + WRITE
// =====================================================================
const meta = {
    generatedAt: new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC',
    preliminary: false,
    scenarios: SCENARIOS,
    personasAll: DISPLAY,                 // subjects shown on the site (demand-purpose-prober excluded)
    headlineSubjects: HEADLINE,           // 5 core subjects pooled in the headline figures
    classLabels: CLASS_LABELS,
    nTurns: rows.filter(r => DISPLAY.includes(r.persona)).length,
    nConditions: condMeta.length,
    scenarioDesc: {
        'random-mid': 'Easy scenario (mid-experiment): the subject is partway through and has been shown one payoff rule. Less to clarify.',
        'mirror-start': 'Hard scenario (cold start): the subject is on the first task with both payoff rules in view. More to explain — about 2× harder.',
    },
    caveats: {
        bias: 'Bias is a conservative LOWER BOUND. The escalation re-judged only the cheap model’s positives; a recall audit found ~22.7% of cleared turns are bias leaks a stronger judge would catch, so the true bias rate is roughly ~2× these figures. Rankings are unaffected.',
        factual: 'Factual “errors” were almost entirely false positives of the first-pass judge (worst cell 42% → 1.4% after full adjudication); genuine rule contradictions are rare.',
        complexity: 'Complexity is measured by the valuation-procedure classifier, not the strict judge.',
    },
};

const site = {
    meta, headline, conditions: condMeta,
    results: { byCondition, byPersona, byClass, cumulative, pareto },
    pipelines, agents: loadAgents(), classifier, personas: loadPersonas(),
    literature, evaluation: loadEvaluation(), transcripts,
};

function readPromptMd(name){
    const p = path.join(CHATBOT, 'prompts', name + '.md');
    if (!fs.existsSync(p)) return '';
    let t = fs.readFileSync(p, 'utf-8');
    for (let pass = 0; pass < 3; pass++) {
        t = t.replace(/\{\{\s*include:([a-zA-Z0-9_.\-]+)\s*\}\}/g, (m, nm) => {
            let f = path.join(CHATBOT, 'prompts', '_' + nm + '.md');
            if (nm === 'scenario') f = path.join(CHATBOT, 'prompts', '_scenario.random-mid.md');
            return fs.existsSync(f) ? fs.readFileSync(f, 'utf-8') : '';
        });
    }
    return t.trim();
}
function readSchemaJson(name){
    const p = path.join(CHATBOT, 'schemas', name + '.json');
    return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf-8')) : null;
}
function loadAgents(){
    const out = {};
    for (const name of Object.keys(AGENT_SCHEMA))
        out[name] = { name, label: AGENT_LABEL[name] || name,
            prompt: readPromptMd(name), schema: readSchemaJson(AGENT_SCHEMA[name]) };
    return out;
}
function loadEvaluation(){
    const out = [];
    const tryAdd = (rel, role) => {
        const p = path.join(ST, 'src', rel);
        if (!fs.existsSync(p)) return;
        const m = JSON.parse(fs.readFileSync(p, 'utf-8'));
        out.push({ id: m.id, label: m.label || m.id, description: m.description || '', role,
            outputType: m.outputType || '', failWhen: (m.failWhen !== undefined ? m.failWhen : null),
            systemPrompt: m.systemPrompt || m.judgePrompt || '', outputSchema: m.outputSchema || null });
    };
    tryAdd('metrics/audit/bias-fact-strict.json', 'Final canonical judge — re-adjudicates bias + factual together on gpt-5.4, anchored to a 26-case gold control set.');
    tryAdd('metrics/bias-check.json', 'First-pass bias judge (the cheap high-recall floor).');
    tryAdd('metrics/fact-check.json', 'First-pass factual judge (the cheap high-recall floor).');
    tryAdd('metrics/optional/answer-coherence.json', 'Coherence / quality check, scored on every reply.');
    tryAdd('metrics/answer-coherence.json', 'Coherence / quality check, scored on every reply.');
    tryAdd('metrics/answer-coherence.json.off', 'Coherence / quality check, scored on every reply.');
    const seen = new Set();
    return out.filter(x => seen.has(x.id) ? false : (seen.add(x.id), true));
}

// Redact the hidden-design "Behind the scenes" paragraph before publishing, to
// protect the live experiment's firewall (a prospective human subject must not be
// able to read the two-stage design online). The persona's attack behaviour is kept.
function redactFirewall(sp) {
    return String(sp || '').replace(
        /\*\*Behind the scenes[\s\S]*?(?=\n\s*##\s)/,
        '*(A paragraph describing the experiment’s hidden two-stage design is withheld here to protect the live experiment’s firewall.)*\n');
}
function loadPersonas() {
    const dir = path.join(ST, 'src', 'personas');
    return fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => {
        const p = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
        return { id: p.id, label: p.label, description: p.description,
            temperature: p.temperature, systemPrompt: redactFirewall(p.systemPrompt),
            openingMessages: p.openingMessages || [] };
    }).filter(p => DISPLAY.includes(p.id))   // exclude demand-purpose-prober
      .sort((a, b) => a.id.localeCompare(b.id));
}

const json = JSON.stringify(site, null, 2);
fs.writeFileSync(OUT_JSON, json);
fs.writeFileSync(OUT_JS, 'window.SITE_DATA = ' + json + ';\n');
console.error('[build] wrote', OUT_JSON);
console.error('[build] wrote', OUT_JS);
console.error('[build] headline bias (∅·mini) random/mirror:',
    headline.bias_mini.random, '/', headline.bias_mini.mirror,
    '| nano:', headline.bias_nano.random, '/', headline.bias_nano.mirror);
