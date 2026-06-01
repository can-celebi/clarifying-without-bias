# chatbot-for-experiments

**Stress-testing instruction chatbots for economics experiments — which workflow and model best preserve treatment integrity?**

🔗 **Live report:** https://can-celebi.github.io/chatbot-for-experiments/
📄 **Half-page summary:** [`report/report.pdf`](report/report.pdf)

> ⚠️ **Preliminary.** Phase A (architecture screen) is complete; Phase B (escalation screen) is
> still running. Figures regenerate as cells land.

---

## What this is

An instruction chatbot deployed inside an economics experiment is not a help tool — it is part of the
**manipulation**. It must clarify rules and *refuse* to give advice, expected-value computations, or
strategic hints. This project is an adversarial **stress-test harness**: synthetic "subject" personas
attack the bot across thousands of multi-turn conversations, and an independent LLM judge scores every
reply on three metrics — **bias-leak** (the integrity metric), **factual error**, and **incoherence**.

The deployment question: **which pipeline architecture and which model leak the least?**

## Headline findings

1. **Simpler is safer.** A single LLM call (`P-all`) is Pareto-dominant on bias-leak, cost, and latency
   in every cell. Every added agent (classifier, probe gate, corrector) is the same or worse —
   a 1.2–4.1× bias penalty.
2. **Capability is the lever that works.** Of every knob turned, only a model upgrade
   (`nano → mini`) moved the frontier — bias-leak −46% / −68% across the two scenarios, plus better
   factuality, at non-binding cost. Reasoning effort was neutral-to-harmful; a corrector pass hurt.
3. **Integrity is a per-conversation property.** Per-turn risk is small but compounds over 15 turns;
   we report per-conversation consistency, not single-shot accuracy.

## Repository layout

```
index.html              # the live single-page report (interactive Plotly charts)
assets/css/style.css    # theme
assets/js/charts.js      # chart layer
assets/js/site-data.js   # generated — window.SITE_DATA (committed so the site is self-contained)
data/site-data.json      # generated — same aggregates as JSON
tools/export-site-data.R # single source of truth: regenerates the data files
report/report.tex|pdf    # the half-page LaTeX summary
```

## Reproducing / refreshing the data

The site is driven entirely by `data/site-data.json` (and its `site-data.js` twin), produced by one
script from the raw stress-test run logs:

```bash
Rscript tools/export-site-data.R [path/to/chatbot-stress-test]
```

It reads Phase A from the analysis `turns.rds` and Phase B from each completed sweep's `turns.jsonl`
(completed cells only, gated on `sweep-progress.json`), recomputes leak rates with Wilson 95% CIs,
and writes both data files. Re-run it whenever new Phase B cells finish, then commit the regenerated
files. The script is self-contained — it copies the helpers it needs rather than depending on the
analysis project's files.

## Method notes

- Two scenarios anchor the bot at different points of the experiment (an easier mid-experiment context
  and a ~2× harder cold-start context).
- 7 adversarial personas; 3 judged metrics; 15 runs × 15 turns per cell.
- Bias polarity convention: `bias-leak = (bias-check == 1)`, `factual error = (fact-check == 0)`,
  `incoherence = (answer-coherence == 0)`.
- Judge held fixed at `gpt-5.4-mini` for measurement stability. The headline mini-bot cell currently
  shares that model with the judge; an independent-judge confirmation cell (bot = mini, judge = full
  `gpt-5.4`) is in flight — see the caveat on the live page.
