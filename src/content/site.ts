export const siteConfig = {
  name: "Aisaiah Foundation",
  shortName: "Aisaiah",
  url: "https://aisaiah.org",
  description:
    "Aisaiah is a free AI-powered faith companion app for daily prayer, Scripture, spiritual fitness tracking, and event management — built by the Aisaiah Foundation, a 501(c)(3) nonprofit serving churches and faith communities.",
  tagline: "Turn screen time into sacred time.",
  email: "info@aisaiah.org",
  phone: "+1-443-347-2424",
  phoneDisplay: "(443) 347-2424",
  address: {
    streetAddress: "16192 Coastal Hwy",
    addressLocality: "Lewes",
    addressRegion: "DE",
    postalCode: "19958",
    addressCountry: "US",
    formatted: ["16192 Coastal Hwy", "Lewes, DE 19958"],
  },
  keywords: [
    "Catholic prayer app",
    "daily Scripture reading app",
    "spiritual fitness tracker",
    "faith companion app",
    "church event management app",
    "Catholic nonprofit technology",
    "Christian community app",
    "Rosary prayer guide app",
  ],
  sameAs: [] as string[],
};

export const trustHighlights = [
  {
    value: "Free on iOS & Android",
    label: "Download the Aisaiah app today — no account required to get started",
  },
  {
    value: "Pray · Reflect · Serve",
    label: "Track your spiritual fitness with daily, weekly, and monthly insights",
  },
  {
    value: "501(c)(3) Nonprofit",
    label: "No ads, no data selling — built to serve faith communities, not profit from them",
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
