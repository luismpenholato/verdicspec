# Security checklist (quick)

Use during review. Mark N/A when the change has no exposure in that area.

## Design

- [ ] Assets and trust boundaries identified
- [ ] AuthN/AuthZ explicit for write/admin paths
- [ ] Sensitive data classified
- [ ] Abuse cases considered (IDOR, privilege escalation)

## Code

- [ ] Server-side validation of untrusted input
- [ ] Parameterized queries / safe APIs (no injection)
- [ ] Output encoding / no unsafe HTML sinks for untrusted data
- [ ] Path, SSRF, SSTI, unsafe deserialization controlled
- [ ] No `eval` / shell injection sinks

## Secrets and auth

- [ ] No hardcoded or default credentials
- [ ] Secrets via env/secret store; `.env` gitignored
- [ ] Leaked secret rotated (not only deleted)
- [ ] CORS not used as access control

## Supply chain and packaging

- [ ] Lockfiles present; vulnerable deps checked
- [ ] Container non-root / minimal image when applicable
- [ ] No secrets in image layers or CI logs
- [ ] Ports and privileges minimized

## Verify and operate

- [ ] Errors generic to clients; details in protected logs
- [ ] Logs without secrets/PII
- [ ] Rate/size/timeouts on risky endpoints
- [ ] Security checks executed or explicitly marked not run
- [ ] Threat model written for high-risk changes
