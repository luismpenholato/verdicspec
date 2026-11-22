---
name: security
description: Identify and reduce security, privacy, abuse, and supply-chain risks in a software change.
---

# Security

Consider trust boundaries, authentication, authorization, input handling, secrets, sensitive data, dependency risk, logging exposure, abuse cases, and failure behavior.

For high-risk changes, produce `.verdicspec/reports/<change-id>-threat-model.md` from `templates/threat-model.md`, with assets, actors, entry points, threats, mitigations, verification, and residual risk. Do not treat passing tests as proof that security risk is absent.

