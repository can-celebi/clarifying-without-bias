/* ============================================================
   charts.js — Plotly results layer (canonical strict-judge data).
   Consumes window.SITE_DATA. Exposes window.ResultsCharts.render(),
   called lazily by app.js when the Results view is first opened.
   ============================================================ */
(function () {
"use strict";
const D = window.SITE_DATA;
if (!D) { console.error("SITE_DATA missing"); return; }
const R = D.results;

const SCEN = D.meta.scenarios;                       // ["random-mid","mirror-start"]
const SCEN_LABEL = { "random-mid":"easy scenario", "mirror-start":"hard scenario" };
const SCEN_COLOR = { "random-mid":"#1f77b4", "mirror-start":"#d62728" };
const METRIC_LABEL = { bias:"Bias leak", fact:"Factual error", cmplx:"Complexity leak", incoh:"Incoherence" };
const MODEL_LABEL = { nano:"5.4-nano", mini:"5.4-mini", "gpt-5.4":"5.4" };
const MODEL_COLOR = { nano:"#d95f02", mini:"#1b9e77", "gpt-5.4":"#4f46e5" };

const ARCH = ["P-all","B1-allcorr-nano","P2","P2-probe","P-perclass","P-probe-perclass"];   // 6 pipelines, 5.4-nano
const ARCH_SHORT = { "P-all":"∅ single call", "B1-allcorr-nano":"∅+corrector", "P2":"RS router",
  "P2-probe":"RS+probe", "P-perclass":"RS+corrector", "P-probe-perclass":"RS+probe+corr" };
const CAP_LADDER = [                                  // ∅ across capability/effort
  { condId:"P-all",                short:"nano" },
  { condId:"B2-all-nano-R",        short:"nano · reason low" },
  { condId:"C1-P-all-M0-nano-RM",  short:"nano · reason med" },
  { condId:"C2-P-all-M0-nano-RH",  short:"nano · reason high" },
  { condId:"B3-all-mini",          short:"mini" },
  { condId:"C1-P-all-M2",          short:"5.4" },
];
const LEADER_CONDS = ["P-all","B3-all-mini","C1-P-all-M2","B1-allcorr-nano",
  "C2-P-all-corr-M1","C1-P-all-corr-M2","P2","P2-probe","P-perclass","P-probe-perclass"];
// architecture (pipeline) → marker shape + readable name, for the frontier's shape legend
const PIPE_SYM = { "P-all":"circle", "P-all-corr":"square", "P-each":"diamond",
  "P-each-probe":"triangle-up", "P-each-corr":"cross", "P-each-probe-corr":"x", "P-each-corr-full":"star" };
const PIPE_NAME = { "P-all":"∅ single call", "P-all-corr":"∅ + corrector", "P-each":"RS router",
  "P-each-probe":"RS + probe", "P-each-corr":"RS + corrector", "P-each-probe-corr":"RS + probe + corr",
  "P-each-corr-full":"RS + full corrector" };
const PIPE_ORDER = ["P-all","P-all-corr","P-each","P-each-probe","P-each-corr","P-each-probe-corr","P-each-corr-full"];

const pct = v => (v==null?null:+(v*100).toFixed(2));
const FONT = { family:"Inter, system-ui, sans-serif", size:13, color:"#16202c" };
const CFG  = { displayModeBar:false, responsive:true };
function baseLayout(extra){ return Object.assign({
  font:FONT, paper_bgcolor:"rgba(0,0,0,0)", plot_bgcolor:"rgba(0,0,0,0)",
  margin:{ l:60, r:20, t:16, b:80 },
  legend:{ orientation:"h", y:1.14, x:0, font:{size:12} },
  hoverlabel:{ font:{family:"Inter, sans-serif", size:12}, bordercolor:"#fff" },
  xaxis:{ gridcolor:"#eef2f7", zeroline:false, tickfont:{size:12} },
  yaxis:{ gridcolor:"#eef2f7", zeroline:false, tickfont:{size:12} }
}, extra||{}); }

/* condition-rate lookup */
function cond(scenario, condId, metric, level){
  return R.byCondition.find(b => b.scenario===scenario && b.condId===condId
    && b.metric===metric && b.level===(level||"turn"));
}
function condLabel(condId, scenario){
  const c = D.conditions.find(x => x.condId===condId && x.scenario===(scenario||SCEN[1]));
  return c ? c.label : condId;
}

/* segmented controls */
function controls(containerId, groups, onChange){
  const c = document.getElementById(containerId);
  if (!c || c.dataset.built) return null;
  c.dataset.built = "1";
  const state = {};
  groups.forEach(g => {
    state[g.key] = g.active!=null ? g.active : g.options[0].val;
    const wrap = document.createElement("div"); wrap.className="ctrl-group";
    if (g.label){ const l=document.createElement("span"); l.className="lbl"; l.textContent=g.label; wrap.appendChild(l); }
    g.options.forEach(o => {
      const b=document.createElement("button");
      b.className="seg"+(state[g.key]===o.val?" active":"");
      b.textContent=o.label; b.dataset.val=o.val;
      b.onclick=()=>{ state[g.key]=o.val;
        wrap.querySelectorAll(".seg").forEach(x=>x.classList.remove("active"));
        b.classList.add("active"); onChange(state); };
      wrap.appendChild(b);
    });
    c.appendChild(wrap);
  });
  return state;
}

/* ---------- 1. Pareto frontier — colour = model, shape = architecture ---------- */
function chartPareto(state){
  const scn = state.scenario;
  const set = state.show==="all" ? null : new Set(LEADER_CONDS.concat(ARCH));
  const rows = R.pareto.filter(d => d.scenario===scn && (!set||set.has(d.condId)));
  const models = ["nano","mini","gpt-5.4"];
  const traces = [];
  // data points, grouped by model (colour); shape encodes the architecture per point
  models.forEach(mdl => {
    const r = rows.filter(d => d.model===mdl); if (!r.length) return;
    traces.push({
      type:"scatter", mode:"markers+text", name:MODEL_LABEL[mdl],
      legendgroup:"model", legendgrouptitle:{ text:"Base model — colour" },
      x:r.map(d=>d.bias_perf), y:r.map(d=>d.cost_per_k),
      text:r.map(d=> d.pipeline==="P-all" ? "∅ "+MODEL_LABEL[mdl] : ""),
      textposition:"top center", textfont:{ size:11, color:MODEL_COLOR[mdl] },
      marker:{ size:r.map(d=>Math.max(11,Math.min(34,8+d.p95_latency_s*5))),
        color:MODEL_COLOR[mdl], symbol:r.map(d=>PIPE_SYM[d.pipeline]||"circle-open"),
        opacity:.85, line:{width:1.5,color:"#fff"} },
      customdata:r.map(d=>[d.label, d.p95_latency_s]),
      hovertemplate:"<b>%{customdata[0]}</b><br>bias-compliant: %{x:.2f}% of replies<br>"+
        "cost: $%{y:.2f} per 1,000 replies<br>p95 latency: %{customdata[1]:.1f}s<extra></extra>"
    });
  });
  // second legend: shape → architecture (dummy, no plotted points)
  const present = [...new Set(rows.map(d=>d.pipeline))];
  PIPE_ORDER.forEach(p => { if (!present.includes(p)) return;
    traces.push({ type:"scatter", mode:"markers", name:PIPE_NAME[p]||p,
      legendgroup:"pipe", legendgrouptitle:{ text:"Architecture — shape" },
      x:[null], y:[null], marker:{ symbol:PIPE_SYM[p], color:"#94a3b8", size:12, line:{width:1.2,color:"#fff"} },
      hoverinfo:"skip", showlegend:true });
  });
  const ann = [];
  const narrow = (typeof window !== "undefined" && window.innerWidth < 760);
  const legend = narrow
    ? { orientation:"h", x:0, y:-0.22, yanchor:"top", font:{size:10}, tracegroupgap:8 }
    : { orientation:"v", x:1.02, y:1, xanchor:"left", font:{size:11}, tracegroupgap:14 };
  const margin = narrow ? { l:50, r:16, t:14, b:150 } : { l:64, r:188, t:16, b:58 };
  Plotly.react("chart-pareto", traces, baseLayout({
    xaxis:{ title:"bias-compliant replies (%)  →  better", gridcolor:"#eef2f7", zeroline:false },
    yaxis:{ title:"cost ($ per 1,000 replies)  ↓ cheaper", gridcolor:"#eef2f7", zeroline:false },
    legend, margin, annotations:ann
  }), CFG);
}

/* ---------- 2. Errors by architecture (nano) ---------- */
function chartArch(state){
  const traces = SCEN.map(scn => {
    const y = ARCH.map(c => { const b=cond(scn,c,state.metric,state.level); return b?pct(b.p):null; });
    const r = ARCH.map(c => cond(scn,c,state.metric,state.level));
    return { type:"bar", name:SCEN_LABEL[scn],
      x:ARCH.map(c=>ARCH_SHORT[c]), y, marker:{color:SCEN_COLOR[scn]},
      error_y:{ type:"data", symmetric:false,
        array:r.map(d=>d?pct(d.hi-d.p):null), arrayminus:r.map(d=>d?pct(d.p-d.lo):null),
        color:"#5a6b7d", thickness:1, width:3 },
      hovertemplate:"<b>%{x}</b><br>"+METRIC_LABEL[state.metric].toLowerCase()+": %{y:.2f}%<extra>"+SCEN_LABEL[scn]+"</extra>" };
  });
  Plotly.react("chart-arch", traces, baseLayout({ barmode:"group",
    yaxis:{ title:(state.level==="turn"?"Per-response ":"Per-dialogue ")+METRIC_LABEL[state.metric].toLowerCase()+" (%)", gridcolor:"#eef2f7", rangemode:"tozero" },
    xaxis:{ tickangle:-12 } }), CFG);
}

/* ---------- 3. "Cost of adding agents" — horizontal lollipop vs single call ---------- */
function chartRatio(){
  const poolBias = condId => {
    const v = SCEN.map(s => { const b=cond(s,condId,"bias","turn"); return b?b.p:null; }).filter(x=>x!=null);
    return v.length ? v.reduce((a,b)=>a+b,0)/v.length : null;
  };
  const base = poolBias("P-all");
  const rows = ARCH.filter(c=>c!=="P-all")
    .map(c => ({ label:ARCH_SHORT[c], r: base ? poolBias(c)/base : null }))
    .filter(x => x.r!=null).sort((a,b)=>a.r-b.r);
  const y = rows.map(r=>r.label);
  const sx=[], sy=[]; rows.forEach(r=>{ sx.push(1, r.r, null); sy.push(r.label, r.label, null); });
  const stems = { type:"scatter", mode:"lines", x:sx, y:sy, line:{color:"#cbd5e1", width:3},
    hoverinfo:"skip", showlegend:false };
  const dots = { type:"scatter", mode:"markers+text", x:rows.map(r=>r.r), y:y,
    text:rows.map(r=>r.r.toFixed(1)+"×"), textposition:"middle right", textfont:{size:12,color:"#16202c"},
    marker:{ size:15, line:{width:1.6,color:"#fff"},
      color:rows.map(r=> r.r>=2 ? "#b10026" : r.r>=1.5 ? "#d95f02" : "#e0a800") },
    hovertemplate:"<b>%{y}</b><br>%{x:.2f}× the single call's bias rate<extra></extra>", showlegend:false };
  Plotly.react("chart-ratio", [stems, dots], baseLayout({
    xaxis:{ title:"bias rate relative to the single call  (∅ = 1×)", gridcolor:"#eef2f7", zeroline:false,
      rangemode:"tozero", dtick:0.5 },
    yaxis:{ automargin:true, gridcolor:"rgba(0,0,0,0)" },
    margin:{ l:150, r:64, t:34, b:54 },
    shapes:[{ type:"line", x0:1, x1:1, yref:"paper", y0:0, y1:1, line:{color:"#16202c",dash:"dash",width:1.5} }],
    annotations:[{ x:1, y:1.05, yref:"paper", text:"single call (∅)", showarrow:false,
      font:{size:11,color:"#16202c"}, xanchor:"center" }]
  }), CFG);
}

/* ---------- 4. Capability ladder (∅) ---------- */
function chartCap(state){
  const traces = SCEN.map(scn => {
    const r = CAP_LADDER.map(c=>cond(scn,c.condId,state.metric,state.level));
    return { type:"bar", name:SCEN_LABEL[scn],
      x:CAP_LADDER.map(c=>c.short), y:r.map(d=>d?pct(d.p):null),
      marker:{color:SCEN_COLOR[scn]},
      error_y:{ type:"data", symmetric:false,
        array:r.map(d=>d?pct(d.hi-d.p):null), arrayminus:r.map(d=>d?pct(d.p-d.lo):null),
        color:"#5a6b7d", thickness:1, width:3 },
      hovertemplate:"<b>%{x}</b><br>"+METRIC_LABEL[state.metric].toLowerCase()+": %{y:.2f}%<extra>"+SCEN_LABEL[scn]+"</extra>" };
  });
  Plotly.react("chart-cap", traces, baseLayout({ barmode:"group",
    yaxis:{ title:(state.level==="turn"?"Per-response ":"Per-dialogue ")+METRIC_LABEL[state.metric].toLowerCase()+" (%)", gridcolor:"#eef2f7", rangemode:"tozero" },
    xaxis:{ tickangle:-18 }, margin:{l:60,r:20,t:16,b:110} }), CFG);
}

/* ---------- 5. Cumulative by turn (architectures) ---------- */
function chartCum(state){
  const traces = ARCH.map(c => {
    const r = R.cumulative.filter(x=>x.scenario===state.scenario && x.condId===c).sort((a,b)=>a.turn-b.turn);
    if (!r.length) return null;
    return { type:"scatter", mode:"lines", name:ARCH_SHORT[c],
      x:r.map(d=>d.turn), y:r.map(d=>pct(d.p)),
      line:{ width:c==="P-all"?3.2:2 },
      hovertemplate:"<b>%{fullData.name}</b><br>by turn %{x}: %{y:.1f}% have leaked<extra></extra>" };
  }).filter(Boolean);
  Plotly.react("chart-cum", traces, baseLayout({
    xaxis:{ title:"turn within conversation", gridcolor:"#eef2f7", dtick:2 },
    yaxis:{ title:"cumulative bias probability (%)", gridcolor:"#eef2f7", rangemode:"tozero" } }), CFG);
}

/* ---------- 6. By subject type ---------- */
function chartPersona(state){
  const personas = D.meta.personasAll;
  const traces = SCEN.map(scn => {
    const m={}; R.byPersona.filter(x=>x.metric==="bias"&&x.scenario===scn&&x.condId===state.condId).forEach(d=>m[d.persona]=d);
    return { type:"bar", name:SCEN_LABEL[scn],
      x:personas, y:personas.map(p=>m[p]?pct(m[p].p):null), marker:{color:SCEN_COLOR[scn]},
      error_y:{ type:"data", symmetric:false,
        array:personas.map(p=>m[p]?pct(m[p].hi-m[p].p):null), arrayminus:personas.map(p=>m[p]?pct(m[p].p-m[p].lo):null),
        color:"#5a6b7d", thickness:1, width:3 },
      hovertemplate:"<b>%{x}</b><br>bias rate: %{y:.2f}%<extra>"+SCEN_LABEL[scn]+"</extra>" };
  });
  Plotly.react("chart-persona", traces, baseLayout({ barmode:"group",
    yaxis:{ title:"per-response bias rate (%)", gridcolor:"#eef2f7", rangemode:"tozero" },
    xaxis:{ tickangle:-20 } }), CFG);
}

/* ---------- 6b. Per-subject error breakdown (advice/complexity/factual) ---------- */
function chartSubjectErrors(state){
  const personas = D.meta.personasAll;
  const metrics = [["bias","Advice","#d7263d"],["cmplx","Complexity","#4f46e5"],["fact","Factual","#1f77b4"]];
  const get = (persona, metric) => {
    const rows = R.byPersona.filter(x => x.persona===persona && x.condId===state.condId && x.metric===metric);
    return rows.length ? rows.reduce((s,r)=>s+r.p,0)/rows.length : null; // pooled over scenarios
  };
  const traces = metrics.map(([m,label,color]) => ({
    type:"bar", name:label, marker:{color},
    x:personas, y:personas.map(p=>{ const v=get(p,m); return v==null?null:+(v*100).toFixed(2); }),
    hovertemplate:"<b>%{x}</b><br>"+label+": %{y:.2f}%<extra></extra>"
  }));
  Plotly.react("chart-subject-errors", traces, baseLayout({ barmode:"group",
    yaxis:{ title:"per-response rate (%), pooled over scenarios", gridcolor:"#eef2f7", rangemode:"tozero" },
    xaxis:{ tickangle:-20 } }), CFG);
}

/* ---------- 7. By response category ---------- */
function chartClass(state){
  const labels = D.meta.classLabels;
  const traces = SCEN.map(scn => {
    const m={}; R.byClass.filter(x=>x.scenario===scn).forEach(d=>m[d.class_label]=d);
    return { type:"bar", name:SCEN_LABEL[scn],
      x:labels, y:labels.map(c=>m[c]?pct(m[c][state.metric]):null), marker:{color:SCEN_COLOR[scn]},
      hovertemplate:"<b>%{x}</b><br>"+METRIC_LABEL[state.metric].toLowerCase()+": %{y:.2f}%<extra>"+SCEN_LABEL[scn]+"</extra>" };
  });
  Plotly.react("chart-class", traces, baseLayout({ barmode:"group",
    yaxis:{ title:METRIC_LABEL[state.metric]+" (%)", gridcolor:"#eef2f7", rangemode:"tozero" },
    xaxis:{ tickangle:-15 } }), CFG);
}

/* ---------- leaderboard table ---------- */
function poolTurn(condId, metric){
  const vals = SCEN.map(scn => { const b=cond(scn,condId,metric,"turn"); return b?b.p:null; }).filter(v=>v!=null);
  return vals.length ? vals.reduce((s,x)=>s+x,0)/vals.length : null;
}
function poolPareto(condId, key){
  const vals = SCEN.map(scn => { const p=R.pareto.find(x=>x.scenario===scn&&x.condId===condId); return p?p[key]:null; }).filter(v=>v!=null);
  return vals.length ? vals.reduce((s,x)=>s+x,0)/vals.length : null;
}
function renderLeader(){
  const rows = LEADER_CONDS.map(c => {
    const bias=poolTurn(c,"bias"), fact=poolTurn(c,"fact"), cmplx=poolTurn(c,"cmplx");
    return { condId:c, label:condLabel(c), bias, fact, cmplx,
      sum:(bias||0)+(fact||0)+(cmplx||0),
      cost:poolPareto(c,"cost_per_k"), lat:poolPareto(c,"p95_latency_s") };
  }).filter(r=>r.bias!=null).sort((a,b)=>a.sum-b.sum);
  const f = v => v==null ? "—" : (v*100).toFixed(2)+"%";
  let html = "<thead><tr><th>#</th><th>Configuration</th><th>Bias</th><th>Factual</th><th>Complexity</th>"+
    "<th>Cost ($/1k replies)</th><th>p95 latency</th></tr></thead><tbody>";
  rows.forEach((r,i) => {
    html += `<tr class="${i===0?'best':''}"><td class="rank">${i+1}</td><td>${r.label}</td>`+
      `<td>${f(r.bias)}</td><td>${f(r.fact)}</td><td>${f(r.cmplx)}</td>`+
      `<td>${r.cost!=null?r.cost.toFixed(1):'—'}</td><td>${r.lat!=null?r.lat.toFixed(1)+'s':'—'}</td></tr>`;
  });
  html += "</tbody>";
  document.getElementById("leader").innerHTML = html;
}

/* ---------- caveat box ---------- */
function fillCaveat(){
  const el = document.getElementById("results-caveat");
  if (!el) return;
  el.innerHTML = "<h4>How to read these numbers</h4>"+
    "<p><strong>Bias is a conservative lower bound.</strong> The escalation re-judged only the cheap "+
    "model's positives; a recall audit found ~22.7% of cleared turns are bias leaks a stronger judge "+
    "would catch, so the true bias rate is roughly ~2× the displayed figures. Rankings are unaffected.</p>"+
    "<p style='margin-top:.5rem'><strong>Factual errors were mostly false positives.</strong> The "+
    "first-pass judge over-flagged badly (worst cell 42% → 1.4% after full adjudication); genuine "+
    "payment-procedure contradictions are rare.</p>"+
    "<p style='margin-top:.5rem'><strong>Complexity</strong> is measured by the valuation-procedure "+
    "classifier, not the strict judge.</p>";
}

let done = false;
function render(){
  if (done) return; done = true;
  fillCaveat();
  const metricOpts = [{val:"bias",label:"Bias"},{val:"fact",label:"Factual"},{val:"cmplx",label:"Complexity"},{val:"incoh",label:"Incoherence"}];
  const scaleOpts  = [{val:"turn",label:"Per response"},{val:"run",label:"Per dialogue"}];
  const scenOpts   = SCEN.map(s=>({val:s,label:SCEN_LABEL[s]}));

  const ps = controls("ctrl-pareto",[
    {key:"scenario",label:"scenario",options:[{val:"random-mid",label:"Easy"},{val:"mirror-start",label:"Hard"}],active:"mirror-start"},
    {key:"show",label:"set",options:[{val:"headline",label:"Headline set"},{val:"all",label:"All conditions"}]}
  ], chartPareto); chartPareto(ps||{scenario:"mirror-start",show:"headline"});
  const as = controls("ctrl-arch",[{key:"metric",label:"dimension",options:metricOpts},{key:"level",label:"scale",options:scaleOpts}], chartArch); chartArch(as||{metric:"bias",level:"turn"});
  chartRatio();
  const cap = controls("ctrl-cap",[{key:"metric",label:"dimension",options:metricOpts},{key:"level",label:"scale",options:scaleOpts}], chartCap); chartCap(cap||{metric:"bias",level:"turn"});
  const cu = controls("ctrl-cum",[{key:"scenario",label:"context",options:scenOpts,active:"mirror-start"}], chartCum); chartCum(cu||{scenario:"mirror-start"});
  const condOpts = [{val:"B3-all-mini",label:"∅ mini"},{val:"P-all",label:"∅ nano"},{val:"C1-P-all-M2",label:"∅ 5.4"}];
  const pr = controls("ctrl-persona",[{key:"condId",label:"config",options:condOpts}], chartPersona); chartPersona(pr||{condId:"B3-all-mini"});
  const se = controls("ctrl-subject-errors",[{key:"condId",label:"config",options:condOpts}], chartSubjectErrors); chartSubjectErrors(se||{condId:"B3-all-mini"});
  const cl = controls("ctrl-class",[{key:"metric",label:"dimension",options:metricOpts}], chartClass); chartClass(cl||{metric:"bias"});
  renderLeader();
}
function resize(){ if(!done) return; ["chart-pareto","chart-arch","chart-ratio","chart-cap","chart-cum","chart-persona","chart-subject-errors","chart-class"].forEach(id=>{ const el=document.getElementById(id); if(el&&el.data) Plotly.Plots.resize(el); }); }

window.ResultsCharts = { render, resize };
})();
