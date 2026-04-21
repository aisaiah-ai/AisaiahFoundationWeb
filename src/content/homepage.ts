/**
 * Homepage Content — Single source of truth
 *
 * All user-facing copy for the homepage lives here, separated from UI.
 * This makes it easy to:
 *  - swap in CMS data later
 *  - A/B test copy
 *  - keep messaging consistent
 *  - review/audit content without reading JSX
 */

// ---------------------------------------------------------------------------
// Core messaging
// ---------------------------------------------------------------------------

export const coreMessaging = {
  mission:
    "Helping people build a daily relationship with God through prayer, reflection, and service.",
  pillars: ["Pray", "Reflect", "Serve"] as const,
  appDownloadUrl:
    "https://apps.apple.com/us/app/aisaiah/id6751301980",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness",
  partnershipsUrl: "/partnerships",
  contactUrl: "/contact",
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const heroContent = {
  badge: "Free on iOS & Android",
  headline: "Struggling to stay consistent in your faith?",
  subheadline:
    "AIsaiah helps you build daily habits of prayer, reflection, and service — so your relationship with God grows every day.",
  primaryCTA: { label: "Download the App", href: coreMessaging.appDownloadUrl },
  secondaryCTA: { label: "For Churches & Events", href: coreMessaging.partnershipsUrl },
  supportingLine:
    "Built for individuals, ministries, and faith communities seeking deeper daily spiritual habits.",
  appScreens: [
    { src: "/images/Screen2.jpg", alt: "AIsaiah daily prayer screen" },
    {
      src: "/images/Screen3.jpg",
      alt: "AIsaiah spiritual growth dashboard with Prayer, Reflection, and Service rings",
    },
    { src: "/images/Screen5.jpg", alt: "AIsaiah daily Scripture readings" },
  ],
};

// ---------------------------------------------------------------------------
// Trust bar
// ---------------------------------------------------------------------------

export const trustContent = {
  headline:
    "Used in faith communities, ministries, and event-based spiritual growth experiences",
  items: [
    { icon: "Shield" as const, label: "501(c)(3) Nonprofit" },
    { icon: "Users" as const, label: "Faith Communities" },
    { icon: "Sparkles" as const, label: "AI-Powered" },
    { icon: "Heart" as const, label: "Privacy-First" },
  ],
};

// ---------------------------------------------------------------------------
// Value proposition (Pray · Reflect · Serve)
// ---------------------------------------------------------------------------

export const valueContent = {
  eyebrow: "Core Experience",
  headline: "Three ways to grow in your faith",
  subheadline: "Three pillars of daily faith, woven into one simple rhythm.",
  pillars: [
    {
      title: "Pray",
      description:
        "Start each day connecting with God. Guided prayer experiences help you build a consistent, meaningful prayer life.",
      icon: "Heart" as const,
      gradient: "from-rose-500/10 to-primary-500/10",
      iconBg: "bg-rose-50 text-rose-600",
      border: "border-rose-200/40",
    },
    {
      title: "Reflect",
      description:
        "Engage with daily Scripture, journal your thoughts, and let God's Word shape how you see the world.",
      icon: "BookOpen" as const,
      gradient: "from-primary-500/10 to-accent-500/10",
      iconBg: "bg-primary-50 text-primary-600",
      border: "border-primary-200/40",
    },
    {
      title: "Serve",
      description:
        "Live your faith through action. Track acts of service and see how daily choices connect to spiritual growth.",
      icon: "HandHeart" as const,
      gradient: "from-accent-500/10 to-violet-500/10",
      iconBg: "bg-accent-50 text-accent-600",
      border: "border-accent-200/40",
    },
  ],
};

// ---------------------------------------------------------------------------
// Product experience (daily rhythm)
// ---------------------------------------------------------------------------

export const experienceContent = {
  eyebrow: "The Daily Rhythm",
  headline: "A daily rhythm that brings you closer to God",
  subheadline:
    "AIsaiah helps you build a simple daily rhythm of prayer, reflection, and service — so your relationship with God grows every day.",
  showcaseImage: {
    src: "/images/Screen3.jpg",
    alt: "AIsaiah spiritual growth dashboard showing Prayer, Reflection, and Service rings",
  },
  steps: [
    {
      number: "01",
      title: "Start with prayer",
      description:
        "Begin your day connecting with God through guided prayer that meets you where you are.",
    },
    {
      number: "02",
      title: "Reflect on Scripture",
      description:
        "Read daily Scripture, journal your thoughts, and let God's Word shape how you live.",
    },
    {
      number: "03",
      title: "Serve with purpose",
      description:
        "Track how you're living your faith through service and see your growth over time.",
    },
  ],
  cta: { label: "Download the App", href: coreMessaging.appDownloadUrl },
};

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const howItWorksContent = {
  eyebrow: "Get Started",
  headline: "Start in minutes",
  steps: [
    {
      step: "1",
      icon: "Download" as const,
      title: "Download the app",
      description: "Free on iOS and Android. No account required to get started.",
    },
    {
      step: "2",
      icon: "Clock" as const,
      title: "Set your daily rhythm",
      description:
        "Choose your prayer time, select your devotions, and personalize your experience.",
    },
    {
      step: "3",
      icon: "TrendingUp" as const,
      title: "Grow in faith every day",
      description:
        "Build lasting habits of prayer, reflection, and service — and watch your faith grow.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const testimonialContent = {
  quotes: [
    {
      text: "This helped me pray consistently again. It changed my daily routine and brought me closer to God in a way I didn\u2019t expect.",
      author: "Early App User",
      role: "Couples for Christ Community Member",
    },
  ],
};

// ---------------------------------------------------------------------------
// Community / partnerships CTA
// ---------------------------------------------------------------------------

export const communityContent = {
  eyebrow: "For Organizations",
  headline: "Built for communities, not just individuals",
  description:
    "Help your community grow in daily faith. AIsaiah gives churches, ministries, and organizations tools to support prayer, reflection, and service at scale.",
  primaryCTA: { label: "Partner With Us", href: coreMessaging.partnershipsUrl },
  secondaryCTA: { label: "Get in Touch", href: coreMessaging.contactUrl },
  useCases: [
    { icon: "Church" as const, label: "Churches & Parishes" },
    { icon: "Calendar" as const, label: "Retreats & Conferences" },
    { icon: "Users" as const, label: "Small Groups" },
    { icon: "BookOpen" as const, label: "Formation Programs" },
    { icon: "Compass" as const, label: "Ministry Engagement" },
  ],
};

// ---------------------------------------------------------------------------
// Mission
// ---------------------------------------------------------------------------

export const missionContent = {
  eyebrow: "Our Mission",
  headline: "Why AIsaiah exists",
  body: [
    "Helping people build a daily relationship with God through prayer, reflection, and service. AIsaiah Foundation is a 501(c)(3) nonprofit building accessible tools so every person and every community can grow in faith — through modern digital experiences.",
    "Rooted in the Catholic faith and Couples for Christ, open to all Christian communities.",
  ],
  values: [
    {
      icon: "Lightbulb" as const,
      title: "Faith meets innovation",
      description:
        "You deserve better tools to grow in your faith. We build them with the same care and quality you\u2019d expect from the best.",
    },
    {
      icon: "Lock" as const,
      title: "Privacy as a principle",
      description:
        "No ads. No data selling. Your spiritual life is sacred, and we protect your data \u2014 always.",
    },
    {
      icon: "Cpu" as const,
      title: "Accessible to all",
      description:
        "Every community deserves tools for prayer, reflection, and service \u2014 regardless of size or budget.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Donation
// ---------------------------------------------------------------------------

export const donationContent = {
  headline: "Support the mission",
  description:
    "Help us bring tools for prayer, reflection, and service to more people around the world. Your support directly funds the technology that helps communities grow in faith.",
  trustMarkers: ["Tax-deductible", "501(c)(3) nonprofit", "100% mission-driven"],
  cta: { label: "Support AIsaiah", href: coreMessaging.contactUrl },
};

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------

export const finalCTAContent = {
  eyebrow: "Begin Today",
  headline: "Start your journey today",
  description:
    "Download AIsaiah and begin building daily habits of prayer, reflection, and service. Free on iOS and Android.",
  primaryCTA: { label: "Download the App", href: coreMessaging.appDownloadUrl },
  secondaryCTA: { label: "Partner With Us", href: coreMessaging.partnershipsUrl },
};
