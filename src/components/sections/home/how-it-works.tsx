"use client";

import { motion } from "framer-motion";
import { Download, Clock, TrendingUp } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { howItWorksContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Download, Clock, TrendingUp };
const colors = ["text-purple-400 bg-purple-500/10 border-purple-500/20", "text-primary-400 bg-primary-500/10 border-primary-500/20", "text-gold-400 bg-gold-500/10 border-gold-500/20"];

export function HowItWorks() {
  const { eyebrow, headline, steps } = howItWorksContent;

  return (
    <section
      id="how-it-works"
      aria-label="How to get started"
      className="relative py-28 md:py-36"
      style={{ background: "var(--gradient-spiritual)" }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} headline={headline} variant="dark" className="max-w-2xl" />

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-px bg-gradient-to-r from-white/10 to-white/5"
                    aria-hidden="true"
                  />
                )}

                <div className={`relative flex h-20 w-20 items-center justify-center rounded-3xl border ${colors[i]}`}>
                  {Icon && <Icon className="h-8 w-8" strokeWidth={1.5} />}
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white shadow-sm border border-white/10">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
