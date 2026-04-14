import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MissionPreview } from "@/components/sections/mission-preview";
import { FeaturesPreview } from "@/components/sections/features-preview";
import { PartnershipsPreview } from "@/components/sections/partnerships-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Aisaiah Foundation | Digital Infrastructure for Faith Communities",
  description:
    "Aisaiah Foundation helps churches, ministries, and mission-driven communities modernize event operations, digital engagement, and leadership visibility through a faith-rooted nonprofit platform.",
  alternates: {
    canonical: "https://aisaiah.org",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionPreview />
      <FeaturesPreview />
      <PartnershipsPreview />
      <BlogPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
