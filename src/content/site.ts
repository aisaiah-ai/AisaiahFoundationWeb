export const siteConfig = {
  name: "Aisaiah Foundation",
  shortName: "Aisaiah",
  url: "https://aisaiah.org",
  description:
    "Helping people build a daily relationship with God through prayer, reflection, and service. Download the free AIsaiah app for guided prayer, Scripture, and spiritual growth — built by a 501(c)(3) nonprofit.",
  tagline: "Helping people grow in faith through prayer, reflection, and service.",
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
    "daily prayer app",
    "Scripture reading app",
    "spiritual growth app",
    "faith companion app",
    "prayer reflection service",
    "Catholic prayer app",
    "Christian community app",
    "church event management app",
  ],
  sameAs: [] as string[],
};

export const trustHighlights = [
  {
    value: "Free on iOS & Android",
    label: "Download AIsaiah today — no account required to get started",
  },
  {
    value: "Prayer · Reflection · Service",
    label: "Build daily habits that help you grow in your faith",
  },
  {
    value: "501(c)(3) Nonprofit",
    label: "No ads, no data selling — built to help you grow, not to profit from you",
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
      "Every decision is measured by how well it helps people grow in prayer, reflection, and service.",
  },
  {
    title: "Operational Credibility",
    description:
      "We build what communities actually need: tools for engagement, growth, and connection.",
  },
  {
    title: "Privacy Stewardship",
    description:
      "Your spiritual life is sacred. We protect your data — we never monetize it.",
  },
  {
    title: "Scalable Delivery",
    description:
      "Built to serve a single small group today and thousands of communities tomorrow.",
  },
];
