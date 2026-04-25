#!/usr/bin/env bash
# Bootstrap GitHub Actions secrets from local .env files.
#
# Usage:
#   ./scripts/bootstrap-secrets.sh                  # interactive: prompts for each missing env
#   ./scripts/bootstrap-secrets.sh dev              # sync .env.development → *_DEV secrets
#   ./scripts/bootstrap-secrets.sh prod             # sync .env.production  → *_PROD secrets
#   ./scripts/bootstrap-secrets.sh all              # sync both, plus shared Cloudflare secrets
#   ./scripts/bootstrap-secrets.sh cloudflare       # sync only Cloudflare token + account + zone
#
# Requirements: gh CLI authenticated, run from repo root.
# Idempotent: re-running overwrites existing secrets with current local values.

set -euo pipefail

cd "$(dirname "$0")/.."

REQUIRED_FIREBASE=(
  NEXT_PUBLIC_FIREBASE_API_KEY
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  NEXT_PUBLIC_FIREBASE_PROJECT_ID
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  NEXT_PUBLIC_FIREBASE_APP_ID
)

REQUIRED_CLOUDFLARE=(
  CLOUDFLARE_API_TOKEN
  CLOUDFLARE_ACCOUNT_ID
  CLOUDFLARE_ZONE_ID
)

color() { printf '\033[%sm%s\033[0m' "$1" "$2"; }
green() { color "0;32" "$1"; }
red()   { color "0;31" "$1"; }
yellow(){ color "0;33" "$1"; }
bold()  { color "1"    "$1"; }

require_gh() {
  if ! command -v gh >/dev/null; then
    echo "$(red "✗") gh CLI not found. Install: https://cli.github.com" >&2
    exit 1
  fi
  # gh auth status returns non-zero if ANY configured account has an invalid token.
  # Use a real API call to confirm the active account works instead.
  if ! gh api user --jq .login >/dev/null 2>&1; then
    echo "$(red "✗") gh not authenticated for the active account. Run: gh auth login" >&2
    exit 1
  fi
}

# Read a key from a .env file (ignores comments, blank lines, surrounding quotes).
# Portable across macOS bash 3.2 and Linux bash 5+. Echoes the value on stdout.
get_env_value() {
  local file=$1 key=$2
  [[ -f $file ]] || return 1
  local line value
  line=$(grep -E "^${key}=" "$file" | head -1) || true
  [[ -z $line ]] && return 1
  value=${line#*=}
  # Strip surrounding single or double quotes if present.
  value=${value%\"}
  value=${value#\"}
  value=${value%\'}
  value=${value#\'}
  printf '%s' "$value"
}

ensure_env_file() {
  local file=$1
  if [[ ! -f $file ]]; then
    echo "$(yellow "!") $file not found — skipping" >&2
    return 1
  fi
  return 0
}

set_secret() {
  local name=$1 value=$2
  if [[ -z $value ]]; then
    echo "  $(yellow "skip") $name (empty)"
    return 0
  fi
  if printf '%s' "$value" | gh secret set "$name" --body - >/dev/null; then
    echo "  $(green "✓") $name"
  else
    echo "  $(red "✗") $name (gh secret set failed)"
    return 1
  fi
}

sync_firebase() {
  local env=$1                 # "dev" or "prod"
  local file
  if [[ $env == dev ]]; then file=".env.development"; else file=".env.production"; fi
  local suffix
  suffix=$(echo "$env" | tr '[:lower:]' '[:upper:]')

  echo
  bold "Syncing Firebase ${env} secrets from ${file}"; echo

  if ! ensure_env_file "$file"; then
    echo "  $(yellow "→") create $file by copying .env.example, fill values, re-run"
    return 1
  fi

  local key value
  for key in "${REQUIRED_FIREBASE[@]}"; do
    value=$(get_env_value "$file" "$key" || true)
    set_secret "${key}_${suffix}" "$value"
  done
}

sync_cloudflare() {
  local file=".env.cloudflare"
  echo
  bold "Syncing Cloudflare secrets from ${file}"; echo

  if ! ensure_env_file "$file"; then
    echo "  $(yellow "→") create $file with: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_ZONE_ID"
    return 1
  fi

  local key value
  for key in "${REQUIRED_CLOUDFLARE[@]}"; do
    value=$(get_env_value "$file" "$key" || true)
    set_secret "$key" "$value"
  done
}

main() {
  require_gh

  local target=${1:-all}
  case $target in
    dev)        sync_firebase dev ;;
    prod)       sync_firebase prod ;;
    cloudflare) sync_cloudflare ;;
    all)        sync_cloudflare; sync_firebase dev; sync_firebase prod ;;
    *)
      echo "Unknown target: $target" >&2
      echo "Usage: $0 [dev|prod|cloudflare|all]" >&2
      exit 2
      ;;
  esac

  echo
  green "Done."; echo
  echo "Verify with: ./scripts/doctor.sh"
}

main "$@"
