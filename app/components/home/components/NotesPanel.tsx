import cn from "clsx";
import { NotebookPen } from "lucide-react";

import { Panel } from "@/app/components/panel/Panel";
import type { SectionProps } from "@/app/components/home/model/section-types";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function NotesPanel({ content }: SectionProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <NotebookPen
            className={cn(
              "h-6 w-6",
              isThemeAlt ? "text-sky-300" : "text-[var(--hero-secondary)]",
            )}
          />
          <h2 className="text-xl font-bold uppercase tracking-widest">
            {content.notesTitle}
          </h2>
        </div>

        <p
          className={cn(
            "max-w-3xl text-sm leading-7 sm:text-base",
            isThemeAlt ? "text-slate-300" : "text-[var(--hero-copy)]",
          )}
        >
          {content.notesIntro}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.notes.map((note) => (
            <article
              key={note.title}
              className={cn(
                "group rounded-2xl border p-5 transition",
                isThemeAlt
                  ? "border-slate-700/60 bg-black/25 hover:border-slate-500/70"
                  : "border-[var(--hero-card-border)] bg-[var(--hero-card-bg)] hover:border-slate-300/90",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                    isThemeAlt
                      ? "bg-slate-900 text-slate-300"
                      : "bg-[var(--hero-card-strong-bg)] text-[var(--hero-faint)]",
                  )}
                >
                  {note.tag}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                    isThemeAlt
                      ? "bg-orange-500/10 text-orange-300"
                      : "bg-[var(--hero-quote-bg)] text-[var(--hero-quote-text)]",
                  )}
                >
                  {note.status}
                </span>
              </div>

              <h3
                className={cn(
                  "mt-5 text-xl font-bold leading-tight",
                  isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                )}
              >
                {note.title}
              </h3>

              <p
                className={cn(
                  "mt-3 text-sm leading-7",
                  isThemeAlt ? "text-slate-400" : "text-[var(--hero-copy)]",
                )}
              >
                {note.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}
