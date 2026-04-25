"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppPreviewCard } from "./app-preview-card";
import { heroContent } from "@/content/homepage";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

export function HeroSection() {
  const {
    badge,
    headline,
    headlineLine2,
    subheadline,
    primaryCTA,
    googlePlayCTA,
    secondaryCTA,
    supportingLine,
    appScreens,
  } = heroContent;

  return (
    <section
      id="hero"
      aria-label="AIsaiah — strengthen your faith, live it daily"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36"
      style={{ background: "var(--gradient-spiritual)" }}
    >
      {/* Atmospheric layers */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Purple pray glow — top left */}
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-purple-600/12 blur-[150px]" />
        {/* Teal reflect glow — center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-[120px]" />
        {/* Gold serve glow — bottom right */}
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-gold-500/8 blur-[130px]" />
        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse"
                  aria-hidden="true"
                />
                {badge}
              </span>
            </motion.div>

            <motion.h1
              custom={0.12}
              variants={fadeInUp}
              className="mt-8 max-w-xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl !leading-[1.1]"
            >
              {headline}
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-primary-400 to-gold-400 bg-clip-text text-transparent">
                {headlineLine2}
              </span>
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
              className="mt-10 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/images/badge-appstore.png"
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </a>
                <a
                  href={googlePlayCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/images/badge-googleplay.png"
                    alt="Get it on Google Play"
                    width={150}
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </a>
              </div>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center h-[50px] px-6 rounded-lg border border-white/20 bg-white/5 text-white text-sm font-semibold transition-all hover:bg-white/10 hover:border-white/30"
              >
                {secondaryCTA.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.p
              custom={0.48}
              variants={fadeInUp}
              className="mt-6 max-w-md text-sm leading-relaxed text-slate-400/80"
            >
              {supportingLine}
            </motion.p>
          </motion.div>

          {/* Right column — App screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
            aria-hidden="true"
          >
            {/* Glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-purple-500/15 blur-[120px] animate-glow-pulse" />
            <div className="absolute top-1/3 right-1/4 w-[180px] h-[180px] rounded-full bg-primary-400/10 blur-[80px]" />

            {/* 3-card overlapping stack */}
            <div className="relative flex items-end justify-center">
              {/* Left — Prayer (purple accent) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="-mr-10 sm:-mr-8 -rotate-6 z-10 mb-6 scale-[0.92] opacity-80"
              >
                <AppPreviewCard
                  screen={appScreens[0]}
                  size="sm"
                  className="shadow-[0_20px_60px_-20px_rgba(147,51,234,0.3)] ring-1 ring-purple-500/20"
                  priority
                />
              </motion.div>

              {/* Center — Reflect (teal accent, dominant) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 scale-[1.02]"
              >
                <AppPreviewCard
                  screen={appScreens[1]}
                  size="md"
                  className="shadow-[0_30px_80px_-20px_rgba(13,148,136,0.4)] ring-1 ring-primary-400/30"
                  priority
                />
              </motion.div>

              {/* Right — Serve (gold accent) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="-ml-10 sm:-ml-8 rotate-6 z-10 mb-6 scale-[0.92] opacity-80"
              >
                <AppPreviewCard
                  screen={appScreens[2]}
                  size="sm"
                  className="shadow-[0_20px_60px_-20px_rgba(217,119,6,0.3)] ring-1 ring-gold-500/20"
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
