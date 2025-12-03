import { Navigation } from "@/components/navigation";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";
import { Smartphone, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import faithTechBgPath from "@assets/1753116855202-faithtech_prayer_background_index_0@1536x1024_1753121360002.png";

export default function Download() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      <Navigation />
      
      <section className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={faithTechBgPath} 
            alt="Faith and Technology Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1BA39A]/20 via-[#7C5CE3]/20 to-background/80"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#1BA39A]/20 to-[#7C5CE3]/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#7C5CE3]/20 to-[#1BA39A]/20 rounded-full blur-xl"
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
          <div className="max-w-3xl mx-auto">
            {/* Back to Home Link */}
            <motion.div
              className="mb-8 flex justify-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Logo Display */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <div className="w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48 relative">
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
                  <div className="w-full h-full bg-gradient-to-r from-[#1BA39A] to-[#7C5CE3] rounded-full"></div>
                </motion.div>
                <Logo className="w-full h-full relative z-10" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text-glow animate-fade-in"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Download AIsaiah
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-xl md:text-2xl mb-12 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get the AIsaiah app on your device and turn your screen time into sacred time.
            </motion.p>

            {/* Download Buttons Container */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Apple App Store Button */}
              <motion.a
                href="https://apps.apple.com/us/app/aisaiah/id6751301980"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-14 w-auto"
                  />
                </div>
              </motion.a>

              {/* Google Play Store Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-14 w-auto"
                  />
                </div>
              </motion.a>
            </motion.div>

            {/* Additional Info Card */}
            <motion.div
              className="mt-12 bg-[var(--bg-elev)] border border-[var(--border)] rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex flex-col items-center gap-4">
                <Smartphone className="h-12 w-12 text-[#1BA39A]" />
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Available on iOS and Android
                </h2>
                <p className="text-lg max-w-md" style={{ color: 'var(--text-secondary)' }}>
                  Build a daily rhythm of prayer, Scripture, and loving service. 
                  Download the app to start your spiritual journey today.
                </p>
              </div>
            </motion.div>

            {/* QR Code Note */}
            <motion.p
              className="mt-8 text-sm"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              If you scanned a QR code, select your device above to download the app.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}

