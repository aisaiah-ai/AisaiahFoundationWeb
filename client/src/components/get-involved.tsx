import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Users, Church, GraduationCap, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import communityImagePath from "@assets/1753116969024-inspiring_diverse_community_collaboration_index_1@1536x1024_1753121360002.png";

export function GetInvolved() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const involvementOptions = [
    {
      icon: Heart,
      title: "Donations",
      description: "Support our mission with a financial contribution. Every donation helps us develop and maintain spiritual tools for believers worldwide.",
      buttonText: "Donate Now",
      buttonAction: () => scrollToSection("donate"),
      buttonVariant: "default" as const,
      gradient: "from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]"
    },
    {
      icon: HandHeart,
      title: "Volunteering",
      description: "Share your skills and time with our team. We welcome developers, designers, content creators, and spiritual advisors.",
      buttonText: "Get Involved",
      buttonAction: () => scrollToSection("contact"),
      buttonVariant: "outline" as const,
      gradient: "from-[hsl(var(--purple-primary))] to-[hsl(var(--teal-primary))]"
    },
    {
      icon: Users,
      title: "Faith Ambassador",
      description: "Become a Faith Ambassador and help spread the word about AIsaiah Foundation in your community and church.",
      buttonText: "Join Program",
      buttonAction: () => scrollToSection("contact"),
      buttonVariant: "outline" as const,
      gradient: "from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]"
    }
  ];

  const partnershipFeatures = [
    {
      icon: Church,
      title: "Church Integration",
      description: "Seamlessly integrate our tools into your church's digital ecosystem."
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Comprehensive training for ministry teams and ongoing technical support."
    },
    {
      icon: Handshake,
      title: "Custom Solutions",
      description: "Tailored spiritual technology solutions for your ministry's unique needs."
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={communityImagePath} 
          alt="Diverse Community Collaboration" 
          className="w-full h-full object-cover opacity-5 dark:opacity-3"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Get Involved
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our mission to transform spiritual growth through technology. There are many ways to contribute to our faith-centered work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-muted/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${option.gradient} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <option.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{option.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>
                <Button
                  variant={option.buttonVariant}
                  onClick={option.buttonAction}
                  className={option.buttonVariant === "default" ? "bg-gradient-spiritual hover:shadow-lg transform hover:scale-105 transition-all duration-200" : "border-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200"}
                >
                  {option.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Partner with Us */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-[hsl(var(--purple-primary))]/10 to-[hsl(var(--teal-primary))]/10 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Partner with Us</h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Churches and ministries can partner with AIsaiah Foundation to bring cutting-edge spiritual technology to their communities.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {partnershipFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mb-4 mx-auto">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-spiritual hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Become a Partner
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
