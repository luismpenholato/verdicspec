---
name: project-discovery
description: Build a reliable project baseline before changing a new or existing software product.
---

# Project Discovery

## Greenfield

Inspect the repository and product brief when present, then identify the smallest useful slice, assumptions, constraints, risks, and required technology decisions. If no repository exists, record that fact instead of inventing a baseline.

## Brownfield

Inspect the repository, history when useful, build system, tests, runtime configuration, public contracts, data flows, and operational evidence before proposing a change.

## Required baseline

- project mode: greenfield, brownfield, or hybrid;
- product or system purpose;
- repository map;
- technology inventory from `technology-discovery`;
- entry points and important boundaries;
- commands for build, test, lint, and run;
- invariants and compatibility constraints;
- unknowns, risks, and recommended next step.

## Output

Create or update `.verdicspec/system-context.md` and coordinate with `technology-discovery`, which creates `.verdicspec/technology-inventory.md`.

Do not produce a confident implementation plan when this baseline is missing material information.

