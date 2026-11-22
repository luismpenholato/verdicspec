---
name: release-readiness
description: Determine whether a change can be delivered safely with rollout, rollback, migration, and operational evidence.
---

# Release Readiness

Check:

- acceptance criteria and verification status;
- build, tests, lint, and security checks;
- configuration and secret requirements;
- data or schema migration safety;
- backward compatibility;
- observability and alerting;
- rollout controls and rollback path;
- documentation and support readiness.

Create `.verdicspec/reports/<change-id>-release-readiness.md` and return `Ready`, `Ready with explicit risk`, or `Not ready`, with evidence for the decision.

