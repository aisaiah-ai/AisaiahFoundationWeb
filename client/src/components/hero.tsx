import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ArrowRight, Download, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--teal-primary))]/10 via-[hsl(var(--purple-primary))]/10 to-background"></div>
      
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
          {/* Logo Display */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-60 animate-glow drop-shadow-2xl">
              <Logo className="w-full h-full" />
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
            <Button
              size="lg"
              onClick={() => scrollToSection("features")}
              className="bg-gradient-to-r from-[hsl(var(--purple-primary))] to-[hsl(var(--purple-secondary))] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Download the App</span>
            </Button>
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
        </div>
      </div>
    </section>
  );
}
