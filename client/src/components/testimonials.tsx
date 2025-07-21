import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      quote: "AIsaiah Foundation is revolutionizing how our congregation connects with their faith. The AI-powered prayer guidance has deepened our community's spiritual practices in ways we never imagined.",
      author: "Pastor Michael Johnson",
      title: "Grace Community Church",
      initials: "MJ",
      color: "text-[hsl(var(--teal-primary))]",
      bgColor: "bg-[hsl(var(--teal-primary))]"
    },
    {
      quote: "The scripture journaling features have transformed my daily devotions. Having AI assistance in understanding biblical context while maintaining the personal spiritual connection is incredible.",
      author: "Dr. Sarah Williams", 
      title: "Theological Seminary Professor",
      initials: "SW",
      color: "text-[hsl(var(--purple-primary))]",
      bgColor: "bg-[hsl(var(--purple-primary))]"
    },
    {
      quote: "As a ministry leader, the AIsaiah tools have enabled our team to serve our community more effectively. The technology enhances our spiritual outreach without replacing the human element.",
      author: "Pastor David Chen",
      title: "Hope Fellowship Ministry", 
      initials: "DC",
      color: "text-[hsl(var(--teal-primary))]",
      bgColor: "bg-[hsl(var(--teal-primary))]"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
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
              What Leaders Are Saying
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from early users, pastors, and ministry leaders about the impact of AIsaiah Foundation's spiritual technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-muted/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <Quote className={`h-8 w-8 ${testimonial.color}`} />
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to experience the future of spiritual growth?
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("features")}
              className="bg-gradient-spiritual hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Features
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
