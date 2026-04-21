"use client";

import { motion } from "framer-motion";
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
                {primaryCTA.label}
              </Button>
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
              >
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

          {/* Right column — App showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary-500/15 blur-[100px] animate-glow-pulse" />

            <div className="relative flex items-end gap-4 md:gap-5">
              <AppPreviewCard
                screen={appScreens[0]}
                size="sm"
                className="animate-float-delayed"
                priority
              />
              <AppPreviewCard
                screen={appScreens[1]}
                size="md"
                className="animate-float -mb-4"
                priority
              />
              <AppPreviewCard
                screen={appScreens[2]}
                size="sm"
                className="hidden sm:block animate-float-delayed"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
