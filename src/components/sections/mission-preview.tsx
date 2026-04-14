import { Heart, Eye, Shield, ArrowRight } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Heart,
    label: "Mission",
    text: "To bridge faith and technology, empowering churches, ministries, and faith-based organizations with innovative digital solutions rooted in service.",
  },
  {
    icon: Eye,
    label: "Vision",
    text: "A world where every faith community has access to modern technology that strengthens their mission, deepens spiritual growth, and connects believers.",
  },
  {
    icon: Shield,
    label: "Values",
    text: "Privacy-first. Community-driven. Mission-focused. Built with integrity and guided by faith.",
  },
] as const;

export function MissionPreview() {
  return (
    <Section variant="muted">
      <SectionHeader className="max-w-4xl">
        <SectionTitle>Why This Foundation Exists</SectionTitle>
        <SectionDescription>
          Aisaiah is not positioning itself as just another software vendor. We
          exist to help ministry leaders serve people better with tools that are
          faithful, practical, and ready to grow with the community.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Card className="surface-panel">
          <CardContent className="p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
              Our approach
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-slate-950">
              Mission-first. Capability-proven. Community-tested.
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Ministry leaders don&apos;t need another abstract pitch about digital
                transformation. They need a partner who understands ministry
                realities, protects community trust, and can actually deliver.
              </p>
              <p>
                That is where Aisaiah stands out: faith-rooted leadership with
                deep experience in Couples for Christ, real platform thinking,
                and a phased path from pilot program to scalable support for
                communities of any size.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/about" variant="primary">
                Learn Our Story
              </Button>
              <Button href="/board" variant="outline">
                Meet Our Leadership
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          {pillars.map((pillar) => (
            <Card key={pillar.label} className="h-full">
              <CardContent className="flex h-full flex-col gap-4 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  <pillar.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {pillar.label}
                </h3>
                <p className="text-slate-600 leading-relaxed">{pillar.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white p-6 md:grid-cols-3">
        {[
          "Rooted in the Catholic faith and Couples for Christ, open to all Christian communities.",
          "Technology governed by a 501(c)(3) nonprofit mandate — mission over profit.",
          "Every feature built around real ministry workflows and volunteer-driven operations.",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <ArrowRight className="mt-0.5 h-5 w-5 text-primary-600" />
            <p className="text-sm leading-relaxed text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
