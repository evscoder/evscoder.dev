import { Gauge, Search, Layers3, Timer } from 'lucide-react';
import { Panel } from '@/app/components/panel/Panel';
import { useSiteContext } from '@/app/components/layout/site-provider';

const checks = [
  {
    Icon: Search,
    title: ['Загрузка', 'Loading'],
    text: [
      'Смотрю, что задерживает первый экран: JavaScript, изображения, шрифты или цепочка запросов. Разделяю критические ресурсы и то, что можно загрузить позже.',
      'I inspect what delays the first screen: JavaScript, images, fonts or request chains. I separate critical resources from work that can load later.',
    ],
    tools: 'Network / Lighthouse',
  },
  {
    Icon: Layers3,
    title: ['Рендеринг', 'Rendering'],
    text: [
      'Проверяю обновления компонентов, дорогие вычисления и большие списки. Мемоизация и виртуализация появляются там, где профилирование показывает проблему.',
      'I inspect component updates, expensive calculations and large lists. Memoization and virtualization follow evidence from profiling.',
    ],
    tools: 'DevTools / Profiler',
  },
  {
    Icon: Timer,
    title: ['Взаимодействия', 'Interactions'],
    text: [
      'Проверяю отклик поиска, фильтров и форм. Слежу за длинными задачами, скачками разметки и конкурирующими запросами при быстрых действиях пользователя.',
      'I check search, filter and form responsiveness: long tasks, layout shifts and competing requests during rapid interactions.',
    ],
    tools: 'Performance / Web Vitals',
  },
];
export function PerformancePanel() {
  const { language } = useSiteContext();
  const index = language === 'ru' ? 0 : 1;
  return (
    <Panel className="lg:col-span-2">
      <section className="detail-section" aria-labelledby="performance-title">
        <p className="personal-kicker">
          <Gauge size={18} aria-hidden="true" />
          PERFORMANCE / DEBUGGING
        </p>
        <h2 id="performance-title" className="detail-title">
          {index === 0
            ? 'Не просто «быстро». Разобраться — почему медленно.'
            : 'Not just “fast”. Understand what makes it slow.'}
        </h2>
        <div className="debug-grid">
          {checks.map(({ Icon, title, text, tools }) => (
            <article key={tools}>
              <Icon size={25} aria-hidden="true" />
              <h3>{title[index]}</h3>
              <p>{text[index]}</p>
              <span>{tools}</span>
            </article>
          ))}
        </div>
        <p className="detail-footnote">
          {index === 0
            ? 'Замер → гипотеза → изменение → повторная проверка. Конкретные показатели требуют конкретного проекта и условий измерения.'
            : 'Measure → form a hypothesis → make a change → measure again. Performance numbers need a specific project and measurement conditions.'}
        </p>
      </section>
    </Panel>
  );
}
