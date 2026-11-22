# Artifact contract

The project-local `.verdicspec/` directory is the durable state of the method. Tool adapters and chat history are transport layers; they are not the source of truth.

## Required artifacts by depth

| Depth | Required artifacts |
|---|---|
| L0 | Verification note in the final response |
| L1 | Specification, implementation plan, test plan, verification report |
| L2 | System context, change proposal, decision records, test plan, observability plan, verification report |
| L3 | Product brief, system context, technology inventory, requirements, architecture decisions, delivery increments, threat model, verification and release reports |

## Naming

- Specifications: `.verdicspec/specifications/<change-id>.md`
- Decisions: `.verdicspec/decisions/ADR-<number>-<slug>.md`
- Plans: `.verdicspec/plans/<change-id>.md`
- Reports: `.verdicspec/reports/<change-id>-<report-type>.md`

Use stable IDs such as `REQ-001`, `AC-001`, `TASK-001`, `TEST-001`, and `THR-001` to preserve traceability.

