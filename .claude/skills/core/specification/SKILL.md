---
name: specification
description: Define a clear, testable software change before implementation.
---

# Specification

Use this skill when a request changes product behavior, architecture, data, APIs, user experience, or operational behavior.

## Outcomes

Produce a specification at the depth selected by the workflow. It must contain:

1. Context, problem, users, and desired outcome.
2. Project mode and scope: greenfield, brownfield, or hybrid.
3. Explicit non-goals and constraints.
4. Actors, inputs, outputs, states, and boundaries.
5. Functional behavior and edge cases.
6. Non-functional requirements: security, privacy, accessibility, performance, reliability, and operations when relevant.
7. Acceptance criteria that can be verified.
8. Compatibility, migration, rollout, and rollback when changing an existing system.
9. Open decisions, assumptions, risks, and a verification plan.

## Rules

- Read the existing code and project conventions before proposing implementation details.
- Separate requirements from solutions.
- Use observable language; avoid vague terms such as "works correctly".
- Do not invent production data or undocumented behavior.
- For brownfield work, describe current behavior and invariants before desired behavior.
- Prefer vertical slices and incremental delivery over a large speculative design.
- If an ambiguity materially changes the implementation, record it as an open decision.

## Acceptance criteria format

```text
Given <precondition>
When <action>
Then <observable result>
```

