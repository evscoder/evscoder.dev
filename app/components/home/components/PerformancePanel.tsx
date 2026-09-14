import cn from "clsx";
import { Gauge } from "lucide-react";
import type { CSSProperties } from "react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

const metricColors = ["#b6ff5c", "#85f08d", "#53e2bd", "#22d3ee"];

export function PerformancePanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <Gauge
            className={cn(
              "h-6 w-6",
              isThemeAlt ? "text-emerald-300" : "text-[var(--hero-success)]",
            )}
          />
          <h2 className="text-xl font-bold uppercase tracking-widest">
            {content.performanceTitle}
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.performance.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                style={
                  { "--metric-color": metricColors[index] } as CSSProperties
                }
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-5 max-md:px-0",
                  isThemeAlt
                    ? "border-slate-700/60 bg-black/25"
                    : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
                )}
              >
                <div
                  className={cn(
                    "mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-[var(--metric-color)]",
                    isThemeAlt
                      ? "bg-[color-mix(in_srgb,var(--metric-color)_12%,transparent)]"
                      : "bg-[color-mix(in_srgb,var(--metric-color)_16%,transparent)]",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div
                  className={cn(
                    "text-4xl font-black tracking-tight",
                    isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                  )}
                >
                  {metric.value}
                </div>

                <div
                  className={cn(
                    "mt-2 text-xs font-semibold uppercase tracking-[0.22em]",
                    isThemeAlt ? "text-slate-500" : "text-[var(--hero-faint)]",
                  )}
                >
                  {metric.label}
                </div>

                <div
                  className={cn(
                    "mt-5 h-2.5 overflow-hidden rounded-full",
                    isThemeAlt ? "bg-slate-800" : "bg-[var(--hero-divider)]",
                  )}
                >
                  <div
                    className="h-full rounded-full bg-[var(--metric-color)]"
                    style={{ width: metric.value === "95+" ? "95%" : "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
