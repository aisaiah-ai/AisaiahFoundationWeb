"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, HandHeart } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { valueContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Heart, BookOpen, HandHeart };

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function ValueProposition() {
  const { eyebrow, headline, headlineAccent, subheadline, pillars } = valueContent;

  return (
    <section id="pillars" aria-label="Prayer, Reflection, and Service" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          headline={headline}
          headlineAccent={headlineAccent}
          subheadline={subheadline}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className={`group relative rounded-3xl border ${pillar.border} bg-gradient-to-br ${pillar.gradient} p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  {Icon && <Icon className="h-7 w-7" strokeWidth={1.5} />}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
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
