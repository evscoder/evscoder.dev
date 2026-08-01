import cn from "clsx";
import { Terminal } from "lucide-react";

import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function QuoteBanner({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-2xl border p-5 text-sm uppercase tracking-[0.22em] lg:col-span-2",
        isThemeAlt
          ? "border-orange-400/30 bg-orange-500/10 text-orange-200"
          : "border-[var(--hero-quote-border)] bg-[var(--hero-quote-bg)] text-[var(--hero-quote-text)]",
      )}
    >
      <Terminal className="h-5 w-5" />
      <span className="flex-1">{content.quote}</span>
    </div>
  );
}
