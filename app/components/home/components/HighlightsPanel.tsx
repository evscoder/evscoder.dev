import cn from "clsx";
import { Code2 } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { highlightVisuals } from "@/app/components/home/model/site-content";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function HighlightsPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div className="grid gap-4 p-5 sm:p-7 lg:grid-cols-4">
        {content.highlights.map((highlight, index) => {
          const visual = highlightVisuals[index];
          const Icon = visual?.Icon ?? Code2;

          return (
            <div
              key={highlight.title}
              className={cn(
                "rounded-2xl border p-5",
                isThemeAlt
                  ? "border-slate-700/60 bg-black/25"
                  : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)]",
              )}
            >
              <Icon
                className={cn(
                  "mb-4 h-7 w-7",
                  isThemeAlt
                    ? visual?.altClassName ?? "text-orange-400"
                    : visual?.defaultClassName ?? "text-[var(--hero-accent)]",
                )}
              />
              <h3 className="text-lg font-bold">{highlight.title}</h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-6",
                  isThemeAlt ? "text-slate-400" : "text-[var(--hero-faint)]",
                )}
              >
                {highlight.text}
              </p>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
