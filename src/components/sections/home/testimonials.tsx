"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialContent } from "@/content/homepage";

export function Testimonials() {
  const { quotes } = testimonialContent;
  const featured = quotes[0];

  return (
    <section
      id="testimonials"
      aria-label="What people are saying"
      className="relative py-28 md:py-36 bg-slate-950"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/6 blur-[150px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
              <Quote className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-snug">
            &ldquo;{featured.text}&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="font-semibold text-slate-200">{featured.author}</p>
            <p className="text-sm text-slate-500">{featured.role}</p>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {quotes.map((_, i) => (
              <span
                key={i}
                className={i === 0 ? "h-2 w-8 rounded-full bg-purple-500" : "h-2 w-2 rounded-full bg-slate-700"}
              />
            ))}
            {quotes.length === 1 && (
              <>
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
