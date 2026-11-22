# Verdicspec commands

These are tool-independent commands. A tool adapter may expose them as slash commands, chat prompts, or task templates, but the semantics remain the same.

| Command | Purpose | Primary mode |
|---|---|---|
| `verdicspec discover` | Understand the problem, users, constraints, and existing context | Greenfield / Brownfield |
| `verdicspec map` | Map an existing codebase, system, contracts, and risks | Brownfield |
| `verdicspec inspect` | Detect technology evidence and write `.verdicspec/technology-inventory.md` | Any |
| `verdicspec specify` | Create or refine a testable change specification | Any |
| `verdicspec design` | Produce architecture, decisions, and trade-offs | L2 / L3 |
| `verdicspec plan` | Decompose approved work into ordered, verifiable tasks | Any non-trivial change |
| `verdicspec build` | Implement the approved plan using the selected technology pack | Any |
| `verdicspec test` | Derive and execute the relevant test strategy | Any |
| `verdicspec debug` | Investigate a failure using hypotheses and evidence | Bug fix / incident |
| `verdicspec spike` | Answer a bounded technical question through an experiment | Any |
| `verdicspec verify` | Map acceptance criteria to executed evidence | Any |
| `verdicspec review` | Perform an independent change review | Any reviewable change |
| `verdicspec pr` | Prepare a focused pull request | Delivery |
| `verdicspec status` | Report artifacts, gate, risks, and remaining work | Any |

## Command contract

Every command must state:

- inputs it read;
- artifacts it created or changed;
- decisions it made;
- validations it executed;
- blockers and assumptions;
- the next gate.

