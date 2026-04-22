import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getOrganizationSchema,
  getSoftwareApplicationSchema,
} from "@/lib/structured-data";
import {
  HeroSection,
  TrustBar,
  ValueProposition,
  ProductExperience,
  HowItWorks,
  Testimonials,
  PartnershipsCTA,
  MissionSection,
  DonationCTA,
  FinalCTA,
} from "@/components/sections/home";

export const metadata: Metadata = {
  title: "AIsaiah — Strengthen Your Faith. Live It Daily.",
  description:
    "A spiritual journey through prayer, reflection, and service. AIsaiah helps you build a daily relationship with God through guided prayer, Scripture, and community. Free on iOS and Android.",
  alternates: {
    canonical: "https://aisaiah.org",
  },
};

export default function HomePage() {
  const appSchema = getSoftwareApplicationSchema();

  return (
    <>
      <JsonLd data={appSchema} />
      <HeroSection />
      <TrustBar />
      <ValueProposition />
      <ProductExperience />
      <HowItWorks />
      <Testimonials />
      <PartnershipsCTA />
      <MissionSection />
      <DonationCTA />
      <FinalCTA />
    </>
  );
}
