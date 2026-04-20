"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DonationCTA() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
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
            Support the mission
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Help us bring tools for prayer, reflection, and service to more
            people around the world. Your support directly funds the technology
            that helps communities grow in faith.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              Tax-deductible
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              501(c)(3) nonprofit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              100% mission-driven
            </span>
          </div>

          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Support AIsaiah
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
