/* ============================================================
   charts.js — interactive Plotly layer for the live site.
   Consumes window.SITE_DATA (assets/js/site-data.js).
   ============================================================ */
(function () {
"use strict";
const D = window.SITE_DATA;
if (!D) { console.error("SITE_DATA missing"); return; }

/* ---------- palettes ---------- */
const PIPE_COLOR = {
  "P-all":"#1b9e77","P2":"#d95f02","P2-probe":"#e7298a",
  "P-perclass":"#7570b3","P-probe-perclass":"#66a61e"
};
const SCEN_COLOR = { "random-mid":"#1f77b4","mirror-start":"#d62728" };
const COND_COLOR = {
  "A — P-all (nano)":"#1b9e77","P-all + corrector (nano)":"#7570b3",
  "Reasoning low (nano)":"#d9a302","Reasoning medium (nano)":"#e07b02",
  "Reasoning high (nano)":"#c2410c","gpt-5.4-mini":"#e7298a",
  "gpt-5.4-mini + corrector":"#b5179e","gpt-5.4 (full)":"#b10026"
};
const CLASS_ORDER = ["Deny","AdviceReflect","Clarify","Complex","Example","Meta"];
const METRIC_LABEL = { bias:"Bias leak", fact:"Factual error", coherence:"Incoherence" };
const SCEN = D.meta.scenarios;            // ["random-mid","mirror-start"]
const PIPES = D.meta.pipelines;

/* ---------- Plotly theme ---------- */
const FONT = { family:"Inter, system-ui, sans-serif", size:13, color:"#16202c" };
const CFG  = { displayModeBar:false, responsive:true };
function baseLayout(extra) {
  return Object.assign({
    font: FONT, paper_bgcolor:"rgba(0,0,0,0)", plot_bgcolor:"rgba(0,0,0,0)",
    margin:{ l:58, r:20, t:14, b:70 },
    legend:{ orientation:"h", y:1.12, x:0, font:{size:12} },
    hoverlabel:{ font:{family:"Inter, sans-serif", size:12}, bordercolor:"#fff" },
    xaxis:{ gridcolor:"#eef2f7", zeroline:false, tickfont:{size:12} },
    yaxis:{ gridcolor:"#eef2f7", zeroline:false, tickfont:{size:12} }
  }, extra || {});
}
const pct = v => (v==null?null:+(v*100).toFixed(1));
function orderBy(arr, order){ return arr.slice().sort((a,b)=>order.indexOf(a)-order.indexOf(b)); }

/* ---------- segmented controls ---------- */
function controls(containerId, groups, onChange) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const state = {};
  groups.forEach(g => {
    state[g.key] = g.active != null ? g.active : g.options[0].val;
    const wrap = document.createElement("div"); wrap.className = "ctrl-group";
    if (g.label){ const l=document.createElement("span"); l.className="lbl"; l.textContent=g.label; wrap.appendChild(l); }
    g.options.forEach(o => {
      const b = document.createElement("button");
      b.className = "seg" + (state[g.key]===o.val ? " active":"");
      b.textContent = o.label; b.dataset.val = o.val;
      b.onclick = () => {
        state[g.key] = o.val;
        wrap.querySelectorAll(".seg").forEach(x=>x.classList.remove("active"));
        b.classList.add("active");
        onChange(state);
      };
      wrap.appendChild(b);
    });
    c.appendChild(wrap);
  });
  return state;
}

/* ============================================================
   1. OMNIBUS PARETO
   ============================================================ */
function chartPareto() {
  const rows = D.paretoAll || [];
  const traces = [];
  [["Phase A","circle"],["Phase B","diamond"]].forEach(([grp]) => {
    SCEN.forEach(scn => {
      const r = rows.filter(x => x.group===grp && x.scenario===scn);
      if (!r.length) return;
      traces.push({
        type:"scatter", mode:"markers+text",
        name:`${grp} · ${scn}`,
        x:r.map(d=>d.bias_perf), y:r.map(d=>d.cost_per_k),
        text:r.map(d=>d.label), textposition:"top center",
        textfont:{size:10, color:"#48586a"},
        marker:{
          size:r.map(d=>Math.max(9, Math.min(34, 7+d.p95_latency_s*5))),
          color: grp==="Phase A" ? "#1b9e77" : "#d62728",
          symbol: scn==="random-mid" ? "circle" : "diamond",
          opacity:.82, line:{width:1.4,color:"#fff"}
        },
        customdata:r.map(d=>[d.label, d.p95_latency_s]),
        hovertemplate:"<b>%{customdata[0]}</b><br>"+
          "bias-clean: %{x:.1f}%<br>cost: $%{y:.2f}/1k turns<br>"+
          "p95 latency: %{customdata[1]:.1f}s<extra>"+grp+" · "+scn+"</extra>"
      });
    });
  });
  Plotly.newPlot("chart-pareto", traces, baseLayout({
    xaxis:{ title:"Bias-clean rate (% of turns)", gridcolor:"#eef2f7", zeroline:false },
    yaxis:{ title:"Bot cost ($ / 1,000 turns)", gridcolor:"#eef2f7", zeroline:false },
    legend:{ orientation:"h", y:1.13, x:0, font:{size:11} }
  }), CFG);
}

/* ============================================================
   2. PHASE A — leak by pipeline (metric × level toggle)
   ============================================================ */
function chartPipe(state) {
  const rows = D.phaseA.byPipeline.filter(r => r.metric===state.metric && r.level===state.level);
  const traces = SCEN.map(scn => {
    const r = orderByPipe(rows.filter(x=>x.scenario===scn));
    return {
      type:"bar", name:scn,
      x:r.map(d=>d.pipeline), y:r.map(d=>pct(d.p)),
      marker:{ color:SCEN_COLOR[scn] },
      error_y:{ type:"data", symmetric:false,
        array:r.map(d=>pct(d.hi-d.p)), arrayminus:r.map(d=>pct(d.p-d.lo)),
        color:"#5a6b7d", thickness:1, width:3 },
      hovertemplate:"<b>%{x}</b><br>"+(state.level==="turn"?"turn":"run")+" "+
        METRIC_LABEL[state.metric].toLowerCase()+": %{y:.1f}%<extra>"+scn+"</extra>"
    };
  });
  const ylab = (state.level==="turn"?"Turn-level ":"Run-level ")+METRIC_LABEL[state.metric].toLowerCase()+" (%)";
  Plotly.react("chart-pipe", traces, baseLayout({
    barmode:"group", yaxis:{ title:ylab, gridcolor:"#eef2f7", rangemode:"tozero" }
  }), CFG);
}
function orderByPipe(arr){ return arr.slice().sort((a,b)=>PIPES.indexOf(a.pipeline)-PIPES.indexOf(b.pipeline)); }

/* ============================================================
   3. RISK RATIO vs P-all (bias, turn-level)
   ============================================================ */
function chartRatio() {
  const base = {};
  D.phaseA.byPipeline.filter(r=>r.metric==="bias"&&r.level==="turn"&&r.pipeline==="P-all")
    .forEach(r=>base[r.scenario]=r.p);
  const traces = SCEN.map(scn => {
    const r = orderByPipe(D.phaseA.byPipeline
      .filter(x=>x.metric==="bias"&&x.level==="turn"&&x.scenario===scn&&x.pipeline!=="P-all"));
    return {
      type:"bar", name:scn,
      x:r.map(d=>d.pipeline), y:r.map(d=>+(d.p/base[scn]).toFixed(2)),
      marker:{ color:SCEN_COLOR[scn] },
      text:r.map(d=>(d.p/base[scn]).toFixed(1)+"×"), textposition:"outside",
      textfont:{size:11,color:"#48586a"},
      hovertemplate:"<b>%{x}</b><br>%{y:.2f}× the bias risk of P-all<extra>"+scn+"</extra>"
    };
  });
  Plotly.newPlot("chart-ratio", traces, baseLayout({
    barmode:"group",
    yaxis:{ title:"Bias-leak risk ratio (P-all = 1.0)", gridcolor:"#eef2f7", rangemode:"tozero" },
    shapes:[{ type:"line", x0:-.5, x1:3.5, y0:1, y1:1, line:{color:"#94a3b8",dash:"dash",width:1.5} }]
  }), CFG);
}

/* ============================================================
   4. PHASE A — cumulative bias by turn (scenario toggle)
   ============================================================ */
function chartCum(state) {
  const traces = PIPES.map(p => {
    const r = D.phaseA.cumulative.filter(x=>x.scenario===state.scenario&&x.pipeline===p)
      .sort((a,b)=>a.turn-b.turn);
    return {
      type:"scatter", mode:"lines", name:p,
      x:r.map(d=>d.turn), y:r.map(d=>pct(d.p)),
      line:{ color:PIPE_COLOR[p], width:p==="P-all"?3.2:2 },
      hovertemplate:"<b>%{fullData.name}</b><br>by turn %{x}: %{y:.1f}% leaked<extra></extra>"
    };
  });
  Plotly.react("chart-cum", traces, baseLayout({
    xaxis:{ title:"turn within conversation", gridcolor:"#eef2f7", dtick:2 },
    yaxis:{ title:"cumulative bias-leak (%)", gridcolor:"#eef2f7", rangemode:"tozero" }
  }), CFG);
}

/* ============================================================
   5. PHASE A — bias by persona (pipeline selector)
   ============================================================ */
function chartPersona(state) {
  const personas = D.meta.personas;
  const traces = SCEN.map(scn => {
    const m = {}; D.phaseA.byPersona
      .filter(x=>x.metric==="bias"&&x.scenario===scn&&x.pipeline===state.pipeline)
      .forEach(d=>m[d.persona]=d);
    return {
      type:"bar", name:scn,
      x:personas, y:personas.map(p=>m[p]?pct(m[p].p):null),
      marker:{ color:SCEN_COLOR[scn] },
      error_y:{ type:"data", symmetric:false,
        array:personas.map(p=>m[p]?pct(m[p].hi-m[p].p):null),
        arrayminus:personas.map(p=>m[p]?pct(m[p].p-m[p].lo):null),
        color:"#5a6b7d", thickness:1, width:3 },
      hovertemplate:"<b>%{x}</b><br>bias-leak: %{y:.1f}%<extra>"+scn+"</extra>"
    };
  });
  Plotly.react("chart-persona", traces, baseLayout({
    barmode:"group",
    yaxis:{ title:"turn-level bias-leak (%)", gridcolor:"#eef2f7", rangemode:"tozero" },
    xaxis:{ gridcolor:"#eef2f7", tickangle:-20 }
  }), CFG);
}

/* ============================================================
   6. PHASE A — leak by response class (metric toggle), P-all
   ============================================================ */
function chartClass(state) {
  const traces = SCEN.map(scn => {
    const m = {}; D.phaseA.byClass
      .filter(x=>x.metric===state.metric&&x.scenario===scn).forEach(d=>m[d.class_label]=d);
    return {
      type:"bar", name:scn,
      x:CLASS_ORDER, y:CLASS_ORDER.map(c=>m[c]?pct(m[c].p):null),
      marker:{ color:SCEN_COLOR[scn] },
      hovertemplate:"<b>%{x}</b><br>"+METRIC_LABEL[state.metric].toLowerCase()+
        ": %{y:.1f}%<extra>"+scn+"</extra>"
    };
  });
  Plotly.react("chart-class", traces, baseLayout({
    barmode:"group",
    yaxis:{ title:METRIC_LABEL[state.metric]+" (%)", gridcolor:"#eef2f7", rangemode:"tozero" }
  }), CFG);
}

/* ============================================================
   7. PHASE B — which lever? (metric × level toggle)
   ============================================================ */
function chartB(state) {
  const conds = D.phaseB.conditions;
  const traces = SCEN.map(scn => {
    const m = {}; D.phaseB.byCondition
      .filter(x=>x.metric===state.metric&&x.level===state.level&&x.scenario===scn)
      .forEach(d=>m[d.label]=d);
    return {
      type:"bar", name:scn,
      x:conds, y:conds.map(c=>m[c]?pct(m[c].p):null),
      marker:{ color:SCEN_COLOR[scn] },
      error_y:{ type:"data", symmetric:false,
        array:conds.map(c=>m[c]?pct(m[c].hi-m[c].p):null),
        arrayminus:conds.map(c=>m[c]?pct(m[c].p-m[c].lo):null),
        color:"#5a6b7d", thickness:1, width:3 },
      hovertemplate:"<b>%{x}</b><br>"+(state.level==="turn"?"turn":"run")+" "+
        METRIC_LABEL[state.metric].toLowerCase()+": %{y:.1f}%<extra>"+scn+"</extra>"
    };
  });
  const ylab = (state.level==="turn"?"Turn-level ":"Run-level ")+METRIC_LABEL[state.metric].toLowerCase()+" (%)";
  Plotly.react("chart-b", traces, baseLayout({
    barmode:"group", xaxis:{ gridcolor:"#eef2f7", tickangle:-18 },
    yaxis:{ title:ylab, gridcolor:"#eef2f7", rangemode:"tozero" },
    margin:{ l:58, r:20, t:14, b:120 }
  }), CFG);
}

/* ============================================================
   8. PHASE B — cumulative bias by turn (scenario toggle)
   ============================================================ */
function chartBcum(state) {
  const conds = D.phaseB.conditions;
  const traces = conds.map(c => {
    const r = D.phaseB.cumulative.filter(x=>x.scenario===state.scenario&&x.label===c)
      .sort((a,b)=>a.turn-b.turn);
    if (!r.length) return null;
    return {
      type:"scatter", mode:"lines", name:c,
      x:r.map(d=>d.turn), y:r.map(d=>pct(d.p)),
      line:{ color:COND_COLOR[c]||"#888", width:c==="gpt-5.4-mini"?3.4:2,
             dash:c==="A — P-all (nano)"?"dot":"solid" },
      hovertemplate:"<b>%{fullData.name}</b><br>by turn %{x}: %{y:.1f}% leaked<extra></extra>"
    };
  }).filter(Boolean);
  Plotly.react("chart-bcum", traces, baseLayout({
    xaxis:{ title:"turn within conversation", gridcolor:"#eef2f7", dtick:2 },
    yaxis:{ title:"cumulative bias-leak (%)", gridcolor:"#eef2f7", rangemode:"tozero" },
    legend:{ orientation:"h", y:1.16, x:0, font:{size:11} }
  }), CFG);
}

/* ============================================================
   STATIC CONTENT FROM DATA
   ============================================================ */
function fillStatic() {
  // hero chips
  const chips = document.getElementById("hero-chips");
  const total = (D.meta.phaseA_turns||0)+(D.meta.phaseB_turns||0);
  [["",`<b>${total.toLocaleString()}</b> judged turns`],
   ["",`<b>5</b> pipelines × <b>7</b> personas`],
   ["",`<b>2</b> scenarios · 15-turn dialogues`],
   ["",`bias cut <b>46–68%</b> by model upgrade`]
  ].forEach(([,html])=>{ const s=document.createElement("span"); s.className="chip"; s.innerHTML=html; chips.appendChild(s); });

  // stamps + scenario text + data footer
  const stamp = document.getElementById("gen-stamp");
  if (stamp) stamp.textContent = "Data generated "+D.meta.generatedAt+".";
  if (D.meta.scenarioDesc){
    const rm=document.getElementById("scen-rm"), ms=document.getElementById("scen-ms");
    if(rm&&D.meta.scenarioDesc["random-mid"]) rm.textContent=D.meta.scenarioDesc["random-mid"];
    if(ms&&D.meta.scenarioDesc["mirror-start"]) ms.textContent=D.meta.scenarioDesc["mirror-start"];
  }
  const df=document.getElementById("data-foot");
  if(df) df.innerHTML = `Phase A: ${(D.meta.phaseA_turns||0).toLocaleString()} turns (complete). `+
    `Phase B: ${(D.meta.phaseB_turns||0).toLocaleString()} turns so far. Generated ${D.meta.generatedAt}.`;
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  fillStatic();
  chartPareto();
  chartRatio();

  const ps = controls("ctrl-pipe", [
    {key:"metric", label:"metric", options:[{val:"bias",label:"Bias"},{val:"fact",label:"Factual"},{val:"coherence",label:"Coherence"}]},
    {key:"level",  label:"scale",  options:[{val:"turn",label:"Per turn"},{val:"run",label:"Per conversation"}]}
  ], chartPipe); chartPipe(ps);

  const cs = controls("ctrl-cum", [
    {key:"scenario", label:"scenario", options:SCEN.map(s=>({val:s,label:s}))}
  ], chartCum); chartCum(cs);

  const prs = controls("ctrl-persona", [
    {key:"pipeline", label:"pipeline", options:PIPES.map(p=>({val:p,label:p}))}
  ], chartPersona); chartPersona(prs);

  const cls = controls("ctrl-class", [
    {key:"metric", label:"metric", options:[{val:"bias",label:"Bias"},{val:"fact",label:"Factual"},{val:"coherence",label:"Coherence"}]}
  ], chartClass); chartClass(cls);

  // Phase B (guard if absent)
  const hasB = D.phaseB && D.phaseB.byCondition && D.phaseB.byCondition.length;
  if (hasB) {
    const bs = controls("ctrl-b", [
      {key:"metric", label:"metric", options:[{val:"bias",label:"Bias"},{val:"fact",label:"Factual"},{val:"coherence",label:"Coherence"}]},
      {key:"level",  label:"scale",  options:[{val:"turn",label:"Per turn"},{val:"run",label:"Per conversation"}]}
    ], chartB); chartB(bs);
    const bcs = controls("ctrl-bcum", [
      {key:"scenario", label:"scenario", options:SCEN.map(s=>({val:s,label:s}))}
    ], chartBcum); chartBcum(bcs);
  } else {
    document.querySelectorAll("#chart-b, #chart-bcum").forEach(el=>{
      const card=el.closest(".chartcard"); if(card) card.style.display="none";
    });
  }
}
if (document.readyState!=="loading") init();
else document.addEventListener("DOMContentLoaded", init);
})();
