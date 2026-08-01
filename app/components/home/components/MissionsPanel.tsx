import cn from "clsx";
import { Orbit } from "lucide-react";
import { motion } from "motion/react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function MissionsPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel>
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <Orbit
            className={cn(
              "h-6 w-6",
              isThemeAlt ? "text-orange-400" : "text-[var(--hero-accent)]",
            )}
          />
          <h2 className="text-xl font-bold uppercase tracking-widest">
            {content.missionTitle}
          </h2>
        </div>
        <div className="space-y-3">
          {content.missions.map((mission, index) => (
            <motion.div
              key={mission}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 * index }}
              className={cn(
                "flex gap-3 rounded-xl border p-4",
                isThemeAlt
                  ? "border-slate-700/60 bg-black/25 text-slate-300"
                  : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)] text-[var(--hero-copy)]",
              )}
            >
              <span
                className={cn(
                  "mt-2 h-2 w-2 shrink-0 rounded-full",
                  isThemeAlt ? "bg-orange-400" : "bg-[var(--hero-accent)]",
                )}
              />
              <span>{mission}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
