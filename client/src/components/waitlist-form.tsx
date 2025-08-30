import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("Welcome to the waitlist! We'll notify you when AIsaiah launches.");
        setEmail("");
      } else {
        setStatus('error');
        setMessage(result.message || "Something went wrong. Please try again or email us at support@aisaiah.org");
      }
    } catch (error) {
      setStatus('error');
      setMessage("Something went wrong. Please try again or email us at support@aisaiah.org");
    }
  };

  return (
    <section id="waitlist" className="py-20" style={{ backgroundColor: 'var(--bg-2)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Join the Waitlist
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
              Be the first to experience spiritual fitness when AIsaiah launches.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-1)', border: '1px solid var(--teal)' }}>
                <CheckCircle className="mx-auto h-12 w-12 mb-4" style={{ color: 'var(--teal)' }} />
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>You're on the list!</p>
                <p style={{ color: 'var(--muted)' }}>{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-white dark:text-white bg-background border-border"
                    style={{
                      minHeight: '44px'
                    }}
                    required
                    disabled={status === 'loading'}
                    data-testid="waitlist-email-input"
                  />
                  <Button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    className="sm:px-8"
                    style={{
                      backgroundColor: 'var(--teal)',
                      color: 'var(--bg-1)',
                      minHeight: '44px'
                    }}
                    data-testid="waitlist-submit-button"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </div>

                {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--text)' }}>
                    <AlertCircle className="h-4 w-4" />
                    <span>{message}</span>
                  </div>
                )}

                <div className="hidden lg:block mt-8">
                  <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                    Or scan to join the waitlist:
                  </p>
                  <div className="inline-block">
                    <img 
                      src="/assets/qr.png" 
                      alt="QR code to join AIsaiah waitlist" 
                      className="w-32 h-32 mx-auto" 
                      onError={(e) => {
                        // Hide QR if image doesn't exist
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}