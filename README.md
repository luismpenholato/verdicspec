# Verdicspec

[![CI](https://github.com/luismpenholato/verdicspec/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/luismpenholato/verdicspec/actions/workflows/ci.yml)
[![GitHub release](https://img.shields.io/github/v/release/luismpenholato/verdicspec?display_name=tag&sort=semver)](https://github.com/luismpenholato/verdicspec/releases)
[![npm version](https://img.shields.io/npm/v/verdicspec.svg)](https://www.npmjs.com/package/verdicspec)
[![License](https://img.shields.io/npm/l/verdicspec.svg)](https://opensource.org/license/mit/)

## Modular engineering for AI-assisted software development

Install the latest published package from [npm](https://www.npmjs.com/package/verdicspec):

```powershell
npm install --global verdicspec
```

Then install the method into a project:

```powershell
verdicspec init . --tool all
```

Verdicspec is a technology-agnostic engineering method for building reliable software with AI agents.

It combines specification-driven development with disciplined implementation, testing, observability, debugging, review, and verifiable delivery evidence.

## Principles

- Understand the problem before changing the code.
- Treat specifications and acceptance criteria as shared contracts.
- Prefer the smallest safe change that satisfies the contract.
- Make tests, observability, and review part of implementation—not afterthoughts.
- Report evidence separately from assumptions.
- Keep the core generic and move technology-specific knowledge into focused skills.

## Repository structure

```text
agents/                    # Named agents (mirrored for Cursor/Claude/Codex/Antigravity)
skills/
├── core/                  # Technology-agnostic engineering capabilities
├── practices/             # Reusable engineering practices
├── technology-packs/      # Node.js, .NET, Python, and other stacks
└── workflows/             # Composable end-to-end work modes
commands/                  # Tool-independent command entry points
templates/                 # Specifications, plans, tests, reviews, and reports
docs/                      # Method documentation and design decisions
.verdicspec/               # Method artifacts root
```

## Initial skills

- `core/specification`: define intent, behavior, constraints, and acceptance criteria.
- `core/debugging`: reproduce failures, test hypotheses, identify root cause, and prevent regression.
- `core/spike`: answer technical questions through bounded experiments and recorded evidence.
- `core/architecture`: make proportionate architecture decisions.
- `core/project-discovery`: establish a baseline for greenfield, brownfield, and hybrid projects.
- `core/technology-discovery`: detect the real stack and select applicable technology packs.
- `core/product-discovery`: frame new product problems and the smallest useful slice.
- `core/requirements`: structure functional and non-functional requirements.
- `core/planning`: create ordered, verifiable implementation tasks.
- `practices/testing`: design tests from behavior and preserve regression coverage.
- `practices/observability`: define useful logs, metrics, traces, and operational signals.
- `practices/code-review`: review correctness, risk, security, and maintainability.
- `practices/pull-request`: prepare focused, evidence-based pull requests.
- `practices/verification`: map acceptance criteria to executed evidence.
- `practices/security`: analyze security, privacy, abuse, and supply-chain risks.
- `practices/data-migration`: plan safe schema and data changes.
- `practices/release-readiness`: decide whether a change can be delivered safely.
- `workflows/feature-development`: compose the core loop for a production change.
- `workflows/bug-fix`: diagnose and fix defects with regression protection.
- `workflows/greenfield-product`: create a new product through a validated vertical slice.
- `workflows/brownfield-change`: safely change an existing product.

## Portability

The method uses a canonical `AGENTS.md`, portable `SKILL.md` files, tool-independent commands, and thin adapters for Cursor, Claude Code, Codex, Antigravity, GitHub Copilot, Gemini CLI, and Cline. Run `scripts/install.ps1` from PowerShell to install the method into another project without overwriting existing files unless `-Force` is supplied.

The canonical structure is independent of a model provider, editor, CLI, or programming language. Technology packs provide focused guidance for Node.js, .NET, Python, and Java.

Validate the repository and installer with:

```powershell
.\scripts\validate.ps1 -TestInstaller
```

See [tool support](docs/tool-support.md) for the distinction between GPT as a model and Codex as the coding-agent environment.

## npm CLI

When published, the recommended installation will be:

```powershell
npm install -g verdicspec
verdicspec init . --tool all
```

Available commands:

```text
verdicspec init [directory]   Install the method in a project
verdicspec validate           Validate the packaged skills and required files
verdicspec list               List commands and skills
verdicspec doctor [directory] Check whether a project is installed correctly
verdicspec inspect [directory] Detect technology evidence and write the inventory
```

The npm CI/CD setup is documented in [docs/npm-release.md](docs/npm-release.md). Pull requests run validation automatically, and package changes merged into `main` create a patch release, npm publication, version tag, and GitHub Release.

## Status

Early development. The method and skill contracts are expected to evolve before the first stable release.

