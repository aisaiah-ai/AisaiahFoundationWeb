import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import {
  Download,
  Settings,
  BookOpen,
  Heart,
  Bug,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with the AIsaiah app — setup guides, account management, feature usage, troubleshooting, and direct support.",
  alternates: {
    canonical: "/support",
  },
};

const categories = [
  {
    icon: Download,
    title: "Getting Started",
    description: "Download and setup guides for the AIsaiah app.",
    topics: [
      "How to download the app",
      "Creating your account",
      "First-time setup",
      "Basic navigation",
    ],
  },
  {
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your profile, privacy controls, and preferences.",
    topics: [
      "Account settings",
      "Privacy controls",
      "Notification preferences",
      "Subscription management",
    ],
  },
  {
    icon: BookOpen,
    title: "Features & Usage",
    description: "Learn how to use AIsaiah's daily prayer and reflection tools.",
    topics: [
      "Daily prayer rhythm",
      "Scripture reflection",
      "Service tracking",
      "Community events",
    ],
  },
  {
    icon: Heart,
    title: "Spiritual Guidance",
    description: "Make the most of your spiritual journey with AIsaiah.",
    topics: [
      "Building daily habits",
      "Journaling practices",
      "Sharing with your community",
      "Growing in your faith",
    ],
  },
  {
    icon: Bug,
    title: "Troubleshooting",
    description: "Solutions to common issues and technical problems.",
    topics: [
      "App crashes or freezes",
      "Sign-in problems",
      "Sync &amp; data issues",
      "Notifications not working",
    ],
  },
  {
    icon: Mail,
    title: "Direct Support",
    description: "Talk to our team when you can't find what you need.",
    topics: [
      "Email: support@aisaiah.org",
      "Response within 1–2 business days",
      "Account deletion requests",
      "Partnership inquiries",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <div className="bg-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Find answers, get setup help, or talk directly with our team.
            We&apos;re here to support your spiritual journey with AIsaiah.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-4">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4">
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {cat.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA: contact + delete */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Still need help?
                </h3>
                <p className="text-slate-600">
                  Our team typically responds within 1&ndash;2 business days.
                  Email us directly or use the contact form.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <a
                  href="mailto:support@aisaiah.org"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-700 px-5 py-3 text-white font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 hover:border-slate-300 px-5 py-3 text-slate-900 font-semibold transition-colors"
                >
                  Contact Form
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Account deletion link */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Looking for account deletion?{" "}
            <Link
              href="/data-deletion"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See our data deletion instructions
            </Link>
            .
          </div>
        </div>
      </Section>
    </>
  );
}
