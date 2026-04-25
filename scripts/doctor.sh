#!/usr/bin/env bash
# Pre-deploy audit: verify every config dependency is in place.
#
# Exits non-zero on any failure so it can gate CI before a deploy.
#
# Usage:
#   ./scripts/doctor.sh            # check both dev + prod
#   ./scripts/doctor.sh dev        # only dev
#   ./scripts/doctor.sh prod       # only prod
#
# In CI:  pass --ci to suppress colour and exit immediately on first failure.

set -uo pipefail

cd "$(dirname "$0")/.."

CI_MODE=0
TARGETS=()
for arg in "$@"; do
  case $arg in
    --ci) CI_MODE=1 ;;
    dev|prod) TARGETS+=("$arg") ;;
    *) echo "unknown arg: $arg" >&2; exit 2 ;;
  esac
done
[[ ${#TARGETS[@]} -eq 0 ]] && TARGETS=(dev prod)

# ── Output helpers ───────────────────────────────────────────────────────────
if [[ $CI_MODE -eq 1 ]] || [[ ! -t 1 ]]; then
  GREEN="" RED="" YELLOW="" BOLD="" RESET=""
else
  GREEN=$'\033[0;32m' RED=$'\033[0;31m' YELLOW=$'\033[0;33m' BOLD=$'\033[1m' RESET=$'\033[0m'
fi

PASS=0 FAIL=0 WARN=0
ok()   { echo "  ${GREEN}✓${RESET} $1"; PASS=$((PASS+1)); }
fail() { echo "  ${RED}✗${RESET} $1"; FAIL=$((FAIL+1)); }
warn() { echo "  ${YELLOW}!${RESET} $1"; WARN=$((WARN+1)); }
hdr()  { echo; echo "${BOLD}$1${RESET}"; }

# ── Checks ───────────────────────────────────────────────────────────────────
REQUIRED_FIREBASE=(
  NEXT_PUBLIC_FIREBASE_API_KEY
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  NEXT_PUBLIC_FIREBASE_PROJECT_ID
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  NEXT_PUBLIC_FIREBASE_APP_ID
)

check_tooling() {
  hdr "1. Tooling"
  command -v gh   >/dev/null && ok "gh CLI installed"      || fail "gh CLI missing — install from https://cli.github.com"
  command -v node >/dev/null && ok "node installed"        || fail "node missing"
  command -v npm  >/dev/null && ok "npm installed"         || fail "npm missing"

  if gh api user --jq .login >/dev/null 2>&1; then
    ok "gh authenticated"
  else
    fail "gh not authenticated — run: gh auth login"
  fi
}

# Pulls the GitHub secret list ONCE and caches in $SECRET_LIST.
SECRET_LIST=""
load_secrets() {
  if ! SECRET_LIST=$(gh secret list --json name --jq '.[].name' 2>/dev/null); then
    SECRET_LIST=""
  fi
}

has_secret() {
  echo "$SECRET_LIST" | grep -qx "$1"
}

check_cloudflare_secrets() {
  hdr "2. Cloudflare secrets"
  for k in CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID CLOUDFLARE_ZONE_ID; do
    has_secret "$k" && ok "$k set" || fail "$k missing"
  done
}

check_firebase_secrets() {
  local env=$1
  local suffix
  suffix=$(echo "$env" | tr '[:lower:]' '[:upper:]')
  hdr "3. Firebase secrets — ${env}"
  for k in "${REQUIRED_FIREBASE[@]}"; do
    has_secret "${k}_${suffix}" && ok "${k}_${suffix} set" || fail "${k}_${suffix} missing"
  done
}

check_workflow_files() {
  hdr "4. Workflow files"
  for f in .github/workflows/deploy-dev.yml .github/workflows/deploy-prod.yml .github/workflows/ci.yml; do
    [[ -f $f ]] && ok "$f exists" || fail "$f missing"
  done
}

check_terraform() {
  hdr "5. Terraform validation"
  if ! command -v terraform >/dev/null; then
    warn "terraform not installed locally — skipping (CI will validate)"
    return
  fi
  pushd terraform >/dev/null
  if terraform init -backend=false -input=false >/dev/null 2>&1; then
    ok "terraform init"
  else
    fail "terraform init failed"
    popd >/dev/null; return
  fi
  if terraform validate -no-color >/dev/null 2>&1; then
    ok "terraform validate"
  else
    fail "terraform validate failed"
  fi
  popd >/dev/null
}

check_local_env() {
  hdr "6. Local .env.local"
  if [[ ! -f .env.local ]]; then
    warn ".env.local missing — local dev will use the 'no Firebase' warning banner"
    return
  fi
  local missing=0
  for k in "${REQUIRED_FIREBASE[@]}"; do
    if grep -qE "^${k}=.+" .env.local; then
      ok "$k present"
    else
      warn "$k empty or missing in .env.local"
      missing=$((missing+1))
    fi
  done
}

check_branch_protection() {
  hdr "7. Branch state"
  local current
  current=$(git rev-parse --abbrev-ref HEAD)
  echo "  current branch: ${BOLD}${current}${RESET}"
  if [[ -n $(git status --porcelain) ]]; then
    warn "working tree has uncommitted changes"
  else
    ok "working tree clean"
  fi
}

# ── Main ─────────────────────────────────────────────────────────────────────
echo "${BOLD}🩺  Pre-deploy doctor${RESET}"

check_tooling
load_secrets
check_cloudflare_secrets
for env in "${TARGETS[@]}"; do
  check_firebase_secrets "$env"
done
check_workflow_files
check_terraform
check_local_env
check_branch_protection

echo
echo "${BOLD}Summary:${RESET} ${GREEN}${PASS} passed${RESET}  ${RED}${FAIL} failed${RESET}  ${YELLOW}${WARN} warned${RESET}"
echo

if [[ $FAIL -gt 0 ]]; then
  echo "${RED}${BOLD}✗ Pre-deploy checks failed.${RESET}"
  echo "  Fix the items above. To auto-populate secrets: ./scripts/bootstrap-secrets.sh"
  exit 1
fi

if [[ $WARN -gt 0 && $CI_MODE -eq 1 ]]; then
  echo "${YELLOW}⚠ Warnings present but not blocking deploy.${RESET}"
fi

echo "${GREEN}${BOLD}✓ All required checks passed.${RESET}"
exit 0
