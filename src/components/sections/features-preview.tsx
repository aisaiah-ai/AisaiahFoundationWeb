"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  Users,
  LayoutDashboard,
} from "lucide-react";
import { platformFeatures } from "@/content/features";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  ClipboardList,
  CalendarCheck,
  ScanLine,
  BarChart3,
  Users,
  LayoutDashboard,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function FeaturesPreview() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Platform Capabilities Built For Ministry Operations</SectionTitle>
        <SectionDescription>
          Move from manual coordination to one connected operating system
          designed for faith-based communities.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          const isHero = i === 0;
          return (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className={cn(isHero && "sm:col-span-2 lg:col-span-1")}
            >
              <Card hover className={cn("h-full", isHero && "lg:border-primary-200 lg:shadow-md")}>
                <CardContent className={cn("flex flex-col gap-4", isHero ? "p-8" : "p-6")}>
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-xl",
                      isHero
                        ? "h-14 w-14 bg-gradient-to-br from-primary-500 to-accent-500 text-white"
                        : "h-12 w-12 bg-primary-50 text-primary-600"
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn(isHero ? "h-7 w-7" : "h-6 w-6")}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <h3
                    className={cn(
                      "font-semibold text-slate-900",
                      isHero ? "text-xl" : "text-lg"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Workflow highlights with improved contrast */}
      <div className="mt-12 grid gap-4 rounded-2xl bg-slate-950 p-6 md:p-8 text-white md:grid-cols-3">
        {[
          {
            title: "Registration to attendance",
            description:
              "Give leaders a clean view of who is coming, who checked in, and what needs follow-up.",
          },
          {
            title: "Speaker, schedule, and session flow",
            description:
              "Support the event experience from planning through day-of execution without spreadsheet overload.",
          },
          {
            title: "Board-ready reporting",
            description:
              "Turn scattered operational data into trustworthy summaries for leadership conversations and partnership reviews.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.1]"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/solutions" variant="outline" size="lg">
          Review The Full Platform
        </Button>
      </div>
    </Section>
  );
}
