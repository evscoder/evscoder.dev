import { motion } from "motion/react";
import cn from "clsx";
import { Code2, ShieldCheck } from "lucide-react";
import { TypingText } from "@/app/shared/ui/typing-text/typing-text";
import { heroTypingWords } from "@/app/components/home/model/site-content";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function HeroSection() {
    const { isThemeAlt, language } = useSiteContext();

    return (
        <section
            className={cn(
                "mb-[30px] relative min-h-[calc(100vh-96px)] overflow-hidden rounded-[32px] px-5 py-6 sm:px-8" +
                " lg:px-10",
                isThemeAlt
                    ? "text-white"
                    : "border-[var(--hero-panel-border)] bg-[var(--hero-panel-bg)] text-[var(--hero-title)]",
            )}
        >
            <div
                className={cn(
                    "absolute inset-0",
                    isThemeAlt
                        ? "bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,.28),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(56,189,248,.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,.08),transparent_45%)]"
                        : "bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,.14),transparent_34%),radial-gradient(circle_at_18%_24%,rgba(249,115,22,.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.08)_45%)]",
                )}
            />
            <motion.div
                initial={{ opacity: 0, y: 24, rotate: -4 }}
                animate={{ opacity: 0.5, y: 0, rotate: -6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={cn(
                    "absolute left-6 z-1 top-14 h-[360px] w-[560px] rounded-3xl p-6 shadow-2xl backdrop-blur-xl lg:block",
                    isThemeAlt
                        ? "border border-white/10 bg-slate-950/70 shadow-black/40"
                        : "border border-slate-200/80 bg-white/78 shadow-slate-300/35",
                )}
            >
                <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className={cn("ml-3 text-xs", isThemeAlt ? "text-slate-500" : "text-slate-400")}>engineer.ts</span>
                </div>
                <pre className={cn("overflow-hidden text-xs leading-5", isThemeAlt ? "text-slate-400" : "text-slate-600")}>
{`const evgeny = {
  name: "Evgeny Staroverov",
  role: "Senior Frontend Engineer",
  experience: "10+ years",
  focus: [
    "Frontend Architecture",
    "Complex UI Systems",
    "High-Load Interfaces",
    "Performance & SSR/SSG",
  ],
  status: "Production Ready"
};`}
        </pre>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                className={cn(
                    "absolute hidden right-8 top-24 h-[260px] w-[420px] rounded-3xl p-5 shadow-2xl backdrop-blur-xl" +
                    " md:block",
                    isThemeAlt
                        ? "border border-white/10 bg-slate-900/60 shadow-black/40"
                        : "border border-slate-200/80 bg-white/74 shadow-slate-300/35",
                )}
            >
                <div className="mb-4 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-emerald-300" />
                    <span className={cn("text-xs", isThemeAlt ? "text-slate-500" : "text-slate-400")}>metrics.json</span>
                </div>
                <pre className={cn("text-xs leading-5", isThemeAlt ? "text-slate-400" : "text-slate-600")}>
{`{
  "lighthouse": "95+",
  "coreWebVitals": "Excellent",
  "architecture": "A+",
  "uiComplexity": "Elite",
  "status": "Open to new challenges"
}`}
        </pre>
            </motion.div>

            <div className="relative z-10 flex min-h-[calc(100vh-160px)] flex-col">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950 shadow-[0_0_32px_rgba(110,231,183,.45)]">
                            <ShieldCheck className="h-5 w-5" />
                        </div>
                        <span className={cn("text-lg font-bold tracking-tight", isThemeAlt ? "text-white" : "text-[var(--hero-title)]")}>evstdev</span>
                    </div>
                    <a
                        href="mailto:evgst.gl@gmail.com"
                        className="rounded-2xl bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(110,231,183,.35)] transition-all hover:scale-105 active:scale-95"
                    >
                        {language === "ru" ? "Связаться" : "Hire me"}
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-center py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
                        className="mx-auto max-w-5xl"
                    >
                        <div
                            className={cn(
                                "mb-6 inline-flex items-center rounded-full px-6 py-2 text-sm backdrop-blur-md",
                                isThemeAlt
                                    ? "border border-white/10 bg-black/40 text-slate-300"
                                    : "border border-[var(--hero-card-border)] bg-white/72 text-[var(--hero-copy)]",
                            )}
                        >
                            {language === "ru"
                                ? "Frontend Architecture • Complex UI • Performance"
                                : "Frontend Architecture • Complex UI • Performance"}
                        </div>

                        <h1
                            className={cn(
                                "text-6xl font-black tracking-tighter sm:text-7xl lg:text-[5.5rem]",
                                isThemeAlt ? "text-white" : "text-[var(--hero-title)]",
                            )}
                        >
                            Evgeny Staroverov
                        </h1>

                        <div className="mt-6 flex flex-col items-center gap-3">
                            <div
                                className={cn(
                                    "text-center inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl px-8 py-4" +
                                    " text-xl" +
                                    " font-semibold sm:text-2xl",
                                    isThemeAlt
                                        ? "text-slate-100"
                                        : "text-[var(--hero-text)]",
                                )}
                            >
                                <TypingText words={heroTypingWords} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-4 pb-6 sm:grid-cols-3">
                    {[
                        ["10+", language === "ru" ? "Лет в коммерческой разработке" : "Years in commercial development"],
                        ["95+", language === "ru" ? "Lighthouse performance" : "Lighthouse performance"],
                        ["Green", language === "ru" ? "Core Web Vitals" : "Core Web Vitals"],
                    ].map(([value, label]) => (
                        <div
                            key={label}
                            className={cn(
                                "rounded-3xl border p-6 backdrop-blur-md transition",
                                isThemeAlt
                                    ? "border-white/10 bg-black/30 hover:border-white/20"
                                    : "border-[var(--hero-card-border)] bg-white/68 hover:border-slate-300/80",
                            )}
                        >
                            <div className={cn("text-4xl font-black", isThemeAlt ? "text-white" : "text-[var(--hero-title)]")}>{value}</div>
                            <div
                                className={cn(
                                    "mt-2 text-sm uppercase tracking-widest",
                                    isThemeAlt ? "text-slate-500" : "text-[var(--hero-muted)]",
                                )}
                            >
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
