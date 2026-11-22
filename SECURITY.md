# Security policy

## Scope

This repository distributes a **method package** (skills, agents, commands, templates, and a CLI installer) for AI coding tools. It does not run multi-tenant services or process end-user product data by itself.

Relevant risks:

| Type | Description |
|------|-------------|
| Malicious content | Skill/agent instructions that induce secret leakage or destructive actions |
| Incorrect guidance | Guidance that leads to insecure code in the consumer project |
| Supply chain | Published npm package / GitHub release contents |
| Dependencies | External tools (agents, npm, CI) — see provider policies |

## Supported versions

Security fixes apply to the `main` branch and the latest published npm version of `verdicspec`.

## Report a vulnerability

**Do not** open a public issue for:

- skills/agents with malicious instructions or deliberate prompt injection;
- examples that encourage committing secrets or bypassing authentication;
- supply-chain compromise of the published package;
- any content that could compromise repositories or environments of consumers.

### How to report

1. **[GitHub Security Advisories](https://github.com/luismpenholato/verdicspec/security/advisories/new)** (recommended)
2. Private contact with the maintainer, if an agreed channel exists

### Include in the report

- Path (`skills/...`, `agents/...`, `bin/...`, or package version)
- Problematic excerpt and expected impact
- Suggested fix (optional)

## Safe use

- Review skills and agents before installing in corporate environments.
- Do not paste secrets, `.env`, or tokens in prompts.
- Prefer installing from the official npm package or this GitHub repository.
- Combine agent output with human review on pull requests.

We appreciate responsible reports.
