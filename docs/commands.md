# Verdicspec commands

There are two kinds of commands:

1. **CLI commands** — executable via the `verdicspec` binary (`init`, `validate`, `list`, `doctor`, `inspect`, `help`).
2. **Method commands** — Markdown prompts in `commands/`. A tool adapter may expose them as slash commands, chat prompts, or task templates, but the semantics stay the same.

## Method commands

| Command | Purpose | Primary mode |
|---|---|---|
| `verdicspec discover` | Understand the problem, users, constraints, and existing context | Greenfield / Brownfield |
| `verdicspec map` | Map an existing codebase, system, contracts, and risks | Brownfield |
| `verdicspec specify` | Create or refine a testable change specification | Any |
| `verdicspec plan` | Decompose approved work into ordered, verifiable tasks | Any non-trivial change |
| `verdicspec spike` | Answer a bounded technical question through an experiment | Any |
| `verdicspec debug` | Investigate a failure using hypotheses and evidence | Bug fix / incident |
| `verdicspec verify` | Map acceptance criteria to executed evidence | Any |
| `verdicspec review` | Perform an independent change review | Any reviewable change |
| `verdicspec pr` | Prepare a focused pull request | Delivery |

Related CLI helper:

| Command | Purpose |
|---|---|
| `verdicspec inspect` | Detect technology evidence and write `.verdicspec/technology-inventory.md` |

## How to invoke a method command

In the host project (after `verdicspec init`), ask the coding agent:

```text
Run verdicspec specify for adding rate limiting to the public API.
```

or:

```text
verdicspec debug — the CI build fails on Windows PowerShell encoding.
```

The agent should open `commands/<name>.md`, load the referenced skills, and produce the expected artifacts under `.verdicspec/`.

## Command contract

Every method command must state:

- inputs it read;
- artifacts it created or changed;
- decisions it made;
- validations it executed;
- blockers and assumptions;
- the next gate.
