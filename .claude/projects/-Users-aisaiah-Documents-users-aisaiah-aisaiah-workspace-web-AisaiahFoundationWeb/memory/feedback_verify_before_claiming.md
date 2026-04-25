---
name: Always verify before claiming success
description: Never claim a deployment or CI step succeeded without checking actual logs and live output
type: feedback
---

Never claim a deployment, CI run, or any external action succeeded without verifying the actual output. A green checkmark in CI doesn't mean the deploy worked — check logs for the actual deploy step and verify the live site changed.

**Why:** User called out that I repeatedly said "everything is good" when the deploy was actually failing. I trusted a CI status badge instead of reading the deploy step logs and checking the live site.

**How to apply:** After any deploy or CI push: (1) read the full CI logs for the critical step, (2) if possible, fetch or check the live URL, (3) only then report success. If you can't verify, say "I can't confirm the deploy worked — please check [URL]" rather than claiming success.
