---
name: observability
description: Define operational signals that make software behavior diagnosable in development and production.
---

# Observability

Consider observability whenever a change affects a request path, background job, integration, persistence, security boundary, or user-visible failure.

Start by writing the operational question: what must an engineer know when this behavior is slow, failing, incorrect, or expensive?

## Signals

- Logs: meaningful events with stable fields and safe redaction.
- Metrics: counters, gauges, and latency distributions tied to operational questions.
- Traces: causal flow across service and integration boundaries.
- Errors: actionable classification, context, and correlation identifiers.

## Rules

- Do not log secrets, tokens, credentials, or unnecessary personal data.
- Prefer structured data over strings that cannot be queried.
- Define the diagnostic question each signal answers.
- Keep local development and production behavior compatible where practical.
- Define useful behavior for success, failure, retry, timeout, and degraded operation.
- Avoid high-cardinality dimensions and uncontrolled payload logging.
- Prefer correlation that follows a request, job, message, or business operation across boundaries.

