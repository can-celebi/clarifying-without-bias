#!/usr/bin/env Rscript
# =====================================================================
# DEPRECATED (2026-06-06). Superseded by tools/build-site-data.js.
# This script recomputed the older first-pass (v1) judge rates; the live
# site now uses the canonical STRICT-judge rates produced by the Node
# exporter. Kept for reference only — do not use to regenerate the site.
# =====================================================================
# export-site-data.R  —  (old) source of truth for the live site data
# ---------------------------------------------------------------------
# Reads the canonical stress-test artefacts and emits compact JSON that
# the static site (index.html + assets/js/charts.js) consumes.
#
# Design notes:
#   * SELF-CONTAINED. Copies the two helpers it needs (wilson_ci, factor
#     levels) instead of sourcing the analysis agent's _helpers.R, so a
#     concurrent edit there cannot break or collide with this script.
#   * READ-ONLY outside this repo. Phase A is read from the stable
#     turns.rds; Phase B is ingested directly from per-cell turns.jsonl.
#   * COMPLETED CELLS ONLY. A cell is ingested only if its turns.jsonl
#     row count >= the sweep's expectedTurnsPerCell, so a mid-append
#     JSONL (Agent 1 is live) is never half-read.
#   * Re-runnable. As Phase B Stage 2/3 land, just re-run this script;
#     new completed cells are picked up automatically.
#
# Usage:
#   Rscript tools/export-site-data.R [STRESS_TEST_DIR]
#   (STRESS_TEST_DIR defaults to ../code/chatbot-stress-test relative to
#    the repo root; override if the repo is relocated.)
# =====================================================================

suppressPackageStartupMessages({
  library(dplyr); library(tidyr); library(purrr); library(tibble)
  library(jsonlite); library(stringr)
})

`%||%` <- function(a, b) if (is.null(a) || length(a) == 0) b else a

# ---- locate inputs -------------------------------------------------
args <- commandArgs(trailingOnly = TRUE)
REPO  <- normalizePath(file.path(dirname(sub("--file=", "",
           grep("--file=", commandArgs(FALSE), value = TRUE)[1])), ".."),
           mustWork = FALSE)
if (is.na(REPO) || REPO == "") REPO <- normalizePath(".")
ST <- if (length(args) >= 1) args[[1]] else
        normalizePath(file.path(REPO, "..", "code", "chatbot-stress-test"),
                      mustWork = FALSE)
ANALYSIS <- file.path(ST, "analysis")
RESULTS  <- file.path(ST, "results")
OUT_JSON <- file.path(REPO, "data", "site-data.json")
OUT_JS   <- file.path(REPO, "assets", "js", "site-data.js")
stopifnot(dir.exists(ST), dir.exists(RESULTS))
message("[export] stress-test dir: ", ST)

# ---- copied helpers (do NOT source _helpers.R) ---------------------
SCENARIO_LEVELS <- c("random-mid", "mirror-start")
PIPELINE_LEVELS <- c("P-all", "P2", "P2-probe", "P-perclass", "P-probe-perclass")
PERSONA_LEVELS  <- c("advice-seeker", "complexity-seeker", "confused-inquirer",
                     "demand-purpose-prober", "example-farmer",
                     "frustration-spiral", "jailbreaker")
CLASS_LABELS <- c("0" = "Deny", "1" = "AdviceReflect", "2" = "Clarify",
                  "3" = "Complex", "4" = "Example", "5" = "Meta")

wilson_ci <- function(x, conf = 0.95) {
  x <- x[!is.na(x)]
  n <- length(x); k <- sum(x)
  if (n == 0) return(tibble(p = NA_real_, lo = NA_real_, hi = NA_real_, n = 0L, k = 0L))
  z  <- qnorm(1 - (1 - conf) / 2)
  ph <- k / n
  d  <- 1 + z^2 / n
  ctr <- (ph + z^2 / (2 * n)) / d
  hw  <- (z * sqrt(ph * (1 - ph) / n + z^2 / (4 * n^2))) / d
  tibble(p = ph, lo = pmax(0, ctr - hw), hi = pmin(1, ctr + hw),
         n = as.integer(n), k = as.integer(k))
}
r3 <- function(x) round(x, 4)

# ===================================================================
# PHASE A  — read the stable tidy frame, restrict to complete cells
# ===================================================================
turnsA_path <- file.path(ANALYSIS, "turns.rds")
stopifnot(file.exists(turnsA_path))
turnsA <- readRDS(turnsA_path) |> filter(cell_status == "complete")
message("[export] Phase A rows (complete): ", nrow(turnsA))

