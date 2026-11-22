# Verdicspec

Portable specification-driven engineering method for AI coding agents.

Repository: https://github.com/luismpenholato/verdicspec  
Package: `npm i -g verdicspec`

## Auto-routing (user does not need to name an agent)

Choose agent/skill by intent. Do not ask “should I use agent X?” — just use it.

| Intent | Agent | Primary skill |
|--------|-------|---------------|
| Explore / map / discover | `explorer` | `skills/core/project-discovery` |
| Specify feature/behavior | `specifier` | `skills/core/specification` |
| Plan tasks | `planner` | `skills/core/planning` |
| Architecture | `architect` | `skills/core/architecture` |
| Bug / failure | `debugger` | `skills/core/debugging` |
| Technical spike | `spike-engineer` | `skills/core/spike` |
| Implement after approval | `implementer` | `skills/workflows/feature-development` |
| Tests | `tester` | `skills/practices/testing` |
| Done? / final gate | `verifier` | `skills/practices/verification` |
| Security | `security-reviewer` | `skills/practices/security` |
| Observability | `observability-engineer` | `skills/practices/observability` |
| Code review | `reviewer` | `skills/practices/code-review` |
| Create PR | `pr-creator` | `skills/practices/pull-request` |
| Release readiness | `releaser` | `skills/practices/release-readiness` |

## Where each tool reads config

| Tool | Rules | Agents | Skills |
|------|-------|--------|--------|
| Cursor | `.cursor/rules/` | `.cursor/agents/` | `.cursor/skills/` or `skills/` |
| Claude Code | `CLAUDE.md` + `.claude/rules/` | `.claude/agents/` | `.claude/skills/` |
| Codex | this `AGENTS.md` | `.agents/agents/` | `.agents/skills/` or `skills/` |
| Antigravity | `.agents/rules/` + this file | `.agents/agents/` | `.agents/skills/` |

Canonical skills: `skills/**/SKILL.md`. Canonical agents: `agents/*.md` (mirrored into tool folders).

## Repository contract

- Read the relevant skill before executing a workflow.
- Start with `technology-discovery` when stack/runtime/commands are unknown.
- Classify work as greenfield, brownfield, or hybrid before choosing a workflow.
- Select rigor L0–L3 from `docs/workflow.md`.
- Keep the core technology-agnostic; stack specifics live in `technology-packs/`.
- Use `.verdicspec/` as the durable artifact root (`docs/artifact-contract.md`).
- Every implementation needs an explicit verification outcome.
- Never claim a command/test/review/deploy was performed unless it was.
- Do not modernize stack/patterns without an explicit user request.
- Do not create commits unless explicitly requested.

## Skill discovery

- `skills/core/` — reasoning and lifecycle
- `skills/practices/` — testing, observability, review, delivery
- `skills/workflows/` — end-to-end modes
- `technology-packs/` — Node.js, .NET, Python, Java
- `commands/` — tool-independent command entry points
- `.verdicspec/` — host-project config and artifacts
