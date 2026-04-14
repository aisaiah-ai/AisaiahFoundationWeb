import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const gradients = [
  "bg-gradient-to-br from-primary-600 to-primary-800",
  "bg-gradient-to-br from-accent-600 to-accent-800",
  "bg-gradient-to-br from-primary-700 to-accent-600",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <Card hover className="h-full">
      <CardContent className="p-8">
        <div className="flex items-start gap-5">
          <div
            className={cn(
              "h-16 w-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-white font-bold text-lg",
              gradients[index % gradients.length]
            )}
          >
            {getInitials(member.name)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {member.name}
              </h3>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-primary-600 text-sm font-medium">
              {member.title}
            </p>
            {member.location && (
              <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="h-3 w-3" />
                {member.location}
              </div>
            )}
          </div>
        </div>

        <p className="mt-5 text-sm text-slate-600 leading-relaxed">
          {member.bio}
        </p>

        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Focus areas
          </h4>
          <ul className="mt-2 space-y-1.5">
            {member.focusAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <ArrowRight className="h-3.5 w-3.5 text-primary-600" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
