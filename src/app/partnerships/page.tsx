import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PartnershipTier } from "@/components/partnerships/partnership-tier";
import { partnerships, partnershipHighlights } from "@/content/partnerships";
import {
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Aisaiah Foundation to bring purpose-built digital infrastructure to your faith community. Open to churches, ministries, dioceses, and Christian organizations of all sizes.",
  openGraph: {
    title: "Partnerships | Aisaiah Foundation",
    description:
      "Explore partnership opportunities with Aisaiah Foundation — technology built for faith communities, governed by mission.",
  },
};

export default function PartnershipsPage() {
  const pageSchema = getWebPageSchema({
    title: "Partnerships",
    description: metadata.description as string,
    path: "/partnerships",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Partnerships", path: "/partnerships" },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Work with us"
        title="Partner with a foundation that understands your mission."
        description="Whether you're a church, ministry, diocese, or faith-based organization, Aisaiah Foundation offers purpose-built technology designed to serve your community — not sell to it."
        actions={[
          { label: "Start a Conversation", href: "/contact", variant: "primary" },
          { label: "View Our Platform", href: "/solutions", variant: "outline", className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10" },
        ]}
        metrics={partnershipHighlights.map((h) => ({
          value: h.metric,
          label: h.description,
        }))}
      />

      <Section>
        <SectionHeader>
          <SectionTitle>Partnership Models</SectionTitle>
          <SectionDescription>
            We offer flexible partnership structures designed to meet your
            community where it is — from founding collaborations to community
            support.
          </SectionDescription>
        </SectionHeader>
        <div className="grid gap-8 lg:grid-cols-3">
          {partnerships.map((partnership) => (
            <PartnershipTier key={partnership.id} partnership={partnership} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader>
          <SectionTitle>Our Founding Partnership</SectionTitle>
          <SectionDescription>
            Aisaiah Foundation was born from direct experience in Couples for
            Christ. Our first major partnership reflects those deep roots —
            and demonstrates what purpose-built ministry technology looks like
            in practice.
          </SectionDescription>
        </SectionHeader>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
              Case study
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950 md:text-3xl">
              Couples for Christ USA
            </h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              A strategic technology partnership designed to modernize event
              operations, strengthen community engagement, and support CFC
              USA&apos;s national mission through purpose-built digital
              infrastructure.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Event registration & check-in",
                "Community engagement tools",
                "Leadership reporting & analytics",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <ArrowRight className="h-4 w-4 text-primary-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/partnerships/cfc-usa" variant="primary">
                Read the Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to explore what&apos;s possible?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Every partnership starts with a conversation. Tell us about your
            community, your challenges, and your vision — and we&apos;ll show you
            how Aisaiah can help.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Start a Partnership Conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
