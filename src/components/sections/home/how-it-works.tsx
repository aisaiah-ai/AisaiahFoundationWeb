"use client";

import { motion } from "framer-motion";
import { Download, Clock, TrendingUp } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { howItWorksContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Download, Clock, TrendingUp };

export function HowItWorks() {
  const { eyebrow, headline, steps } = howItWorksContent;

  return (
    <section id="how-it-works" aria-label="How to get started" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          headline={headline}
          className="max-w-2xl"
        />

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
                    className="hidden md:block absolute top-10 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-primary-300 to-primary-100"
                    aria-hidden="true"
                  />
                )}

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 shadow-sm">
                  {Icon && (
                    <Icon
                      className="h-8 w-8 text-primary-600"
                      strokeWidth={1.5}
                    />
                  )}
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white shadow-sm">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed max-w-xs">
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
