---
name: security
description: Identify and reduce security, privacy, abuse, and supply-chain risks in a software change. Use for auth, secrets, injection, XSS, SSRF, containers, IaC, CI/CD, and threat modeling.
---

# Security

Apply security whenever a change touches trust boundaries, authentication, authorization, input/output handling, secrets, sensitive data, dependencies, containers/IaC, CI/CD, logging, or abuse cases.

Passing functional tests is **not** proof that security risk is absent. Prefer shift-left checks and defense in depth: design → code → commit → build → package → deploy → operate.

## Principles

- Fail closed; default deny; least privilege.
- Validate on the server; never trust the client.
- Secrets in the git history are compromised — rotate, do not only delete.
- No single control is enough (SAST ≠ SCA ≠ DAST ≠ human review).
- Security requirements belong in acceptance criteria for sensitive changes.

## Review checklist

Work through the relevant items for the change. Skip categories with no exposure, and say what was out of scope.

### 1. Design and trust boundaries

- Assets, actors, entry points, and trust boundaries identified.
- AuthN/AuthZ decisions explicit; admin/write paths not anonymous by accident.
- Sensitive data classified (credentials, PII, tokens, business data).
- Abuse cases considered (IDOR, privilege escalation, mass assignment, replay).

### 2. Input, output, and injection

- All untrusted input validated (type, length, allowlist when possible).
- SQL/NoSQL/LDAP/OS commands use parameterized APIs — no string concatenation.
- Templates do not compile untrusted content (no SSTI).
- HTML/JS output escaped; avoid raw HTML sinks (`dangerouslySetInnerHTML`, `innerHTML`) for untrusted data.
- File paths resolved and confined to an allowlisted directory (no path traversal).
- URL/fetch destinations allowlisted when the server initiates outbound calls (SSRF); block private/link-local ranges; verify TLS.
- Deserialization uses safe loaders (`yaml.safe_load`, equivalent); reject unexpected shape/size.
- Dangerous sinks (`eval`, `shell=True`, dynamic code execution) absent or strictly justified.

### 3. Authentication, sessions, and credentials

- No default/hardcoded credentials (`admin:admin`, embedded tokens).
- Secrets from environment/secret store; `.env` and keys gitignored.
- Session/cookie flags and CSRF considered when cookies are used.
- CORS is not treated as access control; origins restricted when credentials are involved.

### 4. Secrets and repository hygiene

- No secrets in source, config committed by mistake, Docker layers, or CI logs.
- If a secret leaked: rotate/revoke first, then remove, then baseline historical findings if needed.
- Prefer secret scanning in pre-commit and CI; protect main branch and sensitive paths (`CODEOWNERS`).

### 5. Supply chain (dependencies)

- Lockfiles present and used; versions pinned for reproducible installs.
- Known vulnerable packages checked (SCA); prefer maintained packages.
- New dependencies justified; watch typosquatting and abandoned packages.
- Prefer SBOM / advisory awareness for release-critical systems.

### 6. Containers, IaC, and runtime

- Non-root user, minimal base image, no secrets in `ENV`/`COPY`.
- Healthcheck, dropped capabilities, read-only FS and resource limits when applicable.
- Do not publish databases/admin ports to untrusted networks.
- Debug mode and development servers off outside isolated local use.
- IaC reviewed for exposure, privilege, and secret embedding.

### 7. Errors, logs, and operations

- Client errors are generic; detailed traces only in protected logs.
- Logs omit secrets, tokens, passwords, and unnecessary PII.
- Rate limits / size limits / timeouts on expensive or dangerous endpoints.
- Audit trail for sensitive mutations when repudiation matters.

### 8. Pipeline and verification controls

Map available (or recommended) controls without inventing tool output:

| Layer | Looks at | Typical findings |
|---|---|---|
| Threat model | Design | Missing auth, exposed assets |
| Secret scan | Code + git history | Tokens, keys, passwords |
| SAST | Own source | Injection, XSS, insecure APIs |
| SCA | Third-party deps | CVEs, abandoned packages |
| Image / IaC scan | Image + infra files | Base CVEs, root container, open ports |
| DAST | Running app (non-prod) | Runtime injection, missing headers |
| Human review | Diff + context | Logic abuse, auth gaps scanners miss |

- Run or cite only checks that actually executed.
- DAST only against disposable/non-production environments; triage false positives before blocking.
- Prefer gradual enforcement: inform → clean backlog → then fail the pipeline.

## High-risk changes

Produce `.verdicspec/reports/<change-id>-threat-model.md` from `templates/threat-model.md` when the change affects auth, multi-tenant data, payments, secrets, remote code/file/URL handling, public exposure, or privilege boundaries.

Include: assets, actors, entry points, STRIDE-oriented threats, mitigations, verification, residual risk, and a short treatment order (contain → eliminate injection → close indirect access → harden runtime → verify).

Useful references for depth (do not paste wholesale): OWASP Top 10 / ASVS / Cheat Sheets, CWE, NIST SSDF, SLSA.

## Output

Report findings by severity (`Critical` / `High` / `Medium` / `Low` / `Info`) with:

- location (file/route/config),
- impact and likely abuse path,
- concrete mitigation,
- residual risk if unfixed,
- verification status (executed / not executed).

If no findings, state what was reviewed and what was **not** verified.
