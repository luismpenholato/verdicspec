# Portable adapters

Verdicspec has one canonical source and thin tool adapters.

## Canonical source

- Instructions: `AGENTS.md`
- Agents: `agents/*.md`
- Skills: `skills/**/SKILL.md`
- Technology packs: `technology-packs/`
- Templates: `templates/`
- Commands: `commands/`
- Artifacts root: `.verdicspec/`

## Supported entry points

| Tool | Rules / instructions | Agents | Skills |
|---|---|---|---|
| Cursor | `.cursor/rules/*.mdc` | `.cursor/agents/` | `.cursor/skills/` or `skills/` |
| Claude Code | `CLAUDE.md` + `.claude/rules/` | `.claude/agents/` | `.claude/skills/` |
| OpenAI Codex | `AGENTS.md` | `.agents/agents/` | `.agents/skills/` or `skills/` |
| Antigravity | `.agents/rules/` + `AGENTS.md` | `.agents/agents/` | `.agents/skills/` |

Install with:

```powershell
npm i -g verdicspec
verdicspec init . --tool all
```

Adapters stay short. They discover agents/skills and delegate to the canonical method so behavior does not fork between tools.
