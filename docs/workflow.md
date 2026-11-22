# Verdicspec workflow

Verdicspec is an adaptive SDD method. It does not force the same ceremony on a landing page, a payment flow, and a distributed migration.

## Lifecycle

```text
Discover → Frame → Specify → Design → Plan → Build → Verify → Review → Deliver → Learn
```

Each phase has an output and a gate. The agent may move forward only when the gate is satisfied or the remaining uncertainty is explicitly accepted.

Choose the lowest level that honestly covers the risk. Increase the level when ambiguity, blast radius, security impact, data migration, or operational consequence increases. Never reduce the level only to avoid creating required evidence.

## Depth levels

### L0 — Trivial

Use for isolated, low-risk changes with obvious behavior. Read the relevant code, make the change, run a focused check, and report evidence.

### L1 — Focused change

Use for a normal feature or bug fix. Create a short change specification, acceptance criteria, implementation plan, tests, and verification report.

### L2 — Complex change

Use for cross-module behavior, public APIs, persistence, integrations, security, or operational impact. Add system context, architecture decisions, risk analysis, observability, migration/rollback planning, and independent review.

### L3 — Product or system initiative

Use for a new product, major subsystem, platform, or high-risk change. Add product framing, domain model, user journeys, non-functional requirements, threat model, delivery increments, and explicit human approval gates.

## Gates

| Gate | Question | Minimum evidence |
|---|---|---|
| Frame | Are we solving the right problem? | Problem, users, outcome, non-goals |
| Specify | Is the desired behavior unambiguous? | Requirements and acceptance criteria |
| Design | Is the solution compatible with the system? | Architecture and decisions |
| Plan | Can the work be implemented and verified incrementally? | Ordered tasks and test plan |
| Build | Was only the approved scope changed? | Diff and implementation notes |
| Verify | Does evidence support each acceptance criterion? | Executed checks and verification matrix |
| Review | Can another engineer challenge the result? | Independent review and findings |
| Deliver | Can this be released and operated safely? | Rollout, rollback, and observability plan |

