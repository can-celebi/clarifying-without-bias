window.SITE_DATA = {
  "meta": {
    "generatedAt": "2026-06-01 17:21 CEST",
    "preliminary": true,
    "scenarios": ["random-mid", "mirror-start"],
    "pipelines": ["P-all", "P2", "P2-probe", "P-perclass", "P-probe-perclass"],
    "personas": ["advice-seeker", "complexity-seeker", "confused-inquirer", "demand-purpose-prober", "example-farmer", "frustration-spiral", "jailbreaker"],
    "classLabels": ["Deny", "AdviceReflect", "Clarify", "Complex", "Example", "Meta"],
    "phaseA_turns": 15750,
    "phaseB_turns": 13411,
    "phaseB_stages": ["phase-b-stage1-1780305768", "phase-b-stage2-nano-reasoning-1780319310"],
    "scenarioDesc": {
      "random-mid": "Task 7 of 14, row 12. Subject knows only the Random Box rule. Mid-experience, partial information.",
      "mirror-start": "Task 1 of 14, row 1. Subject knows both the Random Box and Mirror rules. Cold-start, full information. ~2x harder."
    }
  },
  "phaseA": {
    "byPipeline": [
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "metric": "bias",
        "level": "turn",
        "p": 0.0451,
        "lo": 0.0359,
        "hi": 0.0565,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "metric": "fact",
        "level": "turn",
        "p": 0.0343,
        "lo": 0.0264,
        "hi": 0.0445,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0057,
        "lo": 0.003,
        "hi": 0.0108,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "metric": "bias",
        "level": "turn",
        "p": 0.0876,
        "lo": 0.0746,
        "hi": 0.1026,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "metric": "fact",
        "level": "turn",
        "p": 0.1194,
        "lo": 0.1043,
        "hi": 0.1363,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "metric": "coherence",
        "level": "turn",
        "p": 0.021,
        "lo": 0.015,
        "hi": 0.0293,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "metric": "bias",
        "level": "turn",
        "p": 0.186,
        "lo": 0.1676,
        "hi": 0.206,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "metric": "fact",
        "level": "turn",
        "p": 0.1105,
        "lo": 0.0959,
        "hi": 0.1269,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0165,
        "lo": 0.0113,
        "hi": 0.0241,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "metric": "bias",
        "level": "turn",
        "p": 0.0914,
        "lo": 0.0782,
        "hi": 0.1067,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "metric": "fact",
        "level": "turn",
        "p": 0.1029,
        "lo": 0.0888,
        "hi": 0.1188,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0324,
        "lo": 0.0247,
        "hi": 0.0423,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "metric": "bias",
        "level": "turn",
        "p": 0.1619,
        "lo": 0.1445,
        "hi": 0.1809,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "metric": "fact",
        "level": "turn",
        "p": 0.0838,
        "lo": 0.0711,
        "hi": 0.0985,
        "n": 1575
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0159,
        "lo": 0.0108,
        "hi": 0.0233,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "metric": "bias",
        "level": "turn",
        "p": 0.1244,
        "lo": 0.1091,
        "hi": 0.1417,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "metric": "fact",
        "level": "turn",
        "p": 0.0984,
        "lo": 0.0847,
        "hi": 0.1141,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0102,
        "lo": 0.0063,
        "hi": 0.0164,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "metric": "bias",
        "level": "turn",
        "p": 0.1987,
        "lo": 0.1798,
        "hi": 0.2192,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "metric": "fact",
        "level": "turn",
        "p": 0.1422,
        "lo": 0.1258,
        "hi": 0.1603,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0305,
        "lo": 0.0231,
        "hi": 0.0402,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "metric": "bias",
        "level": "turn",
        "p": 0.2311,
        "lo": 0.211,
        "hi": 0.2526,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "metric": "fact",
        "level": "turn",
        "p": 0.1479,
        "lo": 0.1313,
        "hi": 0.1663,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0311,
        "lo": 0.0236,
        "hi": 0.0409,
        "n": 1575
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "metric": "bias",
        "level": "turn",
        "p": 0.1909,
        "lo": 0.1722,
        "hi": 0.2111,
        "n": 1561
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "metric": "fact",
        "level": "turn",
        "p": 0.1217,
        "lo": 0.1064,
        "hi": 0.1389,
        "n": 1561
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "metric": "coherence",
        "level": "turn",
        "p": 0.041,
        "lo": 0.0322,
        "hi": 0.052,
        "n": 1561
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "metric": "bias",
        "level": "turn",
        "p": 0.2265,
        "lo": 0.2064,
        "hi": 0.2479,
        "n": 1563
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "metric": "fact",
        "level": "turn",
        "p": 0.1324,
        "lo": 0.1165,
        "hi": 0.1501,
        "n": 1563
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0371,
        "lo": 0.0288,
        "hi": 0.0477,
        "n": 1563
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "metric": "bias",
        "level": "run",
        "p": 0.4476,
        "lo": 0.356,
        "hi": 0.5429,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "metric": "fact",
        "level": "run",
        "p": 0.3143,
        "lo": 0.2334,
        "hi": 0.4083,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "metric": "coherence",
        "level": "run",
        "p": 0.0857,
        "lo": 0.0457,
        "hi": 0.1549,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "metric": "bias",
        "level": "run",
        "p": 0.6286,
        "lo": 0.5331,
        "hi": 0.7149,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "metric": "fact",
        "level": "run",
        "p": 0.7524,
        "lo": 0.6619,
        "hi": 0.8251,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "metric": "coherence",
        "level": "run",
        "p": 0.2095,
        "lo": 0.1426,
        "hi": 0.2969,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "metric": "bias",
        "level": "run",
        "p": 0.8952,
        "lo": 0.8221,
        "hi": 0.9405,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "metric": "fact",
        "level": "run",
        "p": 0.7238,
        "lo": 0.6315,
        "hi": 0.8003,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "metric": "coherence",
        "level": "run",
        "p": 0.181,
        "lo": 0.119,
        "hi": 0.2654,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "metric": "bias",
        "level": "run",
        "p": 0.6857,
        "lo": 0.5917,
        "hi": 0.7666,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "metric": "fact",
        "level": "run",
        "p": 0.619,
        "lo": 0.5235,
        "hi": 0.7062,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "metric": "coherence",
        "level": "run",
        "p": 0.2381,
        "lo": 0.1668,
        "hi": 0.3279,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "metric": "bias",
        "level": "run",
        "p": 0.8381,
        "lo": 0.7559,
        "hi": 0.8964,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "metric": "fact",
        "level": "run",
        "p": 0.6286,
        "lo": 0.5331,
        "hi": 0.7149,
        "n": 105
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "metric": "coherence",
        "level": "run",
        "p": 0.1905,
        "lo": 0.1268,
        "hi": 0.276,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "metric": "bias",
        "level": "run",
        "p": 0.7905,
        "lo": 0.7031,
        "hi": 0.8574,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "metric": "fact",
        "level": "run",
        "p": 0.7429,
        "lo": 0.6517,
        "hi": 0.8168,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "metric": "coherence",
        "level": "run",
        "p": 0.1429,
        "lo": 0.0885,
        "hi": 0.2224,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "metric": "bias",
        "level": "run",
        "p": 0.9143,
        "lo": 0.8451,
        "hi": 0.9543,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "metric": "fact",
        "level": "run",
        "p": 0.8,
        "lo": 0.7135,
        "hi": 0.8653,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "metric": "coherence",
        "level": "run",
        "p": 0.2952,
        "lo": 0.2165,
        "hi": 0.3885,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "metric": "bias",
        "level": "run",
        "p": 0.9905,
        "lo": 0.948,
        "hi": 0.9983,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "metric": "fact",
        "level": "run",
        "p": 0.781,
        "lo": 0.6927,
        "hi": 0.8494,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "metric": "coherence",
        "level": "run",
        "p": 0.3429,
        "lo": 0.2591,
        "hi": 0.4377,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "metric": "bias",
        "level": "run",
        "p": 0.9333,
        "lo": 0.8687,
        "hi": 0.9673,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "metric": "fact",
        "level": "run",
        "p": 0.7576,
        "lo": 0.6646,
        "hi": 0.8313,
        "n": 99
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "metric": "coherence",
        "level": "run",
        "p": 0.37,
        "lo": 0.2818,
        "hi": 0.4678,
        "n": 100
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "metric": "bias",
        "level": "run",
        "p": 0.9619,
        "lo": 0.9061,
        "hi": 0.9851,
        "n": 105
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "metric": "fact",
        "level": "run",
        "p": 0.7921,
        "lo": 0.703,
        "hi": 0.8598,
        "n": 101
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "metric": "coherence",
        "level": "run",
        "p": 0.4468,
        "lo": 0.3504,
        "hi": 0.5474,
        "n": 94
      }
    ],
    "byPersona": [
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.0533,
        "lo": 0.0308,
        "hi": 0.0909,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.0978,
        "lo": 0.0655,
        "hi": 0.1436,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.0489,
        "lo": 0.0275,
        "hi": 0.0854,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.0711,
        "lo": 0.0442,
        "hi": 0.1124,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.0844,
        "lo": 0.0547,
        "hi": 0.1281,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.0133,
        "lo": 0.0045,
        "hi": 0.0385,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.0178,
        "lo": 0.0069,
        "hi": 0.0448,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0178,
        "lo": 0.0069,
        "hi": 0.0448,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.0311,
        "lo": 0.0152,
        "hi": 0.0628,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.0489,
        "lo": 0.0275,
        "hi": 0.0854,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.04,
        "lo": 0.0212,
        "hi": 0.0743,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.1333,
        "lo": 0.095,
        "hi": 0.184,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.04,
        "lo": 0.0212,
        "hi": 0.0743,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.2489,
        "lo": 0.1969,
        "hi": 0.3093,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.1111,
        "lo": 0.0764,
        "hi": 0.1589,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.1556,
        "lo": 0.114,
        "hi": 0.2087,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.1556,
        "lo": 0.114,
        "hi": 0.2087,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.1778,
        "lo": 0.1334,
        "hi": 0.233,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.1022,
        "lo": 0.0691,
        "hi": 0.1487,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0533,
        "lo": 0.0308,
        "hi": 0.0909,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.1022,
        "lo": 0.0691,
        "hi": 0.1487,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.0933,
        "lo": 0.0619,
        "hi": 0.1385,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.1556,
        "lo": 0.114,
        "hi": 0.2087,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.2222,
        "lo": 0.1728,
        "hi": 0.281,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.1067,
        "lo": 0.0727,
        "hi": 0.1538,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.2578,
        "lo": 0.205,
        "hi": 0.3187,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0178,
        "lo": 0.0069,
        "hi": 0.0448,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.0978,
        "lo": 0.0655,
        "hi": 0.1436,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.1333,
        "lo": 0.095,
        "hi": 0.184,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0178,
        "lo": 0.0069,
        "hi": 0.0448,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.2844,
        "lo": 0.2295,
        "hi": 0.3466,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.0933,
        "lo": 0.0619,
        "hi": 0.1385,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.0578,
        "lo": 0.0341,
        "hi": 0.0963,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.1778,
        "lo": 0.1334,
        "hi": 0.233,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0489,
        "lo": 0.0275,
        "hi": 0.0854,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2578,
        "lo": 0.205,
        "hi": 0.3187,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.1511,
        "lo": 0.1102,
        "hi": 0.2037,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.0489,
        "lo": 0.0275,
        "hi": 0.0854,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.1022,
        "lo": 0.0691,
        "hi": 0.1487,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0356,
        "lo": 0.0181,
        "hi": 0.0686,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.0844,
        "lo": 0.0547,
        "hi": 0.1281,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.2133,
        "lo": 0.1649,
        "hi": 0.2714,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0133,
        "lo": 0.0045,
        "hi": 0.0385,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.12,
        "lo": 0.0838,
        "hi": 0.169,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.2311,
        "lo": 0.1808,
        "hi": 0.2904,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0133,
        "lo": 0.0045,
        "hi": 0.0385,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.1378,
        "lo": 0.0988,
        "hi": 0.1889,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.1022,
        "lo": 0.0691,
        "hi": 0.1487,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.16,
        "lo": 0.1179,
        "hi": 0.2135,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.0622,
        "lo": 0.0374,
        "hi": 0.1017,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0356,
        "lo": 0.0181,
        "hi": 0.0686,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.1111,
        "lo": 0.0764,
        "hi": 0.1589,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.0533,
        "lo": 0.0308,
        "hi": 0.0909,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.0889,
        "lo": 0.0583,
        "hi": 0.1333,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.1867,
        "lo": 0.1412,
        "hi": 0.2427,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0444,
        "lo": 0.0243,
        "hi": 0.0799,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0,
        "lo": 0,
        "hi": 0.0168,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.0578,
        "lo": 0.0341,
        "hi": 0.0963,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.2044,
        "lo": 0.1569,
        "hi": 0.2619,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0444,
        "lo": 0.0243,
        "hi": 0.0799,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.1156,
        "lo": 0.0801,
        "hi": 0.1639,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.0844,
        "lo": 0.0547,
        "hi": 0.1281,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.32,
        "lo": 0.2625,
        "hi": 0.3835,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.0356,
        "lo": 0.0181,
        "hi": 0.0686,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.0311,
        "lo": 0.0152,
        "hi": 0.0628,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.1511,
        "lo": 0.1102,
        "hi": 0.2037,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.08,
        "lo": 0.0512,
        "hi": 0.1229,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2133,
        "lo": 0.1649,
        "hi": 0.2714,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.1156,
        "lo": 0.0801,
        "hi": 0.1639,
        "n": 225
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0222,
        "lo": 0.0095,
        "hi": 0.051,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.1689,
        "lo": 0.1256,
        "hi": 0.2233,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.1333,
        "lo": 0.095,
        "hi": 0.184,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0133,
        "lo": 0.0045,
        "hi": 0.0385,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.0756,
        "lo": 0.0477,
        "hi": 0.1177,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.1467,
        "lo": 0.1064,
        "hi": 0.1988,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.1333,
        "lo": 0.095,
        "hi": 0.184,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.1289,
        "lo": 0.0913,
        "hi": 0.179,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.04,
        "lo": 0.0212,
        "hi": 0.0743,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.1422,
        "lo": 0.1026,
        "hi": 0.1939,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.0578,
        "lo": 0.0341,
        "hi": 0.0963,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.08,
        "lo": 0.0512,
        "hi": 0.1229,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0933,
        "lo": 0.0619,
        "hi": 0.1385,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2044,
        "lo": 0.1569,
        "hi": 0.2619,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.1156,
        "lo": 0.0801,
        "hi": 0.1639,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.2178,
        "lo": 0.1688,
        "hi": 0.2762,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.12,
        "lo": 0.0838,
        "hi": 0.169,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.1289,
        "lo": 0.0913,
        "hi": 0.179,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0178,
        "lo": 0.0069,
        "hi": 0.0448,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.2133,
        "lo": 0.1649,
        "hi": 0.2714,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.3022,
        "lo": 0.246,
        "hi": 0.3651,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0356,
        "lo": 0.0181,
        "hi": 0.0686,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.1644,
        "lo": 0.1217,
        "hi": 0.2184,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.24,
        "lo": 0.1889,
        "hi": 0.2999,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0356,
        "lo": 0.0181,
        "hi": 0.0686,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.3111,
        "lo": 0.2542,
        "hi": 0.3743,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.1556,
        "lo": 0.114,
        "hi": 0.2087,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.12,
        "lo": 0.0838,
        "hi": 0.169,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.1067,
        "lo": 0.0727,
        "hi": 0.1538,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2489,
        "lo": 0.1969,
        "hi": 0.3093,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.0933,
        "lo": 0.0619,
        "hi": 0.1385,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.1822,
        "lo": 0.1373,
        "hi": 0.2379,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.1067,
        "lo": 0.0727,
        "hi": 0.1538,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0133,
        "lo": 0.0045,
        "hi": 0.0385,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.28,
        "lo": 0.2254,
        "hi": 0.342,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0133,
        "lo": 0.0045,
        "hi": 0.0385,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.1867,
        "lo": 0.1412,
        "hi": 0.2427,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.2978,
        "lo": 0.2418,
        "hi": 0.3605,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0311,
        "lo": 0.0152,
        "hi": 0.0628,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.2311,
        "lo": 0.1808,
        "hi": 0.2904,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.2756,
        "lo": 0.2213,
        "hi": 0.3373,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0667,
        "lo": 0.0408,
        "hi": 0.1071,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.36,
        "lo": 0.3001,
        "hi": 0.4246,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.1067,
        "lo": 0.0727,
        "hi": 0.1538,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.08,
        "lo": 0.0512,
        "hi": 0.1229,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.16,
        "lo": 0.1179,
        "hi": 0.2135,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0533,
        "lo": 0.0308,
        "hi": 0.0909,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0089,
        "lo": 0.0024,
        "hi": 0.0318,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2178,
        "lo": 0.1688,
        "hi": 0.2762,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.1289,
        "lo": 0.0913,
        "hi": 0.179,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.2332,
        "lo": 0.1825,
        "hi": 0.2929,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.1031,
        "lo": 0.0697,
        "hi": 0.15,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0179,
        "lo": 0.007,
        "hi": 0.0452,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.1538,
        "lo": 0.1122,
        "hi": 0.2073,
        "n": 221
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0181,
        "lo": 0.0071,
        "hi": 0.0456,
        "n": 221
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.009,
        "lo": 0.0025,
        "hi": 0.0324,
        "n": 221
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.1384,
        "lo": 0.0992,
        "hi": 0.1897,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.2455,
        "lo": 0.1938,
        "hi": 0.3059,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0402,
        "lo": 0.0213,
        "hi": 0.0746,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.1749,
        "lo": 0.1307,
        "hi": 0.2301,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.2287,
        "lo": 0.1784,
        "hi": 0.2881,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0404,
        "lo": 0.0214,
        "hi": 0.0749,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.2955,
        "lo": 0.2391,
        "hi": 0.3588,
        "n": 220
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.15,
        "lo": 0.1088,
        "hi": 0.2032,
        "n": 220
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.1591,
        "lo": 0.1167,
        "hi": 0.2132,
        "n": 220
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.1289,
        "lo": 0.0913,
        "hi": 0.179,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0267,
        "lo": 0.0123,
        "hi": 0.0569,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2133,
        "lo": 0.1649,
        "hi": 0.2714,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.08,
        "lo": 0.0512,
        "hi": 0.1229,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0178,
        "lo": 0.0069,
        "hi": 0.0448,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "advice-seeker",
        "metric": "bias",
        "p": 0.2329,
        "lo": 0.1818,
        "hi": 0.2932,
        "n": 219
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "advice-seeker",
        "metric": "fact",
        "p": 0.1187,
        "lo": 0.0823,
        "hi": 0.1683,
        "n": 219
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "advice-seeker",
        "metric": "coherence",
        "p": 0.0183,
        "lo": 0.0071,
        "hi": 0.046,
        "n": 219
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "complexity-seeker",
        "metric": "bias",
        "p": 0.2287,
        "lo": 0.1784,
        "hi": 0.2881,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "complexity-seeker",
        "metric": "fact",
        "p": 0.0448,
        "lo": 0.0245,
        "hi": 0.0806,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "complexity-seeker",
        "metric": "coherence",
        "p": 0.0135,
        "lo": 0.0046,
        "hi": 0.0388,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "confused-inquirer",
        "metric": "bias",
        "p": 0.1928,
        "lo": 0.1464,
        "hi": 0.2496,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "confused-inquirer",
        "metric": "fact",
        "p": 0.296,
        "lo": 0.2399,
        "hi": 0.3589,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "confused-inquirer",
        "metric": "coherence",
        "p": 0.0404,
        "lo": 0.0214,
        "hi": 0.0749,
        "n": 223
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "demand-purpose-prober",
        "metric": "bias",
        "p": 0.2143,
        "lo": 0.1656,
        "hi": 0.2726,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "demand-purpose-prober",
        "metric": "fact",
        "p": 0.2188,
        "lo": 0.1696,
        "hi": 0.2774,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "demand-purpose-prober",
        "metric": "coherence",
        "p": 0.0446,
        "lo": 0.0244,
        "hi": 0.0802,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "example-farmer",
        "metric": "bias",
        "p": 0.3422,
        "lo": 0.2833,
        "hi": 0.4064,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "example-farmer",
        "metric": "fact",
        "p": 0.1067,
        "lo": 0.0727,
        "hi": 0.1538,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "example-farmer",
        "metric": "coherence",
        "p": 0.1156,
        "lo": 0.0801,
        "hi": 0.1639,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "frustration-spiral",
        "metric": "bias",
        "p": 0.1333,
        "lo": 0.095,
        "hi": 0.184,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "frustration-spiral",
        "metric": "fact",
        "p": 0.0622,
        "lo": 0.0374,
        "hi": 0.1017,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "frustration-spiral",
        "metric": "coherence",
        "p": 0.0044,
        "lo": 0.0008,
        "hi": 0.0247,
        "n": 225
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "jailbreaker",
        "metric": "bias",
        "p": 0.2411,
        "lo": 0.1897,
        "hi": 0.3011,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "jailbreaker",
        "metric": "fact",
        "p": 0.0804,
        "lo": 0.0514,
        "hi": 0.1234,
        "n": 224
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "persona": "jailbreaker",
        "metric": "coherence",
        "p": 0.0223,
        "lo": 0.0096,
        "hi": 0.0512,
        "n": 224
      }
    ],
    "byClass": [
      {
        "scenario": "random-mid",
        "class_label": "AdviceReflect",
        "metric": "bias",
        "p": 0.0192,
        "n": 417
      },
      {
        "scenario": "random-mid",
        "class_label": "AdviceReflect",
        "metric": "fact",
        "p": 0.0096,
        "n": 417
      },
      {
        "scenario": "random-mid",
        "class_label": "AdviceReflect",
        "metric": "coherence",
        "p": 0,
        "n": 417
      },
      {
        "scenario": "random-mid",
        "class_label": "Clarify",
        "metric": "bias",
        "p": 0.0704,
        "n": 554
      },
      {
        "scenario": "random-mid",
        "class_label": "Clarify",
        "metric": "fact",
        "p": 0.0632,
        "n": 554
      },
      {
        "scenario": "random-mid",
        "class_label": "Clarify",
        "metric": "coherence",
        "p": 0.0072,
        "n": 554
      },
      {
        "scenario": "random-mid",
        "class_label": "Complex",
        "metric": "bias",
        "p": 0.0282,
        "n": 319
      },
      {
        "scenario": "random-mid",
        "class_label": "Complex",
        "metric": "fact",
        "p": 0,
        "n": 319
      },
      {
        "scenario": "random-mid",
        "class_label": "Complex",
        "metric": "coherence",
        "p": 0.0031,
        "n": 319
      },
      {
        "scenario": "random-mid",
        "class_label": "Deny",
        "metric": "bias",
        "p": 0,
        "n": 4
      },
      {
        "scenario": "random-mid",
        "class_label": "Deny",
        "metric": "fact",
        "p": 0,
        "n": 4
      },
      {
        "scenario": "random-mid",
        "class_label": "Deny",
        "metric": "coherence",
        "p": 0,
        "n": 4
      },
      {
        "scenario": "random-mid",
        "class_label": "Example",
        "metric": "bias",
        "p": 0.1429,
        "n": 84
      },
      {
        "scenario": "random-mid",
        "class_label": "Example",
        "metric": "fact",
        "p": 0.0595,
        "n": 84
      },
      {
        "scenario": "random-mid",
        "class_label": "Example",
        "metric": "coherence",
        "p": 0.0238,
        "n": 84
      },
      {
        "scenario": "random-mid",
        "class_label": "Meta",
        "metric": "bias",
        "p": 0.0152,
        "n": 197
      },
      {
        "scenario": "random-mid",
        "class_label": "Meta",
        "metric": "fact",
        "p": 0.0508,
        "n": 197
      },
      {
        "scenario": "random-mid",
        "class_label": "Meta",
        "metric": "coherence",
        "p": 0.0102,
        "n": 197
      },
      {
        "scenario": "mirror-start",
        "class_label": "AdviceReflect",
        "metric": "bias",
        "p": 0.1125,
        "n": 551
      },
      {
        "scenario": "mirror-start",
        "class_label": "AdviceReflect",
        "metric": "fact",
        "p": 0.1034,
        "n": 551
      },
      {
        "scenario": "mirror-start",
        "class_label": "AdviceReflect",
        "metric": "coherence",
        "p": 0.0018,
        "n": 551
      },
      {
        "scenario": "mirror-start",
        "class_label": "Clarify",
        "metric": "bias",
        "p": 0.1786,
        "n": 515
      },
      {
        "scenario": "mirror-start",
        "class_label": "Clarify",
        "metric": "fact",
        "p": 0.134,
        "n": 515
      },
      {
        "scenario": "mirror-start",
        "class_label": "Clarify",
        "metric": "coherence",
        "p": 0.0117,
        "n": 515
      },
      {
        "scenario": "mirror-start",
        "class_label": "Complex",
        "metric": "bias",
        "p": 0.0329,
        "n": 243
      },
      {
        "scenario": "mirror-start",
        "class_label": "Complex",
        "metric": "fact",
        "p": 0,
        "n": 243
      },
      {
        "scenario": "mirror-start",
        "class_label": "Complex",
        "metric": "coherence",
        "p": 0,
        "n": 243
      },
      {
        "scenario": "mirror-start",
        "class_label": "Deny",
        "metric": "bias",
        "p": 0.1429,
        "n": 7
      },
      {
        "scenario": "mirror-start",
        "class_label": "Deny",
        "metric": "fact",
        "p": 0,
        "n": 7
      },
      {
        "scenario": "mirror-start",
        "class_label": "Deny",
        "metric": "coherence",
        "p": 0,
        "n": 7
      },
      {
        "scenario": "mirror-start",
        "class_label": "Example",
        "metric": "bias",
        "p": 0.1646,
        "n": 79
      },
      {
        "scenario": "mirror-start",
        "class_label": "Example",
        "metric": "fact",
        "p": 0.1139,
        "n": 79
      },
      {
        "scenario": "mirror-start",
        "class_label": "Example",
        "metric": "coherence",
        "p": 0.0127,
        "n": 79
      },
      {
        "scenario": "mirror-start",
        "class_label": "Meta",
        "metric": "bias",
        "p": 0.1111,
        "n": 180
      },
      {
        "scenario": "mirror-start",
        "class_label": "Meta",
        "metric": "fact",
        "p": 0.1111,
        "n": 180
      },
      {
        "scenario": "mirror-start",
        "class_label": "Meta",
        "metric": "coherence",
        "p": 0.0444,
        "n": 180
      }
    ],
    "cumulative": [
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 1,
        "p": 0.0286
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 2,
        "p": 0.1048
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 3,
        "p": 0.1143
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 4,
        "p": 0.1905
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 5,
        "p": 0.2571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 6,
        "p": 0.2952
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 7,
        "p": 0.3048
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 8,
        "p": 0.3048
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 9,
        "p": 0.3143
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 10,
        "p": 0.3429
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 11,
        "p": 0.3619
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 12,
        "p": 0.3905
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 13,
        "p": 0.419
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 14,
        "p": 0.4286
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-all",
        "turn": 15,
        "p": 0.4476
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 1,
        "p": 0.0571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 2,
        "p": 0.1333
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 3,
        "p": 0.2095
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 4,
        "p": 0.3333
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 5,
        "p": 0.381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 6,
        "p": 0.381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 7,
        "p": 0.4
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 8,
        "p": 0.4571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 9,
        "p": 0.4857
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 10,
        "p": 0.5429
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 11,
        "p": 0.5524
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 12,
        "p": 0.581
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 13,
        "p": 0.6095
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 14,
        "p": 0.6286
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2",
        "turn": 15,
        "p": 0.6286
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 1,
        "p": 0.0857
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 2,
        "p": 0.1619
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 3,
        "p": 0.2857
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 4,
        "p": 0.3905
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 5,
        "p": 0.4762
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 6,
        "p": 0.5619
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 7,
        "p": 0.6381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 8,
        "p": 0.6857
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 9,
        "p": 0.7429
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 10,
        "p": 0.7619
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 11,
        "p": 0.8
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 12,
        "p": 0.8095
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 13,
        "p": 0.819
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 14,
        "p": 0.8571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P2-probe",
        "turn": 15,
        "p": 0.8952
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 1,
        "p": 0.0571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 2,
        "p": 0.0952
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 3,
        "p": 0.2381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 4,
        "p": 0.3238
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 5,
        "p": 0.381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 6,
        "p": 0.4571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 7,
        "p": 0.4762
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 8,
        "p": 0.5048
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 9,
        "p": 0.5238
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 10,
        "p": 0.5429
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 11,
        "p": 0.5619
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 12,
        "p": 0.619
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 13,
        "p": 0.6381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 14,
        "p": 0.6762
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-perclass",
        "turn": 15,
        "p": 0.6857
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 1,
        "p": 0.1048
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 2,
        "p": 0.2571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 3,
        "p": 0.381
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 4,
        "p": 0.4571
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 5,
        "p": 0.5333
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 6,
        "p": 0.6095
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 7,
        "p": 0.6476
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 8,
        "p": 0.6667
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 9,
        "p": 0.6952
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 10,
        "p": 0.7238
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 11,
        "p": 0.7714
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 12,
        "p": 0.7714
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 13,
        "p": 0.7905
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 14,
        "p": 0.8095
      },
      {
        "scenario": "random-mid",
        "pipeline": "P-probe-perclass",
        "turn": 15,
        "p": 0.8381
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 1,
        "p": 0.3048
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 2,
        "p": 0.3524
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 3,
        "p": 0.419
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 4,
        "p": 0.4762
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 5,
        "p": 0.5333
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 6,
        "p": 0.5619
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 7,
        "p": 0.6095
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 8,
        "p": 0.6571
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 9,
        "p": 0.6952
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 10,
        "p": 0.6952
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 11,
        "p": 0.7238
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 12,
        "p": 0.7333
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 13,
        "p": 0.7524
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 14,
        "p": 0.7714
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-all",
        "turn": 15,
        "p": 0.7905
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 1,
        "p": 0.2762
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 2,
        "p": 0.4
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 3,
        "p": 0.4667
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 4,
        "p": 0.5619
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 5,
        "p": 0.6286
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 6,
        "p": 0.6762
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 7,
        "p": 0.7524
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 8,
        "p": 0.7714
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 9,
        "p": 0.8
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 10,
        "p": 0.8571
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 11,
        "p": 0.8571
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 12,
        "p": 0.8952
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 13,
        "p": 0.9048
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 14,
        "p": 0.9143
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2",
        "turn": 15,
        "p": 0.9143
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 1,
        "p": 0.3238
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 2,
        "p": 0.4571
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 3,
        "p": 0.6
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 4,
        "p": 0.6667
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 5,
        "p": 0.6857
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 6,
        "p": 0.7429
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 7,
        "p": 0.819
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 8,
        "p": 0.8571
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 9,
        "p": 0.8857
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 10,
        "p": 0.9333
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 11,
        "p": 0.9333
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 12,
        "p": 0.9524
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 13,
        "p": 0.9524
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 14,
        "p": 0.9714
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P2-probe",
        "turn": 15,
        "p": 0.9905
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 1,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 2,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 3,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 4,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 5,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 6,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 7,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 8,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 9,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 10,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 11,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 12,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 13,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 14,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-perclass",
        "turn": 15,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 1,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 2,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 3,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 4,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 5,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 6,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 7,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 8,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 9,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 10,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 11,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 12,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 13,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 14,
        "p": null
      },
      {
        "scenario": "mirror-start",
        "pipeline": "P-probe-perclass",
        "turn": 15,
        "p": null
      }
    ],
    "pareto": [
      {
        "scenario": "random-mid",
        "label": "P-all",
        "group": "Phase A",
        "bias_perf": 95.4921,
        "cost_per_k": 0.7224,
        "p95_latency_s": 1.8446
      },
      {
        "scenario": "random-mid",
        "label": "P2",
        "group": "Phase A",
        "bias_perf": 91.2381,
        "cost_per_k": 1.1486,
        "p95_latency_s": 3.529
      },
      {
        "scenario": "random-mid",
        "label": "P2-probe",
        "group": "Phase A",
        "bias_perf": 81.3968,
        "cost_per_k": 1.0932,
        "p95_latency_s": 3.4933
      },
      {
        "scenario": "random-mid",
        "label": "P-perclass",
        "group": "Phase A",
        "bias_perf": 90.8571,
        "cost_per_k": 1.1403,
        "p95_latency_s": 5.5123
      },
      {
        "scenario": "random-mid",
        "label": "P-probe-perclass",
        "group": "Phase A",
        "bias_perf": 83.8095,
        "cost_per_k": 1.0908,
        "p95_latency_s": 5.4303
      },
      {
        "scenario": "mirror-start",
        "label": "P-all",
        "group": "Phase A",
        "bias_perf": 87.5556,
        "cost_per_k": 0.7324,
        "p95_latency_s": 2.1575
      },
      {
        "scenario": "mirror-start",
        "label": "P2",
        "group": "Phase A",
        "bias_perf": 80.127,
        "cost_per_k": 1.1728,
        "p95_latency_s": 3.8952
      },
      {
        "scenario": "mirror-start",
        "label": "P2-probe",
        "group": "Phase A",
        "bias_perf": 76.8889,
        "cost_per_k": 1.1321,
        "p95_latency_s": 3.725
      },
      {
        "scenario": "mirror-start",
        "label": "P-perclass",
        "group": "Phase A",
        "bias_perf": null,
        "cost_per_k": 1.1637,
        "p95_latency_s": 7.0002
      },
      {
        "scenario": "mirror-start",
        "label": "P-probe-perclass",
        "group": "Phase A",
        "bias_perf": null,
        "cost_per_k": 1.1186,
        "p95_latency_s": 6.8967
      }
    ]
  },
  "phaseB": {
    "conditions": ["Baseline (single call)", "+ corrector", "Reasoning: low", "Reasoning: medium", "Reasoning: high", "Higher-capability model"],
    "byCondition": [
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "metric": "bias",
        "level": "turn",
        "p": 0.1828,
        "lo": 0.1631,
        "hi": 0.2044,
        "n": 1340
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "metric": "fact",
        "level": "turn",
        "p": 0.0807,
        "lo": 0.0672,
        "hi": 0.0965,
        "n": 1339
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0202,
        "lo": 0.0139,
        "hi": 0.0292,
        "n": 1337
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "metric": "bias",
        "level": "turn",
        "p": 0.1319,
        "lo": 0.1148,
        "hi": 0.1509,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "metric": "fact",
        "level": "turn",
        "p": 0.0993,
        "lo": 0.0844,
        "hi": 0.1164,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0111,
        "lo": 0.0067,
        "hi": 0.0183,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "metric": "bias",
        "level": "turn",
        "p": 0.04,
        "lo": 0.0308,
        "hi": 0.0519,
        "n": 1349
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "metric": "fact",
        "level": "turn",
        "p": 0.0349,
        "lo": 0.0263,
        "hi": 0.0461,
        "n": 1347
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0245,
        "lo": 0.0175,
        "hi": 0.0342,
        "n": 1347
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "metric": "bias",
        "level": "turn",
        "p": 0.1474,
        "lo": 0.1295,
        "hi": 0.1673,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "metric": "fact",
        "level": "turn",
        "p": 0.1119,
        "lo": 0.0961,
        "hi": 0.1298,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0252,
        "lo": 0.0181,
        "hi": 0.035,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "metric": "bias",
        "level": "turn",
        "p": 0.1267,
        "lo": 0.1099,
        "hi": 0.1455,
        "n": 1342
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "metric": "fact",
        "level": "turn",
        "p": 0.0984,
        "lo": 0.0836,
        "hi": 0.1155,
        "n": 1341
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0216,
        "lo": 0.0151,
        "hi": 0.0309,
        "n": 1341
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "metric": "bias",
        "level": "turn",
        "p": 0.1444,
        "lo": 0.1267,
        "hi": 0.1642,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "metric": "fact",
        "level": "turn",
        "p": 0.1052,
        "lo": 0.0899,
        "hi": 0.1227,
        "n": 1350
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0311,
        "lo": 0.0231,
        "hi": 0.0418,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "metric": "bias",
        "level": "turn",
        "p": 0.1061,
        "lo": 0.0907,
        "hi": 0.1238,
        "n": 1338
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "metric": "fact",
        "level": "turn",
        "p": 0.059,
        "lo": 0.0476,
        "hi": 0.073,
        "n": 1338
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0157,
        "lo": 0.0103,
        "hi": 0.0239,
        "n": 1338
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "metric": "bias",
        "level": "turn",
        "p": 0.0496,
        "lo": 0.0393,
        "hi": 0.0625,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "metric": "fact",
        "level": "turn",
        "p": 0.037,
        "lo": 0.0282,
        "hi": 0.0485,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0059,
        "lo": 0.003,
        "hi": 0.0116,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "metric": "bias",
        "level": "turn",
        "p": 0.0245,
        "lo": 0.0175,
        "hi": 0.0342,
        "n": 1348
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "metric": "fact",
        "level": "turn",
        "p": 0.0237,
        "lo": 0.0169,
        "hi": 0.0333,
        "n": 1348
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0178,
        "lo": 0.012,
        "hi": 0.0264,
        "n": 1347
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "metric": "bias",
        "level": "turn",
        "p": 0.062,
        "lo": 0.0501,
        "hi": 0.0764,
        "n": 1307
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "metric": "fact",
        "level": "turn",
        "p": 0.0544,
        "lo": 0.0433,
        "hi": 0.068,
        "n": 1306
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0237,
        "lo": 0.0168,
        "hi": 0.0335,
        "n": 1307
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "metric": "bias",
        "level": "turn",
        "p": 0.0511,
        "lo": 0.0406,
        "hi": 0.0642,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "metric": "fact",
        "level": "turn",
        "p": 0.0511,
        "lo": 0.0406,
        "hi": 0.0642,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0059,
        "lo": 0.003,
        "hi": 0.0116,
        "n": 1350
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "metric": "bias",
        "level": "turn",
        "p": 0.0583,
        "lo": 0.047,
        "hi": 0.0722,
        "n": 1337
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "metric": "fact",
        "level": "turn",
        "p": 0.0615,
        "lo": 0.0498,
        "hi": 0.0757,
        "n": 1334
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "metric": "coherence",
        "level": "turn",
        "p": 0.0187,
        "lo": 0.0127,
        "hi": 0.0275,
        "n": 1336
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "metric": "bias",
        "level": "run",
        "p": 0.9111,
        "lo": 0.8343,
        "hi": 0.9543,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "metric": "fact",
        "level": "run",
        "p": 0.5778,
        "lo": 0.4746,
        "hi": 0.6746,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "metric": "coherence",
        "level": "run",
        "p": 0.2386,
        "lo": 0.1617,
        "hi": 0.3374,
        "n": 88
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "metric": "bias",
        "level": "run",
        "p": 0.7889,
        "lo": 0.6937,
        "hi": 0.8605,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "metric": "fact",
        "level": "run",
        "p": 0.7111,
        "lo": 0.6104,
        "hi": 0.7946,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "metric": "coherence",
        "level": "run",
        "p": 0.1556,
        "lo": 0.095,
        "hi": 0.2443,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "metric": "bias",
        "level": "run",
        "p": 0.4667,
        "lo": 0.3671,
        "hi": 0.569,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "metric": "fact",
        "level": "run",
        "p": 0.3258,
        "lo": 0.2374,
        "hi": 0.4287,
        "n": 89
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "metric": "coherence",
        "level": "run",
        "p": 0.2841,
        "lo": 0.2004,
        "hi": 0.3858,
        "n": 88
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "metric": "bias",
        "level": "run",
        "p": 0.8778,
        "lo": 0.7943,
        "hi": 0.9304,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "metric": "fact",
        "level": "run",
        "p": 0.7556,
        "lo": 0.6575,
        "hi": 0.8327,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "metric": "coherence",
        "level": "run",
        "p": 0.2667,
        "lo": 0.1862,
        "hi": 0.3662,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "metric": "bias",
        "level": "run",
        "p": 0.8889,
        "lo": 0.8074,
        "hi": 0.9385,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "metric": "fact",
        "level": "run",
        "p": 0.6517,
        "lo": 0.5483,
        "hi": 0.7425,
        "n": 89
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "metric": "coherence",
        "level": "run",
        "p": 0.2697,
        "lo": 0.1884,
        "hi": 0.37,
        "n": 89
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "metric": "bias",
        "level": "run",
        "p": 0.9111,
        "lo": 0.8343,
        "hi": 0.9543,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "metric": "fact",
        "level": "run",
        "p": 0.6778,
        "lo": 0.5757,
        "hi": 0.7653,
        "n": 90
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "metric": "coherence",
        "level": "run",
        "p": 0.3333,
        "lo": 0.2445,
        "hi": 0.4358,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "metric": "bias",
        "level": "run",
        "p": 0.7333,
        "lo": 0.6338,
        "hi": 0.8138,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "metric": "fact",
        "level": "run",
        "p": 0.5556,
        "lo": 0.4527,
        "hi": 0.6538,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "metric": "coherence",
        "level": "run",
        "p": 0.2,
        "lo": 0.1304,
        "hi": 0.2941,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "metric": "bias",
        "level": "run",
        "p": 0.4778,
        "lo": 0.3776,
        "hi": 0.5798,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "metric": "fact",
        "level": "run",
        "p": 0.3222,
        "lo": 0.2347,
        "hi": 0.4243,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "metric": "coherence",
        "level": "run",
        "p": 0.0889,
        "lo": 0.0457,
        "hi": 0.1657,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "metric": "bias",
        "level": "run",
        "p": 0.2778,
        "lo": 0.1958,
        "hi": 0.378,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "metric": "fact",
        "level": "run",
        "p": 0.3,
        "lo": 0.2151,
        "hi": 0.4013,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "metric": "coherence",
        "level": "run",
        "p": 0.1573,
        "lo": 0.0961,
        "hi": 0.2469,
        "n": 89
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "metric": "bias",
        "level": "run",
        "p": 0.5281,
        "lo": 0.4254,
        "hi": 0.6285,
        "n": 89
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "metric": "fact",
        "level": "run",
        "p": 0.4091,
        "lo": 0.3123,
        "hi": 0.5135,
        "n": 88
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "metric": "coherence",
        "level": "run",
        "p": 0.2135,
        "lo": 0.1411,
        "hi": 0.3095,
        "n": 89
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "metric": "bias",
        "level": "run",
        "p": 0.5333,
        "lo": 0.431,
        "hi": 0.6329,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "metric": "fact",
        "level": "run",
        "p": 0.4333,
        "lo": 0.3358,
        "hi": 0.5364,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "metric": "coherence",
        "level": "run",
        "p": 0.0889,
        "lo": 0.0457,
        "hi": 0.1657,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "metric": "bias",
        "level": "run",
        "p": 0.5333,
        "lo": 0.431,
        "hi": 0.6329,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "metric": "fact",
        "level": "run",
        "p": 0.5222,
        "lo": 0.4202,
        "hi": 0.6224,
        "n": 90
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "metric": "coherence",
        "level": "run",
        "p": 0.236,
        "lo": 0.1598,
        "hi": 0.3339,
        "n": 89
      }
    ],
    "cumulative": [
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 1,
        "p": 0.3222
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 2,
        "p": 0.4944
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 3,
        "p": 0.5618
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 4,
        "p": 0.6333
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 5,
        "p": 0.7111
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 6,
        "p": 0.7778
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 7,
        "p": 0.8427
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 8,
        "p": 0.8444
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 9,
        "p": 0.8523
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 10,
        "p": 0.8556
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 11,
        "p": 0.8989
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 12,
        "p": 0.9
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 13,
        "p": 0.8989
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 14,
        "p": 0.8989
      },
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "turn": 15,
        "p": 0.9205
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 1,
        "p": 0.3111
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 2,
        "p": 0.3667
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 3,
        "p": 0.4333
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 4,
        "p": 0.4889
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 5,
        "p": 0.5444
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 6,
        "p": 0.5778
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 7,
        "p": 0.6222
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 8,
        "p": 0.6778
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 9,
        "p": 0.7222
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 10,
        "p": 0.7222
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 11,
        "p": 0.7333
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 12,
        "p": 0.7444
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 13,
        "p": 0.7667
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 14,
        "p": 0.7778
      },
      {
        "scenario": "mirror-start",
        "label": "Baseline (single call)",
        "turn": 15,
        "p": 0.7889
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 1,
        "p": 0.0556
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 2,
        "p": 0.0674
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 3,
        "p": 0.1444
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 4,
        "p": 0.1889
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 5,
        "p": 0.2333
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 6,
        "p": 0.2444
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 7,
        "p": 0.2889
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 8,
        "p": 0.3111
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 9,
        "p": 0.3444
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 10,
        "p": 0.3667
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 11,
        "p": 0.3778
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 12,
        "p": 0.4
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 13,
        "p": 0.4444
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 14,
        "p": 0.4444
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "turn": 15,
        "p": 0.4667
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 1,
        "p": 0.3222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 2,
        "p": 0.3667
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 3,
        "p": 0.4556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 4,
        "p": 0.4778
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 5,
        "p": 0.5556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 6,
        "p": 0.6111
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 7,
        "p": 0.6556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 8,
        "p": 0.7222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 9,
        "p": 0.7444
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 10,
        "p": 0.7667
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 11,
        "p": 0.7778
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 12,
        "p": 0.8222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 13,
        "p": 0.8556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 14,
        "p": 0.8667
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "turn": 15,
        "p": 0.8778
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 1,
        "p": 0.3
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 2,
        "p": 0.3556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 3,
        "p": 0.3778
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 4,
        "p": 0.4333
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 5,
        "p": 0.5
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 6,
        "p": 0.5556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 7,
        "p": 0.6222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 8,
        "p": 0.6667
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 9,
        "p": 0.7
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 10,
        "p": 0.7222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 11,
        "p": 0.764
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 12,
        "p": 0.7978
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 13,
        "p": 0.8068
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 14,
        "p": 0.8523
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "turn": 15,
        "p": 0.8864
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 1,
        "p": 0.2556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 2,
        "p": 0.3333
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 3,
        "p": 0.4222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 4,
        "p": 0.5111
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 5,
        "p": 0.5778
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 6,
        "p": 0.6667
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 7,
        "p": 0.7
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 8,
        "p": 0.7333
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 9,
        "p": 0.7444
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 10,
        "p": 0.8
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 11,
        "p": 0.8222
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 12,
        "p": 0.8444
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 13,
        "p": 0.8556
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 14,
        "p": 0.8778
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "turn": 15,
        "p": 0.9111
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 1,
        "p": 0.1889
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 2,
        "p": 0.2247
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 3,
        "p": 0.3182
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 4,
        "p": 0.3778
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 5,
        "p": 0.4607
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 6,
        "p": 0.4719
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 7,
        "p": 0.5618
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 8,
        "p": 0.5795
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 9,
        "p": 0.5889
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 10,
        "p": 0.6222
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 11,
        "p": 0.6404
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 12,
        "p": 0.6629
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 13,
        "p": 0.6889
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 14,
        "p": 0.7045
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "turn": 15,
        "p": 0.7333
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 1,
        "p": 0.0333
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 2,
        "p": 0.1222
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 3,
        "p": 0.1333
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 4,
        "p": 0.2111
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 5,
        "p": 0.2778
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 6,
        "p": 0.3222
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 7,
        "p": 0.3333
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 8,
        "p": 0.3333
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 9,
        "p": 0.3444
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 10,
        "p": 0.3667
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 11,
        "p": 0.3778
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 12,
        "p": 0.4111
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 13,
        "p": 0.4444
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 14,
        "p": 0.4556
      },
      {
        "scenario": "random-mid",
        "label": "Baseline (single call)",
        "turn": 15,
        "p": 0.4778
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 1,
        "p": 0
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 2,
        "p": 0.0111
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 3,
        "p": 0.0222
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 4,
        "p": 0.0778
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 5,
        "p": 0.0778
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 6,
        "p": 0.0889
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 7,
        "p": 0.1222
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 8,
        "p": 0.1444
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 9,
        "p": 0.1556
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 10,
        "p": 0.2
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 11,
        "p": 0.2333
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 12,
        "p": 0.2444
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 13,
        "p": 0.2667
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 14,
        "p": 0.2667
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "turn": 15,
        "p": 0.2809
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 1,
        "p": 0.0899
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 2,
        "p": 0.1136
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 3,
        "p": 0.2045
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 4,
        "p": 0.2386
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 5,
        "p": 0.2955
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 6,
        "p": 0.3068
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 7,
        "p": 0.3977
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 8,
        "p": 0.4138
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 9,
        "p": 0.4368
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 10,
        "p": 0.4419
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 11,
        "p": 0.4535
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 12,
        "p": 0.4767
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 13,
        "p": 0.4767
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 14,
        "p": 0.5
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "turn": 15,
        "p": 0.5233
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 1,
        "p": 0.0444
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 2,
        "p": 0.1
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 3,
        "p": 0.1444
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 4,
        "p": 0.1778
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 5,
        "p": 0.2444
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 6,
        "p": 0.2667
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 7,
        "p": 0.2889
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 8,
        "p": 0.3111
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 9,
        "p": 0.3333
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 10,
        "p": 0.3556
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 11,
        "p": 0.3778
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 12,
        "p": 0.4556
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 13,
        "p": 0.4889
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 14,
        "p": 0.5
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "turn": 15,
        "p": 0.5333
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 1,
        "p": 0.0333
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 2,
        "p": 0.1
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 3,
        "p": 0.1333
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 4,
        "p": 0.2
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 5,
        "p": 0.2273
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 6,
        "p": 0.3068
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 7,
        "p": 0.3933
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 8,
        "p": 0.4157
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 9,
        "p": 0.4382
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 10,
        "p": 0.4382
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 11,
        "p": 0.4719
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 12,
        "p": 0.4831
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 13,
        "p": 0.4944
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 14,
        "p": 0.5056
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "turn": 15,
        "p": 0.5393
      }
    ],
    "pareto": [
      {
        "scenario": "mirror-start",
        "label": "+ corrector",
        "group": "Phase B",
        "bias_perf": 81.7164,
        "cost_per_k": 0.7371,
        "p95_latency_s": 5.4121
      },
      {
        "scenario": "mirror-start",
        "label": "Higher-capability model",
        "group": "Phase B",
        "bias_perf": 95.997,
        "cost_per_k": 2.6175,
        "p95_latency_s": 2.4306
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: high",
        "group": "Phase B",
        "bias_perf": 85.2593,
        "cost_per_k": 1.0214,
        "p95_latency_s": 10.6722
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: low",
        "group": "Phase B",
        "bias_perf": 87.3323,
        "cost_per_k": 0.7971,
        "p95_latency_s": 4.6883
      },
      {
        "scenario": "mirror-start",
        "label": "Reasoning: medium",
        "group": "Phase B",
        "bias_perf": 85.5556,
        "cost_per_k": 0.9196,
        "p95_latency_s": 8.8725
      },
      {
        "scenario": "random-mid",
        "label": "+ corrector",
        "group": "Phase B",
        "bias_perf": 89.3871,
        "cost_per_k": 0.7276,
        "p95_latency_s": 5.4143
      },
      {
        "scenario": "random-mid",
        "label": "Higher-capability model",
        "group": "Phase B",
        "bias_perf": 97.5519,
        "cost_per_k": 2.597,
        "p95_latency_s": 2.3806
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: high",
        "group": "Phase B",
        "bias_perf": 93.8026,
        "cost_per_k": 0.9946,
        "p95_latency_s": 11.0497
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: low",
        "group": "Phase B",
        "bias_perf": 94.8889,
        "cost_per_k": 0.7795,
        "p95_latency_s": 3.2209
      },
      {
        "scenario": "random-mid",
        "label": "Reasoning: medium",
        "group": "Phase B",
        "bias_perf": 94.166,
        "cost_per_k": 0.8836,
        "p95_latency_s": 7.3856
      }
    ],
    "n_turns": 13411
  },
  "paretoAll": [
    {
      "scenario": "random-mid",
      "label": "P-all",
      "group": "Phase A",
      "bias_perf": 95.4921,
      "cost_per_k": 0.7224,
      "p95_latency_s": 1.8446
    },
    {
      "scenario": "random-mid",
      "label": "P2",
      "group": "Phase A",
      "bias_perf": 91.2381,
      "cost_per_k": 1.1486,
      "p95_latency_s": 3.529
    },
    {
      "scenario": "random-mid",
      "label": "P2-probe",
      "group": "Phase A",
      "bias_perf": 81.3968,
      "cost_per_k": 1.0932,
      "p95_latency_s": 3.4933
    },
    {
      "scenario": "random-mid",
      "label": "P-perclass",
      "group": "Phase A",
      "bias_perf": 90.8571,
      "cost_per_k": 1.1403,
      "p95_latency_s": 5.5123
    },
    {
      "scenario": "random-mid",
      "label": "P-probe-perclass",
      "group": "Phase A",
      "bias_perf": 83.8095,
      "cost_per_k": 1.0908,
      "p95_latency_s": 5.4303
    },
    {
      "scenario": "mirror-start",
      "label": "P-all",
      "group": "Phase A",
      "bias_perf": 87.5556,
      "cost_per_k": 0.7324,
      "p95_latency_s": 2.1575
    },
    {
      "scenario": "mirror-start",
      "label": "P2",
      "group": "Phase A",
      "bias_perf": 80.127,
      "cost_per_k": 1.1728,
      "p95_latency_s": 3.8952
    },
    {
      "scenario": "mirror-start",
      "label": "P2-probe",
      "group": "Phase A",
      "bias_perf": 76.8889,
      "cost_per_k": 1.1321,
      "p95_latency_s": 3.725
    },
    {
      "scenario": "mirror-start",
      "label": "P-perclass",
      "group": "Phase A",
      "bias_perf": null,
      "cost_per_k": 1.1637,
      "p95_latency_s": 7.0002
    },
    {
      "scenario": "mirror-start",
      "label": "P-probe-perclass",
      "group": "Phase A",
      "bias_perf": null,
      "cost_per_k": 1.1186,
      "p95_latency_s": 6.8967
    },
    {
      "scenario": "mirror-start",
      "label": "+ corrector",
      "group": "Phase B",
      "bias_perf": 81.7164,
      "cost_per_k": 0.7371,
      "p95_latency_s": 5.4121
    },
    {
      "scenario": "mirror-start",
      "label": "Higher-capability model",
      "group": "Phase B",
      "bias_perf": 95.997,
      "cost_per_k": 2.6175,
      "p95_latency_s": 2.4306
    },
    {
      "scenario": "mirror-start",
      "label": "Reasoning: high",
      "group": "Phase B",
      "bias_perf": 85.2593,
      "cost_per_k": 1.0214,
      "p95_latency_s": 10.6722
    },
    {
      "scenario": "mirror-start",
      "label": "Reasoning: low",
      "group": "Phase B",
      "bias_perf": 87.3323,
      "cost_per_k": 0.7971,
      "p95_latency_s": 4.6883
    },
    {
      "scenario": "mirror-start",
      "label": "Reasoning: medium",
      "group": "Phase B",
      "bias_perf": 85.5556,
      "cost_per_k": 0.9196,
      "p95_latency_s": 8.8725
    },
    {
      "scenario": "random-mid",
      "label": "+ corrector",
      "group": "Phase B",
      "bias_perf": 89.3871,
      "cost_per_k": 0.7276,
      "p95_latency_s": 5.4143
    },
    {
      "scenario": "random-mid",
      "label": "Higher-capability model",
      "group": "Phase B",
      "bias_perf": 97.5519,
      "cost_per_k": 2.597,
      "p95_latency_s": 2.3806
    },
    {
      "scenario": "random-mid",
      "label": "Reasoning: high",
      "group": "Phase B",
      "bias_perf": 93.8026,
      "cost_per_k": 0.9946,
      "p95_latency_s": 11.0497
    },
    {
      "scenario": "random-mid",
      "label": "Reasoning: low",
      "group": "Phase B",
      "bias_perf": 94.8889,
      "cost_per_k": 0.7795,
      "p95_latency_s": 3.2209
    },
    {
      "scenario": "random-mid",
      "label": "Reasoning: medium",
      "group": "Phase B",
      "bias_perf": 94.166,
      "cost_per_k": 0.8836,
      "p95_latency_s": 7.3856
    }
  ]
};
