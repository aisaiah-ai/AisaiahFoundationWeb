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
  title: "AIsaiah — Daily Prayer, Reflection & Service | Grow in Your Faith",
  description:
    "AIsaiah helps people grow in faith through daily habits of prayer, reflection, and service. Build a consistent relationship with God through a simple daily rhythm. Free on iOS and Android.",
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
