# Node.js observability reference

- Prefer the project's existing logger and telemetry libraries.
- Use structured JSON in production and readable output locally when supported.
- Preserve async context across HTTP, jobs, and external calls.
- Redact authorization headers, cookies, tokens, and sensitive payload fields.

