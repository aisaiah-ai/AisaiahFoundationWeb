import { Star, Handshake, Heart } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const iconMap = { Star, Handshake, Heart } as const;

const tiers = [
  {
    icon: "Star" as const,
    title: "Founding Partners",
    description:
      "Shape our platform from the ground up. Founding partners influence the product roadmap and receive dedicated implementation support.",
  },
  {
    icon: "Handshake" as const,
    title: "Strategic Partners",
    description:
      "Adopt the Aisaiah platform for your organization's events, community engagement, and spiritual growth initiatives.",
  },
  {
    icon: "Heart" as const,
    title: "Community Partners",
    description:
      "Support our mission through donations, volunteering, and advocacy. Every contribution helps bring better technology to faith communities.",
  },
];

export function PartnershipsPreview() {
  return (
    <Section variant="dark">
      <SectionHeader className="max-w-4xl">
        <SectionTitle className="text-white">
          Built for partnership. Open to every faith community.
        </SectionTitle>
        <SectionDescription className="text-slate-300">
          Rooted in the Catholic faith and Couples for Christ, Aisaiah Foundation
          partners with churches, ministries, and organizations across the
          Christian community to bring purpose-built technology to the people who
          need it most.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map((tier) => {
          const Icon = iconMap[tier.icon];
          return (
            <div
              key={tier.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/50 p-8 text-center backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600/20 text-primary-400">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white">{tier.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {tier.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button href="/partnerships" variant="accent" size="lg">
          Explore Partnership Opportunities
        </Button>
      </div>
    </Section>
  );
}
