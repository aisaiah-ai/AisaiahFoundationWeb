"use client";

import { motion } from "framer-motion";
import { Shield, Users, Sparkles, Heart } from "lucide-react";
import { trustContent } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Shield, Users, Sparkles, Heart };

export function TrustBar() {
  const { headline, items } = trustContent;

  return (
    <section id="trust" aria-label="Trusted by faith communities" className="relative border-y border-slate-200/60 bg-slate-50/80 py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500"
        >
          {headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
