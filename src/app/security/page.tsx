import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "How the Aisaiah Foundation protects member and attendee data across the AIsaiah app and the Shiloh events platform: providers, controls, and what is still in progress.",
  alternates: {
    canonical: "/security",
  },
};

// Every claim on this page is something we can show. Provider certifications
// link to the provider's own compliance page; the platform controls listed are
// the ones live in production on the "last reviewed" date. We do not claim
// certifications we do not hold — see "Where we are".
const LAST_REVIEWED = "September 24, 2026";

const providers = [
  {
    name: "Supabase (PostgreSQL)",
    role: "Events platform database and file storage",
    region: "US East (N. Virginia)",
    attest: "SOC 2 Type 2 · ISO 27001 · AES-256 at rest · TLS in transit",
    href: "https://supabase.com/security",
  },
  {
    name: "Google Firebase",
    role: "Sign-in, the AIsaiah mobile app, daily readings",
    region: "United States",
    attest: "Google Cloud compliance program",
    href: "https://cloud.google.com/security/compliance",
  },
  {
    name: "Fly.io",
    role: "Events platform API servers",
    region: "US East (Ashburn)",
    attest: "Provider security program",
    href: "https://fly.io/docs/security/",
  },
  {
    name: "Cloudflare",
    role: "Websites, TLS, DDoS protection",
    region: "Global edge",
    attest: "Trust Hub compliance resources",
    href: "https://www.cloudflare.com/trust-hub/",
  },
];

const collected = [
  {
    k: "Identity",
    v: "Name, email address, chapter or community, and your CFC member ID when you link it in the app.",
  },
  {
    k: "Spiritual practice",
    v: "Your prayer, reflection, and service check-ins and settings in the AIsaiah app. Reflections you write are yours; we do not sell data and we show no advertising.",
  },
  {
    k: "Events",
    v: "Registrations, household groupings, and the time you checked in to an event.",
  },
  {
    k: "Participation",
    v: "Session questions, feedback survey answers, and photos you choose to upload to an event gallery.",
  },
  {
    k: "Not collected",
    v: "Payment card data. Event payments are handled by the organizer’s payment provider, never by our platform.",
  },
];

const controls = [
  {
    title: "Row-level security on every table",
    body: "All events-platform database tables enforce row-level security. Tables holding personal data accept connections only from our API server; no browser or app key can read them directly.",
  },
  {
    title: "You can only read your own data",
    body: "Requests for a person’s registration, check-in status, household, or photos require a verified sign-in token and are limited to you and the household you registered with.",
  },
  {
    title: "One account per member",
    body: "A CFC member ID can be linked to a single sign-in. Attempts to claim a member already linked elsewhere are refused and recorded.",
  },
  {
    title: "Append-only audit log",
    body: "Security-relevant actions such as check-ins, account links, and refused access are written to an audit log that is never edited, retained for 24 months, then purged.",
  },
  {
    title: "Hardened edges",
    body: "HTTPS everywhere, a strict browser-origin allowlist, per-address rate limiting, and secrets held in the hosting provider’s secret store rather than in code.",
  },
  {
    title: "Published content only",
    body: "Public event pages, agendas, and galleries expose only what an organizer has published. Draft events are unreachable by guessable links.",
  },
];

const roadmap = [
  "Enforce the write gate so every write to the events API requires a signed-in or kiosk credential (currently in monitoring mode).",
  "Retire the legacy v1 events API once its remaining caller is migrated.",
  "Automated cross-chapter and cross-attendee isolation tests on every deploy.",
  "Written security policies, access reviews, and an external SOC 2 readiness assessment for the platform itself.",
];

export default function SecurityPage() {
  return (
    <>
      <div className="bg-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security &amp; Compliance
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            How we protect the information members, attendees, and organizers
            trust us with across the AIsaiah app and the Shiloh events platform,
            what we store, and where we still have work to do.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Last reviewed {LAST_REVIEWED}. Updated whenever a control changes.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 mb-14">
            <p className="text-slate-200 leading-relaxed">
              <strong className="text-white">Where we are.</strong> Our
              infrastructure providers hold SOC 2 Type 2 and ISO 27001
              attestations, listed below with links to their own compliance
              pages. The Aisaiah Foundation’s own platforms are{" "}
              <strong className="text-white">not yet independently certified</strong>.
              The controls on this page are live in production today; the
              roadmap lists what is still in progress.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Where your data lives</h2>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <th className="py-2 pr-4">Provider</th>
                  <th className="py-2 pr-4">Role</th>
                  <th className="py-2 pr-4">Region</th>
                  <th className="py-2">Attestations</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((p) => (
                  <tr key={p.name} className="border-b border-white/5 align-top">
                    <td className="py-3 pr-4 font-semibold text-white whitespace-nowrap">{p.name}</td>
                    <td className="py-3 pr-4 text-slate-300">{p.role}</td>
                    <td className="py-3 pr-4 text-slate-300">{p.region}</td>
                    <td className="py-3">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 hover:text-amber-200 underline underline-offset-4"
                      >
                        {p.attest}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">What we collect</h2>
          <dl className="mb-14 space-y-4">
            {collected.map((c) => (
              <div key={c.k}>
                <dt className="font-semibold text-white">{c.k}</dt>
                <dd className="text-slate-300 leading-relaxed">{c.v}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-bold text-white mb-4">How it is protected</h2>
          <div className="grid gap-4 sm:grid-cols-2 mb-14">
            {controls.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-1.5">{c.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">What is in progress</h2>
          <ol className="list-decimal pl-6 space-y-2 text-slate-300 mb-14">
            {roadmap.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-white mb-4">Report a concern</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you believe you have found a security issue, or you want data
            about you corrected or removed, tell us and we will respond. Please
            do not access other people’s data to demonstrate a problem; a
            description is enough.
          </p>
          <div className="rounded-2xl border border-dashed border-amber-400/40 p-5 text-slate-300">
            Email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-amber-300 font-semibold underline underline-offset-4">
              {siteConfig.email}
            </a>
            , use the{" "}
            <Link href="/contact" className="text-amber-300 font-semibold underline underline-offset-4">
              contact form
            </Link>
            , or ask for account deletion at{" "}
            <Link href="/data-deletion" className="text-amber-300 font-semibold underline underline-offset-4">
              /data-deletion
            </Link>
            . Event attendees can also read the events-platform statement at{" "}
            <a
              href="https://events.aisaiah.org/security"
              className="text-amber-300 font-semibold underline underline-offset-4"
            >
              events.aisaiah.org/security
            </a>
            .
          </div>
        </div>
      </Section>
    </>
  );
}
