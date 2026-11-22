# Java observability reference

- Prefer the project's existing logging facade and telemetry conventions.
- Use structured fields and stable event names rather than concatenated messages.
- Preserve context across servlet or reactive requests, executors, schedulers, messaging, and database calls.
- Redact authorization headers, cookies, credentials, tokens, connection strings, and personal data.
- Treat blocking calls, retries, timeouts, and thread-pool saturation as operational signals where relevant.
- If OpenTelemetry is present, preserve trace and span context across service boundaries without creating uncontrolled cardinality.

