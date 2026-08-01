import cn from "clsx";
import { Workflow } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function ProcessPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
        <div className="self-start lg:sticky lg:top-[120px]">
          <div className="mb-5 flex items-center gap-3">
            <Workflow
              className={cn(
                "h-6 w-6",
                isThemeAlt ? "text-emerald-300" : "text-[var(--hero-success)]",
              )}
            />
            <h2 className="text-xl font-bold uppercase tracking-widest">
              {content.processTitle}
            </h2>
          </div>

          <p
            className={cn(
              "max-w-2xl text-sm leading-7 sm:text-base",
              isThemeAlt ? "text-slate-300" : "text-[var(--hero-copy)]",
            )}
          >
            {content.processIntro}
          </p>
        </div>

        <div className="space-y-4">
          {content.processSteps.map((step) => (
            <div
              key={step.id}
              className={cn(
                "rounded-2xl border p-5",
                isThemeAlt
                  ? "border-slate-700/60 bg-black/25"
                  : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "inline-flex min-w-14 justify-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.3em]",
                    isThemeAlt
                      ? "border-slate-600 bg-slate-900 text-slate-300"
                      : "border-[var(--hero-card-border)] bg-[var(--hero-card-strong-bg)] text-[var(--hero-faint)]",
                  )}
                >
                  {step.id}
                </span>
                <div>
                  <h3
                    className={cn(
                      "text-lg font-bold",
                      isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-7",
                      isThemeAlt ? "text-slate-400" : "text-[var(--hero-copy)]",
                    )}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
