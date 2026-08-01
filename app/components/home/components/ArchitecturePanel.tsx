import cn from "clsx";
import { ArrowRight, Network } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function ArchitecturePanel({ content }: SectionProps) {
  const { isThemeAlt, language } = useSiteContext();
  return (
    <Panel className="lg:col-span-2">
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,.75fr)]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Network
              className={cn(
                "h-6 w-6",
                isThemeAlt ? "text-violet-300" : "text-[var(--hero-tertiary)]",
              )}
            />
            <h2 className="text-xl font-bold uppercase tracking-widest">
              {content.architectureTitle}
            </h2>
          </div>

          <p
            className={cn(
              "max-w-3xl text-sm leading-7 sm:text-base",
              isThemeAlt ? "text-slate-300" : "text-[var(--hero-copy)]",
            )}
          >
            {content.architectureIntro}
          </p>

          <div className="mt-6 grid gap-3">
            {content.architectureNodes.map((node, index) => (
              <div
                key={node.id}
                className={cn(
                  "relative overflow-hidden rounded-2xl border p-4 sm:p-5",
                  isThemeAlt
                    ? "border-slate-700/60 bg-black/25"
                    : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 w-1",
                    isThemeAlt ? "bg-violet-400/70" : "bg-[var(--hero-tertiary)]",
                  )}
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "inline-flex min-w-14 justify-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.3em]",
                        isThemeAlt
                          ? "border-slate-600 bg-slate-900 text-slate-300"
                          : "border-[var(--hero-card-border)] bg-[var(--hero-card-strong-bg)] text-[var(--hero-faint)]",
                      )}
                    >
                      {node.id}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "text-lg font-bold",
                          isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                        )}
                      >
                        {node.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1 text-sm leading-6",
                          isThemeAlt ? "text-slate-400" : "text-[var(--hero-faint)]",
                        )}
                      >
                        {node.detail}
                      </p>
                    </div>
                  </div>

                  {index < content.architectureNodes.length - 1 ? (
                    <ArrowRight
                      className={cn(
                        "h-5 w-5 shrink-0 ml-auto",
                        isThemeAlt ? "text-slate-500" : "text-[var(--hero-muted)]",
                      )}
                    />
                  ) : (
                    <div
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ml-auto",
                        isThemeAlt
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-[var(--hero-success-soft)] text-[var(--hero-success)]",
                      )}
                    >
                      Ready
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "rounded-2xl border p-5 sm:p-6",
            isThemeAlt
              ? "border-slate-700/60 bg-slate-950/65"
              : "border-[var(--hero-card-border)] bg-[var(--hero-card-strong-bg)]",
          )}
        >
          <div
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.24em]",
              isThemeAlt ? "text-slate-500" : "text-[var(--hero-faint)]",
            )}
          >
            {content.architecturePrinciplesTitle}
          </div>

          <div className="mt-5 space-y-4">
            {content.architecturePrinciples.map((principle, index) => (
              <div
                key={principle}
                className={cn(
                  "rounded-2xl border p-4",
                  isThemeAlt
                    ? "border-slate-700/60 bg-black/30"
                    : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
                )}
              >
                <div
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.22em]",
                    isThemeAlt ? "text-slate-500" : "text-[var(--hero-faint)]",
                  )}
                >
                  {language === "ru" ? `Принцип 0${index + 1}` : `Principle 0${index + 1}`}
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm leading-6",
                    isThemeAlt ? "text-slate-300" : "text-[var(--hero-copy)]",
                  )}
                >
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
