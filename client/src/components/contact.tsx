import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/logo";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("POST", "/api/contact", contactForm);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDonationAmountSelect = (amount: number | "custom") => {
    if (amount === "custom") {
      setDonationAmount(null);
      // Focus on custom amount input
      const customInput = document.getElementById("custom-amount") as HTMLInputElement;
      if (customInput) {
        customInput.style.display = "block";
        customInput.focus();
      }
    } else {
      setDonationAmount(amount);
      setCustomAmount("");
      const customInput = document.getElementById("custom-amount") as HTMLInputElement;
      if (customInput) {
        customInput.style.display = "none";
      }
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setDonationAmount(parseInt(value) || null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Get in Touch</h2>
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                Have questions about our mission or want to get involved? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Email</div>
                    <div style={{ color: 'var(--text-secondary)' }}>info@aisaiah.org</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--purple-primary))] to-[hsl(var(--teal-primary))] rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Phone</div>
                    <div style={{ color: 'var(--text-secondary)' }}>813-355-9645</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Address</div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                      16192 Coastal Hwy<br />
                      Lewes, Delaware 19958<br />
                      County of Sussex
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gradient-spiritual transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-elev)', color: 'var(--text-primary)' }}
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        id="firstName"
                        type="text"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm(prev => ({ ...prev, firstName: e.target.value }))}
                        className="input"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        id="lastName"
                        type="text"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm(prev => ({ ...prev, lastName: e.target.value }))}
                        className="input"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="input"
                      placeholder="john@aisaiah.org"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Select
                      value={contactForm.subject}
                      onValueChange={(value) => setContactForm(prev => ({ ...prev, subject: value }))}
                    >
                      <SelectTrigger className="input">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="volunteer">Volunteering</SelectItem>
                        <SelectItem value="donation">Donation Questions</SelectItem>
                        <SelectItem value="waitlist">Waitlist Questions</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="textarea resize-none"
                      placeholder="Tell us about your inquiry..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-spiritual hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Donation Section */}
          <motion.div
            id="donate"
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-spiritual rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Support Our Mission</h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Your donation helps us develop innovative spiritual technology that serves believers and ministries worldwide. Every contribution makes a difference.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[25, 50, 100].map((amount) => (
                  <Button
                    key={amount}
                    onClick={() => handleDonationAmountSelect(amount)}
                    variant={donationAmount === amount ? "secondary" : "outline"}
                    className={`py-3 px-6 font-semibold transition-all duration-200 ${
                      donationAmount === amount 
                        ? "bg-white text-purple-600" 
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    ${amount}
                  </Button>
                ))}
                <Button
                  onClick={() => handleDonationAmountSelect("custom")}
                  variant={donationAmount !== null && ![25, 50, 100].includes(donationAmount) ? "secondary" : "outline"}
                  className={`py-3 px-6 font-semibold transition-all duration-200 ${
                    donationAmount !== null && ![25, 50, 100].includes(donationAmount)
                      ? "bg-white text-purple-600" 
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  Custom
                </Button>
              </div>
              
              <div className="max-w-md mx-auto mb-6">
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="text-gray-900 placeholder:text-gray-500"
                  style={{ display: donationAmount !== null && ![25, 50, 100].includes(donationAmount) ? "block" : "none" }}
                  min="1"
                />
              </div>
              
              <div className="relative inline-block">
                <Badge 
                  className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 shadow-lg animate-pulse"
                  data-testid="badge-donate-coming-soon"
                >
                  Coming Soon
                </Badge>
                <Button 
                  className="px-8 py-4 bg-white text-purple-600 font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 relative"
                  disabled={!donationAmount}
                  data-testid="button-donate-securely"
                >
                  Donate Securely {donationAmount ? `$${donationAmount}` : ""}
                </Button>
              </div>
              
              <p className="text-sm mt-4 opacity-75">
                AIsaiah Foundation is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible.
              </p>
            </div>
          </motion.div>

          {/* Footer */}
          <footer className="border-t pt-8" style={{ borderColor: 'var(--muted)' }}>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo and Description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Logo className="w-8 h-10" />
                  <span className="text-xl font-semibold" style={{ color: 'var(--text)' }}>AIsaiah Foundation</span>
                </div>
                <p className="mb-4" style={{ color: 'var(--muted)' }}>
                  A nonprofit organization bridging faith and innovation to make spiritual practices more accessible through AI-powered technology.
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  © 2025 AIsaiah Foundation. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4" style={{ color: 'var(--text)' }}>Quick Links</h4>
                <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                  <li><button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="hover:opacity-80 transition-opacity duration-200">App Features</button></li>
                  <li><button onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })} className="hover:opacity-80 transition-opacity duration-200">Mission</button></li>
                  <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:opacity-80 transition-opacity duration-200">FAQ</button></li>
                  <li><button onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })} className="hover:opacity-80 transition-opacity duration-200">Waitlist</button></li>
                  <li><button onClick={() => document.getElementById("get-involved")?.scrollIntoView({ behavior: "smooth" })} className="hover:opacity-80 transition-opacity duration-200">Get Involved</button></li>
                  <li><button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:opacity-80 transition-opacity duration-200">Contact</button></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4" style={{ color: 'var(--text)' }}>Legal</h4>
                <ul className="space-y-2" style={{ color: 'var(--muted)' }}>
                  <li><a href="/privacy" className="hover:opacity-80 transition-opacity duration-200">Privacy</a></li>
                  <li><a href="#terms" className="hover:opacity-80 transition-opacity duration-200">Terms</a></li>
                  <li><a href="mailto:hello@aisaiah.org" className="hover:opacity-80 transition-opacity duration-200">Support</a></li>
                </ul>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="border-t pt-6" style={{ borderColor: 'var(--muted)' }}>
              <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                AIsaiah Foundation is a registered 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. 
                No goods or services were provided in exchange for your donation. Please consult your tax advisor for specific advice.
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-spiritual text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5 mx-auto" />
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </section>
  );
}
