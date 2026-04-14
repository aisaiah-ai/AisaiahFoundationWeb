import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Aisaiah Foundation privacy policy. Learn how we protect your data and maintain your privacy.",
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
            <strong>Last updated:</strong> March 2026
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
            4. Your Rights
          </h2>
          <p className="text-slate-600 mb-6">
            You have the right to access, correct, or delete your personal data.
            You may request data deletion at any time by contacting us at{" "}
            <a
              href="mailto:info@aisaiah.org"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              info@aisaiah.org
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. Contact Us
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
            Aisaiah Foundation is a registered 501(c)(3) nonprofit organization.
          </p>
        </div>
      </Section>
    </>
  );
}
