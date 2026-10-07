import { Code2, Terminal, Braces } from 'lucide-react';
import { Panel } from '@/app/components/panel/Panel';
import type { SectionProps } from '@/app/components/home/model/section-types';
import { useSiteContext } from '@/app/components/layout/site-provider';

export function OverviewPanel({ content }: SectionProps) {
  const { language } = useSiteContext();
  const ru = language === 'ru';
  return (
    <Panel className="lg:col-span-2">
      <section id="about" className="personal-about detail-section" aria-labelledby="about-title">
        <div>
          <p className="personal-kicker">
            <Terminal size={18} aria-hidden="true" />
            {ru ? 'Обо мне / за интерфейсом' : 'About me / behind the interface'}
          </p>
          <h2 id="about-title">{ru ? 'Разработчик.\nВ деталях.' : 'The developer.\nIn detail.'}</h2>
          <p className="personal-lead">
            {ru
              ? 'Я Евгений Староверов, Senior Frontend Developer. Моя работа — превращать сложные сценарии в понятные интерфейсы и поддерживаемый код.'
              : 'I’m Evgeny Staroverov, a Senior Frontend Developer. My work is turning complex user flows into clear interfaces and maintainable code.'}
          </p>
          <p>{content.intro}</p>
          <p>
            {ru
              ? 'Мне важны обе стороны frontend: то, как интерфейс ощущается в браузере, и то, как он устроен внутри. Типизация, границы компонентов, обработка ошибок и точность взаимодействий — части одной задачи.'
              : 'I care about both sides of frontend: how an interface feels in the browser and how it works inside. Types, component boundaries, error handling and precise interactions are parts of the same task.'}
          </p>
        </div>
        <div className="personal-about__details">
          <article>
            <Code2 aria-hidden="true" />
            <h3>{ru ? 'Что разрабатываю' : 'What I build'}</h3>
            <p>
              {ru
                ? 'Каталоги и платформы недвижимости, личные кабинеты, административные интерфейсы. Внутри — фильтры, карты, таблицы, дашборды и многошаговые формы.'
                : 'Catalogs and real estate platforms, customer portals and admin interfaces. Inside: filters, maps, tables, dashboards and multi-step forms.'}
            </p>
          </article>
          <article>
            <Braces aria-hidden="true" />
            <h3>{ru ? 'Что происходит в коде' : 'What happens in the code'}</h3>
            <p>
              {ru
                ? 'Связываю UI с данными, проектирую компоненты и состояние приложения. Работаю с Angular, RxJS и Nx, React и Next.js; выбираю SSR, SSG или клиентский рендеринг под конкретный сценарий.'
                : 'I connect UI with data and design components and application state. I work with Angular, RxJS and Nx, React and Next.js, choosing SSR, SSG or client rendering for the scenario.'}
            </p>
          </article>
          <article>
            <Terminal aria-hidden="true" />
            <h3>{ru ? 'Как отношусь к существующему коду' : 'How I work with existing code'}</h3>
            <p>
              {ru
                ? 'Сначала разбираюсь в связях и ограничениях. Исправляю проблемный участок, сохраняя рабочие сценарии. Выделяю общие части там, где это упрощает дальнейшие изменения.'
                : 'I first understand the dependencies and constraints. I fix the problem while preserving working flows, extracting shared parts where that makes future changes easier.'}
            </p>
          </article>
        </div>
      </section>
    </Panel>
  );
}
