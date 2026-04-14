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
    "Learn the story behind the Aisaiah Foundation — a 501(c)(3) nonprofit bridging faith and technology to empower churches, ministries, and faith-based communities worldwide.",
  openGraph: {
    title: "About Us | Aisaiah Foundation",
    description:
      "Discover how the Aisaiah Foundation bridges faith and technology to serve faith communities worldwide.",
  },
};

const values = [
  {
    icon: Heart,
    title: "Faith-Centered",
    description:
      "Every product, decision, and partnership is rooted in our commitment to serving God and His people through technology.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "We believe faith communities deserve technology that respects their data. Privacy isn't a feature — it's a foundation.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Our solutions are shaped by the real needs of ministry members, leaders, and communities. We build with them, not just for them.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Ministry deserves world-class technology. We hold ourselves to the same standards as the best organizations in the world.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Technology should empower everyone, regardless of technical skill or resources. Our tools are designed to be intuitive and inclusive.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "As a 501(c)(3) nonprofit, we are accountable to our community. Our finances, decisions, and roadmaps are open and honest.",
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
        title="Building a credible bridge between faith, operations, and technology."
        description="Aisaiah Foundation was formed to give mission-driven communities a technology partner that understands ministry realities and can execute with modern product discipline."
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
                Ministry deserves technology that feels both trustworthy and
                well-built.
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Aisaiah began with a simple conviction: faith communities
                  should not have to choose between mission integrity and modern
                  digital capability.
                </p>
                <p>
                  What started as a founder-led effort to improve registration,
                  communications, and spiritual engagement — born from direct
                  experience in Couples for Christ — evolved into a nonprofit
                  platform with a broader mandate: build digital infrastructure
                  that serves any ministry at the level leaders actually need.
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
            A world where every faith community has access to purpose-built
            technology that strengthens their mission and connects believers
            across boundaries.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader>
          <SectionTitle>Our Values</SectionTitle>
          <SectionDescription>
            The principles that guide everything we build and every decision we
            make
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
          <SectionTitle>Architecture For Long-Term Scale</SectionTitle>
          <SectionDescription>
            Our platform is structured to support a clean separation between
            presentation, services, and data as the organization and its
            partners grow.
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
