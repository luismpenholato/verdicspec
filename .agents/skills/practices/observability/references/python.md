# Python observability reference

- Prefer the project's existing logging and telemetry stack.
- Use structured fields and stable event names.
- Preserve context across async tasks, workers, HTTP clients, and queues.
- Redact credentials, tokens, personal data, and full request bodies unless explicitly required.

