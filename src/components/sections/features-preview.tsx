"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  BookOpen,
  Target,
  Sparkles,
  PenLine,
  TrendingUp,
  ClipboardList,
  ScanLine,
  Calendar,
} from "lucide-react";
import { appFeatures } from "@/content/features";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Heart,
  BookOpen,
  Target,
  Sparkles,
  PenLine,
  TrendingUp,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function FeaturesPreview() {
  return (
    <>
      {/* App Features — Primary */}
      <Section>
        <SectionHeader>
          <SectionTitle>Your Daily Faith Toolkit</SectionTitle>
          <SectionDescription>
            Guided prayer, Scripture, reflection, and service tracking —
            everything you need to build daily habits that help you grow in
            your faith.
          </SectionDescription>
        </SectionHeader>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            const isHero = i === 0;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className={cn(isHero && "sm:col-span-2 lg:col-span-1")}
              >
                <Card hover className={cn("h-full", isHero && "lg:border-primary-200 lg:shadow-md")}>
                  <CardContent className={cn("flex flex-col gap-4", isHero ? "p-8" : "p-6")}>
                    <div
                      className={cn(
                        "flex items-center justify-center rounded-xl",
                        isHero
                          ? "h-14 w-14 bg-gradient-to-br from-primary-500 to-accent-500 text-white"
                          : "h-12 w-12 bg-primary-50 text-primary-600"
                      )}
                    >
                      {Icon && (
                        <Icon
                          className={cn(isHero ? "h-7 w-7" : "h-6 w-6")}
                          strokeWidth={1.5}
                        />
                      )}
                    </div>
                    <h3
                      className={cn(
                        "font-semibold text-slate-900",
                        isHero ? "text-xl" : "text-lg"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* App screenshots row */}
        <div className="mt-16 overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max justify-center">
            {[
              { src: "/images/Screen2.jpg", alt: "Designed for your daily prayer rhythm" },
              { src: "/images/Screen3.jpg", alt: "Spiritual growth dashboard with Prayer, Reflection, and Service rings" },
              { src: "/images/Screen4.jpg", alt: "Spiritual history and weekly breakdown" },
              { src: "/images/Screen5.jpg", alt: "Daily Scripture readings" },
            ].map((screenshot) => (
              <div
                key={screenshot.src}
                className="relative w-[200px] h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/60 flex-shrink-0"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/solutions" variant="outline" size="lg">
            Explore The Full Platform
          </Button>
        </div>
      </Section>

      {/* Event capabilities — Secondary */}
      <Section variant="muted">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 mb-4">
            Also in the app
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Event Management, Built In
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Register for events, check in with NFC or QR codes, and browse event
            galleries — all from the same app you use for daily prayer.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              icon: ClipboardList,
              title: "Registration & RSVP",
              description: "Sign up for conferences, retreats, and gatherings in seconds.",
            },
            {
              icon: ScanLine,
              title: "NFC & QR Check-in",
              description: "Contactless check-in that eliminates lines and manual headcounts.",
            },
            {
              icon: Calendar,
              title: "Schedules & Gallery",
              description: "Browse event schedules, sessions, and share photos with your community.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} hover>
                <CardContent className="flex flex-col items-center text-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
