import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Aisaiah Foundation terms of service. Understand the terms governing use of our platform and services.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            The terms and conditions governing your use of Aisaiah Foundation
            services.
          </p>
        </div>
      </div>

      <Section>
        <div className="prose prose-lg max-w-3xl mx-auto">
          <p className="text-slate-600 mb-8">
            <strong>Effective date:</strong> March 2026
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-slate-600 mb-6">
            By accessing or using the Aisaiah Foundation website and services,
            you agree to be bound by these terms. If you do not agree to these
            terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Use of Services
          </h2>
          <p className="text-slate-600 mb-6">
            Our services are provided for personal and organizational use
            related to spiritual growth, community engagement, and event
            management. You agree to use our services in accordance with
            applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-slate-600 mb-6">
            All content, features, and functionality of our services are owned
            by the Aisaiah Foundation and are protected by copyright, trademark,
            and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-slate-600 mb-6">
            The Aisaiah Foundation provides services &quot;as is&quot; and makes
            no warranties regarding the accuracy, completeness, or reliability
            of our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. Contact
          </h2>
          <p className="text-slate-600 mb-6">
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:info@aisaiah.org"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              info@aisaiah.org
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
