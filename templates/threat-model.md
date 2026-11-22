# Threat Model: <change or system>

## Scope

- System or change:
- Assets:
- Trust boundaries:
- Data sensitivity:
- Out of scope:

## Actors and entry points

| Actor | Entry point | Capability | Trust level |
|---|---|---|---|
| | | | |

## STRIDE threats

Classify each threat (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege).

| ID | Priority | STRIDE | Asset / flow | Scenario and impact | Mitigation | Residual risk |
|---|---|---|---|---|---|---|
| THR-001 | Critical / High / Medium / Low | | | | | |

## Security requirements

- SEC-001:

## Treatment order

1. Contain exposure (rotate secrets, restrict network/access).
2. Eliminate injection / unsafe execution.
3. Close indirect access (SSRF, path traversal, open admin paths).
4. Protect users and operations (authZ, encoding, audit).
5. Harden runtime (debug off, least privilege, limits).
6. Verify with negative tests and available scanners.

## Verification

| Check | Executed? | Evidence / result |
|---|---|---|
| Secret scan | Yes / No | |
| SAST | Yes / No | |
| SCA | Yes / No | |
| Image / IaC scan | Yes / No | |
| DAST (non-prod only) | Yes / No | |
| Manual review | Yes / No | |
| Negative tests | Yes / No | |

## Remaining uncertainty

-
