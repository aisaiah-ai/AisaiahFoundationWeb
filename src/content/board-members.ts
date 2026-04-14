import type { BoardMember, BoardSeatProfile } from "@/types";

// Note: BoardMember uses communityRoots (formerly cfcConnection) to reflect
// broad faith-community heritage while honoring CFC roots.

export const boardMembers: BoardMember[] = [
  {
    name: "Isaiah Elijah Aisaiah",
    title: "Founder & Executive Director",
    role: "Board Chair",
    bio: "Isaiah leads Aisaiah Foundation at the intersection of product strategy, software engineering, and ministry operations. He founded the organization to give faith communities a technology partner that understands both mission and execution, building scalable tools rooted in real ministry experience.",
    communityRoots:
      "Active member of Couples for Christ with direct experience in the operational realities of chapter life, events, communications, and volunteer-driven ministry delivery. Guided by Catholic faith and a commitment to serving the broader Christian community.",
    credentials: [
      "Founder of the Aisaiah Foundation and Aisaiah platform",
      "Software engineering and product strategy background",
      "Leads nonprofit operations, partnerships, and platform direction",
    ],
    focusAreas: [
      "Platform architecture",
      "Executive partnerships",
      "Mission-aligned product strategy",
    ],
    location: "Florida, USA",
    linkedin: "#",
  },
];

export const boardSeatProfiles: BoardSeatProfile[] = [
  {
    title: "Ministry Governance & Pastoral Alignment",
    emphasis: "Board appointment in progress",
    overview:
      "A leadership seat focused on grounding strategy, communications, and platform priorities in the lived realities of ministry service and faith-community formation.",
    desiredBackground: [
      "Experience in pastoral ministry, parish leadership, or faith-based community service",
      "Ability to represent the realities of ministry life at the local and regional level",
      "Credibility in discerning mission fit and stakeholder trust",
    ],
  },
  {
    title: "Technology, Security & Delivery Oversight",
    emphasis: "Board appointment in progress",
    overview:
      "A governance seat to strengthen platform quality, information stewardship, and implementation discipline as the organization expands its technical footprint.",
    desiredBackground: [
      "Senior engineering, security, or IT leadership experience",
      "Oversight mindset for architecture, quality, and risk",
      "Comfort guiding product execution without diluting mission focus",
    ],
  },
  {
    title: "Finance, Compliance & Development",
    emphasis: "Board appointment in progress",
    overview:
      "A seat dedicated to financial stewardship, nonprofit compliance, and long-term sustainability as Aisaiah grows from founder-led execution into a durable institution.",
    desiredBackground: [
      "Nonprofit finance, governance, or fundraising leadership",
      "Experience with budgets, controls, and board reporting",
      "Commitment to transparent stewardship and scalable operations",
    ],
  },
];
