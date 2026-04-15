import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MissionPreview } from "@/components/sections/mission-preview";
import { FeaturesPreview } from "@/components/sections/features-preview";
import { PartnershipsPreview } from "@/components/sections/partnerships-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Aisaiah — AI-Powered Faith Companion | Prayer, Scripture & Spiritual Fitness",
  description:
    "Download Aisaiah, the free AI-powered faith companion app for daily prayer, Scripture reading, spiritual fitness tracking, and community event management. Built by a 501(c)(3) nonprofit.",
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
