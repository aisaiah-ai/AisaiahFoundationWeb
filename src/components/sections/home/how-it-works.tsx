"use client";

import { motion } from "framer-motion";
import { Download, Clock, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "1",
    title: "Download the app",
    description: "Free on iOS and Android. No account required to get started.",
  },
  {
    icon: Clock,
    step: "2",
    title: "Set your daily rhythm",
    description:
      "Choose your prayer time, select your devotions, and personalize your experience.",
  },
  {
    icon: TrendingUp,
    step: "3",
    title: "Grow in faith every day",
    description:
      "Build lasting habits of prayer, reflection, and service — and watch your faith grow.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
            Get Started
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950">
            Start in minutes
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-primary-300 to-primary-100" />
              )}

              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 shadow-sm">
                <item.icon
                  className="h-8 w-8 text-primary-600"
                  strokeWidth={1.5}
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}
