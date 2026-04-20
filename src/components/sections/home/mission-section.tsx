"use client";

import { motion } from "framer-motion";
import { Lightbulb, Lock, Cpu } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Faith meets innovation",
    description:
      "You deserve better tools to grow in your faith. We build them with the same care and quality you'd expect from the best.",
  },
  {
    icon: Lock,
    title: "Privacy as a principle",
    description:
      "No ads. No data selling. Your spiritual life is sacred, and we protect your data — always.",
  },
  {
    icon: Cpu,
    title: "Accessible to all",
    description:
      "Every community deserves tools for prayer, reflection, and service — regardless of size or budget.",
  },
];

export function MissionSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
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
              Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
              Why AIsaiah exists
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Helping people build a daily relationship with God through prayer,
              reflection, and service. AIsaiah Foundation is a 501(c)(3)
              nonprofit building accessible tools so every person and every
              community can grow in faith — through modern digital experiences.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Rooted in the Catholic faith and Couples for Christ, open to all
              Christian communities.
            </p>
          </motion.div>

          {/* Right — Value cards */}
          <div className="space-y-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 transition-all duration-300 hover:shadow-md hover:border-slate-200"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
