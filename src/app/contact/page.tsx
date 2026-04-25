"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { siteConfig } from "@/content/site";
import { isFirebaseConfigured } from "@/lib/firebase";
import { submitContactSubmission } from "@/services/contact-submissions";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Handshake,
  Heart,
  Code,
} from "lucide-react";
import type { ContactFormData } from "@/types";

const subjectOptions = [
  "General Inquiry",
  "Partnership Opportunity",
  "CFC Collaboration",
  "Volunteering",
  "Donation Questions",
  "Technical Support",
  "Other",
];

interface PartnershipType {
  icon: React.ElementType;
  title: string;
  description: string;
}

const partnershipTypes: PartnershipType[] = [
  {
    icon: Code,
    title: "Technology Partner",
    description:
      "Help us build better tools for prayer, reflection, and service. We welcome developers, designers, and product thinkers.",
  },
  {
    icon: Handshake,
    title: "Ministry Partner",
    description:
      "Bring AIsaiah to your community. We'll help you support daily faith growth for your members.",
  },
  {
    icon: Heart,
    title: "Donor & Supporter",
    description:
      "Help us bring tools for prayer, reflection, and service to more people. Every contribution is tax-deductible.",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lewes, Delaware",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await submitContactSubmission(formData);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : `Something went wrong. Please try again or email us directly at ${siteConfig.email}.`;
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about how we can help."
        description="Whether you want to partner, donate, or learn more — we'd love to hear from you. Tell us about your community and how you want to help people grow in faith."
        actions={[
          {
            label: "Jump To Partnership Options",
            href: "#partnership",
            variant: "outline",
            className: "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10",
          },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent>
                {!isFirebaseConfigured ? (
                  <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-relaxed text-amber-800">
                    Firebase public environment variables are not configured in
                    this environment yet, so form submissions cannot be stored.
                    Add the `NEXT_PUBLIC_FIREBASE_*` values to enable live
                    intake.
                  </div>
                ) : null}
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Message Sent Successfully
                    </h3>
                    <p className="text-slate-300 max-w-md mx-auto mb-8">
                      Thank you for reaching out. We typically respond within
                      1-2 business days. We look forward to connecting with you.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="organization"
                      name="organization"
                      label="Organization"
                      placeholder="Your organization (optional)"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                    {/* Subject select */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-200"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white",
                          "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none",
                          "transition-colors duration-200",
                          !formData.subject && "text-slate-400"
                        )}
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      label="Message"
                      placeholder="Tell us how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    {error && (
                      <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact Information
              </h3>
              <ul className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500">
                          {item.label}
                        </p>
                        <p className="text-base font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block hover:bg-slate-50 -mx-3 px-3 py-2 rounded-lg transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="-mx-3 px-3 py-2">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr className="border-white/10" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Office Hours
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM EST
              </p>
              <p className="text-slate-500 text-sm mt-2">
                We typically respond to all inquiries within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" id="partnership">
        <SectionHeader>
          <SectionTitle>Partnership Opportunities</SectionTitle>
          <SectionDescription>
            Join us in helping people grow in faith through prayer, reflection,
            and service
          </SectionDescription>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card key={type.title} hover>
                <CardContent className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section variant="gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Help People Grow in Faith?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Whether you bring technical skills, ministry connections, or a heart
            for giving — there is a place for you in helping people build daily
            habits of prayer, reflection, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/solutions" variant="secondary" size="lg">
              Explore Our Platform
            </Button>
            <Button
              href="/partnerships"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Partnerships
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
