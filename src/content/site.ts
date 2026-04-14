export const siteConfig = {
  name: "Aisaiah Foundation",
  shortName: "Aisaiah",
  url: "https://aisaiah.org",
  description:
    "Aisaiah Foundation is a 501(c)(3) nonprofit building digital infrastructure for churches, ministries, and faith-driven communities through event operations, spiritual formation, and leadership tools.",
  tagline: "Faith-rooted digital infrastructure for ministries at national scale.",
  email: "info@aisaiah.org",
  phone: "+1-813-355-9645",
  phoneDisplay: "(813) 355-9645",
  address: {
    streetAddress: "16192 Coastal Hwy",
    addressLocality: "Lewes",
    addressRegion: "DE",
    postalCode: "19958",
    addressCountry: "US",
    formatted: ["16192 Coastal Hwy", "Lewes, DE 19958"],
  },
  keywords: [
    "Catholic nonprofit technology",
    "event management for ministries",
    "ministry digital platform",
    "faith-driven nonprofit technology",
    "church event registration software",
    "Christian community technology",
    "mission-driven digital platform",
  ],
  sameAs: [] as string[],
};

export const trustHighlights = [
  {
    value: "501(c)(3)",
    label: "Mission-governed nonprofit with a public-service mandate",
  },
  {
    value: "Ministry-tested",
    label: "Built with first-hand understanding of faith-community workflows and operations",
  },
  {
    value: "Platform-ready",
    label: "Mobile app, event operations, and leadership reporting in one stack",
  },
];

export const architecturePillars = [
  {
    title: "Experience Layer",
    description:
      "Next.js App Router, reusable sections, content-driven pages, and metadata designed for executive clarity across mobile and desktop.",
    points: [
      "Component-driven UI system",
      "Page-level metadata and OpenGraph support",
      "Responsive layouts tuned for presentations and stakeholder review",
    ],
  },
  {
    title: "Service Layer",
    description:
      "Focused application services for contact capture, content delivery, and platform workflows so business logic stays separate from UI.",
    points: [
      "Firebase-backed submission flows",
      "Reusable structured-data utilities",
      "A clear path to admin tooling and authenticated dashboards",
    ],
  },
  {
    title: "Data Layer",
    description:
      "Firestore collections, typed content models, and schema-ready content that can scale from static storytelling to live operational data.",
    points: [
      "Typed content and board profiles",
      "Form submission records in Firestore",
      "Future-ready for case studies, blog content, and event records",
    ],
  },
];

export const governancePrinciples = [
  {
    title: "Mission Alignment",
    description:
      "Every product decision is evaluated against ministry outcomes, not vanity metrics.",
  },
  {
    title: "Operational Credibility",
    description:
      "We focus on workflows leaders actually need: registration, attendance, reporting, and communication.",
  },
  {
    title: "Privacy Stewardship",
    description:
      "Community data is treated as a responsibility to protect, never a channel to monetize.",
  },
  {
    title: "Scalable Delivery",
    description:
      "Our architecture is built to support pilot launches today and national rollouts later.",
  },
];
