import type { Feature, FAQ } from "@/types";

export const appFeatures: Feature[] = [
  {
    title: "Guided Prayer",
    description:
      "AI-assisted daily prayer guidance with customizable prayer selections grounded in authentic Church teaching.",
    icon: "Heart",
  },
  {
    title: "Scripture Reading",
    description:
      "Daily readings with date navigation — browse up to 3 days back or forward. First Reading, Responsorial Psalm, and Gospel at your fingertips.",
    icon: "BookOpen",
  },
  {
    title: "Spiritual Fitness",
    description:
      "Track your spiritual habits with three activity rings — Pray, Reflect, and Service — and see daily, weekly, and monthly progress.",
    icon: "Target",
  },
  {
    title: "Rosary & Devotions",
    description:
      "Step-by-step Rosary prayer guide and devotions including the Sto. Niño Novena. Pray on your own time, at your own pace.",
    icon: "Sparkles",
  },
  {
    title: "Journal & Reflections",
    description:
      "Record spiritual reflections, personal insights, and prayer intentions in a private journal built for your faith journey.",
    icon: "PenLine",
  },
  {
    title: "Growth Insights",
    description:
      "Personal spiritual analytics with daily, weekly, and monthly breakdowns to help you build habits that last.",
    icon: "TrendingUp",
  },
];

export const eventFeatures: Feature[] = [
  {
    title: "Event Registration",
    description:
      "Streamlined digital registration for conferences, retreats, and community gatherings — all from within the app.",
    icon: "ClipboardList",
  },
  {
    title: "Check-in System",
    description:
      "Fast, contactless check-in with NFC and QR code support. Eliminate long lines and manual headcounts.",
    icon: "ScanLine",
  },
  {
    title: "Event Gallery",
    description:
      "Share and browse event photos within your community. Capture the moments that matter.",
    icon: "Camera",
  },
  {
    title: "RSVP Management",
    description:
      "Real-time RSVP tracking with automated confirmations and reminders. Know exactly who's attending.",
    icon: "CalendarCheck",
  },
  {
    title: "Session Tracking",
    description:
      "Monitor session attendance and generate meaningful participation reports for leadership.",
    icon: "BarChart3",
  },
  {
    title: "Admin Portal",
    description:
      "Comprehensive dashboard for event organizers with real-time analytics, attendee management, and communication tools.",
    icon: "LayoutDashboard",
  },
];

// Keep backward compatibility
export const platformFeatures = eventFeatures;
export const spiritualFeatures = appFeatures;

export const homeFAQs: FAQ[] = [
  {
    question: "What is the Aisaiah app?",
    answer:
      "Aisaiah is a free AI-powered daily faith companion available on iOS and Android. It guides you through prayer, Scripture reading, reflection, and personal spiritual development — all grounded in authentic Catholic Church teaching.",
  },
  {
    question: "How does the Spiritual Fitness tracking work?",
    answer:
      "The app tracks three dimensions of your spiritual life — Pray, Reflect, and Service — using activity rings similar to fitness tracking. You can view your progress daily, weekly, and monthly to build lasting spiritual habits.",
  },
  {
    question: "Can I use the app for event registration and check-in?",
    answer:
      "Yes! The Aisaiah app includes built-in event registration, RSVP management, and contactless check-in using NFC or QR codes. It's designed for conferences, retreats, and community gatherings of all sizes.",
  },
  {
    question: "Is the app free? Do I need to create an account?",
    answer:
      "The app is completely free to download and use. You can access features as a guest without creating an account, or sign up to sync your data across devices and unlock personalized features.",
  },
  {
    question: "How is my data and privacy protected?",
    answer:
      "We are privacy-first: no ads, no data selling. Your spiritual reflections and personal information are encrypted and kept completely private. We only collect minimal data needed to provide our services and comply with all applicable data protection regulations.",
  },
  {
    question: "Can other faith organizations use the platform?",
    answer:
      "Absolutely. While built with deep roots in Couples for Christ and the Catholic community, the Aisaiah app and platform serve churches, parishes, ministries, and faith-based nonprofits of all sizes and denominations.",
  },
];
