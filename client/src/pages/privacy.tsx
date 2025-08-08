import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe,
  ArrowLeft,
  Calendar,
  Mail,
  FileText
} from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const privacySections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email address, profile settings)",
        "Prayer requests and spiritual reflections (encrypted)",
        "Usage analytics to improve app functionality",
        "Device information for technical support",
        "Communication preferences and settings"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "How We Use Your Information", 
      content: [
        "Provide personalized spiritual guidance and AI assistance",
        "Improve app features and user experience",
        "Send important updates and notifications (if opted in)",
        "Provide customer support and technical assistance",
        "Ensure app security and prevent misuse"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection & Security",
      content: [
        "End-to-end encryption for all personal prayers and reflections",
        "Industry-standard SSL/TLS encryption for data transmission", 
        "Regular security audits and vulnerability assessments",
        "Secure cloud storage with enterprise-grade protection",
        "Limited access controls and employee training on data privacy"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Information Sharing",
      content: [
        "We never sell, rent, or trade your personal information",
        "Prayers and personal reflections remain completely private",
        "Anonymous usage statistics may be shared with trusted partners",
        "Legal compliance: We may disclose information if required by law",
        "Service providers: Limited data sharing with vetted third-party services"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Your Privacy Rights",
      content: [
        "Access and review your personal data at any time",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Export your data in a portable format",
        "Opt-out of marketing communications"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cookies & Tracking",
      content: [
        "Essential cookies for app functionality and security",
        "Analytics cookies to understand user behavior (anonymized)",
        "Preference cookies to remember your settings",
        "No third-party advertising or tracking cookies",
        "You can control cookie preferences in your browser settings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-[hsl(var(--teal-primary))]/5">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-spiritual">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Your privacy and spiritual journey are sacred to us. Learn how we protect your personal information and respect your digital devotion.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {currentDate}</span>
          </div>
        </motion.div>

        {/* Privacy Overview */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-[hsl(var(--teal-primary))]/20 bg-gradient-to-r from-[hsl(var(--teal-primary))]/5 to-[hsl(var(--purple-primary))]/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="w-7 h-7 text-[hsl(var(--teal-primary))]" />
                Our Privacy Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                At AIsaiah Foundation, we understand that your spiritual journey is deeply personal. This privacy policy explains how we collect, use, protect, and respect your information when you use the AIsaiah app and our services. We are committed to maintaining the highest standards of privacy protection while providing meaningful spiritual support through AI technology.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Sections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {privacySections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[hsl(var(--teal-primary))]/10 text-[hsl(var(--teal-primary))]">
                    {section.icon}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Special Sections */}
        <motion.div
          className="space-y-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Children's Privacy Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The AIsaiah app is designed for users 13 years and older. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will promptly delete such information.
              </p>
              <p className="text-muted-foreground">
                For users between 13-17, we encourage parental guidance in using our spiritual tools and recommend parents review this privacy policy with their teens.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our app may integrate with trusted third-party services to enhance your spiritual experience:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span>Cloud storage providers for secure data backup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span>AI language models for spiritual guidance (with privacy safeguards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span>Analytics services for app improvement (anonymized data only)</span>
                  </li>
                </ul>
                <p>
                  All third-party integrations are carefully vetted and must meet our strict privacy standards.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* International Users */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you are using AIsaiah from outside the United States, please note that your information may be transferred to, stored, and processed in the United States where our servers are located. We ensure that all international data transfers comply with applicable privacy laws and are protected by appropriate safeguards.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border-[hsl(var(--teal-primary))]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Privacy Questions & Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our data practices, please don't hesitate to contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Email Contact</h4>
                    <p className="text-muted-foreground">privacy@aisaiah.org</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Data Protection Officer</h4>
                    <p className="text-muted-foreground">dpo@aisaiah.org</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Mailing Address</h4>
                    <p className="text-muted-foreground">
                      AIsaiah Foundation<br />
                      Privacy Department<br />
                      [Your Address]<br />
                      [City, State ZIP]
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">We will respond to privacy inquiries within 30 days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Policy Updates */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Policy Updates & Changes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span>We will update the "Last updated" date at the top of this policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span>For significant changes, we will notify you via email or app notification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span>Continued use of the app after updates constitutes acceptance of the new policy</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-[hsl(var(--teal-primary))]/10 to-[hsl(var(--purple-primary))]/10 border border-[hsl(var(--teal-primary))]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Shield className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--teal-primary))]" />
          <h3 className="text-2xl font-bold mb-4">Your Privacy Matters</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're committed to protecting your privacy while supporting your spiritual growth. If you have any concerns or questions about your data, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support">
              <Button variant="outline" size="lg">
                Contact Privacy Team
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--teal-secondary))]">
                Return to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}