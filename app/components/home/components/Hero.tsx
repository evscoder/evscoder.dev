import cn from 'clsx';
import { ArrowDownRight, ArrowUpRight, Braces, Code2, Layers3, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DeveloperConsole } from './DeveloperConsole';

import { useSiteContext } from '@/app/components/layout/site-provider';
import { heroTypingWords } from '@/app/components/home/model/site-content';
import { TypingText } from '@/app/shared/ui/typing-text/typing-text';

const metrics = [
  { value: 'Angular', ru: 'RxJS · SSR · Nx', en: 'RxJS · SSR · Nx' },
  { value: 'React', ru: 'Next.js · UI · State', en: 'Next.js · UI · State' },
  { value: 'TypeScript', ru: 'Типы · Контракты · API', en: 'Types · Contracts · API' },
];

export function HeroSection() {
  const { isThemeAlt, language } = useSiteContext();
  const reduced = useReducedMotion();

  return (
    <section
      className={cn(
        'overflow-hidden pt-24 sm:pt-28 hero-stage relative -mb-6 pb-6 min-h-[calc(100svh-112px)]',
        isThemeAlt ? '' : 'shadow-[0_40px_120px_rgba(42,58,89,.16)]',
      )}
    >
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="container relative z-10 flex min-h-[calc(100svh-112px)] flex-col p-5 sm:p-8 lg:p-10">
        <header className="flex items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-3" aria-label="Evgeny Staroverov">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#b6ff5c] text-slate-950 shadow-[0_0_36px_rgba(182,255,92,.32)]">
              <Braces className="h-5 w-5" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-white/70" />
            </span>
            <span>
              <span className="block text-sm font-black tracking-[-.03em]">EVS.CODER</span>
              <span
                className={cn(
                  'block text-[9px] uppercase tracking-[.28em]',
                  isThemeAlt ? 'text-white/40' : 'text-slate-500',
                )}
              >
                Frontend systems
              </span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'hidden items-center gap-2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.2em] sm:flex',
                isThemeAlt
                  ? 'border-white/10 bg-white/[.04] text-white/60'
                  : 'border-slate-200 bg-white/70 text-slate-600',
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b6ff5c] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#84cc16]" />
              </span>
              {language === 'ru' ? 'Frontend-разработчик' : 'Frontend developer'}
            </div>
            <a
              href="mailto:evgst.gl@gmail.com"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#b6ff5c] px-4 text-xs font-black uppercase tracking-wider text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(182,255,92,.28)] sm:px-5"
            >
              {language === 'ru' ? 'Написать' : "Let's talk"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:py-10">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[800px]"
          >
            <div
              className={cn(
                'mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em]',
                isThemeAlt ? 'text-cyan-200/60' : 'text-cyan-800/70',
              )}
            >
              <Sparkles className="h-4 w-4" />
              {language === 'ru'
                ? 'Привет! Я Евгений, frontend-разработчик.'
                : 'Hi! I’m Evgeny, a frontend developer.'}
            </div>
            <h1 className="text-[clamp(3.4rem,8vw,7.8rem)] font-black leading-[.78] tracking-[-.085em]">
              <span className="block">EVGENY</span>
              <span className="hero-outline block">STAROVEROV</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p
                className={cn(
                  'max-w-xl text-base leading-7 sm:text-lg',
                  isThemeAlt ? 'text-slate-300' : 'text-slate-600',
                )}
              >
                {language === 'ru'
                  ? 'Пишу код на Angular, React и TypeScript. Создаю сложные интерфейсы: от форм, фильтров и карт до архитектуры приложения и его взаимодействия с API.'
                  : 'I write Angular, React and TypeScript. I build complex interfaces — from forms, filters and maps to application architecture and API integration.'}
              </p>
              <a
                href="#expertise"
                className={cn(
                  'group grid h-14 w-14 shrink-0 place-items-center rounded-full border transition hover:rotate-[-8deg]',
                  isThemeAlt
                    ? 'border-white/15 bg-white/[.04] hover:bg-white/10'
                    : 'border-slate-300 bg-white/70 hover:bg-white',
                )}
                aria-label={language === 'ru' ? 'К опыту' : 'Explore expertise'}
              >
                <ArrowDownRight className="h-5 w-5" />
              </a>
            </div>
            <div
              className={cn(
                'mt-8 inline-flex min-h-12 items-center gap-3 rounded-2xl border px-4 text-sm sm:text-base',
                isThemeAlt
                  ? 'border-white/10 bg-black/25 text-white'
                  : 'border-slate-200 bg-white/65 text-slate-800',
              )}
            >
              <span className="text-[#84cc16]">~/</span>
              <span className="sr-only">Senior Frontend Engineer</span>
              <span aria-hidden="true">
                <TypingText words={heroTypingWords} />
              </span>
            </div>
            <div className="hero-personal-actions">
              <a href="#projects">
                {language === 'ru' ? 'К проектам' : 'Projects'}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="https://github.com/evscoder" target="_blank" rel="noreferrer">
                <Code2 size={16} aria-hidden="true" />
                GitHub
              </a>
              <a href="#contact">
                {language === 'ru' ? 'Связаться со мной' : 'Get in touch'}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.16, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="hero-orbit absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/15" />
            <DeveloperConsole />
            <div
              className={cn(
                'absolute -right-3 -top-5 hidden h-14 w-14 rotate-6 place-items-center rounded-2xl border shadow-xl backdrop-blur-xl sm:grid',
                isThemeAlt
                  ? 'border-white/10 bg-violet-500/15 text-violet-300'
                  : 'border-white bg-violet-100 text-violet-600',
              )}
            >
              <Layers3 className="h-5 w-5" />
            </div>
          </motion.div>
        </div>

        <footer
          className={cn(
            'grid grid-cols-3 gap-0 border-t pt-5 max-sm:pb-1 sm:gap-3',
            isThemeAlt ? 'border-white/10' : 'border-slate-200',
          )}
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.value}
              className={cn(
                'flex min-w-0 flex-col items-center gap-2 px-1 text-center sm:flex-row sm:items-baseline sm:gap-3 sm:px-5 sm:text-left',
                index > 0 &&
                  (isThemeAlt ? 'border-l border-white/10' : 'border-l border-slate-200'),
              )}
            >
              <span className="text-[20px] font-black leading-none tracking-tight sm:text-2xl">
                {metric.value}
              </span>
              <span
                className={cn(
                  'text-[8px] leading-4 uppercase tracking-[.06em] sm:text-[9px] sm:tracking-[.2em]',
                  isThemeAlt ? 'text-white/40' : 'text-slate-500',
                )}
              >
                {metric[language]}
              </span>
            </div>
          ))}
        </footer>
      </div>
    </section>
  );
}
