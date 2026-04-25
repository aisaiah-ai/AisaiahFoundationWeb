import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import {
  AlertTriangle,
  HeartHandshake,
  Rocket,
  CheckCircle,
  Users,
  Shield,
  Brain,
  Lock,
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  LayoutDashboard,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Couples for Christ USA Partnership",
  description:
    "How AIsaiah Foundation partners with Couples for Christ USA — a founding partnership helping communities grow in faith through prayer, reflection, and service.",
  openGraph: {
    title: "CFC USA Partnership | Aisaiah Foundation",
    description:
      "Our founding partnership with Couples for Christ USA — helping communities grow in daily faith.",
  },
  alternates: {
    canonical: "/partnerships/cfc-usa",
  },
};

interface AlignmentPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const alignmentPoints: AlignmentPoint[] = [
  {
    icon: Users,
    title: "Leadership Rooted in CFC",
    description:
      "Our founding team includes active Couples for Christ members who understand the movement from the inside — its culture, mission, and the unique needs of CFC households and chapters.",
  },
  {
    icon: Brain,
    title: "Deep Understanding of CFC Structure",
    description:
      "We understand CFC's organizational structure — from household groups to chapter, area, and national levels. Our platform is designed to reflect and support that hierarchy.",
  },
  {
    icon: Shield,
    title: "Technology Built for CFC Workflows",
    description:
      "Unlike generic event platforms, our tools are built specifically for the types of events CFC runs: CLPs, retreats, conferences, household meetings, and service activities.",
  },
  {
    icon: Lock,
    title: "Privacy-First, Faith-Aligned",
    description:
      "No ads, no data selling, no third-party tracking. Member data is encrypted and handled with the same care and respect that CFC extends to its community members.",
  },
];

interface Phase {
  number: number;
  title: string;
  description: string;
  deliverables: string[];
}

const phases: Phase[] = [
  {
    number: 1,
    title: "Pilot Program",
    description:
      "Partner with select CFC chapters and events to deploy the platform in a real-world setting. Gather feedback, measure impact, and refine the experience.",
    deliverables: [
      "Deploy to 2-3 CFC chapters or regional events",
      "Full onboarding and training for event coordinators",
      "Dedicated support throughout the pilot period",
      "Detailed impact report with metrics and feedback",
    ],
  },
  {
    number: 2,
    title: "Platform Customization",
    description:
      "Based on pilot feedback, tailor the platform to CFC-specific workflows, branding, and operational needs. Build features that matter most to CFC leadership.",
    deliverables: [
      "Custom CFC branding and terminology throughout the platform",
      "CFC-specific event templates (CLP, retreats, conferences)",
      "Integration with existing CFC communication channels",
      "Enhanced reporting aligned with CFC leadership needs",
    ],
  },
  {
    number: 3,
    title: "National Rollout",
    description:
      "Scale the platform across CFC USA with a phased, region-by-region deployment. Provide ongoing support, training, and continuous improvement.",
    deliverables: [
      "Region-by-region rollout plan with dedicated support",
      "National training program for chapter coordinators",
      "Centralized admin dashboard for national leadership",
      "Ongoing development based on community feedback",
    ],
  },
];

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: ClipboardList,
    title: "Event Registration",
    description:
      "Digital registration for CLPs, retreats, conferences, and community gatherings.",
  },
  {
    icon: CalendarCheck,
    title: "RSVP Management",
    description:
      "Real-time RSVP tracking with automated confirmations and attendance forecasting.",
  },
  {
    icon: ScanLine,
    title: "Check-in System",
    description:
      "QR-code check-in with real-time attendance tracking and reporting.",
  },
  {
    icon: BarChart3,
    title: "Session Tracking",
    description:
      "Monitor session attendance and generate meaningful participation reports.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Portal",
    description:
      "Comprehensive dashboard with real-time analytics and communication tools.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description:
      "Actionable insights for leadership on engagement, growth, and event performance.",
  },
];

export default function CFCUSACaseStudyPage() {
  notFound();

  const pageSchema = getWebPageSchema({
    title: "Couples for Christ USA Partnership",
    description: metadata.description as string,
    path: "/partnerships/cfc-usa",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "CFC USA", path: "/partnerships/cfc-usa" },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Founding partnership"
        title="A strategic technology partnership with Couples for Christ USA."
        description="Our founding partnership with CFC USA — helping members grow in daily prayer, reflection, and service through technology built by people who understand the community from the inside."
        actions={[
          {
            label: "Start The Conversation",
            href: "/contact",
            variant: "secondary",
          },
          {
            label: "View Proposed Collaboration",
            href: "#collaboration",
            variant: "outline",
            className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10",
          },
        ]}
        metrics={[
          {
            value: "Mission fit",
            label: "Built around the spiritual and organizational realities of Couples for Christ.",
          },
          {
            value: "Operational relief",
            label: "Reduces manual coordination and improves visibility across events and chapters.",
          },
          {
            value: "Low-risk rollout",
            label: "Pilot-first delivery designed to build confidence before broader implementation.",
          },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Challenge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Growing Pains Require Modern Solutions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Couples for Christ USA manages hundreds of events, thousands of
              members, and a growing need for digital coordination across
              chapters, areas, and regions. The current reliance on manual
              processes — paper sign-ups, spreadsheet tracking, fragmented
              communication — creates inefficiencies that consume volunteer
              time and limit organizational visibility.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              As CFC continues to grow, these challenges will only compound.
              The right technology partner can help CFC scale its impact without
              scaling its administrative burden.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Events Annually", value: "Hundreds" },
              { label: "Active Members", value: "Thousands" },
              { label: "Chapters Nationwide", value: "100+" },
              { label: "Volunteer Hours at Risk", value: "Countless" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="text-center py-8">
                  <p className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader>
          <div className="inline-flex items-center gap-2 text-primary-600 bg-primary-50 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HeartHandshake className="w-4 h-4" />
            Our Alignment
          </div>
          <SectionTitle>
            Why Aisaiah Foundation Is Uniquely Positioned
          </SectionTitle>
          <SectionDescription>
            We are not an outside vendor — we are part of the CFC community,
            building technology from a place of understanding, respect, and
            shared mission.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {alignmentPoints.map((point) => {
            const Icon = point.icon;
            return (
              <Card key={point.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="collaboration">
        <SectionHeader>
          <div className="inline-flex items-center gap-2 text-accent-600 bg-accent-50 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Proposed Collaboration
          </div>
          <SectionTitle>A Phased Approach to Partnership</SectionTitle>
          <SectionDescription>
            A structured, low-risk collaboration that delivers value at every
            stage while building trust and demonstrating impact.
          </SectionDescription>
        </SectionHeader>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card key={phase.number}>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1 flex lg:justify-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white font-bold text-xl flex-shrink-0">
                      {phase.number}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Phase {phase.number}: {phase.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {phase.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader>
          <SectionTitle>Platform Capabilities</SectionTitle>
          <SectionDescription>
            A comprehensive technology suite designed specifically for the way
            CFC operates
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title} hover>
                <CardContent>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section variant="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Explore This Together
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            We would welcome the opportunity to present this vision to CFC USA
            leadership and discuss how we can serve the community through
            technology. No commitment required — just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              <HeartHandshake className="w-5 h-5 mr-2" />
              Start the Conversation
            </Button>
            <Button
              href="/solutions"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View Full Platform
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
