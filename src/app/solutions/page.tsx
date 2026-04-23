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
  title: "The AIsaiah App — Prayer, Reflection & Service",
  description:
    "Build daily habits of prayer, reflection, and service with AIsaiah. Free on iOS and Android — for individuals, churches, and faith communities.",
  openGraph: {
    title: "The AIsaiah App | Aisaiah Foundation",
    description:
      "Build daily habits of prayer, reflection, and service. Free on iOS and Android.",
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
  { src: "/images/app-rhythm.png", alt: "AIsaiah Your Daily Rhythm — Pray, Reflect, Serve rings" },
  { src: "/images/app-prayer.png", alt: "AIsaiah Daily Prayer — guided prayer with Scripture" },
  { src: "/images/app-reflect.png", alt: "AIsaiah Reflect — daily Scripture readings and journaling" },
  { src: "/images/app-serve.png", alt: "AIsaiah Serve — community events and acts of service" },
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
        eyebrow="The AIsaiah App"
        title="Build daily habits of prayer, reflection, and service."
        description="Everything you need to grow in your faith — guided prayer, daily Scripture, spiritual growth tracking, and community events. Free on iOS and Android."
        actions={[
          {
            label: "Download the App",
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
            value: "Prayer · Reflection · Service",
            label: "Three daily habits that help you grow in your relationship with God.",
          },
          {
            value: "Daily Scripture",
            label: "Readings, Psalms, and Gospel — reflect on God's Word every day.",
          },
          {
            value: "Events Built In",
            label: "Registration, NFC/QR check-in, and event gallery — all in one app.",
          },
        ]}
      />

      {/* App Screenshots Showcase */}
      <Section>
        <SectionHeader>
          <SectionTitle>See It In Action</SectionTitle>
          <SectionDescription>
            From daily prayer to Scripture reflection and growth tracking —
            designed to help you build a daily relationship with God.
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
          <SectionTitle>Your Daily Faith Toolkit</SectionTitle>
          <SectionDescription>
            Everything you need for daily prayer, reflection, and service —
            guided by AI, grounded in Church teaching.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appFeatures.map((feature) => {
            const Icon = appIconMap[feature.icon] || Heart;
            return (
              <Card key={feature.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
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
            Start Growing in Your Faith Today
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Download AIsaiah — free on iOS and Android. No account required to
            start building habits of prayer, reflection, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://apps.apple.com/us/app/aisaiah/id6751301980"
              variant="accent"
              size="lg"
            >
              Download for iOS
            </Button>
            <Button
              href="https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness"
              variant="primary"
              size="lg"
            >
              Get it on Google Play
            </Button>
          </div>
        </div>
      </Section>

      {/* Event Management — Secondary */}
      <Section variant="dark" id="events">
        <SectionHeader>
          <SectionTitle className="text-white">
            Events That Deepen Faith
          </SectionTitle>
          <SectionDescription className="text-slate-300">
            Use AIsaiah to manage events and deepen prayer, reflection, and
            service before, during, and after your gathering.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                For Conferences, Retreats, and Gatherings
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether you&apos;re organizing a regional conference or an
                intimate retreat, AIsaiah helps you manage logistics and
                support spiritual growth — all in one place.
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
            Start Your Journey Today
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Download AIsaiah and start building daily habits of prayer,
            reflection, and service. Your relationship with God grows one day
            at a time.
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
