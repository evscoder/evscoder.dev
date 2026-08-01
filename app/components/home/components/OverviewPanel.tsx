import cn from "clsx";
import { ShieldCheck, Terminal } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function OverviewPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,.7fr)] lg:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div
              className={cn(
                "mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em]",
                isThemeAlt ? "text-slate-400" : "text-[var(--hero-muted)]",
              )}
            >
              <span
                className={cn(
                  "h-3 w-3 rounded-full",
                  isThemeAlt
                    ? "bg-orange-500 shadow-[0_0_24px_rgba(249,115,22,.8)]"
                    : "bg-[var(--hero-accent)] shadow-[0_0_24px_var(--hero-accent-glow)]",
                )}
              />
              {content.badge}
              <span
                className={cn(
                  "hidden h-px flex-1 sm:block",
                  isThemeAlt ? "bg-slate-700" : "bg-[var(--hero-divider)]",
                )}
              />
              <span>{content.profileId}</span>
            </div>

            <h2
              className={cn(
                "max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl",
                isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
              )}
            >
              {content.sectionTitle}
            </h2>

            <p
              className={cn(
                "mt-6 max-w-2xl text-lg leading-8 sm:text-xl",
                isThemeAlt ? "text-slate-300" : "text-[var(--hero-copy)]",
              )}
            >
              {content.intro}
            </p>
          </div>

          <div
            className={cn(
              "rounded-2xl border p-4 sm:p-5",
              isThemeAlt
                ? "border-slate-700/70 bg-black/20"
                : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
            )}
          >
            <div
              className={cn(
                "mb-4 text-xs font-semibold uppercase tracking-[0.24em]",
                isThemeAlt ? "text-slate-500" : "text-[var(--hero-faint)]",
              )}
            >
              {content.capabilityTitle}
            </div>
            <div className="flex flex-wrap gap-3">
              {content.capabilities.map((capability) => (
                <span
                  key={capability}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium",
                    isThemeAlt
                      ? "border-slate-600/70 bg-slate-900/80 text-slate-200"
                      : "border-[var(--hero-card-border)] bg-[var(--hero-card-strong-bg)] text-[var(--hero-text)]",
                  )}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {content.stats.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "rounded-xl border p-4",
                  isThemeAlt
                    ? "border-slate-700/70 bg-black/30"
                    : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
                )}
              >
                <div
                  className={cn(
                    "text-xs uppercase tracking-widest",
                    isThemeAlt ? "text-slate-500" : "text-[var(--hero-faint)]",
                  )}
                >
                  {item.label}
                </div>
                <div
                  className={cn(
                    "mt-2 text-2xl font-bold",
                    isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                  )}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border p-5 sm:p-6",
              isThemeAlt
                ? "border-slate-600/50 bg-slate-950/70"
                : "border-[var(--hero-panel-border)] bg-[var(--hero-card-strong-bg)]",
            )}
          >
            <div
              className={cn(
                "absolute inset-0",
                isThemeAlt
                  ? "bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.18),transparent_34%)]"
                  : "bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,.14),transparent_36%)]",
              )}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className={cn(
                      "text-xs uppercase tracking-[0.25em]",
                      isThemeAlt ? "text-slate-400" : "text-[var(--hero-muted)]",
                    )}
                  >
                    {content.statusLabel}
                  </div>
                  <div
                    className={cn(
                      "mt-3 max-w-[14rem] text-2xl font-bold leading-tight",
                      isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                    )}
                  >
                    {content.statusValue}
                  </div>
                </div>
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl",
                    isThemeAlt
                      ? "bg-orange-500/12 text-orange-400"
                      : "bg-[var(--hero-status-bg)] text-[var(--hero-accent)]",
                  )}
                >
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "rounded-2xl border p-5 sm:p-6",
              isThemeAlt
                ? "border-slate-700/70 bg-black/25"
                : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
            )}
          >
            <div className="mb-4 flex items-center gap-3">
              <Terminal
                className={cn(
                  "h-5 w-5",
                  isThemeAlt ? "text-sky-300" : "text-[var(--hero-secondary)]",
                )}
              />
              <div
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.24em]",
                  isThemeAlt ? "text-slate-400" : "text-[var(--hero-muted)]",
                )}
              >
                {content.snapshotTitle}
              </div>
            </div>

            <div className="space-y-4">
              {content.snapshot.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "border-b pb-4 last:border-b-0 last:pb-0",
                    isThemeAlt ? "border-slate-800" : "border-[var(--hero-divider)]",
                  )}
                >
                  <div
                    className={cn(
                      "text-[11px] uppercase tracking-[0.22em]",
                      isThemeAlt ? "text-slate-500" : "text-[var(--hero-faint)]",
                    )}
                  >
                    {item.label}
                  </div>
                  <div
                    className={cn(
                      "mt-2 text-sm leading-6",
                      isThemeAlt ? "text-slate-200" : "text-[var(--hero-text)]",
                    )}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}
