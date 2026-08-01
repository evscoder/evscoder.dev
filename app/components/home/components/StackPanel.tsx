import cn from "clsx";
import { Cpu } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import { skills } from "@/app/components/home/model/site-content";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function StackPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel>
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <Cpu
            className={cn(
              "h-6 w-6",
              isThemeAlt ? "text-sky-300" : "text-[var(--hero-secondary)]",
            )}
          />
          <h2 className="text-xl font-bold uppercase tracking-widest">
            {content.stackTitle}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className={cn(
                "rounded-xl border px-3 py-3 text-sm font-medium",
                isThemeAlt
                  ? "border-slate-700/60 bg-slate-900/70 text-slate-200"
                  : "border-[var(--hero-card-border)] bg-[var(--hero-card-strong-bg)] text-[var(--hero-text)]",
              )}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
