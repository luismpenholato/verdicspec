---
name: debugging
description: Investigate failures using reproduction, hypotheses, evidence, and regression protection.
---

# Debugging

Do not modify production code until the failure is understood well enough to state a reproducible symptom.

## Workflow

1. Restate the observed problem and expected behavior.
2. Reproduce it with the smallest reliable case.
3. List three to seven plausible hypotheses.
4. Prioritize the one or two most likely hypotheses using available evidence.
5. Collect targeted evidence from code, tests, logs, network, or runtime state.
6. Identify the root cause and explain the causal chain.
7. Apply the smallest safe fix.
8. Add or update a regression test.
9. Re-run the related validation and remove temporary diagnostics.

## Report

End with:

- symptom;
- root cause;
- fix;
- regression protection;
- validations executed;
- remaining uncertainty.

