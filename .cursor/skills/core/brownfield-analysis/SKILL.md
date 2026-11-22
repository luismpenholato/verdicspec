---
name: brownfield-analysis
description: Analyze an existing codebase and running system to identify behavior, boundaries, invariants, risks, and safe change seams.
---

# Brownfield Analysis

Inspect before editing:

- repository and module structure;
- build, test, lint, and deployment paths;
- entry points and public interfaces;
- persistence, migrations, queues, and external integrations;
- configuration and environment boundaries;
- tests, telemetry, recent changes, and known failures.

Use evidence to distinguish intended behavior, tested behavior, observed behavior, and accidental behavior. Record contradictions instead of resolving them silently.

Produce `templates/brownfield-map.md` and identify the smallest safe change seam.

