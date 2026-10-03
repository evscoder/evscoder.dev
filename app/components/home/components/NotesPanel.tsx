import cn from 'clsx';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowRightFromLine,
  ArrowRightToLine,
  ArrowUpRight,
  DecimalsArrowRight,
  NotebookPen
} from 'lucide-react';
import type { CSSProperties } from 'react';

import { Panel } from '@/app/components/panel/Panel';
import type { SectionProps } from '@/app/components/home/model/section-types';
import { useSiteContext } from '@/app/components/layout/site-provider';

const noteLabelColors = ['#a78bfa', '#61b3f2', '#53e2bd', '#b6ff5c'];

export function NotesPanel({ content }: SectionProps) {
  const { isThemeAlt, language } = useSiteContext();

  return (
    <Panel className="lg:col-span-2">
      <div id="notes" className="scroll-mt-28 p-5 sm:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
          <div className="flex items-center gap-3">
            <NotebookPen
              aria-hidden="true"
              className={cn(
                'h-6 w-6 shrink-0',
                isThemeAlt ? 'text-sky-300' : 'text-[var(--article-link)]',
              )}
            />
            <h2 className="md:text-xl font-bold uppercase tracking-widest">{content.notesTitle}</h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex min-h-6 shrink-0 items-center gap-2 rounded-lg text-sm font-semibold text-[var(--article-link)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hero-secondary)]"
          >
            {language === 'ru' ? 'Все статьи' : 'All articles'}
          </Link>
        </div>

        <p
          className={cn(
            'max-w-3xl text-sm leading-7 sm:text-base',
            isThemeAlt ? 'text-slate-300' : 'text-[var(--hero-copy)]',
          )}
        >
          {content.notesIntro}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.notes.slice(0, 4).map((note, index) => (
            <article
              key={note.title}
              style={{ '--note-label-color': noteLabelColors[index] } as CSSProperties}
              className={cn(
                'group rounded-2xl border p-5 max-md:px-0 transition',
                isThemeAlt
                  ? 'border-slate-700/60 bg-black/25 hover:border-slate-500/70'
                  : 'border-[var(--hero-card-border)] bg-[var(--hero-card-bg)] hover:border-slate-300/90',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    'rounded-full bg-[color-mix(in_srgb,var(--note-label-color)_14%,transparent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--note-label-color)]',
                    isThemeAlt
                      ? 'ring-1 ring-[color-mix(in_srgb,var(--note-label-color)_18%,transparent)]'
                      : 'ring-1 ring-[color-mix(in_srgb,var(--note-label-color)_24%,transparent)]',
                  )}
                >
                  {note.tag}
                </span>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]',
                    isThemeAlt
                      ? 'bg-orange-500/10 text-orange-300'
                      : 'bg-[var(--hero-quote-bg)] text-[var(--hero-quote-text)]',
                  )}
                >
                  {note.id ? (language === 'ru' ? 'Статья' : 'Article · RU') : note.status}
                </span>
              </div>

              <h3
                className={cn(
                  'mt-5 text-xl font-bold leading-tight',
                  isThemeAlt ? 'text-white' : 'text-[var(--hero-title)]',
                )}
              >
                {note.id ? (
                  <Link
                    className="hover:underline underline-offset-4"
                    href={`/articles/${note.id}`}
                  >
                    {note.title}
                  </Link>
                ) : (
                  note.title
                )}
              </h3>

              <p
                className={cn(
                  'mt-3 text-sm leading-7',
                  isThemeAlt ? 'text-slate-400' : 'text-[var(--hero-copy)]',
                )}
              >
                {note.summary}
              </p>
              {note.id && (
                <Link
                  href={`/articles/${note.id}`}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-[var(--article-link)] hover:underline underline-offset-4"
                  aria-label={`${language === 'ru' ? 'Читать' : 'Read'}: ${note.title}`}
                >
                  {language === 'ru' ? 'Читать статью' : 'Read in Russian'}
                  <ArrowUpRight
                    aria-hidden="true"
                    className={cn(
                      'h-5 w-5 shrink-0 ml-auto',
                      isThemeAlt ? 'text-slate-500' : 'text-[var(--hero-muted)]',
                    )}
                  />
                </Link>
              )}
            </article>
          ))}
        </div>

        <Link
          href="/articles"
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-[var(--article-button-border)] bg-[var(--article-button-bg)] px-6 py-3 text-sm font-semibold text-[var(--article-button-text)] transition-colors hover:bg-[var(--article-button-hover-bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hero-secondary)] sm:w-auto"
        >
          {language === 'ru' ? 'Смотреть все статьи' : 'View all articles'}
        </Link>
      </div>
    </Panel>
  );
}
