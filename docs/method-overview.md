# Method Overview

Verdicspec treats software development as a sequence of explicit decisions and verifiable outcomes.

```text
Understand → Specify → Plan → Implement → Verify → Review → Deliver
```

The sequence is adaptive. Small, low-risk changes may use a lightweight path. Ambiguous, risky, or cross-cutting changes should use the complete workflow.

The method first classifies the project as greenfield, brownfield, or hybrid and then discovers the actual technology stack. This prevents the agent from applying a generic workflow or the wrong framework assumptions to the repository.

See [the complete workflow](workflow.md), [project modes](project-modes.md), and [portable commands](commands.md).

## Work modes

- Feature development: deliver new behavior.
- Bug fixing: restore intended behavior and add regression protection.
- Debugging: investigate an observed failure before changing implementation.
- Spike: answer a bounded technical question without pretending the experiment is production code.
- Refactoring: improve structure while preserving behavior.

## Evidence standard

Every completed work item should identify:

- what was requested;
- what changed;
- what was verified;
- what remains assumed or unverified;
- which validation commands were executed and their results.

