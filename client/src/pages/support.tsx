import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  BookOpen, 
  Users, 
  Heart,
  ArrowLeft,
  ExternalLink,
  Download,
  Settings,
  Bug,
  Lightbulb
} from "lucide-react";
import { Link } from "wouter";

export default function SupportPage() {
  const supportCategories = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Getting Started",
      description: "Download and setup guides for the AIsaiah app",
      topics: [
        "How to download the app",
        "Creating your account",
        "First-time setup",
        "Basic navigation"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Account & Settings",
      description: "Manage your profile and preferences",
      topics: [
        "Account settings",
        "Privacy controls",
        "Notification preferences",
        "Subscription management"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Features & Usage",
      description: "Learn how to use AIsaiah's spiritual tools",
      topics: [
        "AI-powered prayer assistance",
        "Scripture study tools",
        "Community features",
        "Devotional content"
      ]
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Technical Issues",
      description: "Troubleshooting and bug reports",
      topics: [
        "App crashes or errors",
        "Login problems",
        "Sync issues",
        "Performance problems"
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@aisaiah.org",
      responseTime: "24-48 hours",
      primary: true
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Community Forum",
      description: "Connect with other users",
      contact: "Join our community",
      responseTime: "Community moderated",
      primary: false
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Prayer Support",
      description: "Spiritual guidance and prayer",
      contact: "Schedule a call",
      responseTime: "By appointment",
      primary: false
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
            Support Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you on your spiritual journey. Find answers, get support, and connect with our community.
          </p>
        </motion.div>

        {/* Quick Help Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {supportCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[hsl(var(--teal-primary))]/10 text-[hsl(var(--teal-primary))] group-hover:bg-[hsl(var(--teal-primary))] group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`relative ${method.primary ? 'ring-2 ring-[hsl(var(--teal-primary))]' : ''}`}>
                {method.primary && (
                  <Badge className="absolute -top-2 left-4 bg-[hsl(var(--teal-primary))]">
                    Recommended
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 rounded-full bg-[hsl(var(--teal-primary))]/10 text-[hsl(var(--teal-primary))] mb-4 w-fit">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium mb-2">{method.contact}</p>
                  <p className="text-sm text-muted-foreground mb-4">Response time: {method.responseTime}</p>
                  {method.title === "Email Support" ? (
                    <a href="mailto:support@aisaiah.org" className="w-full">
                      <Button 
                        className="w-full"
                        variant={method.primary ? "default" : "outline"}
                      >
                        Send Email
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      className="w-full"
                      variant={method.primary ? "default" : "outline"}
                    >
                      {method.title === "Community Forum" ? "Join Forum" : "Schedule Call"}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[hsl(var(--teal-primary))]" />
                  Is AIsaiah app free to use?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! AIsaiah offers a free tier with core spiritual tools. We also offer premium features for those who want enhanced AI capabilities and additional content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[hsl(var(--teal-primary))]" />
                  How does AI assist with prayer and scripture study?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI helps by providing contextual insights, suggesting relevant scriptures, and offering guided prayer prompts based on your spiritual journey and current needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[hsl(var(--teal-primary))]" />
                  Is my personal information and prayers kept private?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We take privacy seriously and use end-to-end encryption for all personal content. Your prayers and spiritual reflections remain completely private.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[hsl(var(--teal-primary))]" />
                  Can I use AIsaiah offline?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many features work offline including saved devotionals and downloaded scripture content. AI-powered features require an internet connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="gap-2">
              <BookOpen className="w-4 h-4" />
              User Guide
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Users className="w-4 h-4" />
              Community Guidelines
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Lightbulb className="w-4 h-4" />
              Feature Requests
            </Button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-[hsl(var(--teal-primary))]/10 to-[hsl(var(--purple-primary))]/10 border border-[hsl(var(--teal-primary))]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--teal-primary))]" />
          <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is dedicated to supporting your spiritual journey. Don't hesitate to reach out with any questions or concerns.
          </p>
          <a href="mailto:support@aisaiah.org">
            <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--teal-secondary))]">
              Contact Support Team
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}