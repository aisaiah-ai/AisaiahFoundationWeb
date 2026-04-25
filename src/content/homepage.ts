/**
 * Homepage Content — Single source of truth
 *
 * Redesigned for spiritual storytelling, emotional resonance,
 * and pillar-colored visual identity (Pray=Purple, Reflect=Teal, Serve=Gold).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CTALink {
  label: string;
  href: string;
}

export interface AppScreen {
  src: string;
  alt: string;
}

export interface IconItem {
  icon: string;
  label: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
  color: "purple" | "primary" | "gold";
}

export interface RhythmStep {
  number: string;
  title: string;
  description: string;
}

export interface OnboardingStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface MissionValue {
  icon: string;
  title: string;
  description: string;
}

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
  solutionsUrl: "/solutions",
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const heroContent = {
  badge: "Free on iOS & Android",
  headline: "Strengthen Your Faith.",
  headlineLine2: "Live It Daily.",
  subheadline:
    "A spiritual journey through prayer, reflection, and service \u2014 guided by an app that grows with you.",
  primaryCTA: { label: "Download for iOS", href: coreMessaging.appDownloadUrl } satisfies CTALink,
  googlePlayCTA: { label: "Get it on Google Play", href: coreMessaging.playStoreUrl } satisfies CTALink,
  secondaryCTA: { label: "Explore the App", href: coreMessaging.solutionsUrl } satisfies CTALink,
  supportingLine:
    "Built for individuals, ministries, and faith communities seeking deeper daily spiritual habits.",
  appScreens: [
    { src: "/images/app-prayer.png", alt: "AIsaiah Daily Prayer \u2014 guided prayer with Scripture" },
    { src: "/images/app-reflect.png", alt: "AIsaiah Reflect \u2014 daily Scripture readings and journaling" },
    { src: "/images/app-serve.png", alt: "AIsaiah Serve \u2014 community events and acts of service" },
  ] satisfies AppScreen[],
};

// ---------------------------------------------------------------------------
// Trust bar
// ---------------------------------------------------------------------------

export const trustContent = {
  headline:
    "Trusted by faith communities, ministries, and spiritual leaders",
  items: [
    { icon: "Shield", label: "501(c)(3) Nonprofit" },
    { icon: "Users", label: "Faith Communities" },
    { icon: "Sparkles", label: "AI-Powered" },
    { icon: "Heart", label: "Privacy-First" },
  ] satisfies IconItem[],
};

// ---------------------------------------------------------------------------
// Value proposition (Pray \u00b7 Reflect \u00b7 Serve)
// ---------------------------------------------------------------------------

export const valueContent = {
  eyebrow: "Your Spiritual Rhythm",
  headline: "Three pillars of a life lived in faith",
  subheadline:
    "Every day is an invitation to draw closer to God. AIsaiah guides you through three simple practices that transform your spiritual life.",
  pillars: [
    {
      title: "Pray",
      description:
        "Begin each day in conversation with God. Guided prayer experiences help you build a consistent, meaningful prayer life \u2014 even on the hardest days.",
      icon: "Heart",
      color: "purple",
    },
    {
      title: "Reflect",
      description:
        "Let Scripture speak to your life today. Daily readings, journaling, and devotionals help you listen to God\u2019s Word and let it shape your heart.",
      icon: "BookOpen",
      color: "primary",
    },
    {
      title: "Serve",
      description:
        "Faith comes alive through action. Track acts of service, connect with your community, and see how your daily choices become acts of love.",
      icon: "HandHeart",
      color: "gold",
    },
  ] satisfies ValuePillar[],
};

// ---------------------------------------------------------------------------
// Product experience (daily rhythm)
// ---------------------------------------------------------------------------

export const experienceContent = {
  eyebrow: "The Daily Rhythm",
  headline: "A daily rhythm that draws you closer to God",
  subheadline:
    "Not another productivity app. A spiritual companion that helps you build a simple, consistent daily rhythm of prayer, reflection, and service.",
  showcaseImage: {
    src: "/images/app-rhythm.png",
    alt: "AIsaiah Your Daily Rhythm \u2014 Pray, Reflect, and Serve rings with daily progress",
  } satisfies AppScreen,
  steps: [
    {
      number: "01",
      title: "Begin with prayer",
      description:
        "Start your morning in God\u2019s presence. Guided prayer meets you exactly where you are.",
    },
    {
      number: "02",
      title: "Reflect on Scripture",
      description:
        "Sit with the Word. Read, journal, and let it reshape how you see your day.",
    },
    {
      number: "03",
      title: "Serve with intention",
      description:
        "Carry your faith into the world. Small acts of service become a lived expression of love.",
    },
  ] satisfies RhythmStep[],
  cta: { label: "Start Your Journey", href: coreMessaging.appDownloadUrl } satisfies CTALink,
};

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const howItWorksContent = {
  eyebrow: "Get Started",
  headline: "Begin in minutes",
  steps: [
    {
      step: "1",
      icon: "Download",
      title: "Download the app",
      description: "Free on iOS and Android. No account required to begin.",
    },
    {
      step: "2",
      icon: "Clock",
      title: "Set your rhythm",
      description:
        "Choose your prayer time, pick your devotions, and make it yours.",
    },
    {
      step: "3",
      icon: "TrendingUp",
      title: "Grow every day",
      description:
        "Watch your spiritual life deepen as daily habits of prayer, reflection, and service take root.",
    },
  ] satisfies OnboardingStep[],
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
  ] satisfies Testimonial[],
};

// ---------------------------------------------------------------------------
// Community / partnerships CTA
// ---------------------------------------------------------------------------

export const communityContent = {
  eyebrow: "For Communities",
  headline: "Your community\u2019s spiritual growth, supported daily",
  description:
    "AIsaiah helps churches, ministries, and faith organizations nurture daily habits of prayer, reflection, and service \u2014 across your entire community.",
  primaryCTA: { label: "Partner With Us", href: coreMessaging.partnershipsUrl } satisfies CTALink,
  secondaryCTA: { label: "Get in Touch", href: coreMessaging.contactUrl } satisfies CTALink,
  useCases: [
    { icon: "Church", label: "Churches & Parishes" },
    { icon: "Calendar", label: "Retreats & Conferences" },
    { icon: "Users", label: "Small Groups" },
    { icon: "BookOpen", label: "Formation Programs" },
    { icon: "Compass", label: "Ministry Engagement" },
  ] satisfies IconItem[],
};

// ---------------------------------------------------------------------------
// Mission
// ---------------------------------------------------------------------------

export const missionContent = {
  eyebrow: "Our Mission",
  headline: "Why this exists",
  body: [
    "We believe faith should be lived daily \u2014 not just on Sundays. AIsaiah Foundation is a 501(c)(3) nonprofit building tools that make it easier for every person and every community to grow closer to God through prayer, reflection, and service.",
    "Rooted in the Catholic faith and Couples for Christ, open to all Christian communities.",
  ],
  values: [
    {
      icon: "Lightbulb",
      title: "Faith meets innovation",
      description:
        "You deserve beautiful, thoughtful tools for your spiritual life. We build them with the same care you\u2019d expect from the best.",
    },
    {
      icon: "Lock",
      title: "Your privacy is sacred",
      description:
        "No ads. No data selling. Your spiritual journey is between you and God \u2014 we simply provide the path.",
    },
    {
      icon: "Cpu",
      title: "For everyone",
      description:
        "Every community deserves tools for spiritual growth \u2014 regardless of size, budget, or technical skill.",
    },
  ] satisfies MissionValue[],
};

// ---------------------------------------------------------------------------
// Donation
// ---------------------------------------------------------------------------

export const donationContent = {
  headline: "Support the journey",
  description:
    "Every contribution helps us bring tools for prayer, reflection, and service to more people around the world. You\u2019re not just donating \u2014 you\u2019re helping someone grow closer to God.",
  trustMarkers: ["Tax-deductible", "501(c)(3) nonprofit", "100% mission-driven"],
  cta: { label: "Support AIsaiah", href: coreMessaging.contactUrl } satisfies CTALink,
};

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------

export const finalCTAContent = {
  eyebrow: "Your Journey Starts Here",
  headline: "Strengthen your faith. Live it daily.",
  description:
    "Download AIsaiah and begin building a daily rhythm of prayer, reflection, and service. Free on iOS and Android.",
  primaryCTA: { label: "Start Your Journey", href: coreMessaging.appDownloadUrl } satisfies CTALink,
  secondaryCTA: { label: "Partner With Us", href: coreMessaging.partnershipsUrl } satisfies CTALink,
};
