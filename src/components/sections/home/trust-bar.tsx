"use client";

import { motion } from "framer-motion";
import { Shield, Users, Sparkles, Heart } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "501(c)(3) Nonprofit" },
  { icon: Users, label: "Faith Communities" },
  { icon: Sparkles, label: "AI-Powered" },
  { icon: Heart, label: "Privacy-First" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-slate-200/60 bg-slate-50/80 py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500"
        >
          Used in faith communities, ministries, and event-based spiritual
          formation experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-slate-700">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
