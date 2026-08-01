import cn from "clsx";
import { Binary, Code2, Cpu, Gauge, GitBranch, Sparkles } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

const proofIcons = [Gauge, Binary, Cpu, Code2, GitBranch];

export function ProofPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <Sparkles
            className={cn(
              "h-6 w-6",
              isThemeAlt ? "text-amber-300" : "text-[var(--hero-accent)]",
            )}
          />
          <h2 className="text-xl font-bold uppercase tracking-widest">
            {content.proofTitle}
          </h2>
        </div>

        <p
          className={cn(
            "max-w-3xl text-sm leading-7 sm:text-base",
            isThemeAlt ? "text-slate-300" : "text-[var(--hero-copy)]",
          )}
        >
          {content.proofIntro}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.proofs.map((proof, index) => {
            const Icon = proofIcons[index] ?? Code2;

            return (
              <div
                key={proof.title}
                className={cn(
                  "rounded-2xl border p-5",
                  isThemeAlt
                    ? "border-slate-700/60 bg-black/25"
                    : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      isThemeAlt
                        ? "bg-slate-900 text-amber-300"
                        : "bg-[var(--hero-card-strong-bg)] text-[var(--hero-accent)]",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                      isThemeAlt
                        ? "bg-slate-900 text-slate-300"
                        : "bg-[var(--hero-card-strong-bg)] text-[var(--hero-faint)]",
                    )}
                  >
                    {proof.label}
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-5 text-lg font-bold leading-tight",
                    isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                  )}
                >
                  {proof.title}
                </h3>

                <p
                  className={cn(
                    "mt-3 text-sm leading-7",
                    isThemeAlt ? "text-slate-400" : "text-[var(--hero-copy)]",
                  )}
                >
                  {proof.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
