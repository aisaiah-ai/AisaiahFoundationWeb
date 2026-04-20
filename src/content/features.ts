import type { Feature, FAQ } from "@/types";

export const appFeatures: Feature[] = [
  {
    title: "Guided Prayer",
    description:
      "Start each day with AI-guided prayer grounded in authentic Church teaching. Build a prayer habit that grows with you.",
    icon: "Heart",
  },
  {
    title: "Scripture & Reflection",
    description:
      "Read daily Scripture — First Reading, Psalm, and Gospel — and reflect on how God's Word speaks to your life today.",
    icon: "BookOpen",
  },
  {
    title: "Spiritual Growth Tracking",
    description:
      "Track your daily habits with three rings — Prayer, Reflection, and Service — and see how your faith grows over time.",
    icon: "Target",
  },
  {
    title: "Rosary & Devotions",
    description:
      "Pray the Rosary step by step, explore devotions, and deepen your relationship with God at your own pace.",
    icon: "Sparkles",
  },
  {
    title: "Journal & Reflect",
    description:
      "Write personal reflections, capture spiritual insights, and revisit how God has been working in your life.",
    icon: "PenLine",
  },
  {
    title: "Growth Insights",
    description:
      "See your progress daily, weekly, and monthly. Build lasting habits of prayer, reflection, and service.",
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
    question: "What is AIsaiah?",
    answer:
      "AIsaiah is a free app that helps you build a daily relationship with God through prayer, reflection, and service. Available on iOS and Android, it guides you through daily prayer, Scripture, journaling, and spiritual growth tracking.",
  },
  {
    question: "How does the spiritual growth tracking work?",
    answer:
      "The app tracks three areas of your faith life — Prayer, Reflection, and Service — using activity rings you can check daily, weekly, and monthly. It helps you build consistent habits and see your growth over time.",
  },
  {
    question: "Can I use the app for church events?",
    answer:
      "Yes! AIsaiah includes event registration, RSVP management, and contactless check-in with NFC or QR codes. It's built for conferences, retreats, and gatherings of all sizes.",
  },
  {
    question: "Is the app free?",
    answer:
      "Completely free. You can start using it as a guest without creating an account, or sign up to sync your progress across devices.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Your spiritual life is sacred, and we treat your data the same way. No ads, no data selling. Your reflections and personal information are encrypted and private.",
  },
  {
    question: "Is this only for Catholics?",
    answer:
      "AIsaiah is rooted in the Catholic faith and Couples for Christ, but it's built to serve all Christian communities. Churches, ministries, and faith-based organizations of any size and denomination are welcome.",
  },
];
