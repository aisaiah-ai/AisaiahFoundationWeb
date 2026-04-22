"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, HandHeart } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { valueContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = { Heart, BookOpen, HandHeart };

const pillarStyles = {
  purple: {
    gradient: "from-purple-500/12 to-purple-900/8",
    iconBg: "bg-purple-500/15 text-purple-400",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
    accent: "text-purple-400",
  },
  primary: {
    gradient: "from-primary-500/12 to-primary-900/8",
    iconBg: "bg-primary-500/15 text-primary-400",
    border: "border-primary-500/20",
    glow: "group-hover:shadow-primary-500/10",
    accent: "text-primary-400",
  },
  gold: {
    gradient: "from-gold-500/12 to-gold-900/8",
    iconBg: "bg-gold-500/15 text-gold-400",
    border: "border-gold-500/20",
    glow: "group-hover:shadow-gold-500/10",
    accent: "text-gold-400",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export function ValueProposition() {
  const { eyebrow, headline, subheadline, pillars } = valueContent;

  return (
    <section
      id="pillars"
      aria-label="Prayer, Reflection, and Service"
      className="relative py-28 md:py-36"
      style={{ background: "var(--gradient-spiritual)" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gold-500/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          variant="dark"
        />

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            const styles = pillarStyles[pillar.color];
            return (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className={cn(
                  "group relative rounded-3xl border p-8 md:p-10",
                  "bg-gradient-to-br backdrop-blur-sm",
                  "transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl",
                  styles.gradient,
                  styles.border,
                  styles.glow
                )}
              >
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl",
                    "transition-transform duration-300 group-hover:scale-110",
                    styles.iconBg
                  )}
                >
                  {Icon && <Icon className="h-7 w-7" strokeWidth={1.5} />}
                </div>
                <h3 className={cn("mt-6 font-display text-2xl font-semibold", styles.accent)}>
                  {pillar.title}
                </h3>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
