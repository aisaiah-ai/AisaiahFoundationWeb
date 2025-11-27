import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Trash2,
    AlertTriangle,
    Mail,
    ArrowLeft,
    CheckCircle2,
    Clock,
    ShieldAlert,
    Smartphone
} from "lucide-react";
import { Link } from "wouter";

export default function DataDeletionPage() {
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
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-spiritual">
                        AIsaiah Fitness – Account & Data Deletion Instructions
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                        AIsaiah Fitness by AIsaiah Wellness
                    </p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We value your privacy and give you full control over your data. Below are the instructions for permanently deleting your account and associated data.
                    </p>
                </motion.div>

                {/* Deletion Methods */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-[hsl(var(--teal-primary))]/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Smartphone className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                                    In-App Deletion
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">
                                    The easiest way to delete your account is directly through the app:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 font-medium text-foreground">
                                    <li>Open <strong>Settings</strong></li>
                                    <li>Tap on <strong>Account</strong></li>
                                    <li>Select <strong>Delete Account</strong></li>
                                    <li>Confirm your choice</li>
                                </ol>
                            </CardContent>
                        </Card>

                        <Card className="border-[hsl(var(--teal-primary))]/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Mail className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                                    No Access to App?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">
                                    If you cannot access the app, you can request deletion via email:
                                </p>
                                <div className="bg-muted/30 p-4 rounded-lg text-center">
                                    <a href="mailto:support@aisaiah.org" className="text-lg font-semibold text-[hsl(var(--teal-primary))] hover:underline">
                                        support@aisaiah.org
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Please send the request from the email address associated with your account.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Data Deleted */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <Trash2 className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                                Data That Will Be Deleted
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-muted-foreground">
                                When you request account deletion, the following data associated with your account will be permanently removed:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Authentication credentials</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Profile information & preferences</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Spiritual & faith activity logs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Journaling & reflections</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>AI interaction history</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Reminders, favorites, & bookmarks</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Notification tokens</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--teal-primary))] flex-shrink-0" />
                                        <span>Cloud-stored files tied to your User ID</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Data Retained */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <ShieldAlert className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                                Data Temporarily Retained
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-muted-foreground">
                                Some data may be temporarily retained for legal, security, or compliance purposes before being anonymized or deleted:
                            </p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                                    <span><strong>Payment & transaction records:</strong> Retained for tax and accounting purposes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                                    <span><strong>Fraud-prevention logs:</strong> To prevent abuse of our services.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                                    <span><strong>Security & audit logs:</strong> Maintained for system integrity and security monitoring.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Retention Timeline & Warning */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-[hsl(var(--teal-primary))]" />
                                    Retention Timeline
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                                        <span><strong>7–30 Days:</strong> Standard deletion period for most account data.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal-primary))] mt-2 flex-shrink-0" />
                                        <span><strong>Up to 90 Days:</strong> Maximum retention for backups and legal records before anonymization.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-destructive/5 border-destructive/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-destructive">
                                    <AlertTriangle className="w-6 h-6" />
                                    Important Warning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    <strong>Deletion is permanent and irreversible.</strong> Once your account is deleted, you cannot recover your profile, history, or any saved content. If you wish to use AIsaiah Fitness again, you will need to create a new account.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Support Contact */}
                <motion.div
                    className="text-center p-8 rounded-2xl bg-gradient-to-r from-[hsl(var(--teal-primary))]/10 to-[hsl(var(--purple-primary))]/10 border border-[hsl(var(--teal-primary))]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        If you have any questions about the deletion process or need help, our support team is available.
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:support@aisaiah.org">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--teal-secondary))]"
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                Contact Support
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
