"use client";

import { motion } from "framer-motion";
import { Lightbulb, Lock, Cpu } from "lucide-react";
import { missionContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Lightbulb, Lock, Cpu };

export function MissionSection() {
  const { eyebrow, headline, body, values } = missionContent;

  return (
    <section id="mission" aria-label="Our mission" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
              {headline}
            </h2>
            {body.map((paragraph, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-6" : "mt-4"} text-lg text-slate-600 leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right — Value cards */}
          <div className="space-y-6">
            {values.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 transition-all duration-300 hover:shadow-md hover:border-slate-200"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.5} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
