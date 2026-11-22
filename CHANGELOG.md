# Changelog

All notable changes to Verdicspec will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Repository governance files: `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, and GitHub issue/PR templates.

### Changed

- Expanded `practices/security` skill, `security-reviewer` agent, and threat-model template with DevSecOps guidance (STRIDE, secrets rotation, SAST/SCA/DAST layers).
- Translated all agents and routing rules to English (project language is English-only).

### Removed

- Unused adapters: `.clinerules/`, `GEMINI.md`, and `.github/copilot-instructions.md`.
- Supported tools are now Cursor, Claude Code, Codex, and Antigravity.
- PowerShell scripts `scripts/install.ps1` and `scripts/validate.ps1` — use `verdicspec init` and `npm test` / `npm run validate` instead.

## [0.2.2] - 2026-11-22

### Changed

- Renamed the method from `maurao-method` to `verdicspec`.
- Renamed CLI entry point to `verdicspec` and artifact root to `.verdicspec/`.
- Pointed package metadata to https://github.com/luismpenholato/verdicspec.

### Added

- Named agents with adapters for Cursor, Claude Code, Codex, and Antigravity.
- Agent/skill routing guidance in `AGENTS.md` and tool-specific rules.

## [0.1.3] - 2026-11-15

### Fixed

- Release and badge packaging for the previous package line.

## [0.1.2] - 2026-11-15

### Changed

- Incremental packaging and release workflow updates for the previous package line.

[Unreleased]: https://github.com/luismpenholato/verdicspec/compare/v0.2.2...HEAD
[0.2.2]: https://github.com/luismpenholato/verdicspec/releases/tag/v0.2.2
[0.1.3]: https://github.com/luismpenholato/verdicspec/releases/tag/v0.1.3
[0.1.2]: https://github.com/luismpenholato/verdicspec/releases/tag/v0.1.2
