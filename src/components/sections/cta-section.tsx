import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-600/15 blur-[100px]" />
      </div>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-300">
          Partner with us
        </p>
        <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to bring purpose-built technology{" "}
          <br className="hidden sm:block" />
          to your community?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Whether you&apos;re a church, ministry, diocese, or faith-based organization,
          we&apos;d love to explore how Aisaiah can serve your mission. Let&apos;s start
          a conversation.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
          >
            Start A Partnership Conversation
          </Button>
          <Button
            href="/partnerships"
            size="lg"
            className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
          >
            Explore Partnership Models
          </Button>
        </div>
      </div>
    </section>
  );
}
