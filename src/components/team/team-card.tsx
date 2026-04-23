import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const gradients = [
  "bg-gradient-to-br from-purple-600 to-purple-800",
  "bg-gradient-to-br from-primary-600 to-primary-800",
  "bg-gradient-to-br from-purple-700 to-primary-600",
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
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-purple-400 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-purple-400 text-sm font-medium">
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

        <p className="mt-5 text-sm text-slate-300 leading-relaxed">
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
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
