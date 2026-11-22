---
name: testing
description: Design and execute tests that verify behavior and protect against regressions.
---

# Testing

Derive tests from requirements and acceptance criteria, not from the implementation after it is written.

## Test selection

- Unit: pure rules, transformations, and local decisions.
- Integration: persistence, queues, frameworks, filesystem, and external boundaries under controlled conditions.
- Contract: public APIs, events, schemas, and compatibility promises.
- End-to-end: critical user journeys through real application boundaries.
- Exploratory: unknown behavior, usability, and failure discovery; record the observation.

Prefer the narrowest test that proves the behavior, then add broader tests when integration risk requires them.

## Required coverage

- happy path;
- invalid input and authorization failures;
- boundaries, empty states, timeouts, retries, and partial failure;
- compatibility behavior for brownfield changes;
- regression protection for bug fixes;
- deterministic setup and cleanup.

Preserve the project's test style and framework unless there is a concrete reason to change it. Never claim a test passed unless it was executed.

## Completion checklist

- Tests cover the changed behavior.
- Regression coverage exists for fixed bugs.
- Relevant existing tests were executed.
- Failures are reported with their actual output and scope.

