#!/usr/bin/env bash
# CI gate: verifies that every required env var passed to this step is non-empty.
#
# Usage (in a workflow step):
#   - name: Pre-deploy audit
#     run: ./scripts/ci-audit.sh NEXT_PUBLIC_FIREBASE_API_KEY CLOUDFLARE_API_TOKEN ...
#     env:
#       NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY_PROD }}
#       CLOUDFLARE_API_TOKEN:         ${{ secrets.CLOUDFLARE_API_TOKEN }}
#       ...
#
# Designed to fail in <1 second so a missing secret blocks the deploy
# *before* a 3-minute build wastes runner time.

set -euo pipefail

if [[ $# -eq 0 ]]; then
  echo "::error::ci-audit.sh: no var names given"
  exit 2
fi

missing=()
for var in "$@"; do
  if [[ -z "${!var:-}" ]]; then
    missing+=("$var")
  fi
done

if [[ ${#missing[@]} -gt 0 ]]; then
  echo "::error::Pre-deploy audit failed — ${#missing[@]} required env var(s) are empty:"
  for v in "${missing[@]}"; do
    echo "::error::  • $v"
  done
  echo ""
  echo "Likely cause: the GitHub secret backing this var has not been set."
  echo "Fix locally: fill .env.development / .env.production / .env.cloudflare"
  echo "             then run ./scripts/bootstrap-secrets.sh"
  exit 1
fi

echo "✓ ci-audit: $# env var(s) verified non-empty"
