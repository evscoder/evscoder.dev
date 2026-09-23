import { Orbit } from 'lucide-react';
import { Panel } from '@/app/components/panel/Panel';
import { useSiteContext } from '@/app/components/layout/site-provider';
const directions = [
  {
    ru: [
      'Сложные интерфейсы',
      'Фильтры, таблицы, карты и многошаговые формы. Связываю действия пользователя с состоянием приложения, включая возврат назад, сброс фильтров и восстановление параметров из URL.',
    ],
    en: [
      'Complex interfaces',
      'Filters, tables, maps and multi-step forms. I connect user actions with application state, including back navigation, resets and restoring parameters from the URL.',
    ],
  },
  {
    ru: [
      'Архитектура приложения',
      'Разделяю функциональность по модулям. Определяю, где живёт состояние, как модули обмениваются данными и какие зависимости действительно нужны.',
    ],
    en: [
      'Application architecture',
      'I split functionality into modules and decide where state lives, how modules exchange data and which dependencies they need.',
    ],
  },
  {
    ru: [
      'Компоненты и доступность',
      'Выделяю общий UI с понятными входными параметрами. Продумываю композицию, управление с клавиатуры, фокус и состояния элементов.',
    ],
    en: [
      'Components and accessibility',
      'I extract shared UI with clear inputs, considering composition, keyboard operation, focus and interaction states.',
    ],
  },
  {
    ru: [
      'Типизация и API',
      'Описываю контракты данных, отделяю транспортные модели от состояния UI. Учитываю ошибки запросов, отмену и порядок ответов.',
    ],
    en: [
      'Types and APIs',
      'I describe data contracts and separate transport models from UI state, accounting for request errors, cancellation and response ordering.',
    ],
  },
  {
    ru: [
      'SSR, SSG и маршрутизация',
      'Выбираю способ рендеринга с учётом содержимого страницы и интерактивности. Проверяю прямые ссылки, загрузку данных и поведение интерфейса при переходах.',
    ],
    en: [
      'SSR, SSG and routing',
      'I choose rendering based on page content and interactivity, checking direct links, data loading and behavior during navigation.',
    ],
  },
  {
    ru: [
      'Поддержка и рефакторинг',
      'Разбираю существующие зависимости, локализую изменения и проверяю затронутые сценарии. Убираю дублирование, когда общая часть действительно устоялась.',
    ],
    en: [
      'Maintenance and refactoring',
      'I investigate existing dependencies, localize changes and check affected flows. I remove duplication when the shared behavior is well understood.',
    ],
  },
];
export function MissionsPanel() {
  const { language } = useSiteContext();
  return (
    <Panel>
      <section id="expertise" className="detail-section">
        <p className="personal-kicker">
          <Orbit size={20} aria-hidden="true" />
          {language === 'ru' ? 'Задачи / подробнее' : 'Tasks / in detail'}
        </p>
        <h2 className="detail-title">
          {language === 'ru' ? 'Что внутри моей работы' : 'Inside my work'}
        </h2>
        <div className="expertise-details">
          {directions.map((item, index) => (
            <details key={index} open={index === 0 ? true : undefined}>
              <summary>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item[language][0]}
                <span className="detail-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item[language][1]}</p>
            </details>
          ))}
        </div>
      </section>
    </Panel>
  );
}
