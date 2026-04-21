"use client";

import { motion } from "framer-motion";
import { Church, Users, BookOpen, Calendar, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { communityContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Church,
  Users,
  BookOpen,
  Calendar,
  Compass,
};

export function PartnershipsCTA() {
  const { eyebrow, headline, description, primaryCTA, secondaryCTA, useCases } =
    communityContent;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-primary-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300 mb-4">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              {headline}
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={primaryCTA.href} variant="accent" size="lg">
                {primaryCTA.label}
              </Button>
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
              >
                {secondaryCTA.label}
              </Button>
            </div>
          </motion.div>

          {/* Right — Use case cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
          >
            {useCases.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-600"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.5} />}
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
