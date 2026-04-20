"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
              <Quote className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 leading-snug">
            &ldquo;This helped me pray consistently again. It changed my daily
            routine and brought me closer to God in a way I didn&rsquo;t expect.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="font-semibold text-slate-800">Early App User</p>
            <p className="text-sm text-slate-500">
              Couples for Christ Community Member
            </p>
          </div>

          {/* Placeholder for future testimonials */}
          <div className="mt-12 flex justify-center gap-2">
            <span className="h-2 w-8 rounded-full bg-primary-500" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