# byPipeline: turn-level + run-level, all three metrics
turn_pipe <- turnsA |>
  group_by(scenario, pipeline) |>
  group_modify(~ bind_rows(
    wilson_ci(.x$leak_bias)      |> mutate(metric = "bias"),
    wilson_ci(.x$leak_fact)      |> mutate(metric = "fact"),
    wilson_ci(.x$leak_coherence) |> mutate(metric = "coherence"))) |>
  ungroup() |> mutate(level = "turn")

run_lvlA <- turnsA |>
  group_by(scenario, pipeline, persona, run_idx) |>
  summarise(any_bias = any(leak_bias), any_fact = any(leak_fact),
            any_coh = any(leak_coherence), .groups = "drop")
run_pipe <- run_lvlA |>
  group_by(scenario, pipeline) |>
  group_modify(~ bind_rows(
    wilson_ci(.x$any_bias) |> mutate(metric = "bias"),
    wilson_ci(.x$any_fact) |> mutate(metric = "fact"),
    wilson_ci(.x$any_coh)  |> mutate(metric = "coherence"))) |>
  ungroup() |> mutate(level = "run")

byPipeline <- bind_rows(turn_pipe, run_pipe) |>
  transmute(scenario = as.character(scenario), pipeline = as.character(pipeline),
            metric, level, p = r3(p), lo = r3(lo), hi = r3(hi), n)

# byPersona: turn-level, all three metrics
byPersona <- turnsA |>
  group_by(scenario, pipeline, persona) |>
  group_modify(~ bind_rows(
    wilson_ci(.x$leak_bias)      |> mutate(metric = "bias"),
    wilson_ci(.x$leak_fact)      |> mutate(metric = "fact"),
    wilson_ci(.x$leak_coherence) |> mutate(metric = "coherence"))) |>
  ungroup() |>
  transmute(scenario = as.character(scenario), pipeline = as.character(pipeline),
            persona = as.character(persona), metric, p = r3(p), lo = r3(lo),
            hi = r3(hi), n)

# byClass: P-all only (the hotspot story), all three metrics
byClass <- turnsA |>
  filter(pipeline == "P-all", !is.na(classification)) |>
  mutate(class_label = CLASS_LABELS[as.character(classification)]) |>
  group_by(scenario, class_label) |>
  summarise(n = n(),
            bias = mean(leak_bias), fact = mean(leak_fact),
            coherence = mean(leak_coherence), .groups = "drop") |>
  pivot_longer(c(bias, fact, coherence), names_to = "metric", values_to = "p") |>
  transmute(scenario = as.character(scenario), class_label, metric,
            p = r3(p), n)

# cumulative bias by turn
cumA <- turnsA |>
  arrange(scenario, pipeline, persona, run_idx, turn_idx) |>
  group_by(scenario, pipeline, persona, run_idx) |>
  mutate(cum = cummax(as.integer(leak_bias))) |>
  ungroup() |>
  group_by(scenario, pipeline, turn_idx) |>
  summarise(p = mean(cum), .groups = "drop") |>
  transmute(scenario = as.character(scenario), pipeline = as.character(pipeline),
            turn = turn_idx + 1L, p = r3(p))

# pareto: bias-clean rate vs bot cost-per-1k turns + p95 latency
paretoA <- turnsA |>
  group_by(scenario, pipeline) |>
  summarise(bias_perf = 100 * (1 - mean(leak_bias)),
            cost_per_k = mean(cost_usd_bot, na.rm = TRUE) * 1000,
            p95_latency_s = quantile(latency_bot_ms, 0.95, na.rm = TRUE) / 1000,
            .groups = "drop") |>
  transmute(scenario = as.character(scenario),
            label = as.character(pipeline), group = "Phase A",
            bias_perf = r3(bias_perf), cost_per_k = r3(cost_per_k),
            p95_latency_s = r3(p95_latency_s))

# ===================================================================
# PHASE B  — ingest completed cells from every phase-b-* sweep dir
# ===================================================================
flatten_b <- function(row, scenario, condition) {
  j <- row$judgments %||% list(); m <- row$meta %||% list()
  l <- row$latencyMs %||% list()
  tibble(
    scenario = scenario, condition = condition,
    persona  = row$personaId %||% NA_character_,
    run_idx  = row$runIdx %||% NA_integer_,
    turn_idx = row$turnIdx %||% NA_integer_,
    cost_usd_bot   = as.numeric(m$costUSD %||% NA_real_),
    latency_bot_ms = as.numeric(l$bot %||% NA_real_),
    bias_check       = as.integer(j$`bias-check` %||% NA_integer_),
    fact_check       = as.integer(j$`fact-check` %||% NA_integer_),
    answer_coherence = as.integer(j$`answer-coherence` %||% NA_integer_),
    classification   = as.integer(m$classification %||% NA_integer_))
}

