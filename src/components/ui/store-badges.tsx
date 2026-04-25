import Image from "next/image";
import { cn } from "@/lib/utils";

const APP_STORE_URL = "https://apps.apple.com/us/app/aisaiah/id6751301980";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=org.aisaiah.spiritualfitness";

interface StoreBadgesProps {
  className?: string;
  badgeHeight?: number;
}

export function StoreBadges({ className, badgeHeight = 50 }: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", className)}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/badge-appstore.png"
          alt="Download on the App Store"
          width={Math.round(badgeHeight * 2.6)}
          height={badgeHeight}
          className="w-auto"
          style={{ height: badgeHeight }}
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/badge-googleplay.png"
          alt="Get it on Google Play"
          width={Math.round(badgeHeight * 2.6)}
          height={badgeHeight}
          className="w-auto"
          style={{ height: badgeHeight }}
        />
      </a>
    </div>
  );
}
