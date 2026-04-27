import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import {
  Trash2,
  AlertTriangle,
  Mail,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description:
    "How to permanently delete your AIsaiah account and all associated data. Required by Google Play and the App Store.",
  alternates: {
    canonical: "/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <>
      <div className="bg-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Account &amp; Data Deletion
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We give you full control over your data. Below are the instructions
            for permanently deleting your AIsaiah account and everything tied
            to it.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Two ways to delete */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  In-App Deletion
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                The easiest way to delete your account is directly through the
                app:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
                <li>
                  Open <strong>Settings</strong>
                </li>
                <li>
                  Tap on <strong>Account</strong>
                </li>
                <li>
                  Select <strong>Delete Account</strong>
                </li>
                <li>Confirm your choice</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  No Access to the App?
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                If you can&apos;t access the app, request deletion via email:
              </p>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <a
                  href="mailto:support@aisaiah.org"
                  className="text-lg font-semibold text-primary-600 hover:text-primary-700 underline"
                >
                  support@aisaiah.org
                </a>
                <p className="text-sm text-slate-500 mt-2">
                  Send the request from the email address tied to your account.
                </p>
              </div>
            </div>
          </div>

          {/* What gets deleted */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-primary-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Data That Will Be Deleted
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              When you request account deletion, the following data tied to your
              account is permanently removed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Authentication credentials",
                "Profile information & preferences",
                "Spiritual & faith activity logs",
                "Journaling & reflections",
                "AI interaction history",
                "Reminders, favorites, & bookmarks",
                "Notification tokens",
                "Cloud-stored files tied to your User ID",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-slate-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What gets retained */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-primary-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Data Temporarily Retained
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Some data may be temporarily retained for legal, security, or
              compliance purposes before being anonymized or deleted:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>
                <strong>Payment &amp; transaction records:</strong> retained for
                tax and accounting purposes.
              </li>
              <li>
                <strong>Fraud-prevention logs:</strong> to prevent abuse of our
                services.
              </li>
              <li>
                <strong>Security &amp; audit logs:</strong> for system integrity
                and security monitoring.
              </li>
            </ul>
          </div>

          {/* Timeline + warning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  Retention Timeline
                </h2>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <strong>7&ndash;30 days:</strong> standard deletion period for
                  most account data.
                </li>
                <li>
                  <strong>Up to 90 days:</strong> maximum retention for backups
                  and legal records before anonymization.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-3 mb-4 text-red-700">
                <AlertTriangle className="w-6 h-6" />
                <h2 className="text-xl font-bold">Important Warning</h2>
              </div>
              <p className="text-slate-700">
                <strong>Deletion is permanent and irreversible.</strong> Once
                your account is deleted, you can&apos;t recover your profile,
                history, or saved content. To use AIsaiah again, you&apos;ll
                need to create a new account.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="rounded-2xl bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Need Assistance?
            </h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              If you have questions about the deletion process or need help, our
              support team is available.
            </p>
            <a
              href="mailto:support@aisaiah.org"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-700 px-6 py-3 text-white font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
