"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { finalCTAContent } from "@/content/homepage";

export function FinalCTA() {
  const { eyebrow, headline, description, primaryCTA, secondaryCTA } =
    finalCTAContent;

  return (
    <section id="download" aria-label="Download AIsaiah" className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-600/10 blur-[100px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300 mb-5">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
