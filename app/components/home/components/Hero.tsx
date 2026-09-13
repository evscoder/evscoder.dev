import cn from "clsx";
import { ArrowDownRight, ArrowUpRight, Braces, Check, CircleDot, Code2, Layers3, Radio, Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { useSiteContext } from "@/app/components/layout/site-provider";
import { heroTypingWords } from "@/app/components/home/model/site-content";
import { TypingText } from "@/app/shared/ui/typing-text/typing-text";

const metrics = [
  { value: "10+", ru: "лет опыта", en: "years experience" },
  { value: "95+", ru: "performance", en: "performance" },
  { value: "A+", ru: "architecture", en: "architecture" },
];

export function HeroSection() {
  const { isThemeAlt, language } = useSiteContext();

  return (
    <section className={cn(" pt-24 sm:pt-28 hero-stage relative mb-6 min-h-[calc(100svh-112px)] rounded-[28px]  sm:rounded-[40px]", isThemeAlt ? "bg-[#080b12] text-white" : "shadow-[0_40px_120px_rgba(42,58,89,.16)]")}>
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-40 -top-52 h-[540px] w-[540px] rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-16 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-280px] left-[30%] h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-[110px]" />

      <div className="container relative z-10 flex min-h-[calc(100svh-112px)] flex-col p-5 sm:p-8 lg:p-10">
        <header className="flex items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-3" aria-label="Evgeny Staroverov">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#b6ff5c] text-slate-950 shadow-[0_0_36px_rgba(182,255,92,.32)]">
              <Braces className="h-5 w-5" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-white/70" />
            </span>
            <span><span className="block text-sm font-black tracking-[-.03em]">EVS.CODER</span><span className={cn("block text-[9px] uppercase tracking-[.28em]", isThemeAlt ? "text-white/40" : "text-slate-500")}>Frontend systems</span></span>
          </a>
          <div className="flex items-center gap-2">
            <div className={cn("hidden items-center gap-2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.2em] sm:flex", isThemeAlt ? "border-white/10 bg-white/[.04] text-white/60" : "border-slate-200 bg-white/70 text-slate-600")}>
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b6ff5c] opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#84cc16]" /></span>
              {language === "ru" ? "Продуктовая инженерия" : "Product engineering"}
            </div>
            <a href="mailto:evgst.gl@gmail.com" className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#b6ff5c] px-4 text-xs font-black uppercase tracking-wider text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(182,255,92,.28)] sm:px-5">
              {language === "ru" ? "Написать" : "Let's talk"}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:py-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="max-w-[800px]">
            <div className={cn("mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em]", isThemeAlt ? "text-cyan-200/60" : "text-cyan-800/70")}><Sparkles className="h-4 w-4" />{language === "ru" ? "Архитектура интерфейсов для сложных продуктов" : "Interface architecture for complex products"}</div>
            <h1 className="text-[clamp(3.4rem,8vw,7.8rem)] font-black leading-[.78] tracking-[-.085em]"><span className="block">EVGENY</span><span className="hero-outline block">STAROVEROV</span></h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className={cn("max-w-xl text-base leading-7 sm:text-lg", isThemeAlt ? "text-slate-300" : "text-slate-600")}>{language === "ru" ? "Проектирую быстрые, масштабируемые и визуально точные интерфейсы для продуктов с высокой нагрузкой." : "I engineer fast, scalable and visually precise interfaces for products operating under real-world load."}</p>
              <a href="#expertise" className={cn("group grid h-14 w-14 shrink-0 place-items-center rounded-full border transition hover:rotate-[-8deg]", isThemeAlt ? "border-white/15 bg-white/[.04] hover:bg-white/10" : "border-slate-300 bg-white/70 hover:bg-white")} aria-label={language === "ru" ? "К опыту" : "Explore expertise"}><ArrowDownRight className="h-5 w-5" /></a>
            </div>
            <div className={cn("mt-8 inline-flex min-h-12 items-center gap-3 rounded-2xl border px-4 text-sm sm:text-base", isThemeAlt ? "border-white/10 bg-black/25 text-white" : "border-slate-200 bg-white/65 text-slate-800")}><span className="text-[#84cc16]">~/</span><TypingText words={heroTypingWords} /></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.16, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[500px]">
            <div className="hero-orbit absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/15" />
            <div className={cn("relative overflow-hidden rounded-[32px] border p-3 shadow-2xl backdrop-blur-2xl", isThemeAlt ? "border-white/10 bg-white/[.055] shadow-black/40" : "border-white bg-white/65 shadow-slate-400/20")}>
              <div className={cn("rounded-[24px] border p-5 max-md:px-0 sm:p-6", isThemeAlt ? "border-white/10 bg-[#0a0e17]/85" : "border-slate-200/80 bg-white/80")}>
                <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Radio className="h-4 w-4 text-[#84cc16]" /><span className="text-[10px] font-bold uppercase tracking-[.26em]">System overview</span></div><span className={cn("rounded-full px-2.5 py-1 text-[9px] uppercase tracking-widest", isThemeAlt ? "bg-white/5 text-white/40" : "bg-slate-100 text-slate-500")}>Live</span></div>
                <div className={cn("my-6 h-px", isThemeAlt ? "bg-white/10" : "bg-slate-200")} />
                <div className="space-y-3">
                  {["Architecture", "Interface systems", "Performance"].map((item, index) => <div key={item} className={cn("group flex items-center gap-4 rounded-2xl border p-4 max-md:px-0 transition hover:translate-x-1", isThemeAlt ? "border-white/[.08] bg-white/[.035]" : "border-slate-200 bg-slate-50/75")}><span className={cn("grid h-9 w-9 place-items-center rounded-xl text-xs font-black", index === 0 ? "bg-violet-400/15 text-violet-300" : index === 1 ? "bg-cyan-400/15 text-cyan-300" : "bg-lime-400/15 text-lime-500")}>0{index + 1}</span><span className="flex-1 text-xs font-semibold sm:text-sm">{item}</span><Check className="h-4 w-4 text-[#84cc16]" /></div>)}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a href="https://github.com/evscoder" target="_blank" rel="noreferrer" className={cn("flex items-center justify-center gap-2 rounded-2xl border py-3 text-xs font-semibold transition hover:-translate-y-0.5", isThemeAlt ? "border-white/10 hover:bg-white/5" : "border-slate-200 hover:bg-white")}><Code2 className="h-4 w-4" /> GitHub</a>
                  <a href="https://t.me/evgenystaroverov" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 py-3 text-xs font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"><Send className="h-4 w-4" /> Telegram</a>
                </div>
              </div>
            </div>
            <div className={cn("absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl sm:flex", isThemeAlt ? "border-white/10 bg-[#10151f]/90" : "border-white bg-white/90")}><CircleDot className="h-4 w-4 text-[#84cc16]" /><div><div className="text-[9px] uppercase tracking-[.2em] opacity-50">Uptime</div><div className="text-xs font-black">Production ready</div></div></div>
            <div className={cn("absolute -right-3 -top-5 hidden h-14 w-14 rotate-6 place-items-center rounded-2xl border shadow-xl backdrop-blur-xl sm:grid", isThemeAlt ? "border-white/10 bg-violet-500/15 text-violet-300" : "border-white bg-violet-100 text-violet-600")}><Layers3 className="h-5 w-5" /></div>
          </motion.div>
        </div>

        <footer className={cn("grid gap-3 border-t pt-5 sm:grid-cols-3 max-sm:justify-center", isThemeAlt ? "border-white/10" : "border-slate-200")}>
          {metrics.map((metric, index) => <div key={metric.value} className={cn("flex items-baseline gap-3 sm:px-5 max-sm:grid max-sm:grid-cols-[calc(4ch+1em)_1fr]", index > 0 && (isThemeAlt ? "sm:border-l sm:border-white/10" : "sm:border-l sm:border-slate-200"))}><span className="text-2xl font-black tracking-tight max-sm:text-right">{metric.value}</span><span className={cn("text-[9px] uppercase tracking-[.2em]", isThemeAlt ? "text-white/40" : "text-slate-500")}>{metric[language]}</span></div>)}
        </footer>
      </div>
    </section>
  );
}