# Human-readable, codename-free label for each known condition id.
label_condition <- function(id) {
  dplyr::case_when(
    id == "B1-allcorr-nano"        ~ "+ corrector",
    id == "B2-all-nano-R"          ~ "Reasoning: low",
    id == "B3-all-mini"            ~ "Higher-capability model",
    str_detect(id, "nano-RM|RM$")  ~ "Reasoning: medium",
    str_detect(id, "nano-RH|RH$")  ~ "Reasoning: high",
    str_detect(id, "corr.*M1|M1.*corr") ~ "Higher-capability + corrector",
    str_detect(id, "M2$|M2-|-M2")  ~ "Full-capability model",
    str_detect(id, "M1")           ~ "Higher-capability model",
    TRUE                           ~ id)
}

sweep_dirs <- list.dirs(RESULTS, recursive = FALSE) |>
  (\(d) d[str_detect(basename(d), "^phase-b-") & !str_detect(basename(d), "smoke")])()

# A cell is DONE (safe to read) iff it appears in this sweep's
# sweep-progress.json with error==null and either skipped==TRUE or a
# non-null totalTurns. The currently-running / pending cells are not yet
# in progress.json, so a mid-append JSONL is never read. We deliberately
# do NOT require the exact expected row count: a finished cell that is a
# few turns short (judge-side NA failures, ~0.17%) is still complete.
done_cells <- function(sd) {
  pp <- file.path(sd, "sweep-progress.json")
  if (!file.exists(pp)) return(character(0))
  prog <- fromJSON(pp, simplifyVector = FALSE)
  ids <- vapply(prog, function(e) {
    ok <- is.null(e$error) || is.na(e$error %||% NA)
    fin <- isTRUE(e$skipped) || !is.null(e$totalTurns)
    if (ok && fin) e$cellId %||% NA_character_ else NA_character_
  }, character(1))
  ids[!is.na(ids)]
}

turnsB <- tibble()
stages_present <- c()
for (sd in sweep_dirs) {
  meta_p <- file.path(sd, "sweep-meta.json")
  if (!file.exists(meta_p)) next
  meta <- fromJSON(meta_p, simplifyVector = TRUE)
  if ((meta$runs %||% 1) < 5) next                    # drop smoke / dry sweeps
  conds <- meta$conditions
  if (is.null(conds) || nrow(as.data.frame(conds)) == 0) next
  ready <- done_cells(sd)
  if (length(ready) == 0) next
  stage_tag <- basename(sd); got_any <- FALSE
  for (cellId in ready) {
    parts <- strsplit(cellId, "__")[[1]]
    scn <- parts[1]; cid <- parts[2]
    p <- file.path(sd, cellId, "turns.jsonl")
    if (!file.exists(p)) next
    rows <- tryCatch(stream_in(file(p), simplifyVector = FALSE, verbose = FALSE),
                     error = function(e) { message("[export]   read fail ", cellId,
                                                    ": ", e$message); list() })
    if (length(rows) == 0) next
    message("[export]   ingest ", basename(sd), " / ", cellId, " (", length(rows), " turns)")
    turnsB <- bind_rows(turnsB, map_dfr(rows, flatten_b, scenario = scn, condition = cid))
    got_any <- TRUE
  }
  if (got_any) stages_present <- c(stages_present, stage_tag)
}

