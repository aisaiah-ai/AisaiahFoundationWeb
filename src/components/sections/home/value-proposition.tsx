"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, HandHeart } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Pray",
    description:
      "Start each day connecting with God. Guided prayer experiences help you build a consistent, meaningful prayer life.",
    gradient: "from-rose-500/10 to-primary-500/10",
    iconBg: "bg-rose-50 text-rose-600",
    border: "border-rose-200/40",
  },
  {
    icon: BookOpen,
    title: "Reflect",
    description:
      "Engage with daily Scripture, journal your thoughts, and let God's Word shape how you see the world.",
    gradient: "from-primary-500/10 to-accent-500/10",
    iconBg: "bg-primary-50 text-primary-600",
    border: "border-primary-200/40",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description:
      "Live your faith through action. Track acts of service and see how daily choices connect to spiritual growth.",
    gradient: "from-accent-500/10 to-violet-500/10",
    iconBg: "bg-accent-50 text-accent-600",
    border: "border-accent-200/40",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function ValueProposition() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">
            Core Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950">
            Three ways to grow in your{" "}
            <span className="text-gradient">faith</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Three pillars of daily faith, woven into one simple rhythm.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className={`group relative rounded-3xl border ${feature.border} bg-gradient-to-br ${feature.gradient} p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
