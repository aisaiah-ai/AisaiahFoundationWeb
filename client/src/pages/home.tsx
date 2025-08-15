import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";
import { WaitlistForm } from "@/components/waitlist-form";
import { GetInvolved } from "@/components/get-involved";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-1)', color: 'var(--text)' }}>
      <Navigation />
      <Hero />
      <Features />
      <Mission />
      <FAQ />
      <WaitlistForm />
      <GetInvolved />
      <Contact />
    </div>
  );
}