phaseB <- list()
if (nrow(turnsB) > 0) {
  turnsB <- turnsB |>
    mutate(leak_bias = bias_check == 1, leak_fact = fact_check == 0,
           leak_coherence = answer_coherence == 0, is_error = is.na(bias_check),
           label = label_condition(condition)) |>
    filter(!is_error)

  # Phase A P-all baseline (same six personas as Phase B), shown as condition "A".
  phaseB_personas <- unique(turnsB$persona)
  baseA <- turnsA |>
    filter(pipeline == "P-all", as.character(persona) %in% phaseB_personas) |>
    transmute(scenario = as.character(scenario), condition = "A-baseline",
              label = "Baseline (single call)", persona = as.character(persona),
              run_idx, turn_idx, cost_usd_bot, latency_bot_ms,
              leak_bias, leak_fact, leak_coherence)
  allB <- bind_rows(
    baseA,
    turnsB |> transmute(scenario, condition, label, persona, run_idx, turn_idx,
                        cost_usd_bot, latency_bot_ms,
                        leak_bias, leak_fact, leak_coherence))

  # turn-level + run-level by condition
  turn_cond <- allB |>
    group_by(scenario, label) |>
    group_modify(~ bind_rows(
      wilson_ci(.x$leak_bias)      |> mutate(metric = "bias"),
      wilson_ci(.x$leak_fact)      |> mutate(metric = "fact"),
      wilson_ci(.x$leak_coherence) |> mutate(metric = "coherence"))) |>
    ungroup() |> mutate(level = "turn")
  run_cond <- allB |>
    group_by(scenario, label, persona, run_idx) |>
    summarise(any_bias = any(leak_bias), any_fact = any(leak_fact),
              any_coh = any(leak_coherence), .groups = "drop") |>
    group_by(scenario, label) |>
    group_modify(~ bind_rows(
      wilson_ci(.x$any_bias) |> mutate(metric = "bias"),
      wilson_ci(.x$any_fact) |> mutate(metric = "fact"),
      wilson_ci(.x$any_coh)  |> mutate(metric = "coherence"))) |>
    ungroup() |> mutate(level = "run")
  byCondition <- bind_rows(turn_cond, run_cond) |>
    transmute(scenario, label, metric, level,
              p = r3(p), lo = r3(lo), hi = r3(hi), n)

  cumB <- allB |>
    arrange(scenario, label, persona, run_idx, turn_idx) |>
    group_by(scenario, label, persona, run_idx) |>
    mutate(cum = cummax(as.integer(leak_bias))) |> ungroup() |>
    group_by(scenario, label, turn_idx) |>
    summarise(p = mean(cum), .groups = "drop") |>
    transmute(scenario, label, turn = turn_idx + 1L, p = r3(p))

  paretoB <- turnsB |>
    group_by(scenario, label) |>
    summarise(bias_perf = 100 * (1 - mean(leak_bias)),
              cost_per_k = mean(cost_usd_bot, na.rm = TRUE) * 1000,
              p95_latency_s = quantile(latency_bot_ms, 0.95, na.rm = TRUE) / 1000,
              .groups = "drop") |>
    transmute(scenario, label, group = "Phase B",
              bias_perf = r3(bias_perf), cost_per_k = r3(cost_per_k),
              p95_latency_s = r3(p95_latency_s))

  CANON <- c("Baseline (single call)", "+ corrector",
             "Reasoning: low", "Reasoning: medium", "Reasoning: high",
             "Higher-capability model", "Higher-capability + corrector", "Full-capability model")
  present <- allB |> distinct(label) |> pull(label)
  cond_order <- c(intersect(CANON, present), setdiff(present, CANON))
  phaseB <- list(conditions = cond_order, byCondition = byCondition,
                 cumulative = cumB, pareto = paretoB,
                 n_turns = nrow(turnsB))
}

# combined pareto for the omnibus chart
pareto_all <- bind_rows(paretoA,
  if (length(phaseB) > 0) phaseB$pareto else tibble())

# ===================================================================
# ASSEMBLE + WRITE
# ===================================================================
meta_out <- list(
  generatedAt = format(Sys.time(), "%Y-%m-%d %H:%M %Z"),
  preliminary = TRUE,
  scenarios = SCENARIO_LEVELS,
  pipelines = PIPELINE_LEVELS,
  personas  = PERSONA_LEVELS,
  classLabels = unname(CLASS_LABELS),
  phaseA_turns = nrow(turnsA),
  phaseB_turns = if (length(phaseB) > 0) phaseB$n_turns else 0,
  phaseB_stages = unique(stages_present),
  scenarioDesc = list(
    `random-mid`   = "Task 7 of 14, row 12. Subject knows only the Random Box rule. Mid-experience, partial information.",
    `mirror-start` = "Task 1 of 14, row 1. Subject knows both the Random Box and Mirror rules. Cold-start, full information. ~2x harder."))

site <- list(
  meta = meta_out,
  phaseA = list(byPipeline = byPipeline, byPersona = byPersona,
                byClass = byClass, cumulative = cumA, pareto = paretoA),
  phaseB = phaseB,
  paretoAll = pareto_all)

json <- toJSON(site, auto_unbox = TRUE, dataframe = "rows",
               null = "null", na = "null", pretty = TRUE)
writeLines(json, OUT_JSON)
writeLines(paste0("window.SITE_DATA = ", json, ";"), OUT_JS)
message("[export] wrote ", OUT_JSON)
message("[export] wrote ", OUT_JS)

# ---- polarity / sanity gate (advisor #2) ---------------------------
chk <- function(scn, lvl, expect) {
  v <- byPipeline |>
    filter(pipeline == "P-all", scenario == scn, metric == "bias", level == lvl) |>
    pull(p)
  sprintf("  P-all %-12s %s bias = %5.1f%%  (expect ~%s)", scn, lvl, 100 * v, expect)
}
message("[export] GATE — Phase A P-all bias (compare to notebooks):")
message(chk("mirror-start", "turn", "12.4%"))
message(chk("random-mid",  "turn", "4.5%"))
message(chk("mirror-start", "run",  "79.0%"))
message(chk("random-mid",  "run",  "44.8%"))
