import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface HeroMetric {
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  metrics?: HeroMetric[];
  aside?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  metrics = [],
  aside,
  className,
}: PageHeroProps) {
  const hasAside = !!aside;

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-20 text-white md:pt-36 md:pb-24",
        className
      )}
      style={{ background: "var(--gradient-spiritual)" }}
    >
      {/* Atmospheric glows */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-primary-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[250px] w-[250px] rounded-full bg-gold-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          hasAside && "grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end"
        )}
      >
        <div className={cn(hasAside ? "max-w-4xl" : "max-w-4xl mx-auto text-center")}>
          {eyebrow ? (
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300 backdrop-blur-sm">
              {eyebrow}
            </div>
          ) : null}

          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className={cn(
            "mt-6 text-lg leading-relaxed text-slate-300 md:text-xl",
            hasAside ? "max-w-3xl" : "max-w-3xl mx-auto"
          )}>
            {description}
          </p>

          {actions.length > 0 ? (
            <div className={cn(
              "mt-10 flex flex-col gap-4 sm:flex-row",
              !hasAside && "sm:justify-center"
            )}>
              {actions.map((action) => (
                <Button
                  key={action.label + action.href}
                  href={action.href}
                  variant={action.variant ?? "primary"}
                  size={action.size ?? "lg"}
                  className={action.className}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}

          {metrics.length > 0 ? (
            <div className={cn(
              "mt-12 grid gap-4 sm:grid-cols-3",
              !hasAside && "max-w-3xl mx-auto"
            )}>
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm text-left"
                >
                  <div className="text-2xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {hasAside ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-sm">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
