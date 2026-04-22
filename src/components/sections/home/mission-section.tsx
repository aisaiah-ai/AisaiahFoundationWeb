"use client";

import { motion } from "framer-motion";
import { Lightbulb, Lock, Cpu } from "lucide-react";
import { missionContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Lightbulb, Lock, Cpu };

export function MissionSection() {
  const { eyebrow, headline, body, values } = missionContent;

  return (
    <section id="mission" aria-label="Our mission" className="relative py-28 md:py-36 bg-slate-950">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary-600/5 blur-[150px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
              {headline}
            </h2>
            {body.map((paragraph, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-6" : "mt-4"} text-lg text-slate-300 leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

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
                  className="flex gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-primary-500/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.5} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-400 leading-relaxed">
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
