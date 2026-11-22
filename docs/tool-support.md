# Tool and model support

## GPT and Codex

GPT is the model. Codex is the coding-agent environment that reads the repository, edits files, runs commands, and applies project instructions.

Verdicspec supports Codex through the root `AGENTS.md`. It can be used with GPT models selected by Codex because the method is expressed as Markdown skills and repository artifacts, not as model-specific API calls.

ChatGPT or the GPT API by itself does not automatically inspect a local repository or execute the method. It needs a host application, agent harness, or integration that provides the repository files and exposes the relevant skills and commands.

## Support matrix

| Environment | Entry point | Level |
|---|---|---|
| OpenAI Codex / ChatGPT Codex | `AGENTS.md`, `.agents/` | Native repository instructions, agents, and skills |
| Claude Code | `CLAUDE.md`, `.claude/` | Native adapter, agents, and skills |
| Cursor | `.cursor/rules/`, `.cursor/agents/`, `.cursor/skills/` | Native rules, agents, and skills |
| Antigravity | `AGENTS.md`, `.agents/` | Native rules, agents, and skills |

The portable contract is the same in every environment: read the repository contract, discover the project technology, select the workflow, load only the required skills, and report evidence.
