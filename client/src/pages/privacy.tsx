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
  FileText,
  Smartphone,
  Settings,
  Trash2
} from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPage() {
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
            Privacy Policy — AIsaiah
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Mobile App & Website Privacy Policy
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: August 26, 2025</span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-[hsl(var(--teal-primary))]/20 bg-gradient-to-r from-[hsl(var(--teal-primary))]/5 to-[hsl(var(--purple-primary))]/5">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                AIsaiah ("AIsaiah," "we," "us," or "our") provides mobile applications and related services that help users build daily spiritual habits, including optional conference features. This Privacy Policy explains what we collect, why we collect it, how we use and share it, how you can exercise your rights, and how to contact us.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>For Apple App Store review:</strong> This version clarifies that Daily Prayer/Reading is accessible without sign‑in, adds a clear, in‑app Account Deletion path and description of what is deleted, and aligns data categories/purposes and processor disclosures with App Privacy.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary of Key Points */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="w-7 h-7 text-[hsl(var(--teal-primary))]" />
                Summary of Key Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Guest access:</strong> Core reading content (e.g., Daily Prayer/Reading) is available without registration. Accounts are optional for sync, reminders, favorites, and conference personalization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>No ads / no tracking:</strong> We do not sell personal data and do not track users across apps or websites for targeted advertising.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Processors disclosed:</strong> We use service providers (e.g., Apple/Google for sign‑in; Firebase for auth, database, analytics, crash reporting, and messaging; cloud hosting) under contracts limiting use to providing the Services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Deletion in‑app:</strong> You can delete your account from Settings → Account → Delete Account. This removes your auth record and deletes associated personal data we control (details in §8).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Security:</strong> We use TLS in transit and cloud provider protections at rest. We do not represent the app as providing end‑to‑end encryption of user content.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scope */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This Policy applies to our mobile apps, websites (including aisaiah.org), and related services that link to it (collectively, the "Services").
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Data We Collect */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Data We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">3.1 Information you provide</h4>
                <ul className="space-y-2 ml-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Account data:</strong> Email address or identity token (Sign in with Apple or Google) and optional profile fields (display name, photo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Preferences:</strong> Reminders, favorites, streaks/habits, conference selections, session bookmarks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Support messages:</strong> Content of messages you send to us (e.g., via email or forms).</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">3.2 Information collected automatically</h4>
                <ul className="space-y-2 ml-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Device & app data:</strong> Device model, OS version, app version, language/locale, time zone.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Usage data:</strong> Screens viewed, basic interaction events, error/crash diagnostics, performance metrics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Push token:</strong> Device token for notifications you opt into.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Approximate location (optional):</strong> When you use features that request location (e.g., nearby venue info), you can decline at any time in OS settings.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">3.3 Information from third parties</h4>
                <ul className="space-y-2 ml-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                    <span><strong>Sign‑in providers:</strong> Apple/Google share identity info needed to authenticate you.</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground text-sm">
                We do not collect sensitive categories unless you choose to provide optional content (e.g., a profile photo). Do not include personal health or highly sensitive content in free‑text fields.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* How We Use Data */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                How We Use Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Provide and improve the Services:</strong> authentication, sync settings, reminders, conference schedules/announcements, and content delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Communications:</strong> notifications and service messages you request (e.g., reminders, schedule changes).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Analytics & diagnostics:</strong> understand feature usage, fix bugs, and improve reliability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                  <span><strong>Security & abuse prevention:</strong> detect misuse, fraud, and protect the Services and users.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                <strong>Legal bases (EEA/UK):</strong> contract (to provide requested Services), legitimate interests (to secure and improve), and consent where required (e.g., notifications).
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Non-Account Access */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Non‑Account Access (Guest Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Core Daily Prayer/Reading content is accessible without registration. Account creation is optional and unlocks multi‑device sync, reminders, favorites, and personalized conference features.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cookies & Similar Technologies */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Cookies & Similar Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mobile apps use local storage for settings and cached content. On the website, we may use minimal, non‑advertising cookies for functionality and analytics. You can control website cookies in your browser.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sharing & Service Providers */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Sharing & Service Providers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We do not sell, rent, or trade personal data. We share limited data with service providers under data‑processing terms so they may operate the Services for us:
              </p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Identity & authentication:</strong> Apple (Sign in with Apple), Google (Google Sign‑In)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Backend platform:</strong> Google Firebase (Authentication, Firestore Database, Cloud Storage, Cloud Messaging), Firebase Analytics, Crashlytics/Performance Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Hosting & infrastructure:</strong> Cloud providers that run our servers and security controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Support & communications:</strong> Email and ticketing tools you use to contact us</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                We may also disclose data where required by law or to protect rights, safety, and the integrity of the Services.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Account Deletion */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Account Deletion (Right to Erasure)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You can initiate deletion in‑app: <strong>Settings → Account → Delete Account</strong>. Once confirmed, we will:
              </p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Delete your authentication record.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Delete your personal profile and preferences we control (e.g., reminders, favorites, bookmarks, notification tokens).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Delete your user‑owned files in cloud storage (if any) associated with your account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Sign you out on all devices.</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                If you cannot access the app, you may email privacy@aisaiah.org from your account email to request deletion. We may take reasonable steps to verify your identity.
              </p>
              <p className="text-muted-foreground">
                <strong>What we may retain:</strong> Minimal records needed to comply with law, resolve disputes, or maintain security (e.g., server logs) are kept for limited periods and then deleted or anonymized.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Data Retention */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Account data:</strong> retained while the account is active and deleted on account deletion (§8).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Conference selections & preferences:</strong> retained while the feature is active and up to 1 year after the relevant event, unless you delete earlier.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Analytics data:</strong> typically retained for up to 2 years.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span><strong>Server logs / backups:</strong> kept on rolling schedules (e.g., logs ~90 days; backups per provider policy) and then deleted or anonymized.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Your Rights & Choices */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Your Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Depending on your location, you may have rights to access, correct, delete, object/limit processing, or export your data. You can:
              </p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Access/edit your profile in‑app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Turn notifications on/off in device settings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2" />
                  <span>Delete your account in‑app (§8) or email us at privacy@aisaiah.org.</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                California (CPRA) and EEA/UK (GDPR) users may exercise rights by contacting us; we will verify and respond within applicable timelines.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Children's Privacy */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Children's Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Services are not directed to children under 13 (or the age of digital consent where you live). If you believe a child provided personal data without consent, contact privacy@aisaiah.org and we will delete it.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use administrative, technical, and organizational measures to protect personal data, including TLS for data in transit and cloud provider protections at rest, access controls, and regular updates. We do not represent the Services as providing end‑to‑end encryption of user content.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* International Data Transfers */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may process data in the United States and other countries where our providers operate. Where required, we implement appropriate safeguards for cross‑border transfers.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* DSA Contact Information */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Digital Services Act (EU) & Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If distributed in the EU, we identify as a trader and display contact details as required by the DSA:
              </p>
              <div className="bg-muted/20 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  AIsaiah<br />
                  Attn: Privacy<br />
                  16192 Coastal Hwy, Lewes, DE 19958<br />
                  Phone: +1 (813) 355‑9645<br />
                  Email: privacy@aisaiah.org
                </p>
              </div>
              <p className="text-muted-foreground">
                You may also contact our privacy team at dpo@aisaiah.org.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Changes to This Policy */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Policy from time to time. When we do, we will change the "Last updated" date above and, when changes are material, provide additional notice in‑app.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* How to Contact Us */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Card className="border-[hsl(var(--teal-primary))]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                How to Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For privacy questions or requests:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">privacy@aisaiah.org</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Data Protection Officer</h4>
                    <p className="text-muted-foreground">dpo@aisaiah.org</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Mailing Address</h4>
                    <p className="text-muted-foreground">
                      AIsaiah — Privacy<br />
                      16192 Coastal Hwy<br />
                      Lewes, DE 19958, USA
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">EU Users</h4>
                    <p className="text-muted-foreground">EU users may use the DSA contact above.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-[hsl(var(--teal-primary))]/10 to-[hsl(var(--purple-primary))]/10 border border-[hsl(var(--teal-primary))]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
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