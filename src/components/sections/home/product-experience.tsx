"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { experienceContent } from "@/content/homepage";

export function ProductExperience() {
  const { eyebrow, headline, subheadline, showcaseImage, steps, cta } =
    experienceContent;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-primary-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-600/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-300 mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            {headline}
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            {subheadline}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Phone showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-primary-500/10 blur-[80px] animate-glow-pulse" />

            <div className="relative w-[220px] h-[450px] sm:w-[240px] sm:h-[490px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-primary-400/20 animate-breathe">
              <Image
                src={showcaseImage.src}
                alt={showcaseImage.alt}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 border border-primary-500/20">
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
              <Button href={cta.href} variant="accent" size="lg">
                {cta.label}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
