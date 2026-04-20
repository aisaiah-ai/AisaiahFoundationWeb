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
    "Learn the story behind AIsaiah Foundation — a 501(c)(3) nonprofit helping people build a daily relationship with God through prayer, reflection, and service.",
  openGraph: {
    title: "About Us | Aisaiah Foundation",
    description:
      "Helping people build a daily relationship with God through prayer, reflection, and service.",
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
      "You deserve world-class tools for your faith journey. We build to that standard.",
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
        eyebrow="About the foundation"
        title="Helping people build a daily relationship with God."
        description="AIsaiah Foundation is a 501(c)(3) nonprofit building tools for prayer, reflection, and service — so every person and community can grow in faith through modern technology."
        actions={[
          { label: "Meet Our Board", href: "/board", variant: "primary" },
          { label: "View Solutions", href: "/solutions", variant: "outline", className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10" },
        ]}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Card className="surface-panel">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                Our story
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950">
                We believe faith and technology should work together.
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  AIsaiah began with a simple conviction: people need better
                  tools to grow in their faith — and those tools should be
                  trustworthy, modern, and accessible.
                </p>
                <p>
                  What started from direct experience in Couples for Christ
                  evolved into a nonprofit building tools that help anyone build
                  daily habits of prayer, reflection, and service — whether
                  you're an individual or leading a community of thousands.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {governancePrinciples.map((principle) => (
              <Card key={principle.title} hover className="h-full">
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted" id="mission">
        <SectionHeader>
          <SectionTitle>Our Mission</SectionTitle>
        </SectionHeader>
        <div className="mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-primary-600 pl-6 py-2">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
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

      <Section>
        <SectionHeader>
          <SectionTitle>Our Vision</SectionTitle>
        </SectionHeader>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            A world where every person and every community has the tools to
            grow in daily prayer, reflection, and service — and where
            technology strengthens faith rather than distracting from it.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader>
          <SectionTitle>Our Values</SectionTitle>
          <SectionDescription>
            The principles that guide how we help people grow in faith
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Built to Grow With You</SectionTitle>
          <SectionDescription>
            Our platform is designed to support your community today and scale
            with you as you reach more people.
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
                    <li key={point} className="text-sm leading-relaxed text-slate-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
