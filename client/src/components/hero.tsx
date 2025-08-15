import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { WaitlistDialog } from "@/components/ui/waitlist-dialog";
import { ArrowRight, Download, Heart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import faithTechBgPath from "@assets/1753116855202-faithtech_prayer_background_index_0@1536x1024_1753121360002.png";

export function Hero() {
  const [showWaitlistDialog, setShowWaitlistDialog] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={faithTechBgPath} 
          alt="Faith and Technology Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--teal-primary))]/20 via-[hsl(var(--purple-primary))]/20 to-background/80"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[hsl(var(--teal-primary))]/20 to-[hsl(var(--purple-primary))]/20 rounded-full blur-xl"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[hsl(var(--purple-primary))]/20 to-[hsl(var(--teal-primary))]/20 rounded-full blur-xl"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Display with Enhanced Glow */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <div className="w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-60 relative">
              {/* Animated particle glow behind logo */}
              <motion.div
                className="absolute inset-0 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))] rounded-full"></div>
              </motion.div>
              <Logo className="w-full h-full relative z-10" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-spiritual animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering Spiritual Growth Through Faith & Technology
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            AIsaiah Foundation is a nonprofit organization dedicated to building AI-powered spiritual tools for Christians and ministries worldwide.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="group bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--teal-secondary))] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <div className="relative">
              <Badge 
                className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 shadow-lg animate-pulse"
                data-testid="badge-coming-soon"
              >
                Coming Soon
              </Badge>
              <Button
                size="lg"
                onClick={() => setShowWaitlistDialog(true)}
                className="bg-gradient-to-r from-[hsl(var(--purple-primary))] to-[hsl(var(--purple-secondary))] hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative"
                data-testid="button-download-app"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>Download the App</span>
              </Button>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("donate")}
              className="border-2 border-[hsl(var(--teal-primary))] text-[hsl(var(--teal-primary))] hover:bg-[hsl(var(--teal-primary))] hover:text-white transition-all duration-300"
            >
              <Heart className="mr-2 h-4 w-4" />
              <span>Support Us</span>
            </Button>
          </motion.div>

          {/* Scroll Down Indicator - Positioned below CTA buttons */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer flex justify-center"
              onClick={() => scrollToSection("about")}
            >
              <div className="flex flex-col items-center text-muted-foreground hover:text-[hsl(var(--teal-primary))] transition-colors duration-300">
                <span className="text-sm mb-2">Scroll to explore</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <WaitlistDialog 
        open={showWaitlistDialog} 
        onOpenChange={setShowWaitlistDialog} 
      />
    </section>
  );
}
