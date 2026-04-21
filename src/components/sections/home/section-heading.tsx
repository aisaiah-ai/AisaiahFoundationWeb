"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  subheadline?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  headline,
  headlineAccent,
  subheadline,
  variant = "light",
  className,
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  // Split headline at accent word if provided
  const headlineBase = headlineAccent
    ? headline.replace(headlineAccent, "").trimEnd()
    : headline;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mx-auto max-w-3xl text-center mb-16", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em] mb-4",
            isDark ? "text-primary-300" : "text-primary-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight",
          isDark ? "text-white" : "text-slate-950"
        )}
      >
        {headlineAccent ? (
          <>
            {headlineBase}{" "}
            <span className="text-gradient">{headlineAccent}</span>
          </>
        ) : (
          headline
        )}
      </h2>
      {subheadline && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subheadline}
        </p>
      )}
    </motion.div>
  );
}
