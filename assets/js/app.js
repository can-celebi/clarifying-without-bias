/* ============================================================
   app.js — routing + content rendering for the card-grid site.
   Consumes window.SITE_DATA. Results charts live in charts.js.
   ============================================================ */
(function () {
"use strict";
const D = window.SITE_DATA;
if (!D) { console.error("SITE_DATA missing"); return; }
const $ = s => document.querySelector(s);
const esc = s => String(s==null?"":s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

if (window.mermaid) mermaid.initialize({ startOnLoad:false, theme:"default", securityLevel:"loose",
  flowchart:{ curve:"basis", padding:14, useMaxWidth:true } });
async function renderMermaid(el, src){
  if (!el || !window.mermaid) return;
  el.removeAttribute("data-processed"); el.innerHTML = ""; el.textContent = src;
  try { await mermaid.run({ nodes:[el] }); } catch(e){ console.warn("mermaid", e); }
}

/* ---------------- routing ---------------- */
const VIEWS = ["background","methodology","build","pipelines","subjects","classifier","evaluation","conversations","literature","results","discussion","future"];
const built = {};
function showHome(){
  document.querySelectorAll(".landing").forEach(e=>e.style.display="");
  document.querySelectorAll(".detail").forEach(e=>e.style.display="none");
  window.scrollTo(0,0);
}
function showView(name){
  if (!VIEWS.includes(name)) { showHome(); return; }
  document.querySelectorAll(".landing").forEach(e=>e.style.display="none");
  document.querySelectorAll(".detail").forEach(e=>e.style.display="none");
  const v = document.getElementById("view-"+name);
  if (v) v.style.display="block";
  window.scrollTo(0,0);
  hooks(name);
}
function hooks(name){
  if (name==="pipelines" && !built.pipelines) buildPipelines();
  if (name==="subjects" && !built.subjects) buildSubjects();
  if (name==="classifier" && !built.classifier) buildClassifier();
  if (name==="evaluation" && !built.evaluation) buildEvaluation();
  if (name==="conversations" && !built.conversations) buildTranscripts();
  if (name==="literature" && !built.literature) buildLiterature();
  if (name==="results"){ buildResultsGlossary(); if (window.ResultsCharts){ window.ResultsCharts.render(); setTimeout(()=>window.ResultsCharts.resize(),60); } }
}
function route(){ const h=(location.hash||"").replace(/^#/,""); h?showView(h):showHome(); }
window.addEventListener("hashchange", route);
document.addEventListener("click", e => {
  const home = e.target.closest("[data-home]");
  if (home){ e.preventDefault(); if (location.hash) location.hash=""; else showHome(); }
});

/* ---------------- diagram lightbox (click to enlarge) ---------------- */
function openDiagram(srcEl){
  const m = $("#diagram-modal"); if (!m || !srcEl) return;
  const body = m.querySelector(".dmodal-body");
  body.innerHTML = srcEl.innerHTML;
  const svg = body.querySelector("svg");
  if (svg){ svg.style.maxWidth="none"; svg.style.width="min(48vw, 640px)"; svg.style.maxHeight="82vh";
    svg.style.height="auto"; svg.removeAttribute("height"); }
  m.hidden = false;
}
function closeDiagram(){ const m=$("#diagram-modal"); if(m){ m.hidden=true; m.querySelector(".dmodal-body").innerHTML=""; } }
document.addEventListener("click", e => {
  if (e.target.closest(".dmodal-x") || e.target.id==="diagram-modal"){ closeDiagram(); return; }
  const wrap = e.target.closest(".mermaid-wrap");
  if (wrap && !e.target.closest(".dmodal")) openDiagram(wrap.querySelector(".mermaid"));
});
document.addEventListener("keydown", e => { if (e.key==="Escape") closeDiagram(); });

/* ---------------- card grid ---------------- */
const CARDS = [
  { v:"background",    icon:"🎯", title:"Background", teaser:"Why this exists: how confusion masquerades as preference, what Oprea's experiment is (with a diagram), his main result that risk anomalies are really complexity, and the debate it sparked." },
  { v:"results",       icon:"📊", title:"Results", teaser:"Interactive charts on the canonical strict-judge rates: frontier, architecture, model size, accumulation, by subject and category — the leaderboard, the statistical tests, and the threat model." },
  { v:"methodology",   icon:"🧪", title:"Methodology", teaser:"How the study was designed and run — the chatbot's role, the adversarial protocol, the boundary it must hold, the models and conditions, and the scoring. Opens into the building blocks: pipelines, subjects, the classifier, and the judges." },
  { v:"build",         icon:"🛠️", title:"How it's built", teaser:"The engineering: one portable, config-driven chatbot core that drops into the live experiment unchanged, the adversarial harness that tests it, and how every number regenerates from the raw logs through a single script." },
  { v:"conversations", icon:"💬", title:"Conversations", teaser:"A curated sample of real transcripts — clean refusals and the rare flagged turns — with strict judgments and pipeline traces." },
  { v:"literature",    icon:"📚", title:"Literature", teaser:"The confusion-in-experiments debate behind the question, the Oprea complexity paradigm, and the LLM-agent evidence behind the design — the full discussion, every source linked." },
  { v:"discussion",    icon:"🧩", title:"Discussion", teaser:"What it means: simpler is safer, model size is the main determinant, and where the residual bias actually lives — plus deployment advice." },
  { v:"future",        icon:"🧭", title:"Future", teaser:"Where this goes next: the treatment-arm design that turns the chatbot into a clean comprehension manipulation, live lab deployment, and generalization to other experiments." },
];
function buildGrid(){
  const g = $("#cardgrid"); if (!g) return;
  g.innerHTML = CARDS.map(c => `
    <a class="navcard" href="#${c.v}">
      <div class="navcard-ic">${c.icon}</div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.teaser)}</p>
      <span class="navcard-go">Open &rarr;</span>
    </a>`).join("");
}

/* ---------------- pipelines ---------------- */
function buildPipelines(){
  built.pipelines = true;
  const tabs = $("#pipe-tabs");
  tabs.innerHTML = D.pipelines.map((p,i) =>
    `<button class="pipe-tab${i===0?' active':''}" data-id="${esc(p.id)}">${esc(p.label)}${p.best?' <span class="bestdot">★</span>':''}</button>`).join("");
  tabs.querySelectorAll(".pipe-tab").forEach(b => b.onclick = () => {
    tabs.querySelectorAll(".pipe-tab").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); renderPipe(b.dataset.id);
  });
  renderPipe(D.pipelines[0].id);
}
function renderPipe(id){
  const p = D.pipelines.find(x=>x.id===id); if (!p) return;
  const nAgents = (p.agents||[]).length;
  $("#pipe-meta").innerHTML =
    `<div class="pm-head"><span class="pm-id">${esc(p.id)}</span>${p.best?'<span class="ptag-inline">Pareto-best</span>':''}</div>`+
    `<h3>${esc(p.label)}</h3>`+
    `<div class="pm-badges"><span class="badge">${nAgents} agent${nAgents>1?'s':''}</span><span class="badge">${esc(p.short)}</span></div>`+
    `<p>${esc(p.desc)}</p>`;
  renderMermaid($("#pipe-mermaid"), p.mermaid);
  // agent chips for this pipeline
  const chips = $("#pipe-agents");
  if (chips){
    chips.innerHTML = (p.agents||[]).map((n,i) => {
      const a = D.agents[n] || { label:n };
      return `<button class="agent-chip${i===0?' active':''}" data-agent="${esc(n)}">${esc(a.label||n)}</button>`;
    }).join("");
    chips.querySelectorAll(".agent-chip").forEach(b => b.onclick = () => {
      chips.querySelectorAll(".agent-chip").forEach(x=>x.classList.remove("active"));
      b.classList.add("active"); renderAgentDetail(b.dataset.agent);
    });
    if (p.agents && p.agents.length) renderAgentDetail(p.agents[0]);
    else $("#pipe-agent-detail").innerHTML = "";
  }
}
function renderAgentDetail(name){
  const a = D.agents[name]; const el = $("#pipe-agent-detail"); if (!el || !a) return;
  el.innerHTML =
    `<div class="agent-card"><h4>${esc(a.label||name)}</h4>`+
    `<details open><summary>System prompt</summary><pre>${esc(a.prompt||"(no prompt)")}</pre></details>`+
    `<details><summary>Output schema (JSON)</summary><pre>${esc(a.schema?JSON.stringify(a.schema,null,2):"(no schema)")}</pre></details></div>`;
}

/* ---------------- evaluation (judges) ---------------- */
function buildEvaluation(){
  built.evaluation = true;
  const fail = m => m.failWhen===null||m.failWhen===undefined ? "" :
    `<span class="badge">flags when output = ${m.failWhen}</span>`;
  $("#eval-list").innerHTML = D.evaluation.map(m => `
    <div class="eval-card">
      <div class="ev-head"><h3>${esc(m.label)}</h3><span class="badge">id: ${esc(m.id)}</span>
        <span class="badge">${esc(m.outputType||"object")}</span>${fail(m)}</div>
      <p class="ev-role">${esc(m.role||"")}</p>
      ${m.description?`<p class="ev-desc">${esc(m.description)}</p>`:""}
      <details><summary>Judge prompt</summary><pre>${esc(m.systemPrompt||"(none)")}</pre></details>
      ${m.outputSchema?`<details><summary>Output schema (JSON)</summary><pre>${esc(JSON.stringify(m.outputSchema,null,2))}</pre></details>`:""}
    </div>`).join("");
}

/* ---------------- subjects ---------------- */
function buildSubjects(){
  built.subjects = true;
  const g = $("#persona-grid");
  g.innerHTML = D.personas.map(p => {
    const opens = (p.openingMessages||[]).map(m=>`<li>${esc(m)}</li>`).join("");
    return `<div class="persona-card">
      <div class="pc-head"><h3>${esc(p.label)}</h3><span class="badge">temp ${p.temperature}</span></div>
      <p class="pc-desc">${esc(p.description)}</p>
      <details><summary>Opening lines &amp; full system prompt</summary>
        ${opens?`<div class="pc-sub">Opening lines</div><ul class="pc-opens">${opens}</ul>`:""}
        <div class="pc-sub">System prompt</div><pre>${esc(p.systemPrompt)}</pre>
      </details>
    </div>`;
  }).join("");
}

/* ---------------- classifier ---------------- */
function buildClassifier(){
  built.classifier = true;
  const p2 = (D.pipelines.find(x=>x.id==="P2")||{}).mermaid;
  if (p2) renderMermaid($("#class-mermaid"), p2);
  const cats = {}; D.classifier.categories.forEach(c=>cats[c.key]=c);
  $("#class-grid").innerHTML = D.classifier.specialists.map(s => {
    const c = cats[s.name]||{};
    return `<div class="class-card">
      <div class="cc-head"><span class="cc-idx">${c.idx!=null?c.idx:""}</span><h3>${esc(s.name)}</h3>
        <span class="badge">${esc(s.fires)}</span></div>
      <p class="cc-role">${esc(s.role)}</p>
      <div class="cc-rule"><strong>Refusal rule.</strong> ${esc(s.rule)}</div>
      <div class="cc-ex">“${esc(s.example)}”</div>
    </div>`;
  }).join("");
}

/* ---------------- literature ---------------- */
function linkHost(u){ try { return new URL(u).hostname.replace(/^www\./,""); } catch(_){ return "link"; } }
function buildLiterature(){
  built.literature = true;
  $("#lit-groups").innerHTML = D.literature.map(grp => `
    <div class="lit-group">
      <h3 class="subhead">${esc(grp.group)}</h3>
      ${grp.blurb?`<p class="section-lead">${esc(grp.blurb)}</p>`:""}
      <div class="lit-items">${grp.items.map(it => `
        <a class="lit-item" href="${esc(it.url)}" target="_blank" rel="noopener">
          <div class="lit-cite">${esc(it.cite)}</div>
          <div class="lit-title">${esc(it.title)}</div>
          <div class="lit-note">${esc(it.note)}</div>
          <span class="lit-link">${esc(linkHost(it.url))} &#8599;</span>
        </a>`).join("")}</div>
    </div>`).join("");
}

/* ---------------- transcripts ---------------- */
function buildTranscripts(){
  built.conversations = true;
  const ctl = $("#tx-controls");
  const personas = ["all", ...D.meta.personasAll];
  ctl.innerHTML =
    `<label class="tx-sel">Subject <select id="tx-persona">${personas.map(p=>`<option value="${esc(p)}">${p==="all"?"all subjects":esc(p)}</option>`).join("")}</select></label>`+
    `<label class="tx-sel">Show <select id="tx-kind"><option value="all">all turns</option><option value="clean">clean refusals</option><option value="leak">flagged (bias)</option></select></label>`+
    `<label class="tx-sel tx-search">Search <input id="tx-q" type="text" placeholder="subject or bot text…"></label>`;
  const rerender = () => renderTx($("#tx-persona").value, $("#tx-kind").value, ($("#tx-q").value||"").toLowerCase());
  $("#tx-persona").onchange = rerender; $("#tx-kind").onchange = rerender; $("#tx-q").oninput = rerender;
  renderTx("all","all","");
}
function badge(v, label){ return `<span class="jb ${v?'fail':'ok'}">${label}: ${v?'1':'0'}</span>`; }
function renderTx(persona, kind, q){
  let t = D.transcripts;
  if (persona!=="all") t = t.filter(x=>x.persona===persona);
  if (kind!=="all") t = t.filter(x => kind==="leak" ? (x.kind==="leak"&&!x.isContext) : x.kind==="clean");
  if (q) t = t.filter(x => (x.subjectMsg||"").toLowerCase().includes(q) || (x.botReply||"").toLowerCase().includes(q));
  $("#tx-count").textContent = `${t.length} turn${t.length===1?'':'s'} shown · ${D.transcripts.length} in the curated sample`;
  $("#tx-list").innerHTML = t.map(x => {
    const trace = (x.trace||[]).map(s=>`<span class="tstep ${esc(s.kind||'')}">${esc(s.step)}${s.classificationLabel?` · ${esc(s.classificationLabel)}`:""}</span>`).join("");
    const flagged = x.kind==="leak" && !x.isContext;
    return `<div class="tx-turn${flagged?' flagged':''}${x.isContext?' context':''}">
      <div class="tx-meta">
        <span class="tx-persona">${esc(x.persona)}</span>
        <span>run ${x.runIdx} · turn ${x.turnIdx+1}</span>
        <span>${esc(x.label)}</span>
        ${x.classificationLabel?`<span class="tx-class">${esc(x.classificationLabel)}</span>`:""}
        ${x.isContext?'<span class="tx-ctx">context</span>':''}
        ${flagged?'<span class="tx-flag">bias flagged</span>':''}
      </div>
      <div class="tx-msg subject"><span class="who">Subject</span>${esc(x.subjectMsg)}</div>
      <div class="tx-msg bot"><span class="who">Bot</span>${esc(x.botReply)}</div>
      <div class="tx-judge">${badge(x.bias_s,"bias")}${badge(x.fact_s,"factual")}${badge(x.cpx_v,"complexity")}${badge(x.incoh,"incoherence")}</div>
      ${trace?`<div class="tx-trace">${trace}</div>`:""}
    </div>`;
  }).join("") || `<p class="fine">No turns match.</p>`;
}

/* ---------------- results glossary (subjects) ---------------- */
function buildResultsGlossary(){
  if (built.resultsGloss) return; built.resultsGloss = true;
  const el = $("#persona-glossary"); if (!el) return;
  el.innerHTML = "<div class='gloss-h'>Who the subjects are</div>" +
    D.personas.map(p => `<div class="gloss-item"><strong>${esc(p.label)}</strong> — ${esc(p.description)}</div>`).join("");
}

/* ---------------- hero / footer / caveats ---------------- */
function fillStatic(){
  const nano=(D.headline.bias_nano.random+D.headline.bias_nano.mirror)/2;
  const mini=(D.headline.bias_mini.random+D.headline.bias_mini.mirror)/2;
  const cut = nano>0 ? Math.round(100*(1-mini/nano)) : 0;
  const chips = $("#hero-chips");
  [`<b>${D.meta.nTurns.toLocaleString()}</b> scored responses`,
   `<b>5</b> architectures × <b>5</b> adversarial subjects`,
   `<b>${D.meta.nConditions}</b> conditions · 15-turn dialogues`,
   `bias cut <b>~${cut}%</b> by a stronger base model`
  ].forEach(h=>{ const s=document.createElement("span"); s.className="chip"; s.innerHTML=h; chips.appendChild(s); });
  const df = $("#data-foot");
  if (df) df.textContent = `${D.meta.nTurns.toLocaleString()} scored responses across ${D.meta.nConditions} conditions · strict-judge canonical rates · generated ${D.meta.generatedAt}.`;
  const cb=$("#disc-caveat-bias"), cf=$("#disc-caveat-fact");
  if (cb) cb.innerHTML = "<strong>Bias is a lower bound.</strong> "+esc(D.meta.caveats.bias).replace(/^Bias is a conservative LOWER BOUND\.\s*/,"");
  if (cf) cf.innerHTML = "<strong>Complexity</strong> "+esc(D.meta.caveats.complexity).replace(/^Complexity is /,"is ");
}

/* ---------------- init ---------------- */
function init(){ buildGrid(); fillStatic(); route(); }
if (document.readyState!=="loading") init();
else document.addEventListener("DOMContentLoaded", init);
})();
