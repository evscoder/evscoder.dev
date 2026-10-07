'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useMotionValue, useSpring } from 'motion/react';
import { Code2, ArrowUpRight, Send } from 'lucide-react';
import { useSiteContext } from '@/app/components/layout/site-provider';

const examples = [
  {
    name: 'interface.ts',
    label: 'UI',
    code: [
      'type ViewState<T> =',
      '  | { status: "loading" }',
      '  | { status: "ready"; data: T }',
      '  | { status: "empty" }',
      '  | { status: "error"; retry: () => void };',
    ],
    ru: [
      'Интерфейс — это больше, чем готовый экран.',
      'Формы, фильтры, таблицы и карты. Продумываю не только основной сценарий, но и загрузку, ошибки, пустые результаты и повторные действия.',
    ],
    en: [
      'An interface is more than its happy path.',
      'Forms, filters, tables and maps. I consider loading, errors, empty results and retries alongside the main user flow.',
    ],
  },
  {
    name: 'search.ts',
    label: 'DATA',
    code: [
      'query$.pipe(',
      '  debounceTime(300),',
      '  distinctUntilChanged(),',
      '  switchMap(query => api.search(query))',
      ');',
    ],
    ru: [
      'Данные должны успевать за пользователем.',
      'Разбираюсь с асинхронными запросами, состоянием и контрактами API. При быстром изменении фильтров старый ответ не должен заменять актуальные данные.',
    ],
    en: [
      'Data should keep up with the user.',
      'I work with async requests, state and API contracts. When filters change quickly, stale responses should not replace current data.',
    ],
  },
  {
    name: 'routes.ts',
    label: 'PERF',
    code: [
      'export const routes: Routes = [{',
      '  path: "workspace",',
      '  loadComponent: () =>',
      '    import("./workspace").then(m => m.Workspace)',
      '}];',
    ],
    ru: [
      'Быстрота начинается с того, что загружается.',
      'Разделяю код по маршрутам, проверяю лишние перерисовки и тяжёлые участки интерфейса. Решение выбираю после профилирования, а эффект проверяю повторным замером.',
    ],
    en: [
      'Performance starts with what gets loaded.',
      'I split code by route and investigate unnecessary renders and expensive UI work. Profiling guides the fix; another measurement verifies it.',
    ],
  },
];

export function DeveloperConsole() {
  const [active, setActive] = useState(0);
  const { language } = useSiteContext();
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 120, damping: 22 });
  const rotateY = useSpring(y, { stiffness: 120, damping: 22 });
  const example = examples[active];
  return (
    <motion.div
      className="developer-console"
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformPerspective: 1100,
      }}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5);
        y.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="developer-console__chrome">
        <span className="console-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>evs / frontend-lab</span>
        <Code2 size={16} aria-hidden="true" />
      </div>
      <div
        className="developer-console__tabs"
        role="group"
        aria-label={language === 'ru' ? 'Примеры frontend-задач' : 'Frontend examples'}
      >
        {examples.map((item, index) => (
          <button
            type="button"
            key={item.name}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            {item.label}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="developer-console__body" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.16 }}
          >
            <div
              className="developer-console__code"
              tabIndex={0}
              role="region"
              aria-label={language === 'ru' ? 'Учебный фрагмент кода' : 'Illustrative code snippet'}
            >
              <pre>
                <code>
                  {example.code.map((line, index) => (
                    <span className="console-line" key={line}>
                      <span aria-hidden="true">{index + 1}</span>
                      {line}
                      {'\n'}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
            <div className="developer-console__description">
              <h2>{example[language][0]}</h2>
              <p>{example[language][1]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="developer-console__note">
        {language === 'ru'
          ? 'Иллюстрации подхода · не код клиентского проекта'
          : 'Illustrative examples · not client project code'}
      </div>
      <div className="developer-console__links">
        <a href="https://github.com/evscoder" target="_blank" rel="noreferrer">
          <Code2 size={16} aria-hidden="true" />
          GitHub
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a href="https://t.me/evgenystaroverov" target="_blank" rel="noreferrer">
          <Send size={16} aria-hidden="true" />
          Telegram
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}
