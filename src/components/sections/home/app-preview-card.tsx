import Image from "next/image";
import { cn } from "@/lib/utils";
import type { AppScreen } from "@/content/homepage";

interface AppPreviewCardProps {
  screen: AppScreen;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const sizes = {
  sm: "w-[140px] h-[290px] sm:w-[160px] sm:h-[330px] md:w-[180px] md:h-[370px] rounded-[1.5rem]",
  md: "w-[160px] h-[320px] sm:w-[180px] sm:h-[370px] md:w-[200px] md:h-[410px] rounded-[1.75rem]",
  lg: "w-[220px] h-[450px] sm:w-[240px] sm:h-[490px] rounded-[2.5rem]",
};

const imageSizes = { sm: "180px", md: "200px", lg: "240px" };

export function AppPreviewCard({
  screen,
  size = "sm",
  className,
  priority = false,
}: AppPreviewCardProps) {
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
