import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function Events() {
  const [newsletterData, setNewsletterData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterData.name && newsletterData.email && newsletterData.consent) {
      // TODO: Implement actual newsletter subscription
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setNewsletterData({ name: "", email: "", consent: false });
    }
  };

  const events = [
    {
      date: { month: "MAR", day: "15" },
      title: "Faith & Technology Conference 2024",
      description: "Join church leaders and tech innovators for a day of inspiration and learning about spiritual technology.",
      location: "Virtual Event • 9:00 AM - 5:00 PM EST",
      gradient: "from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]"
    },
    {
      date: { month: "APR", day: "22" },
      title: "Ministry Leaders Workshop",
      description: "Hands-on workshop for ministry leaders to learn how to integrate AI tools into their spiritual practices.",
      location: "Delaware, USA • 2:00 PM - 6:00 PM EST",
      gradient: "from-[hsl(var(--purple-primary))] to-[hsl(var(--teal-primary))]"
    },
    {
      date: { month: "MAY", day: "10" },
      title: "Community Prayer & Fellowship",
      description: "Monthly community gathering for prayer, fellowship, and discussion about faith and technology.",
      location: "Virtual Event • 7:00 PM - 8:30 PM EST",
      gradient: "from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]"
    }
  ];

  return (
    <section id="events" className="py-20 bg-muted/50">
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
              Events & Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community events and stay connected with fellow believers on their spiritual technology journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-foreground">Upcoming Events</h3>
              
              <div className="space-y-6">
                {events.map((event, index) => (
                  <motion.div
                    key={event.title}
                    className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${event.gradient} rounded-lg flex items-center justify-center text-white font-bold`}>
                        <div className="text-center">
                          <div className="text-xs">{event.date.month}</div>
                          <div className="text-lg">{event.date.day}</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                        <p className="text-muted-foreground mb-2">
                          {event.description}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-spiritual rounded-2xl p-8 text-white h-fit">
                <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                <p className="mb-6 opacity-90">
                  Subscribe to our newsletter to receive updates about new features, events, and spiritual technology insights.
                </p>
                
                <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={newsletterData.name}
                      onChange={(e) => setNewsletterData(prev => ({ ...prev, name: e.target.value }))}
                      className="text-gray-900 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={newsletterData.email}
                      onChange={(e) => setNewsletterData(prev => ({ ...prev, email: e.target.value }))}
                      className="text-gray-900 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="newsletter-consent"
                      checked={newsletterData.consent}
                      onCheckedChange={(checked) => setNewsletterData(prev => ({ ...prev, consent: !!checked }))}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="newsletter-consent" className="text-sm opacity-90">
                      I agree to receive newsletters and updates from AIsaiah Foundation. You can unsubscribe at any time.
                    </label>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-white text-purple-600 hover:bg-gray-100"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              </div>

              {/* Community Image */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Church community worship gathering with diverse congregation" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
