import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { appFeatures, eventFeatures } from "@/content/features";
import {
  getBreadcrumbSchema,
  getSoftwareApplicationSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import {
  Heart,
  BookOpen,
  Target,
  Sparkles,
  PenLine,
  TrendingUp,
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  Camera,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "The Aisaiah App — Prayer, Scripture & Spiritual Fitness",
  description:
    "Your AI-powered faith companion for daily prayer, Scripture reading, spiritual fitness tracking, and event management. Free on iOS and Android.",
  openGraph: {
    title: "The Aisaiah App | Aisaiah Foundation",
    description:
      "Daily prayer, Scripture, spiritual fitness tracking, and event management — all in one free app.",
  },
};

const appIconMap: Record<string, LucideIcon> = {
  Heart,
  BookOpen,
  Target,
  Sparkles,
  PenLine,
  TrendingUp,
};

const eventIconMap: Record<string, LucideIcon> = {
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  Camera,
  LayoutDashboard,
};

const appScreenshots = [
  { src: "/images/Screen1.jpg", alt: "Turn screen time into sacred time" },
  { src: "/images/Screen2.jpg", alt: "Designed for your daily prayer rhythm" },
  { src: "/images/Screen3.jpg", alt: "Spiritual fitness dashboard — Pray, Reflect, Service" },
  { src: "/images/Screen4.jpg", alt: "Your spiritual dashboard with history and insights" },
  { src: "/images/Screen5.jpg", alt: "Daily Scripture readings and guided prayer" },
];

export default function SolutionsPage() {
  const pageSchema = getWebPageSchema({
    title: "The Aisaiah App",
    description: metadata.description as string,
    path: "/solutions",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ]);
  const softwareSchema = getSoftwareApplicationSchema();

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema, softwareSchema]} />
      <PageHero
        eyebrow="The Aisaiah App"
        title="Turn screen time into sacred time."
        description="An AI-powered daily faith companion for guided prayer, Scripture reading, spiritual fitness tracking, and community events — free on iOS and Android."
        actions={[
          {
            label: "Download for iOS",
            href: "https://apps.apple.com/us/app/aisaiah/id6751301980",
            variant: "secondary",
          },
          {
            label: "Get it on Google Play",
            href: "https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness",
            variant: "outline",
            className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10",
          },
        ]}
        metrics={[
          {
            value: "Pray · Reflect · Serve",
            label: "Three spiritual fitness rings to build daily habits that last.",
          },
          {
            value: "Daily Scripture",
            label: "Readings, Psalms, and Gospel with date navigation and USCCB links.",
          },
          {
            value: "Events Built In",
            label: "Registration, NFC/QR check-in, and event gallery — all in the app.",
          },
        ]}
      />

      {/* App Screenshots Showcase */}
      <Section>
        <SectionHeader>
          <SectionTitle>See It In Action</SectionTitle>
          <SectionDescription>
            From your daily prayer rhythm to spiritual history and Scripture
            readings — designed to help you grow in faith every day.
          </SectionDescription>
        </SectionHeader>
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max justify-center">
            {appScreenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="relative w-[240px] h-[480px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/60 flex-shrink-0"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Spiritual Features */}
      <Section variant="muted">
        <SectionHeader>
          <SectionTitle>Your Spiritual Growth Toolkit</SectionTitle>
          <SectionDescription>
            Everything you need for daily prayer, reflection, and spiritual
            development — guided by AI, grounded in Church teaching.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appFeatures.map((feature) => {
            const Icon = appIconMap[feature.icon] || Heart;
            return (
              <Card key={feature.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Download CTA */}
      <Section id="download">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Download the Aisaiah App
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Free to download. No account required to get started. Available on
            iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/aisaiah/id6751301980"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-6 py-4 text-left shadow-sm transition-transform hover:scale-[1.02]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                iOS
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                Download on the App Store
              </p>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-6 py-4 text-left shadow-sm transition-transform hover:scale-[1.02]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Android
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                Get it on Google Play
              </p>
            </a>
          </div>
        </div>
      </Section>

      {/* Event Management — Secondary */}
      <Section variant="dark" id="events">
        <SectionHeader>
          <SectionTitle className="text-white">
            Event Management, Built Into the App
          </SectionTitle>
          <SectionDescription className="text-slate-300">
            From registration to post-event analytics — manage conferences,
            retreats, and gatherings without leaving the app.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Built for Conferences, Retreats, and Gatherings
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether you&apos;re organizing a regional conference with
                hundreds of attendees or an intimate parish retreat, the Aisaiah
                app scales to meet your needs with built-in registration,
                contactless check-in, and real-time analytics.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Event registration with custom forms",
                "Contactless check-in with NFC and QR codes",
                "Real-time attendance dashboards for organizers",
                "Event photo gallery for community sharing",
                "Post-event reports with attendance analytics",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="accent" size="lg">
                Request a Demo
              </Button>
              <Button
                href="/partnerships"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Partnerships
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {eventFeatures.slice(0, 4).map((feature) => {
              const Icon = eventIconMap[feature.icon] || ClipboardList;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.1]"
                >
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600/20 text-primary-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feature.description.split(".")[0]}.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Spiritual Journey Today
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Download the Aisaiah app and join a growing community of believers
            building daily habits of prayer, reflection, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://apps.apple.com/us/app/aisaiah/id6751301980"
              variant="secondary"
              size="lg"
            >
              Download for iOS
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
