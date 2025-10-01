import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HandHeart, BookOpen, Zap, Calendar, Target, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import splashScreen from "@assets/01_Splash_1755272472047.png";
import welcomeMission from "@assets/02_WelcomeMission_1755290203101.png";
import welcomeAI from "@assets/03_WelcomeAI_1755290203102.png";
import spiritualRings from "@assets/04_SpiritualRings_1755272472047.png";
import twrSchedule from "@assets/05_TWRSchedule_1755272472048.png";

export function Features() {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const { toast } = useToast();

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      // TODO: Implement actual waitlist submission
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when the app launches!",
      });
      setWaitlistEmail("");
    }
  };

  const features = [
    {
      icon: HandHeart,
      title: "Prayer",
      description: "Guided prayer experiences and AI assistance for deeper spiritual connection.",
      color: "var(--purple)"
    },
    {
      icon: BookOpen,
      title: "Scripture",
      description: "Daily Scripture reading with AI-powered insights and reflection tools.",
      color: "var(--teal)"
    },
    {
      icon: Zap,
      title: "Works",
      description: "Track acts of service and loving kindness in your community.",
      color: "var(--gold)"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Plan and organize your spiritual practices and ministry commitments.",
      color: "var(--purple)"
    },
    {
      icon: Target,
      title: "Streaks",
      description: "Build consistency with prayer, Scripture, and service streaks.",
      color: "var(--teal)"
    },
    {
      icon: BarChart3,
      title: "Insights",
      description: "Track your spiritual growth with meaningful analytics and reflections.",
      color: "var(--gold)"
    }
  ];

  const screenshots = [
    {
      src: splashScreen,
      alt: "AIsaiah app splash screen showing the logo with teal cross and purple dove on dark gradient background",
      title: "Beautiful App Launch"
    },
    {
      src: welcomeMission,
      alt: "AIsaiah onboarding screen explaining Our Mission to deepen faith daily with guided prayer and scripture",
      title: "Our Mission"
    },
    {
      src: welcomeAI,
      alt: "AIsaiah AI features screen showing AI chip icon and mission statement with Get Started and Sign In options",
      title: "AI-Powered Spiritual Growth"
    },
    {
      src: spiritualRings,
      alt: "AIsaiah main dashboard showing 100% spiritual completion with colorful progress rings for Pray, Review, and Acts",
      title: "Track Your Daily Progress"
    },
    {
      src: twrSchedule,
      alt: "AIsaiah event schedule showing CFC SE-B Regional Theme Weekend Retreat with worship and session times",
      title: "Ministry Event Planning"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              AIsaiah App Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover powerful tools designed to enhance your spiritual journey and strengthen your faith community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: feature.color }}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* App Screenshots */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">See the App in Action</h3>
              <p className="text-muted-foreground">Experience the beautiful, intuitive interface designed for spiritual growth.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt} 
                    className="rounded-2xl shadow-lg w-full h-96 object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold">{screenshot.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Waitlist */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-spiritual rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Download AIsaiah Now</h3>
              <p className="mb-6 opacity-90">Available now on iOS App Store!</p>
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <a href="https://apps.apple.com/us/app/aisaiah/id6751301980" target="_blank" rel="noopener noreferrer" className="flex justify-center transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-12"
                  />
                </a>
                <p className="text-sm opacity-75">Join the waitlist for Android updates:</p>
                <form 
                  className="flex flex-col sm:flex-row gap-4"
                  onSubmit={handleWaitlistSubmit}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="flex-1 text-gray-900 placeholder:text-gray-500 bg-white"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    Join Waitlist
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
