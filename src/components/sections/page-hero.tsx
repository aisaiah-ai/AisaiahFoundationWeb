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
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white md:pt-36 md:pb-24",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent_38%),radial-gradient(circle_at_20%_30%,rgba(13,148,136,0.18),transparent_30%),linear-gradient(180deg,#08101f_0%,#0f172a_58%,#08101f_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:px-8">
        <div className="max-w-4xl">
          {eyebrow ? (
            <div className="mb-6 inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-200 backdrop-blur">
              {eyebrow}
            </div>
          ) : null}

          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {description}
          </p>

          {actions.length > 0 ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {aside ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
