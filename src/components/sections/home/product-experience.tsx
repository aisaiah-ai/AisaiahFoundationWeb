"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppPreviewCard } from "./app-preview-card";
import { SectionHeading } from "./section-heading";
import { experienceContent } from "@/content/homepage";

export function ProductExperience() {
  const { eyebrow, headline, subheadline, showcaseImage, steps, cta } =
    experienceContent;

  return (
    <section
      id="daily-rhythm"
      aria-label="Daily spiritual rhythm"
      className="relative overflow-hidden py-28 md:py-36 bg-slate-950"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-primary-600/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/6 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          variant="dark"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Phone showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-primary-500/10 blur-[80px] animate-glow-pulse" />
            <AppPreviewCard
              screen={showcaseImage}
              size="lg"
              className="animate-breathe shadow-[0_30px_80px_-20px_rgba(13,148,136,0.3)] ring-1 ring-primary-400/20"
            />
          </motion.div>

          {/* Right — Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/15 to-purple-500/10 border border-primary-500/20">
                  <span className="text-sm font-bold text-primary-400">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <Button
                href={cta.href}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-primary-600 text-white shadow-lg shadow-purple-900/20 hover:from-purple-700 hover:to-primary-700 rounded-full"
              >
                {cta.label}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
