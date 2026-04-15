import type { Partnership } from "@/types";

export const partnerships: Partnership[] = [
  {
    id: "founding",
    name: "Founding Partners",
    tier: "founding",
    description:
      "Organizations that partner with Aisaiah Foundation from the ground up — shaping our platform, providing real-world feedback, and helping us build technology that truly serves faith communities.",
    benefits: [
      "Direct influence on platform development and roadmap",
      "Dedicated implementation support and onboarding",
      "Custom feature development for your community's needs",
      "Priority access to new capabilities and integrations",
      "Named recognition as a founding partner",
    ],
    icon: "Star",
    featured: true,
    // caseStudySlug: "cfc-usa", // hidden for now
  },
  {
    id: "strategic",
    name: "Strategic Partners",
    tier: "strategic",
    description:
      "Churches, dioceses, ministries, and faith-based organizations that adopt the Aisaiah platform to modernize their event operations and community engagement.",
    benefits: [
      "Full platform access for event management and community tools",
      "Guided onboarding and training for your team",
      "Ongoing support and regular platform updates",
      "Data privacy and security built for ministry trust",
      "Integration with your existing workflows and systems",
    ],
    icon: "Handshake",
    featured: true,
  },
  {
    id: "community",
    name: "Community Partners",
    tier: "community",
    description:
      "Donors, volunteers, and supporters who believe in the mission of bringing purpose-built technology to faith communities and want to contribute to that vision.",
    benefits: [
      "Tax-deductible contributions to a 501(c)(3) nonprofit",
      "Regular updates on platform impact and community growth",
      "Opportunities to volunteer skills and expertise",
      "Invitation to partner events and community gatherings",
      "Recognition in our annual impact report",
    ],
    icon: "Heart",
    featured: false,
  },
];

export const partnershipHighlights = [
  {
    metric: "501(c)(3)",
    description: "Mission-governed nonprofit — your partnership supports a public-service mandate, not a profit motive.",
  },
  {
    metric: "Privacy-first",
    description: "No ads, no data selling. Community data is protected as a stewardship responsibility.",
  },
  {
    metric: "Faith-rooted",
    description: "Built by leaders formed in Couples for Christ and the Catholic faith, serving all Christian communities.",
  },
];
