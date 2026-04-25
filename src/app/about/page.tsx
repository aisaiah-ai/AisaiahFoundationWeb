import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { architecturePillars, governancePrinciples } from "@/content/site";
import {
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import {
  Heart,
  Shield,
  Users,
  Star,
  Globe,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind AIsaiah Foundation — a 501(c)(3) nonprofit helping people build a daily relationship with God through prayer, reflection, and service.",
  openGraph: {
    title: "About Us | Aisaiah Foundation",
    description:
      "A spiritual journey through prayer, reflection, and service.",
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: Heart,
    title: "Faith-Centered",
    description:
      "Everything we build helps people grow in prayer, reflection, and service. That's our measure of success.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "Your spiritual life is sacred. We protect your data — we never sell it, and we never will.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "We build with communities, not just for them. Your needs shape what we create.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "You deserve beautiful, thoughtful tools for your faith journey. We build to that standard.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Everyone deserves tools to grow in faith, regardless of technical skill or resources.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "As a 501(c)(3) nonprofit, we're accountable to you. Our decisions and roadmaps are open.",
  },
];

export default function AboutPage() {
  const pageSchema = getWebPageSchema({
    title: "About Aisaiah Foundation",
    description: metadata.description as string,
    path: "/about",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Our story"
        title="Faith became routine. We believed it could be more."
        description="AIsaiah Foundation exists because we saw a gap — between the faith people wanted to live and the tools available to help them live it. So we built something better."
        actions={[
          { label: "Meet Our Board", href: "/board", variant: "primary" },
          { label: "Explore the App", href: "/solutions", variant: "outline", className: "border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10" },
        ]}
      />

      {/* The Problem → Vision → Solution narrative */}
      <Section variant="spiritual">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4">
              The problem
            </p>
            <h2 className="font-display text-3xl font-semibold text-white">
              Faith becomes disconnected from daily life.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                People want to pray more. They want to read Scripture. They
                want to serve. But life gets busy, habits don&apos;t stick, and
                faith slowly becomes something reserved for Sundays.
              </p>
              <p>
                We experienced this firsthand in Couples for Christ. The
                desire was there. The tools weren&apos;t.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              The vision
            </p>
            <h2 className="font-display text-3xl font-semibold text-white">
              A life lived in daily relationship with God.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                We believe every person can build a daily rhythm of prayer,
                reflection, and service — and that the right tools can make
                that rhythm natural, consistent, and deeply meaningful.
              </p>
              <p>
                That&apos;s why we built AIsaiah. Not as another app, but as a
                spiritual companion for the journey.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission blockquote */}
      <Section id="mission">
        <SectionHeader>
          <SectionTitle>Our Mission</SectionTitle>
        </SectionHeader>
        <div className="mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-purple-500 pl-6 py-2">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed italic">
              The Aisaiah Foundation exists to empower churches, ministries,
              and faith-based organizations with innovative, accessible,
              and privacy-first technology. Rooted in the Catholic faith and
              Couples for Christ, we believe that modern digital tools can
              strengthen communities, deepen spiritual growth, and amplify
              the impact of ministry worldwide.
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Vision */}
      <Section variant="spiritual">
        <SectionHeader>
          <SectionTitle>Our Vision</SectionTitle>
        </SectionHeader>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
            A world where every person and every community has the tools to
            grow in daily prayer, reflection, and service — and where
            technology strengthens faith rather than distracting from it.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader>
          <SectionTitle>Our Values</SectionTitle>
          <SectionDescription>
            The principles that guide how we help people grow in faith
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Governance */}
      <Section variant="spiritual">
        <SectionHeader>
          <SectionTitle>How We&apos;re Governed</SectionTitle>
          <SectionDescription>
            Mission-driven principles that guide every decision
          </SectionDescription>
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {governancePrinciples.map((principle) => (
            <Card key={principle.title} hover>
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
