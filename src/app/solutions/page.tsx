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
import { platformFeatures } from "@/content/features";
import { architecturePillars } from "@/content/site";
import {
  getBreadcrumbSchema,
  getSoftwareApplicationSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import {
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  Users,
  LayoutDashboard,
  Smartphone,
  Calendar,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions & Platform",
  description:
    "Purpose-built digital tools for event management, spiritual growth, and community engagement. Explore the Aisaiah platform for faith-based organizations.",
  openGraph: {
    title: "Solutions & Platform | Aisaiah Foundation",
    description:
      "Purpose-built digital tools for event management, spiritual growth, and community engagement.",
  },
};

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  Users,
  LayoutDashboard,
};

const appScreenshots = [
  { src: "/images/app-splash.png", alt: "Aisaiah app splash screen" },
  { src: "/images/app-mission.png", alt: "Daily mission and spiritual goals" },
  { src: "/images/app-ai.png", alt: "AI-powered spiritual guidance" },
  { src: "/images/app-progress.png", alt: "Spiritual growth progress tracking" },
  { src: "/images/app-schedule.png", alt: "Event schedule and calendar" },
];

export default function SolutionsPage() {
  const pageSchema = getWebPageSchema({
    title: "Solutions & Platform",
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
        eyebrow="Platform overview"
        title="A purpose-built platform for event operations, engagement, and leadership visibility."
        description="Purpose-built event operations, spiritual growth tools, and community engagement — designed by ministry leaders, for ministry leaders."
        actions={[
          { label: "Download The App", href: "#download", variant: "secondary" },
          {
            label: "See Event Workflows",
            href: "#events",
            variant: "outline",
            className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10",
          },
        ]}
        metrics={[
          {
            value: "Registration",
            label: "Digital intake designed for retreats, conferences, and ministry events.",
          },
          {
            value: "Check-in",
            label: "Fast day-of visibility for organizers and volunteers.",
          },
          {
            value: "Reporting",
            label: "Leadership-ready insights instead of scattered spreadsheets.",
          },
        ]}
      />

      <Section>
        <SectionHeader>
          <SectionTitle>Platform Features</SectionTitle>
          <SectionDescription>
            A comprehensive suite of tools designed for the unique needs of
            faith-based organizations and community events
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature) => {
            const Icon = iconMap[feature.icon] || ClipboardList;
            return (
              <Card key={feature.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="w-6 h-6" />
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

      <Section>
        <SectionHeader>
          <SectionTitle>Architecture That Supports Scale</SectionTitle>
          <SectionDescription>
            Our platform is designed to grow with your community — from a single
            event to national-scale operations, with a clean separation between
            experience, services, and data.
          </SectionDescription>
        </SectionHeader>
        <div className="grid gap-8 lg:grid-cols-3">
          {architecturePillars.map((pillar) => (
            <Card key={pillar.title} hover className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="text-sm text-slate-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted" id="download">
        <SectionHeader>
          <SectionTitle>Download the Aisaiah App</SectionTitle>
          <SectionDescription>
            Your spiritual growth companion — available on iOS and Android.
            Guided prayer, Scripture reading, event schedules, and more.
          </SectionDescription>
        </SectionHeader>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
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

        {/* App Screenshots */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max justify-center">
            {appScreenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="relative w-[220px] h-[440px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 flex-shrink-0"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="events">
        <SectionHeader>
          <SectionTitle>Event Management, Reimagined</SectionTitle>
          <SectionDescription>
            From registration to post-event analytics, our platform handles
            every aspect of faith community events
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                Built for Conferences, Retreats, and Gatherings
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you&apos;re organizing a regional conference with
                hundreds of attendees or an intimate parish retreat, the Aisaiah
                platform scales to meet your needs. Eliminate manual sign-up
                sheets, reduce no-shows with automated reminders, and gain
                real-time visibility into attendance.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Online registration with custom forms and payment support",
                "Automated email and SMS confirmations and reminders",
                "QR-code check-in for fast, contactless attendance tracking",
                "Real-time dashboards for organizers and coordinators",
                "Post-event reports with attendance analytics and feedback",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Request a Demo
              </Button>
              <Button href="/partnerships" variant="outline" size="lg">
                View Partnerships
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: ClipboardList,
                label: "Registration",
                stat: "60% faster",
              },
              {
                icon: ScanLine,
                label: "Check-in",
                stat: "Under 5 seconds",
              },
              {
                icon: BarChart3,
                label: "Analytics",
                stat: "Real-time",
              },
              {
                icon: CalendarCheck,
                label: "RSVP Rate",
                stat: "95%+ accuracy",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} hover>
                  <CardContent className="text-center">
                    <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      {item.stat}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Community&apos;s Events?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Join the growing number of faith communities using Aisaiah to
            manage events, engage members, and support spiritual growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
