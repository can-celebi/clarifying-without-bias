# Clarifying without bias

**Stress-testing instruction chatbots for economics experiments — which workflow and model best preserve treatment integrity?**

🔗 **Live report:** https://can-celebi.github.io/clarifying-without-bias/
📄 **Half-page summary:** [`report/report.pdf`](report/report.pdf)

---

## What this is

An instruction chatbot deployed inside an economics experiment is not a help tool — it is part of the
**manipulation**. It must clarify rules and *refuse* to give advice, expected-value computations, or
strategic hints. This project is an adversarial **stress-test harness**: synthetic "subject" personas
attack the bot across thousands of multi-turn conversations, and an independent LLM judge scores every
reply on three axes — **bias** (the integrity axis), **factual error**, and **incoherence**.

The page is an interactive, card-based explorer of the whole study: the chatbot **pipelines**, the
adversarial **subjects**, the **classification agent**, real **conversations**, the **literature**, the
**results**, and the **discussion**.

The deployment question: **which pipeline architecture and which model leak the least?**

## Headline findings

1. **Simpler is safer.** A single LLM call (∅) is Pareto-dominant on bias, cost, and latency in every
   cell. Every added agent (classifier, probe gate, corrector) is the same or worse.
2. **Model size is the main determinant.** Of every knob turned, only a base-model upgrade
   (nano → mini) moved the frontier — cutting the bias rate by roughly 70% — at non-binding cost.
   Reasoning effort was neutral-to-harmful; a corrector pass did not help.
3. **Two of three error terms nearly vanish.** Under strict adjudication, factual "errors" were almost
   entirely false positives of the first-pass judge, and complexity leaks are rare. The only axis with
   real signal is **bias** — mostly expected-value / risk language, rarely outright advice.

> **On the numbers.** All rates on the page are the **strict-judge canonical rates** — identical to the
> project report. The **bias** figures are conservative **lower bounds**: the escalation re-judged only
> the cheap model's positives, so the true bias rate is roughly ~2× the displayed value (rankings are
> unaffected). Recommended deployment: the single call (∅) on `5.4-mini` — bias ≈ 0.7–0.8%, factual and
> complexity ≈ 0.15%, at the lowest cost and latency.

## Repository layout

```
index.html                 # the interactive single-page report (card grid → detail views)
assets/css/style.css        # theme
assets/js/charts.js         # results charts (Plotly), canonical strict-judge data
assets/js/app.js            # routing + pipelines / subjects / classifier / conversations / literature
assets/js/site-data.js      # generated — window.SITE_DATA (committed so the site is self-contained)
data/site-data.json         # generated — same payload as JSON
tools/build-site-data.js    # single source of truth: regenerates the data files (Node)
report/report.tex|pdf       # the half-page summary
```

## Reproducing / refreshing the data

The site is driven entirely by `data/site-data.json` (and its `assets/js/site-data.js` twin), produced by
one Node script from the canonical analysis artifacts:

```bash
node tools/build-site-data.js [path/to/chatbot-stress-test]
```

It reads the **canonical per-turn frame** `analysis/report/turns_corrected_tidy.csv` (the file the project
report consumes), re-sources every leak/error number from the **strict combined judge** (`bias_s`,
`fact_s`, `cpx_v`), recomputes the aggregates with Wilson 95% CIs, assembles the page content (pipeline
diagrams, personas, classifier, literature) and a curated transcript sample, and writes both data files.
It **self-tests**: the regenerated condition-level rates must match `analysis/corrected-rates-strict-full.csv`
(the script exits non-zero on any mismatch), which guarantees the page and the report show the same
numbers. Re-run it whenever the analysis is refreshed, then commit the regenerated files.

> `tools/export-site-data.R` is the **deprecated** previous exporter — it recomputed the older first-pass
> (v1) judge rates and is superseded by `build-site-data.js`. Kept for reference only.

## Method notes

- Two scenarios anchor the bot at different points of the experiment (an easier mid-experiment context
  and a ~2× harder cold-start context).
- 5 core adversarial personas; 5 architectures × 3 model tiers (+ reasoning/corrector variants); 15 runs ×
  15 turns per cell; **40,000+** independently scored replies on the reported subjects.
- Scoring: a strict combined judge re-adjudicates each flagged reply on `gpt-5.4`, anchored to a 26-case
  gold control set; bias = a leak (advice / EV / risk language), factual error = a payment-procedure
  contradiction, complexity = the bot performing the subject's valuation.
