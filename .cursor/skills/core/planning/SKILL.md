---
name: planning
description: Convert an approved specification into small, ordered, independently verifiable implementation tasks.
---

# Planning

- Read the specification, system context, technology inventory, and decisions.
- Order work by dependency and risk, not by file order.
- Prefer vertical slices that can be tested and reviewed independently.
- Give every task a clear change boundary and completion condition.
- Include migration, compatibility, observability, documentation, and rollback work when applicable.
- Keep discovery or unresolved decisions out of implementation tasks; route them to a spike or decision record.

## Task contract

Each task must include: purpose, files or boundary likely to change, dependencies, test or evidence required, and a definition of done.

