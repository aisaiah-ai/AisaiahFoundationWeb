import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Aisaiah Foundation privacy policy. Learn how we protect your data and maintain your privacy.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Your privacy matters to us. Learn how we collect, use, and protect
            your information.
          </p>
        </div>
      </div>

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto">
          <p className="text-slate-600 mb-8">
            <strong>Last updated:</strong> May 2026
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-slate-600 mb-6">
            Aisaiah Foundation collects minimal information needed to provide our
            services. This includes contact information you provide through
            forms, app usage data for improving your experience, and event
            registration details when you sign up for events.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-slate-600 mb-6">
            We use collected information to provide and improve our services,
            communicate with you about events and updates, process registrations
            and manage event logistics, and support your spiritual growth
            journey through the Aisaiah app.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Data Protection
          </h2>
          <p className="text-slate-600 mb-6">
            We implement appropriate security measures to protect your personal
            information. Your spiritual reflections and personal data are
            encrypted. We do not sell your data to third parties, and we do not
            display advertisements.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. Third-Party Services and SDKs
          </h2>
          <p className="text-slate-600 mb-6">
            The AIsaiah mobile app relies on a small set of third-party services
            to function. We chose these vendors because they let us deliver a
            reliable, secure, privacy-respecting experience. Each service receives
            only the data described below, and only for the purpose listed.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Identity and account
          </h3>
          <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-3">
            <li>
              <strong>Firebase Authentication (Google).</strong> Creates and
              manages your account, issues secure session tokens, and signs you
              in. Receives the credentials you choose to sign in with (email
              address, OAuth identifier).{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Firebase privacy
              </a>
              .
            </li>
            <li>
              <strong>Google Sign In.</strong> Optional sign-in method. When you
              use it, Google shares your email address, name, and avatar with
              the app so we can create or look up your account.{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Google privacy
              </a>
              .
            </li>
            <li>
              <strong>Apple Sign In.</strong> Optional sign-in method. Apple
              shares the minimum identifier needed to authenticate you, plus a
              private relay email if you choose to hide your real address.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Apple privacy
              </a>
              .
            </li>
            <li>
              <strong>Facebook Login (Meta).</strong> Optional sign-in method.
              When you use it, Meta shares your email address and name with the
              app so we can create or look up your account. We do not request
              your friends list or post on your behalf.{" "}
              <a
                href="https://www.facebook.com/privacy/policy"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Meta privacy
              </a>
              .
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            App data and delivery
          </h3>
          <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-3">
            <li>
              <strong>Cloud Firestore (Google).</strong> Stores the data you
              create in the app — spiritual activity logs, journal entries,
              Scripture preferences, devotion progress, and event details — so
              your rhythm syncs across your devices.
            </li>
            <li>
              <strong>Firebase Cloud Messaging (Google).</strong> Delivers push
              notifications (for example, prayer reminders). Receives only the
              opaque device push token — not your notification content.
            </li>
            <li>
              <strong>Firebase App Check (Google).</strong> Confirms that
              requests are coming from a legitimate copy of the AIsaiah app and
              not a bot. Used for abuse prevention only.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Diagnostics and product analytics
          </h3>
          <ul className="text-slate-600 mb-6 list-disc pl-6 space-y-3">
            <li>
              <strong>Firebase Crashlytics (Google).</strong> When the app
              crashes, Crashlytics collects a stack trace, device model, and
              OS version so we can fix the bug. It does not collect the contents
              of your journal or prayers.
            </li>
            <li>
              <strong>Sentry.</strong> Captures non-fatal errors and performance
              issues in production builds only. Like Crashlytics, it captures
              the technical context of an error — not your personal content.{" "}
              <a
                href="https://sentry.io/privacy/"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Sentry privacy
              </a>
              .
            </li>
            <li>
              <strong>Mixpanel.</strong> Captures anonymized product analytics —
              which features get used, how often, and where users get stuck — so
              we can prioritize improvements. Events are tied to a random
              identifier, not your name or email.{" "}
              <a
                href="https://mixpanel.com/legal/privacy-policy/"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Mixpanel privacy
              </a>
              .
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Purchases
          </h3>
          <ul className="text-slate-600 mb-8 list-disc pl-6 space-y-3">
            <li>
              <strong>RevenueCat.</strong> AIsaiah is donation-based and has no
              paywall today, so this SDK is currently dormant. The integration
              is present so that, if we ever offer optional paid features, we
              can validate App Store / Google Play receipts without handling
              payment credentials ourselves.{" "}
              <a
                href="https://www.revenuecat.com/privacy/"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                RevenueCat privacy
              </a>
              .
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. Your Rights
          </h2>
          <p className="text-slate-600 mb-6">
            You have the right to access, correct, or delete your personal data.
            You may request data deletion at any time by visiting our{" "}
            <a
              href="/data-deletion"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Account Deletion
            </a>{" "}
            page, or by contacting us at{" "}
            <a
              href="mailto:info@aisaiah.org"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              info@aisaiah.org
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            6. Contact Us
          </h2>
          <p className="text-slate-600 mb-6">
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a
              href="mailto:info@aisaiah.org"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              info@aisaiah.org
            </a>{" "}
            or write to us at 16192 Coastal Hwy, Lewes, DE 19958.
          </p>

          <p className="text-sm text-slate-500 mt-12 border-t border-slate-200 pt-6">
            Aisaiah Foundation is a Delaware nonprofit corporation (501(c)(3) status pending).
          </p>
        </div>
      </Section>
    </>
  );
}
