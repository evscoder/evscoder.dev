import cn from "clsx";
import { Braces, Cpu } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import {
  stackCore,
  stackExpertise,
  stackSupport,
} from "@/app/components/home/model/site-content";
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
        <div
          className={cn(
            "mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]",
            isThemeAlt ? "text-sky-300" : "text-[var(--hero-secondary)]",
          )}
        >
          <Braces className="h-4 w-4" aria-hidden="true" />
          {content.stackCoreLabel}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {stackCore.map((skill, index) => (
            <div
              key={skill.title}
              className={cn(
                "relative overflow-hidden rounded-2xl border px-4 py-4",
                index === 0 && "sm:col-span-2",
                isThemeAlt
                  ? "border-sky-400/20 bg-slate-900/80"
                  : "border-[var(--hero-card-border)] bg-[var(--hero-card-strong-bg)]",
              )}
            >
              <div className="text-base font-bold tracking-tight">{skill.title}</div>
              <div
                className={cn(
                  "mt-1 text-xs leading-5",
                  isThemeAlt ? "text-slate-400" : "text-[var(--hero-muted)]",
                )}
              >
                {skill.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--hero-muted)]">
              {content.stackExpertiseLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {stackExpertise.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-semibold",
                    isThemeAlt
                      ? "border-orange-400/25 bg-orange-400/8 text-orange-200"
                      : "border-orange-400/25 bg-orange-50 text-orange-800",
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--hero-muted)]">
              {content.stackSupportLabel}
            </p>
            <p
              className={cn(
                "text-xs leading-6",
                isThemeAlt ? "text-slate-400" : "text-[var(--hero-muted)]",
              )}
            >
              {stackSupport.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}
