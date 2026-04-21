"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialContent } from "@/content/homepage";

export function Testimonials() {
  const { quotes } = testimonialContent;
  const featured = quotes[0];

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
            &ldquo;{featured.text}&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="font-semibold text-slate-800">{featured.author}</p>
            <p className="text-sm text-slate-500">{featured.role}</p>
          </div>

          {/* Pagination dots — ready for multiple testimonials */}
          <div className="mt-12 flex justify-center gap-2">
            {quotes.map((_, i) => (
              <span
                key={i}
                className={
                  i === 0
                    ? "h-2 w-8 rounded-full bg-primary-500"
                    : "h-2 w-2 rounded-full bg-slate-300"
                }
              />
            ))}
            {quotes.length === 1 && (
              <>
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
