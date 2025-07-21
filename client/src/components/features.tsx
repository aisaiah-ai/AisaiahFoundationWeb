import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HandHeart, BookOpen, Bot, Church } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

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
      title: "Guided Prayer",
      description: "AI-powered prayer guidance tailored to your spiritual needs and personal journey.",
      gradient: "from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]"
    },
    {
      icon: BookOpen,
      title: "Scripture Journaling",
      description: "Digital journaling tools to reflect on biblical passages and track your spiritual growth.",
      gradient: "from-[hsl(var(--purple-primary))] to-[hsl(var(--teal-primary))]"
    },
    {
      icon: Bot,
      title: "AI Spiritual Companion",
      description: "Your personal AI companion for spiritual guidance, questions, and faith-based conversations.",
      gradient: "from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]"
    },
    {
      icon: Church,
      title: "Ministry Tools",
      description: "Comprehensive tools for church leaders and ministry teams to serve their communities better.",
      gradient: "from-[hsl(var(--purple-primary))] to-[hsl(var(--teal-primary))]"
    }
  ];

  const screenshots = [
    {
      src: "/screenshots/app-home.png",
      alt: "AIsaiah app welcome screen featuring sunrise over cross with Good morning greeting and spiritual journey options",
      title: "Inspiring Daily Welcome"
    },
    {
      src: "/screenshots/app-progress.png", 
      alt: "AIsaiah app showing 20% spiritual progress with Pray, Review, Act tracking and QuickLog features for Mass, Gospel, Fasting",
      title: "Track Your Spiritual Growth"
    },
    {
      src: "/screenshots/app-dark.png",
      alt: "AIsaiah app dark mode displaying 100% spiritual completion with Prayer, Scripture, Works and Daily Prayer & Reflection", 
      title: "Complete Spiritual Dashboard"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-4 mx-auto`}>
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
            
            <div className="grid md:grid-cols-3 gap-8">
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
                    className="rounded-2xl shadow-lg w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
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
              <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
              <p className="mb-6 opacity-90">Be the first to experience the AIsaiah App when it launches.</p>
              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={handleWaitlistSubmit}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-1 text-gray-900 placeholder:text-gray-500"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
