import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Handshake, Heart, Check } from "lucide-react";
import type { Partnership } from "@/types";

const iconMap = {
  Star,
  Handshake,
  Heart,
} as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>;

interface PartnershipTierProps {
  partnership: Partnership;
}

export function PartnershipTier({ partnership }: PartnershipTierProps) {
  const Icon = iconMap[partnership.icon] ?? Heart;
  const isFeatured = partnership.featured;

  return (
    <Card
      hover
      className={
        isFeatured
          ? "h-full ring-2 ring-purple-500/20 border-purple-500/30"
          : "h-full"
      }
    >
      <CardContent className="flex h-full flex-col p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          {isFeatured && (
            <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {partnership.name}
        </h3>
        <p className="mt-3 text-slate-300 leading-relaxed">
          {partnership.description}
        </p>

        <ul className="mt-6 flex-1 space-y-3">
          {partnership.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {partnership.caseStudySlug ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="accent" size="sm">
                Become a Partner
              </Button>
              <Button
                href={`/partnerships/${partnership.caseStudySlug}`}
                variant="outline"
                size="sm"
              >
                View Case Study
              </Button>
            </div>
          ) : (
            <Button href="/contact" variant="accent" size="sm">
              Get Started
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
