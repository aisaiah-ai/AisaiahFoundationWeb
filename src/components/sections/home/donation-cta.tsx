"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { donationContent } from "@/content/homepage";

export function DonationCTA() {
  const { headline, description, trustMarkers, cta } = donationContent;

  return (
    <section
      id="support"
      aria-label="Support the mission"
      className="relative py-28 md:py-36"
      style={{ background: "var(--gradient-spiritual)" }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 md:p-14 text-center backdrop-blur-sm"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400">
              <Heart className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {headline}
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            {trustMarkers.map((marker) => (
              <span key={marker} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                {marker}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Button
              href={cta.href}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-900/30 hover:from-purple-700 hover:to-purple-600 rounded-full"
            >
              {cta.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
