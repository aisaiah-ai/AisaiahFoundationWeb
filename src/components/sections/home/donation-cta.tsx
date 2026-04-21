"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { donationContent } from "@/content/homepage";

export function DonationCTA() {
  const { headline, description, trustMarkers, cta } = donationContent;

  return (
    <section id="support" aria-label="Support the mission" className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-white p-10 md:p-14 text-center shadow-sm"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
              <Heart className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
            {headline}
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            {trustMarkers.map((marker) => (
              <span key={marker} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                {marker}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Button href={cta.href} variant="primary" size="lg">
              {cta.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
