---
name: brownfield-change
description: Safely change an existing product by mapping current behavior, preserving invariants, and delivering a reversible increment.
---

# Brownfield Change

Compose `project-discovery`, `technology-discovery`, `brownfield-analysis`, `specification`, `architecture`, `planning`, `testing`, `observability`, `data-migration` when relevant, `code-review`, `verification`, and `release-readiness`.

## Sequence

1. Map the current system and confirm the project baseline.
2. Identify behavior, contracts, data, and operational invariants.
3. Define the delta and compatibility requirements.
4. Choose the smallest change seam and migration strategy.
5. Implement in reversible increments.
6. Verify new behavior and preserved behavior.
7. Prepare rollout, rollback, and operational evidence.

## Outputs and gates

- Baseline: `.verdicspec/system-context.md` and `.verdicspec/technology-inventory.md`.
- Change: `.verdicspec/specifications/<change-id>.md` and `.verdicspec/plans/<change-id>.md`.
- Compatibility: invariants and migration strategy reviewed.
- Delivery: verification and release-readiness reports complete.

