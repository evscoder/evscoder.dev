import cn from "clsx";
import { ArrowUpRight, Terminal } from "lucide-react";

import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function QuoteBanner({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <div
      className={cn("group relative flex min-h-56 items-end justify-between gap-6 overflow-hidden rounded-[32px] p-7 sm:p-10 lg:col-span-2", isThemeAlt ? "bg-[#b6ff5c] text-slate-950" : "bg-slate-950 text-white")}
    >
      <Terminal className="absolute right-7 top-7 h-7 w-7 opacity-40" />
      <span className="absolute -right-5 -top-20 font-[var(--font-family-text2)] text-[15rem] leading-none opacity-[.06]">“</span>
      <span className="relative max-w-4xl text-2xl font-black leading-tight tracking-[-.04em] sm:text-4xl">{content.quote}</span>
      <a href="mailto:evgst.gl@gmail.com" className={cn("relative grid h-14 w-14 shrink-0 place-items-center rounded-full transition-transform group-hover:rotate-12", isThemeAlt ? "bg-slate-950 text-white" : "bg-[#b6ff5c] text-slate-950")} aria-label="Contact"><ArrowUpRight className="h-5 w-5" /></a>
    </div>
  );
}
