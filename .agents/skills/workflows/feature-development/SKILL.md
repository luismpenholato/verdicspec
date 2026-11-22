---
name: feature-development
description: Deliver a production software feature through specification, implementation, verification, and review.
---

# Feature Development

First classify the work as greenfield, brownfield, or hybrid. For an existing product, use `brownfield-change`; for a new product, use `greenfield-product`. For a focused feature, use the sequence below.

1. `project-discovery` and `technology-discovery`
2. `specification` and `requirements`
3. `architecture` when boundaries or design decisions are affected
4. `planning`
5. `testing`
6. implementation using the selected technology pack
7. `observability` when operational behavior is affected
8. `verification`
9. `code-review`, `release-readiness`, and `pull-request` as applicable

## Gate conditions

- Do not implement while material requirements remain ambiguous.
- Do not choose a technology pack before `technology-discovery` has recorded evidence.
- Do not start implementation until the specification and plan are approved for the selected rigor level.
- Do not mark work complete without running relevant validation.
- Do not hide unrelated failures introduced or discovered during validation.
- Keep the final report tied to evidence from the repository and executed checks.

## Required outputs

- specification;
- implementation plan;
- test plan;
- verification report;
- release-readiness report when the change is deliverable.
