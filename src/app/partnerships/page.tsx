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
  getFAQSchema,
  getWebPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with AIsaiah Foundation to help your community grow in daily faith through prayer, reflection, and service. Open to churches, ministries, and Christian organizations of all sizes.",
  openGraph: {
    title: "Partnerships | Aisaiah Foundation",
    description:
      "Help your community grow in daily faith through prayer, reflection, and service.",
  },
  alternates: {
    canonical: "/partnerships",
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
  const faqSchema = getFAQSchema([
    {
      question: "Who can partner with the Aisaiah Foundation?",
      answer:
        "Churches, ministries, parishes, dioceses, schools, and Christian organizations of any size. Our partnership models scale from small communities to large multi-site networks.",
    },
    {
      question: "How does a partnership with AIsaiah work?",
      answer:
        "Every partnership starts with a conversation about your community's needs. We then help you bring AIsaiah to your members — supporting daily prayer, Scripture reflection, service opportunities, and event management — with the level of customization and support that fits your size.",
    },
    {
      question: "Is there a cost to partner with AIsaiah?",
      answer:
        "The AIsaiah app is free for individuals on iOS and Android. Partnership tiers vary based on the level of customization, integration, and support your organization needs. Contact us to discuss what's right for your community.",
    },
    {
      question: "Can AIsaiah be customized for our community?",
      answer:
        "Yes. Higher-tier partnerships include custom branding, tailored content libraries, integration with your existing systems, dedicated support, and event-management workflows configured for your specific gatherings.",
    },
    {
      question: "How do we get started?",
      answer:
        "Reach out through our contact form or email info@aisaiah.org. We'll set up a discovery call to understand your community, walk through the platform, and recommend the partnership model that fits best.",
    },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema, faqSchema]} />
      <PageHero
        eyebrow="Work with us"
        title="Help your community grow in daily faith."
        description="Whether you're a church, ministry, or faith-based organization — we help you support prayer, reflection, and service at scale with tools your community can trust."
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
            Flexible partnerships designed to meet your community where it is —
            and help your people grow in prayer, reflection, and service.
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
            community and how you want to help your people grow — and we&apos;ll
            show you how AIsaiah can support that.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Start a Partnership Conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
