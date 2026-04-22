"use client";

import { motion } from "framer-motion";
import { Download, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppPreviewCard } from "./app-preview-card";
import { heroContent } from "@/content/homepage";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export function HeroSection() {
  const {
    badge,
    headline,
    headlineAccent,
    subheadline,
    primaryCTA,
    secondaryCTA,
    supportingLine,
    appScreens,
  } = heroContent;

  const headlineBase = headline.replace(headlineAccent, "").trimEnd();

  return (
    <section
      id="hero"
      aria-label="AIsaiah — daily prayer, reflection, and service"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(37,99,235,0.12),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Copy + CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div custom={0} variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                {badge}
              </span>
            </motion.div>

            <motion.h1
              custom={0.12}
              variants={fadeInUp}
              className="mt-8 max-w-xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {headlineBase}{" "}
              <span className="text-gradient">{headlineAccent}</span>
            </motion.h1>

            <motion.p
              custom={0.24}
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              {subheadline}
            </motion.p>

            <motion.div
              custom={0.36}
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href={primaryCTA.href} variant="accent" size="lg">
                <Download className="mr-2 h-4 w-4" />
                {primaryCTA.label}
              </Button>
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
              >
                <Handshake className="mr-2 h-4 w-4" />
                {secondaryCTA.label}
              </Button>
            </motion.div>

            <motion.p
              custom={0.48}
              variants={fadeInUp}
              className="mt-6 max-w-md text-sm leading-relaxed text-slate-400"
            >
              {supportingLine}
            </motion.p>
          </motion.div>

          {/* Right column — Real app screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start lg:-ml-4"
            aria-hidden="true"
          >
            {/* Center glow — teal, behind Reflect card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[#1AAE9F]/15 blur-[120px] animate-glow-pulse" />
            {/* Secondary glow — violet accent */}
            <div className="absolute top-1/3 right-1/4 w-[180px] h-[180px] rounded-full bg-violet-500/8 blur-[90px]" />

            {/* 3-card overlapping stack with visual hierarchy */}
            <div className="relative flex items-end justify-center">
              {/* Left — Prayer (recessed, rotated) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="-mr-10 sm:-mr-8 -rotate-6 z-10 mb-6 scale-[0.92] opacity-80"
              >
                <AppPreviewCard
                  screen={appScreens[0]}
                  size="sm"
                  className="shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
                  priority
                />
              </motion.div>

              {/* Center — Reflect (dominant, front, sharp) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 scale-[1.02]"
              >
                <AppPreviewCard
                  screen={appScreens[1]}
                  size="md"
                  className="shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
                  priority
                />
              </motion.div>

              {/* Right — Serve (recessed, rotated) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="-ml-10 sm:-ml-8 rotate-6 z-10 mb-6 scale-[0.92] opacity-80"
              >
                <AppPreviewCard
                  screen={appScreens[2]}
                  size="sm"
                  className="shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
