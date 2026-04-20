import type { Partnership } from "@/types";

export const partnerships: Partnership[] = [
  {
    id: "founding",
    name: "Founding Partners",
    tier: "founding",
    description:
      "Shape the future of faith technology from the ground up. Founding partners help us build tools that support prayer, reflection, and service at scale.",
    benefits: [
      "Direct influence on what we build and how",
      "Dedicated onboarding and implementation support",
      "Custom features for your community's needs",
      "Early access to new capabilities",
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
      "Bring AIsaiah to your church, ministry, or organization. Help your community grow in daily faith through prayer, reflection, and service.",
    benefits: [
      "Full access to spiritual growth and event management tools",
      "Guided onboarding and training for your team",
      "Ongoing support and regular updates",
      "Privacy-first data protection your community can trust",
      "Integration with your existing workflows",
    ],
    icon: "Handshake",
    featured: true,
  },
  {
    id: "community",
    name: "Community Partners",
    tier: "community",
    description:
      "Support our mission to help more people grow in faith. Your contribution brings tools for prayer, reflection, and service to communities that need them most.",
    benefits: [
      "Tax-deductible contributions to a 501(c)(3) nonprofit",
      "Regular updates on impact and community growth",
      "Opportunities to volunteer your skills",
      "Invitations to partner events and gatherings",
      "Recognition in our annual impact report",
    ],
    icon: "Heart",
    featured: false,
  },
];

export const partnershipHighlights = [
  {
    metric: "501(c)(3)",
    description: "We exist to help people grow in faith — not to generate profit.",
  },
  {
    metric: "Privacy-first",
    description: "No ads, no data selling. Your community's trust is sacred to us.",
  },
  {
    metric: "Faith-rooted",
    description: "Built by people of faith, for people of faith — serving all Christian communities.",
  },
];
