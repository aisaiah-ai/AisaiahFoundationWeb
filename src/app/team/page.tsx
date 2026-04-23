import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/team/team-card";
import { teamMembers } from "@/content/team-members";
import {
  getBreadcrumbSchema,
  getPersonSchema,
  getWebPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind AIsaiah Foundation — builders and ministry leaders passionate about helping people grow in faith through technology.",
  openGraph: {
    title: "Our Team | Aisaiah Foundation",
    description:
      "Meet the people building tools for prayer, reflection, and service.",
  },
};

export default function TeamPage() {
  const personSchemas = teamMembers.map((member) =>
    getPersonSchema({
      name: member.name,
      title: member.title,
      bio: member.bio,
      knowsAbout: member.focusAreas,
    })
  );
  const pageSchema = getWebPageSchema({
    title: "Our Team",
    description: metadata.description as string,
    path: "/team",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema, ...personSchemas]} />
      <PageHero
        eyebrow="The team"
        title="The people building AIsaiah."
        description="We combine engineering expertise with real ministry experience. We build tools for prayer, reflection, and service because we've lived the challenges faith communities face every day."
        actions={[
          { label: "Meet Our Board", href: "/board", variant: "primary" },
          { label: "Join Us", href: "/contact", variant: "outline", className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10" },
        ]}
      />

      <Section>
        <SectionHeader>
          <SectionTitle>Leadership & Builders</SectionTitle>
          <SectionDescription>
            Passionate about helping people grow in faith through technology.
          </SectionDescription>
        </SectionHeader>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Want to contribute?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            We&apos;re looking for people who share our mission — engineers,
            designers, ministry leaders, and anyone who believes people deserve
            better tools to grow in faith.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
