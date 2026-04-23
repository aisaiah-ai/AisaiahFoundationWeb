"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeFAQs } from "@/content/features";
import { getFAQSchema } from "@/lib/structured-data";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = getFAQSchema(homeFAQs);

  return (
    <Section variant="muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHeader>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionDescription>
          Common questions about Aisaiah Foundation, our platform, and how we
          partner with faith communities.
        </SectionDescription>
      </SectionHeader>

      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
          {homeFAQs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "transition-colors",
                index !== 0 && "border-t border-white/5",
                openIndex === index && "bg-purple-500/10"
              )}
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200",
                    openIndex === index
                      ? "bg-purple-500/10 text-purple-400 rotate-180"
                      : "bg-white/10 text-slate-500"
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-slate-300 leading-relaxed pr-16">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
