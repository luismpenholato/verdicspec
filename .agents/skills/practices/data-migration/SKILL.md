---
name: data-migration
description: Plan and verify safe schema or data changes with compatibility, rollout, and rollback considerations.
---

# Data Migration

1. Inventory current schema and data invariants.
2. Define the target state and compatibility window.
3. Prefer expand-and-contract for live systems.
4. Make migration steps observable and restartable where possible.
5. Define backfill limits, validation, failure handling, and rollback or forward-fix strategy.
6. Test with representative data without exposing production secrets.

