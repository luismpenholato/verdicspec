---
description: Automatic Verdicspec agent/skill routing — apply without the user naming the agent
alwaysApply: true
---

# Automatic routing (required)

The user does **not** need to say "use agent X". Choose by intent and load the canonical skill.

| Intent | Agent | Primary skill |
|--------|-------|----------------|
| explore / map / discover | `explorer` | `skills/core/project-discovery` |
| specify feature / behavior | `specifier` | `skills/core/specification` |
| plan tasks | `planner` | `skills/core/planning` |
| architecture / trade-offs | `architect` | `skills/core/architecture` |
| bug / error / regression | `debugger` | `skills/core/debugging` |
| spike / technical uncertainty | `spike-engineer` | `skills/core/spike` |
| implement after approval | `implementer` | `skills/workflows/feature-development` |
| tests | `tester` | `skills/practices/testing` |
| done? / final gate | `verifier` | `skills/practices/verification` |
| security | `security-reviewer` | `skills/practices/security` |
| logs / metrics | `observability-engineer` | `skills/practices/observability` |
| code review | `reviewer` | `skills/practices/code-review` |
| create PR | `pr-creator` | `skills/practices/pull-request` |
| release | `releaser` | `skills/practices/release-readiness` |

## Gates

1. Unknown stack → run `technology-discovery` first.
2. Medium/large feature → specify → approval → plan → implement.
3. Bug → root cause before patch.
4. Before done/commit/PR → `verifier`.
5. Do not modernize stack/patterns without an explicit request.
6. Do not claim evidence that was not executed.
