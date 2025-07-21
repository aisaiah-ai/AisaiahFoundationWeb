import { Cross, Brain, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import aboutImagePath from "@assets/1753116969024-inspiring_diverse_community_collaboration_index_1@1536x1024_1753121596798.png";

export function About() {
  return (
    <section id="about" className="py-20 bg-card dark:bg-card">
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
              Bridging Faith and Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We make spiritual practices more accessible through technology, creating meaningful connections between believers and their faith journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center">
                  <Cross className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Faith-Centered Mission</h3>
                  <p className="text-muted-foreground">
                    Our nonprofit mission is rooted in Christian values, dedicated to serving believers and ministries worldwide with innovative spiritual tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[hsl(var(--purple-primary))] to-[hsl(var(--teal-primary))] rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">AI-Powered Spirituality</h3>
                  <p className="text-muted-foreground">
                    We harness artificial intelligence to create personalized spiritual experiences, enhancing prayer, scripture study, and faith community connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center">
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Nonprofit Impact</h3>
                  <p className="text-muted-foreground">
                    As a registered nonprofit, every donation and contribution directly supports our mission to make spiritual growth accessible to all believers.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src={aboutImagePath} 
                alt="Diverse community volunteers collaborating together with technology" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--teal-primary))]/20 to-[hsl(var(--purple-primary))]/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
