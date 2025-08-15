import { motion } from "framer-motion";

export function Mission() {
  return (
    <section id="mission" className="py-20" style={{ backgroundColor: 'var(--bg-2)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text)' }}>
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              AIsaiah helps individuals and families return to daily prayer, Scripture, and loving service—turning everyday screen time into sacred time.
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Privacy-first. No ads, no data selling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}