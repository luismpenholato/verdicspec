---
name: code-review
description: Review a change for correctness, regressions, security, maintainability, and missing verification.
---

# Code Review

Review the diff and relevant surrounding code, not only the changed lines.

Check, in order:

1. Intended behavior and acceptance criteria.
2. Correctness and edge cases.
3. Regression and compatibility risk.
4. Error handling and security boundaries.
5. Data integrity and concurrency.
6. Tests and observability.
7. Maintainability and unnecessary complexity.

Report findings by severity with file, location, impact, and a concrete recommendation. If there are no findings, state what was reviewed and what was not verified.

