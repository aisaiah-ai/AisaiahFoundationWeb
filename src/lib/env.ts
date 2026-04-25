const REQUIRED_PUBLIC_FIREBASE = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
] as const;

export function assertBuildEnv(): void {
  if (process.env.SKIP_ENV_VALIDATION === "1") return;
  // next.config.ts is loaded by `next lint`, `next dev`, and `next build` alike.
  // Only enforce env presence during the real production build.
  if (process.env.NEXT_PHASE !== "phase-production-build") return;

  const missing = REQUIRED_PUBLIC_FIREBASE.filter((k) => !process.env[k]);
  if (missing.length === 0) return;

  const env =
    process.env.NEXT_PUBLIC_SITE_ENV || process.env.VERCEL_ENV || "production";

  const lines = [
    "",
    "═".repeat(72),
    `❌  Build aborted: missing required env vars for ${env}`,
    "═".repeat(72),
    "",
    "The following NEXT_PUBLIC_FIREBASE_* values are empty or undefined:",
    ...missing.map((k) => `   • ${k}`),
    "",
    "Without these, the contact form on the deployed site will silently fail.",
    "",
    "Fix:",
    "  1. Local:  fill them in .env.local",
    `  2. CI:     set GitHub secrets with the _${env === "production" ? "PROD" : "DEV"} suffix`,
    "             (e.g. NEXT_PUBLIC_FIREBASE_API_KEY_PROD)",
    "  3. One-shot bootstrap: ./scripts/bootstrap-secrets.sh",
    "",
    "Override (NOT recommended for prod): SKIP_ENV_VALIDATION=1 npm run build",
    "═".repeat(72),
    "",
  ];

  throw new Error(lines.join("\n"));
}
