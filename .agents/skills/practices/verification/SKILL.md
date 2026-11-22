---
name: verification
description: Verify that an implementation satisfies its specification and report evidence honestly.
---

# Verification

Build a criterion-to-evidence matrix. Use the cheapest reliable check first, then broaden validation according to risk and project depth.

Evidence may include executed tests, lint, build output, static analysis, manual inspection, runtime checks, or independent review.

Verify both changed behavior and preserved behavior for brownfield work. For greenfield work, verify the smallest useful slice through real boundaries.

Classify every result as `Verified`, `Failed`, `Not run`, `Blocked`, or `Assumed`. Never convert an assumption into a verification claim.

