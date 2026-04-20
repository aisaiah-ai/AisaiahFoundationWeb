"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trustHighlights } from "@/content/site";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36",
        "bg-slate-950"
      )}
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left: messaging */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div custom={0} variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-200 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Free on iOS &amp; Android
              </span>
            </motion.div>

            <motion.h1
              custom={0.15}
              variants={fadeInUp}
              className="mt-8 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Struggling to stay consistent in your{" "}
              <span className="text-gradient">faith?</span>
            </motion.h1>

            <motion.p
              custom={0.3}
              variants={fadeInUp}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              AIsaiah helps you build daily habits of prayer, reflection, and
              service — so your relationship with God grows every day.
            </motion.p>

            <motion.div
              custom={0.45}
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5"
            >
              <Button
                href="https://apps.apple.com/us/app/aisaiah/id6751301980"
                variant="accent"
                size="lg"
              >
                Download for iOS
              </Button>
              <Button
                href="https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness"
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"
              >
                Get it on Google Play
              </Button>
            </motion.div>

            <motion.div
              custom={0.6}
              variants={fadeInUp}
              className="mt-16 grid w-full max-w-4xl gap-4 sm:grid-cols-3"
            >
              {trustHighlights.map((highlight) => (
                <div
                  key={highlight.value}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1] hover:border-white/20"
                >
                  <div className="text-2xl font-semibold text-white">
                    {highlight.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: app screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex items-end gap-4"
          >
            <div className="relative w-[180px] h-[380px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/Screen3.jpg"
                alt="AIsaiah spiritual growth dashboard showing Prayer, Reflection, and Service rings"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
            <div className="relative w-[180px] h-[380px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 -mb-8">
              <Image
                src="/images/Screen5.jpg"
                alt="Aisaiah daily Scripture readings with First Reading, Psalm, and Gospel"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
