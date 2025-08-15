import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { GetInvolved } from "@/components/get-involved";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <GetInvolved />
      <Contact />
    </div>
  );
}
