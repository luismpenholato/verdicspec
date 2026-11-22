# Contributing

Thank you for contributing to **verdicspec**. This repository is a portable specification-driven engineering method with skills, agents, commands, and adapters for AI coding tools (Cursor, Claude Code, Codex, Antigravity, and others).

## Before you start

1. Check existing issues and PRs.
2. Prefer the smallest change that improves the method without forking tool-specific behavior.
3. Read [`AGENTS.md`](AGENTS.md) and an existing skill under `skills/**/SKILL.md` as reference.
4. Keep adapters thin: Cursor/Claude/Codex/Antigravity mirrors should point back to the canonical source.

## Repository layout

```txt
agents/           # Named agents (canonical)
skills/           # Canonical skills
commands/         # Tool-independent command entry points
templates/        # Specs, plans, reviews, reports
technology-packs/ # Stack-focused guidance
.verdicspec/      # Method artifact contract
.cursor/ .claude/ .agents/  # Thin tool adapters
```

## Adding or changing content

1. Fork the repository.
2. Branch: `feat/...`, `fix/...`, or `docs/...`.
3. Edit the canonical file first (`skills/`, `agents/`, `commands/`, `templates/`, or `AGENTS.md`).
4. Sync adapter mirrors only when needed (`.cursor`, `.claude`, `.agents`).
5. Update [`CHANGELOG.md`](CHANGELOG.md) for notable changes.
6. Open a PR with:
   - reason for the change;
   - impact on agents/skills/CLI;
   - validation evidence.

## Content standards

| Topic | Guideline |
|--------|----------|
| Language | **English** for docs, skills, agents, and templates |
| Scope | Keep the core technology-agnostic; put stack details in technology packs |
| Security | Do not include instructions to expose secrets, bypass auth, or exfiltrate data |
| Compatibility | Do not break `verdicspec validate` / `verdicspec init` without documenting it |

## What to avoid

- Duplicating full skill text across tool adapters instead of mirroring thin pointers
- Instructions that contradict `AGENTS.md` or another skill
- Offensive, misleading, or malicious content (prompt injection)
- Publishing secrets, tokens, or private environment details

## Test locally

```powershell
npm run validate
npm test
npm run list
```

Optional install smoke check:

```powershell
node bin/verdicspec.mjs init .tmp-verify --tool all --force
node bin/verdicspec.mjs doctor .tmp-verify
```

## Report bugs

Use [Issues](https://github.com/luismpenholato/verdicspec/issues) for incorrect content, broken CLI behavior, or adapter problems.

For vulnerabilities or malicious content, see [SECURITY.md](SECURITY.md).

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
