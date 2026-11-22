---
name: technology-discovery
description: Discover the project's languages, frameworks, tools, runtime, and validation commands from repository evidence before selecting technology-specific skills.
---

# Technology Discovery

Run this skill before implementation when the stack is unknown, mixed, or likely to affect the solution.

## Rules

- Inspect repository evidence; do not infer technology from the user's wording alone.
- Prefer manifests, lockfiles, build files, source layout, CI, and documented commands over directory names.
- Treat a repository as polyglot when multiple production stacks are active.
- Separate production technologies from test, tooling, generated, and example code.
- Never install dependencies or execute arbitrary project code during discovery without authorization.

## Evidence map

| Evidence | Likely technology or tool |
|---|---|
| `package.json`, `tsconfig.json`, lockfiles | Node.js, TypeScript, frontend or backend framework |
| `.sln`, `.csproj`, `global.json` | .NET / C# |
| `pom.xml`, `build.gradle`, `build.gradle.kts`, `gradlew` | Java or Kotlin; Maven or Gradle |
| `pyproject.toml`, `requirements*.txt`, `poetry.lock`, `uv.lock` | Python |
| `go.mod`, `Cargo.toml`, `composer.json`, `Gemfile`, `Package.swift` | Go, Rust, PHP, Ruby, Swift |
| `Dockerfile`, compose files, CI workflows | Runtime and delivery environment |
| test configuration and scripts | Validation tools and project conventions |

## Output

Create `templates/technology-inventory.md` containing:

- detected languages and versions;
- frameworks and important libraries;
- package/build/test/lint commands;
- runtime and deployment clues;
- active technology packs;
- confidence and evidence for every conclusion;
- unknowns that must be resolved before implementation.

If the project is a monorepo, produce one inventory per application or package and a shared infrastructure section.

