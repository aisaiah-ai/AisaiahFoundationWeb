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
import { boardMembers, boardSeatProfiles } from "@/content/board-members";
import { governancePrinciples } from "@/content/site";
import {
  getBreadcrumbSchema,
  getPersonSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";
import {
  Users,
  Linkedin,
  Heart,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the Board of Directors of the Aisaiah Foundation — experienced professionals rooted in faith and service, guiding our mission to bridge faith and technology for communities worldwide.",
  openGraph: {
    title: "Board of Directors | Aisaiah Foundation",
    description:
      "Meet the experienced professionals guiding the Aisaiah Foundation's mission to empower faith-based communities through technology.",
  },
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const gradients = [
  "bg-gradient-to-br from-primary-600 to-primary-800",
  "bg-gradient-to-br from-accent-600 to-accent-800",
  "bg-gradient-to-br from-primary-700 to-accent-600",
  "bg-gradient-to-br from-accent-700 to-primary-600",
];

export default function BoardPage() {
  const personSchemas = boardMembers.map((member) =>
    getPersonSchema({
      name: member.name,
      title: member.title,
      bio: member.bio,
      knowsAbout: member.focusAreas,
    })
  );
  const pageSchema = getWebPageSchema({
    title: "Board of Directors",
    description: metadata.description as string,
    path: "/board",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Board", path: "/board" },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema, ...personSchemas]} />
      <PageHero
        eyebrow="Leadership and governance"
        title="Led by faith. Guided by stewardship. Built for accountability."
        description="Our board brings together leaders rooted in the Catholic faith and Couples for Christ, committed to transparent governance and mission-driven technology that serves the broader Christian community."
        actions={[
          { label: "Discuss Partnership", href: "/contact", variant: "primary" },
          { label: "Explore Partnerships", href: "/partnerships", variant: "outline", className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10" },
        ]}
        metrics={[
          {
            value: "8 Board Members",
            label: "Officers and directors providing governance and strategic oversight.",
          },
          {
            value: "Faith-rooted",
            label: "Board leadership shaped by Catholic faith and Couples for Christ experience.",
          },
          {
            value: "501(c)(3) Governed",
            label: "Transparent nonprofit governance with mission-driven accountability.",
          },
        ]}
      />

      {/* Officers */}
      <Section variant="muted">
        <SectionHeader>
          <SectionTitle>Board Officers</SectionTitle>
          <SectionDescription>
            The officers responsible for governance, administration, and financial
            stewardship of the Aisaiah Foundation.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boardMembers
            .filter((m) => ["Chairperson", "Secretary", "Treasurer"].includes(m.role))
            .map((member, index) => (
              <Card key={member.name} hover className="h-full">
                <CardContent className="p-6">
                  <div
                    className={cn(
                      "h-16 w-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4",
                      gradients[(index + 1) % gradients.length]
                    )}
                  >
                    {getInitials(member.name)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </Section>

      {/* Directors */}
      <Section>
        <SectionHeader>
          <SectionTitle>Board of Directors</SectionTitle>
          <SectionDescription>
            Directors providing strategic oversight and governance as the
            Foundation serves faith communities through technology.
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers
            .filter((m) => m.role === "Director")
            .map((member, index) => (
              <Card key={member.name} hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={cn(
                        "h-12 w-12 rounded-xl flex items-center justify-center text-white font-semibold text-sm",
                        gradients[(index + 2) % gradients.length]
                      )}
                    >
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium">
                        Director
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-8">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Governance Commitments
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Our leadership is accountable to mission, delivery quality, privacy,
            and stewardship as Aisaiah Foundation grows to serve more communities.
          </p>
          <div className="grid gap-4 text-left md:grid-cols-2">
            {governancePrinciples.map((principle) => (
              <Card key={principle.title}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Governance Or Partnership
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
