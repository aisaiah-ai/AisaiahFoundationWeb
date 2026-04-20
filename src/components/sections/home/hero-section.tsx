"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0">
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
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Free on iOS & Android
              </span>
            </motion.div>

            <motion.h1
              custom={0.12}
              variants={fadeInUp}
              className="mt-8 max-w-xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Struggling to stay consistent in your{" "}
              <span className="text-gradient">faith?</span>
            </motion.h1>

            <motion.p
              custom={0.24}
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              AIsaiah helps you build daily habits of prayer, reflection, and
              service — so your relationship with God grows every day.
            </motion.p>

            <motion.div
              custom={0.36}
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                href="https://apps.apple.com/us/app/aisaiah/id6751301980"
                variant="accent"
                size="lg"
              >
                Download the App
              </Button>
              <Button
                href="/partnerships"
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
              >
                For Churches & Events
              </Button>
            </motion.div>

            <motion.p
              custom={0.48}
              variants={fadeInUp}
              className="mt-6 max-w-md text-sm leading-relaxed text-slate-400"
            >
              Built for individuals, ministries, and faith communities seeking
              deeper daily spiritual habits.
            </motion.p>
          </motion.div>

          {/* Right column — App showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind devices */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary-500/15 blur-[100px] animate-glow-pulse" />

            <div className="relative flex items-end gap-4 md:gap-5">
              {/* Screen 1 — Prayer */}
              <div className="relative w-[140px] h-[290px] sm:w-[160px] sm:h-[330px] md:w-[180px] md:h-[370px] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 animate-float-delayed">
                <Image
                  src="/images/Screen2.jpg"
                  alt="AIsaiah daily prayer screen"
                  fill
                  className="object-cover"
                  sizes="180px"
                  priority
                />
              </div>

              {/* Screen 2 — Dashboard (center, taller) */}
              <div className="relative w-[160px] h-[320px] sm:w-[180px] sm:h-[370px] md:w-[200px] md:h-[410px] rounded-[1.75rem] overflow-hidden shadow-2xl border border-white/15 ring-1 ring-primary-400/20 animate-float -mb-4">
                <Image
                  src="/images/Screen3.jpg"
                  alt="AIsaiah spiritual growth dashboard with Prayer, Reflection, and Service rings"
                  fill
                  className="object-cover"
                  sizes="200px"
                  priority
                />
              </div>

              {/* Screen 3 — Scripture */}
              <div className="hidden sm:block relative w-[160px] h-[330px] md:w-[180px] md:h-[370px] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 animate-float-delayed">
                <Image
                  src="/images/Screen5.jpg"
                  alt="AIsaiah daily Scripture readings"
                  fill
                  className="object-cover"
                  sizes="180px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
