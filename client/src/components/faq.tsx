import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When will AIsaiah be available?",
      answer: "AIsaiah is currently in development. Join our waitlist to be notified when the app launches for iOS and Android."
    },
    {
      question: "How much will AIsaiah cost?",
      answer: "AIsaiah will offer a free tier with core spiritual tools, plus premium features for enhanced AI capabilities and additional content. Pricing details will be announced closer to launch."
    },
    {
      question: "How is my privacy protected?",
      answer: "We're privacy-first: no ads, no data selling. Your prayers and spiritual reflections are encrypted and kept completely private. We only collect minimal data needed to provide our services."
    },
    {
      question: "Can I use AIsaiah offline?",
      answer: "Many features will work offline, including saved devotionals and downloaded Scripture content. AI-powered features require an internet connection."
    },
    {
      question: "How can I support AIsaiah's mission?",
      answer: "Join our waitlist, share with your faith community, consider volunteering, or support us through prayer and donations once available."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: 'var(--bg-1)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl" style={{ color: 'var(--muted)' }}>
              Everything you need to know about AIsaiah
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-lg overflow-hidden"
                style={{ borderColor: 'var(--muted)', backgroundColor: 'var(--bg-2)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ 
                    color: 'var(--text)',
                    minHeight: '44px'
                  }}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ color: 'var(--muted)' }}>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}