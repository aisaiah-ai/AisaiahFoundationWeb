import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { StoreBadges } from "@/components/ui/store-badges";
import {
  getBreadcrumbSchema,
  getSoftwareApplicationSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import {
  Apple,
  Smartphone,
  Heart,
  BookOpen,
  Users,
  ShieldCheck,
  Download,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/aisaiah/id6751301980";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness";

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download AIsaiah — free on the App Store and Google Play. Build daily habits of prayer, reflection, and service. No account required to start.",
  openGraph: {
    title: "Download AIsaiah | Aisaiah Foundation",
    description:
      "Get AIsaiah free on iOS and Android. Build daily habits of prayer, reflection, and service.",
  },
  alternates: {
    canonical: "/download",
  },
};

const platforms = [
  {
    icon: Apple,
    title: "iPhone & iPad",
    description: "Download AIsaiah from the App Store.",
    href: APP_STORE_URL,
    badge: "appstore" as const,
  },
  {
    icon: Smartphone,
    title: "Android",
    description: "Get AIsaiah on Google Play.",
    href: PLAY_STORE_URL,
    badge: "googleplay" as const,
  },
];

const highlights = [
  {
    icon: Heart,
    title: "Pray",
    description:
      "Build a daily prayer rhythm with guided prayer and Scripture.",
  },
  {
    icon: BookOpen,
    title: "Reflect",
    description:
      "Read daily Scripture and journal what God is showing you.",
  },
  {
    icon: Users,
    title: "Serve",
    description:
      "Track acts of service and join community events near you.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    description:
      "Your spiritual life is sacred. We protect your data — we never sell it.",
  },
];

const steps = [
  {
    title: "Download the app",
    description:
      "Tap the App Store or Google Play badge to install AIsaiah on your phone — it's free.",
  },
  {
    title: "Open and explore",
    description:
      "No account is required to start building habits of prayer, reflection, and service.",
  },
  {
    title: "Build your daily rhythm",
    description:
      "Set a time that works for you and grow in your faith one day at a time.",
  },
];

export default function DownloadPage() {
  const pageSchema = getWebPageSchema({
    title: "Download the App",
    description:
      "Download AIsaiah free on the App Store and Google Play. Build daily habits of prayer, reflection, and service.",
    path: "/download",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Download", path: "/download" },
  ]);

  const appSchema = getSoftwareApplicationSchema();

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema, appSchema]} />

      <PageHero
        eyebrow="Get the app"
        title="Download AIsaiah"
        description="Build daily habits of prayer, reflection, and service. Free on iOS and Android — no account required to start."
        actions={[
          { label: "Download on the App Store", href: APP_STORE_URL },
          { label: "Get it on Google Play", href: PLAY_STORE_URL },
        ]}
        storeBadges
        metrics={[
          { value: "Free", label: "No cost to download and start." },
          { value: "iOS & Android", label: "Available on iPhone and Android." },
          { value: "No account", label: "Start without signing up." },
        ]}
      />

      {/* Platform cards */}
      <Section>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.title}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm transition-colors hover:border-primary-400/40 hover:bg-white/[0.07]"
              >
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600/20 text-primary-300">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  {platform.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  {platform.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <StoreBadges className="pointer-events-none" />
                </div>
              </a>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
          Trouble installing?{" "}
          <Link
            href="/support"
            className="text-primary-400 underline hover:text-primary-300"
          >
            Visit our support page
          </Link>{" "}
          or email{" "}
          <a
            href="mailto:support@aisaiah.org"
            className="text-primary-400 underline hover:text-primary-300"
          >
            support@aisaiah.org
          </a>
          .
        </p>
      </Section>

      {/* What you get */}
      <Section variant="muted">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            Inside the app
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Everything you need to grow in your faith
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            One simple rhythm of prayer, reflection, and service — wherever you
            are.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600/20 text-primary-300">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How to get started */}
      <Section>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Start in three steps
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Download CTA */}
      <Section variant="gradient" id="download">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white/10 p-3 text-white">
            <Download className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Download AIsaiah today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Free on iOS and Android. Your relationship with God grows one day at
            a time.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <StoreBadges className="justify-center" />
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline"
            >
              Read our privacy commitment
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
