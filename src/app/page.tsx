import type { Metadata } from "next";
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
    "Helping people build a daily relationship with God through prayer, reflection, and service. Download the free AIsaiah app — built by a 501(c)(3) nonprofit.",
  alternates: {
    canonical: "https://aisaiah.org",
  },
};

export default function HomePage() {
  return (
    <>
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
