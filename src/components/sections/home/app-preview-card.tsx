import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heart, BookOpen, HandHeart } from "lucide-react";
import type { AppScreen } from "@/content/homepage";
import type { LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Placeholder screen data — used when real screenshots aren't available
// ---------------------------------------------------------------------------

interface PlaceholderScreen {
  icon: LucideIcon;
  label: string;
  accent: string;
  iconBg: string;
  bars: string;
}

const placeholderScreens: Record<string, PlaceholderScreen> = {
  prayer: {
    icon: Heart,
    label: "Prayer",
    accent: "from-rose-400 to-rose-600",
    iconBg: "bg-rose-500/20 text-rose-300",
    bars: "bg-rose-400/20",
  },
  reflection: {
    icon: BookOpen,
    label: "Reflection",
    accent: "from-primary-400 to-primary-600",
    iconBg: "bg-primary-500/20 text-primary-300",
    bars: "bg-primary-400/20",
  },
  service: {
    icon: HandHeart,
    label: "Service",
    accent: "from-accent-400 to-accent-600",
    iconBg: "bg-accent-500/20 text-accent-300",
    bars: "bg-accent-400/20",
  },
};

// ---------------------------------------------------------------------------
// Sizing
// ---------------------------------------------------------------------------

const sizes = {
  sm: "w-[140px] h-[290px] sm:w-[160px] sm:h-[330px] md:w-[180px] md:h-[370px] rounded-[1.5rem]",
  md: "w-[160px] h-[320px] sm:w-[180px] sm:h-[370px] md:w-[200px] md:h-[410px] rounded-[1.75rem]",
  lg: "w-[220px] h-[450px] sm:w-[240px] sm:h-[490px] rounded-[2.5rem]",
};

const imageSizes = { sm: "180px", md: "200px", lg: "240px" };

// ---------------------------------------------------------------------------
// Image-based card (for real screenshots)
// ---------------------------------------------------------------------------

interface ImageCardProps {
  screen: AppScreen;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

export function AppPreviewCard({
  screen,
  size = "sm",
  className,
  priority = false,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden shadow-2xl border border-white/10",
        sizes[size],
        size === "md" && "ring-1 ring-primary-400/20 border-white/15",
        className
      )}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        fill
        className="object-cover"
        sizes={imageSizes[size]}
        priority={priority}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Placeholder card (elegant fake UI — no real images needed)
// ---------------------------------------------------------------------------

interface PlaceholderCardProps {
  variant: "prayer" | "reflection" | "service";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AppPlaceholderCard({
  variant,
  size = "sm",
  className,
}: PlaceholderCardProps) {
  const screen = placeholderScreens[variant];
  const Icon = screen.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden shadow-2xl border border-white/10 bg-slate-900",
        sizes[size],
        size === "md" && "ring-1 ring-primary-400/20 border-white/15",
        className
      )}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] text-slate-500">9:41</span>
        <div className="flex gap-1">
          <div className="h-1 w-3 rounded-full bg-slate-600" />
          <div className="h-1 w-3 rounded-full bg-slate-600" />
          <div className="h-1 w-2 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* App header */}
      <div className="px-5 pt-3 pb-4">
        <div className="h-2 w-16 rounded-full bg-slate-700" />
        <div className="mt-2 h-1.5 w-24 rounded-full bg-slate-800" />
      </div>

      {/* Main feature area */}
      <div className="flex flex-col items-center px-5 pt-4">
        {/* Icon */}
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl",
            screen.iconBg
          )}
        >
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>

        {/* Label */}
        <p className="mt-4 text-sm font-semibold text-white">{screen.label}</p>
        <p className="mt-1 text-[10px] text-slate-400">Daily rhythm</p>

        {/* Progress ring placeholder */}
        <div className="mt-5 relative h-20 w-20">
          <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-slate-800"
            />
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${Math.PI * 68 * 0.7} ${Math.PI * 68}`}
              className={cn(
                "transition-all duration-1000",
                variant === "prayer"
                  ? "text-rose-400"
                  : variant === "reflection"
                    ? "text-primary-400"
                    : "text-accent-400"
              )}
              stroke="currentColor"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
            70%
          </span>
        </div>
      </div>

      {/* Content lines */}
      <div className="mt-6 space-y-2.5 px-5">
        <div className={cn("h-2 w-full rounded-full", screen.bars)} />
        <div className={cn("h-2 w-4/5 rounded-full", screen.bars)} />
        <div className={cn("h-2 w-3/5 rounded-full", screen.bars)} />
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-slate-800 bg-slate-900/80 px-4 py-3 backdrop-blur-sm">
        <div className="h-1.5 w-6 rounded-full bg-slate-700" />
        <div
          className={cn(
            "h-1.5 w-6 rounded-full bg-gradient-to-r",
            screen.accent
          )}
        />
        <div className="h-1.5 w-6 rounded-full bg-slate-700" />
      </div>
    </div>
  );
}
