# Verdicspec

[![CI](https://github.com/luismpenholato/verdicspec/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/luismpenholato/verdicspec/actions/workflows/ci.yml)
[![GitHub release](https://img.shields.io/github/v/release/luismpenholato/verdicspec?display_name=tag&sort=semver)](https://github.com/luismpenholato/verdicspec/releases)
[![npm version](https://img.shields.io/npm/v/verdicspec.svg)](https://www.npmjs.com/package/verdicspec)
[![License: MIT](https://img.shields.io/github/license/luismpenholato/verdicspec)](./LICENSE)

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

The method uses a canonical `AGENTS.md`, portable `SKILL.md` files, tool-independent commands, and thin adapters for Cursor, Claude Code, Codex, and Antigravity.

Install into a project with the CLI (does not overwrite existing files unless `--force` is supplied):

```powershell
npm install -g verdicspec
verdicspec init . --tool all
```

The canonical structure is independent of a model provider, editor, CLI, or programming language. Technology packs provide focused guidance for Node.js, .NET, Python, and Java.

Validate and test with Node (cross-platform; this is what CI runs):

```powershell
npm run validate
npm test
```

See [tool support](docs/tool-support.md) for the distinction between GPT as a model and Codex as the coding-agent environment.

## CLI commands

These are executable after `npm install -g verdicspec`:

```text
verdicspec init [directory] [--tool all|cursor|claude|codex|antigravity] [--force]
verdicspec validate
verdicspec list
verdicspec doctor [directory]
verdicspec inspect [directory]
verdicspec help
```

Examples:

```powershell
verdicspec init . --tool all
verdicspec inspect .
verdicspec doctor .
verdicspec list
```

`inspect` writes `.verdicspec/technology-inventory.md` from repository evidence.

## Method commands (for AI agents)

Files under `commands/` are **not** npm CLI subcommands. They are tool-independent prompts that tell the coding agent which skills to load and what outcome to produce.

After `verdicspec init`, ask your agent (Cursor, Claude Code, Codex, Antigravity) to run one of them by name, for example:

```text
verdicspec discover
verdicspec map
verdicspec specify
verdicspec plan
verdicspec spike
verdicspec debug
verdicspec verify
verdicspec review
verdicspec pr
```

| Command | What the agent should do |
|---|---|
| `discover` | Classify greenfield/brownfield/hybrid and create baseline artifacts |
| `map` | Map an existing system, contracts, and risks |
| `specify` | Create or refine a testable specification |
| `plan` | Break an approved spec into ordered, verifiable tasks |
| `spike` | Run a bounded technical experiment and record evidence |
| `debug` | Reproduce, hypothesize, find root cause, fix, protect against regression |
| `verify` | Map acceptance criteria to executed evidence |
| `review` | Independent review of the change |
| `pr` | Prepare a focused pull request with evidence |

Typical flow:

```text
discover / map → specify → (approval) → plan → implement → verify → review → pr
```

Each command must report: inputs read, artifacts written, decisions, validations executed, blockers/assumptions, and the next gate. Details: [docs/commands.md](docs/commands.md).

The npm CI/CD setup is documented in [docs/npm-release.md](docs/npm-release.md). Pull requests run validation automatically, and package changes merged into `main` create a patch release, npm publication, version tag, and GitHub Release.

## Status

Early development. The method and skill contracts are expected to evolve before the first stable release.

