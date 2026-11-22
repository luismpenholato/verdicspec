# .NET observability reference

- Prefer the existing `ILogger` and `Activity`/OpenTelemetry conventions in the project.
- Use structured message properties rather than interpolated diagnostic strings.
- Preserve trace context across HTTP clients, messaging, and background services.
- Redact credentials, tokens, connection strings, and personal data.

