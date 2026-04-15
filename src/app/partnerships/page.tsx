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
