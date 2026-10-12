import { Code2, Cpu, Gauge, Layers3, Rocket, ShieldCheck } from 'lucide-react';

export type SupportedLanguage = 'ru' | 'en';

export type SocialLink = {
  href: string;
  iconName: string;
  label: string;
};

export type ArchitectureNode = {
  id: string;
  title: string;
  detail: string;
};

export type ArticleNote = {
  id?: string;
  title: string;
  summary: string;
  tag: string;
  status: string;
};

export type ProofItem = {
  title: string;
  detail: string;
  label: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  detail: string;
};

export const languageOptions = [
  {
    code: 'ru' as const,
    label: 'ру',
    fullLabel: 'Россия',
    flagSrc: '/img/content/ru.svg',
  },
  {
    code: 'en' as const,
    label: 'en',
    fullLabel: 'United States',
    flagSrc: '/img/content/us.svg',
  },
];

export const socialGroups = {
  contacts: [
    {
      href: 'https://t.me/evgenystaroverov',
      iconName: 'icon-telegram',
      label: 'Telegram',
    },
  ] satisfies SocialLink[],
  social: [
    {
      href: 'https://www.linkedin.com/in/evgst/',
      iconName: 'icon-linkedin',
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/evscoder',
      iconName: 'github',
      label: 'GitHub',
    },
  ] satisfies SocialLink[],
};

export const heroTypingWords = [
  'Senior Frontend Engineer',
  'Angular / React / TypeScript',
  'Complex UI Engineer',
  'Angular / React Developer',
  'Interfaces. State. Code.',
];

export const copy = {
  ru: {
    badge: 'Expertise',
    profileId: 'Профиль: EVS-2015',
    sectionTitle: 'Frontend Architecture for High-Load Products',
    intro:
      'Работаю с интерфейсами, в которых много данных и взаимосвязанных состояний: каталогами, личными кабинетами и административными системами. Соединяю компоненты, маршрутизацию и API так, чтобы поведение приложения оставалось предсказуемым.',
    statusLabel: 'Статус',
    statusValue: 'Системы работают в продакшене',
    capabilityTitle: 'Ключевые направления',
    capabilities: [
      'SSR / SSG Systems',
      'High-Load Frontend',
      'Complex Product UI',
      'Design Systems',
      'Performance Strategy',
      'Scalable Architecture',
    ],
    snapshotTitle: 'System Snapshot',
    snapshot: [
      { label: 'Primary focus', value: 'Architecture-first delivery' },
      { label: 'Product mode', value: 'B2B platforms / Admin systems' },
      { label: 'Execution', value: 'From UX flow to production scale' },
    ],
    missionTitle: 'Что я строю',
    stackTitle: 'Основной стек',
    stackCoreLabel: 'Frontend core',
    stackExpertiseLabel: 'Frontend-экспертиза',
    stackSupportLabel: 'Production context',
    quote: 'Лучший интерфейс тот, который пользователь понимает раньше, чем начинает о нем думать.',
    stats: [
      { label: 'Коммерческий опыт', value: '10+ лет' },
      { label: 'Уровень', value: 'Senior' },
      { label: 'Архитектура', value: 'A+' },
      { label: 'UI Systems', value: 'Elite' },
    ],
    missions: [
      'Каталоги недвижимости: поиск, фильтры, карточки и карты',
      'Админки и личные кабинеты: таблицы, формы, роли и состояния',
      'SSR/SSG архитектура на Angular и Nx',
      'Интерактивные карты, фильтры, диалоговые интерфейсы и сложные UI-сценарии',
      'Обработка загрузки, пустых результатов и ошибок API',
    ],
    highlights: [
      {
        title: 'Инженерный фокус',
        text: 'Сначала архитектура: чистые границы, переиспользуемые модули, предсказуемый state и код, который выдерживает реальную нагрузку.',
      },
      {
        title: 'UI-системы',
        text: 'Фильтры, карточки, диалоговые интерфейсы, карты, дашборды, каталоги, анимации и насыщенные взаимодействием продуктовые интерфейсы.',
      },
      {
        title: 'Производительность',
        text: 'SSR, lazy loading, контроль рендера, стратегия ассетов и frontend-оптимизация для быстрого UX.',
      },
      {
        title: 'Доставка результата',
        text: 'Разбираюсь в задаче, пишу код, проверяю пограничные случаи и сопровождаю изменения.',
      },
    ],

    performanceTitle: 'Метрики производительности',
    performance: [
      { label: 'Lighthouse Performance', value: '95+', icon: Gauge },
      { label: 'Core Web Vitals', value: 'Green', icon: ShieldCheck },
      { label: 'SSR / SSG Ready', value: 'Yes', icon: Rocket },
      { label: 'Bundle Strategy', value: 'Optimized', icon: Cpu },
    ],
    architectureTitle: 'Снимок архитектуры',
    architectureIntro:
      'Как я разделяю ответственность в приложении: компоненты отображают данные, состояние описывает сценарий, а работа с API остаётся за отдельной границей. Стратегию рендеринга выбираю под задачу.',
    architectureNodes: [
      { id: '01', title: 'UI-слой', detail: 'Дизайн-система, композиция, сложные состояния' },
      {
        id: '02',
        title: 'State-модель',
        detail: 'Предсказуемые потоки, async-оркестрация, изоляция',
      },
      {
        id: '03',
        title: 'API-контракт',
        detail: 'Типизированные границы, валидация, устойчивость',
      },
      { id: '04', title: 'SSR / SSG', detail: 'Стратегия рендеринга под форму и задачи продукта' },
      {
        id: '05',
        title: 'Стратегия производительности',
        detail: 'CWV, контроль бандла, приоритеты загрузки',
      },
    ] satisfies ArchitectureNode[],
    architecturePrinciplesTitle: 'Системные принципы',
    architecturePrinciples: [
      'Каждый слой решает свою задачу и не тащит лишнюю связанность.',
      'UI проектируется под рост продукта, а не только под текущий экран.',
      'Производительность закладывается в архитектуру, а не чинится в конце.',
    ],
    notesTitle: 'Статьи / Заметки',
    notesIntro:
      'Темы, о которых стоит писать и говорить, когда frontend уже вырос из набора компонентов в систему.',
    notes: [
      {
        id: '1',
        title: 'SSR-стратегия для продуктовых интерфейсов',
        summary:
          'Как выбирать между SSR, SSG и гибридным рендерингом, если важны SEO, скорость и сложные пользовательские сценарии.',
        tag: 'Rendering',
        status: 'Drafting',
      },
      {
        id: '2',
        title: 'Сложные фильтры без UX-коллапса',
        summary:
          'Паттерны для data-heavy интерфейсов: синхронизация state, URL, кеша и API без хаоса в кодовой базе.',
        tag: 'Complex UI',
        status: 'Queued',
      },
      {
        id: '3',
        title: 'Масштабирование frontend за пределами компонентов',
        summary:
          'Почему масштабирование frontend начинается не с библиотеки UI, а с границ модулей, контрактов и delivery-процесса.',
        tag: 'Architecture',
        status: 'Queued',
      },
      {
        id: '4',
        title: 'Design system, которая выдерживает давление продукта',
        summary:
          'Как строить систему компонентов, которая помогает продукту расти, а не превращается в витрину красивых, но хрупких примитивов.',
        tag: 'Design Systems',
        status: 'Research',
      },
    ] satisfies ArticleNote[],
    proofTitle: 'Доказательства качества',
    proofIntro:
      'Не только заявления, но и артефакты, по которым можно оценить инженерный уровень, внимание к качеству интерфейсов и дисциплину исполнения.',
    proofs: [
      {
        title: 'Lighthouse Reports',
        detail:
          'Скриншоты и замеры производительности с акцентом на Core Web Vitals, TTI и итоговую стабильность интерфейса.',
        label: 'Metrics',
      },
      {
        title: 'Before / After',
        detail:
          'Сравнение до и после редизайна или рефакторинга: скорость, читаемость UI, снижение визуального и технического шума.',
        label: 'Comparative',
      },
      {
        title: 'Component System Preview',
        detail:
          'Набор ключевых интерфейсных примитивов и паттернов, показывающий системность, масштабируемость и единый язык UI.',
        label: 'System',
      },
      {
        title: 'Code Samples',
        detail:
          'Фрагменты кода, где видно архитектурные решения, границы модулей, обработку состояний и работу с производительностью.',
        label: 'Code',
      },
    ] satisfies ProofItem[],
    processTitle: 'Как я работаю',
    processIntro:
      'Начинаю с поведения интерфейса: что делает пользователь, какие данные нужны и где сценарий может сломаться. Затем перехожу к структуре кода, реализации и проверке.',
    processSteps: [
      {
        id: '01',
        title: 'Discovery',
        detail:
          'Разбираю макеты и сценарии. Уточняю, как должны работать валидация, ошибки, загрузка и переходы между состояниями.',
      },
      {
        id: '02',
        title: 'Architecture',
        detail:
          'Определяю границы модулей, стратегию рендеринга, контракты данных и структуру UI-системы под рост продукта.',
      },
      {
        id: '03',
        title: 'Implementation',
        detail:
          'Собираю решение с упором на предсказуемость состояния, переиспользуемость и чистую интеграцию с API и бизнес-логикой.',
      },
      {
        id: '04',
        title: 'Performance Pass',
        detail:
          'Проверяю рендеринг, приоритеты загрузки, bundle behavior и узкие места, которые влияют на реальный UX.',
      },
      {
        id: '05',
        title: 'Release Support',
        detail:
          'Проверяю изменения после релиза, разбираю ошибки и упрощаю код при дальнейших доработках. Фиксирую неочевидные решения для других разработчиков.',
      },
    ] satisfies ProcessStep[],
  },
  en: {
    badge: 'Expertise',
    profileId: 'Profile ID: EVS-2015',
    sectionTitle: 'Frontend Architecture for High-Load Products',
    intro:
      'I work on interfaces with rich data and connected states: catalogs, customer portals and admin systems. I connect components, routing and APIs to keep application behavior predictable.',
    statusLabel: 'Status',
    statusValue: 'Systems Running in Production',
    capabilityTitle: 'Key Directions',
    capabilities: [
      'SSR / SSG Systems',
      'High-Load Frontend',
      'Complex Product UI',
      'Design Systems',
      'Performance Strategy',
      'Scalable Architecture',
    ],
    snapshotTitle: 'System Snapshot',
    snapshot: [
      { label: 'Primary focus', value: 'Architecture-first delivery' },
      { label: 'Product mode', value: 'B2B platforms / Admin systems' },
      { label: 'Execution', value: 'From UX flow to production scale' },
    ],
    missionTitle: 'What I Build',
    stackTitle: 'Core Stack',
    stackCoreLabel: 'Frontend core',
    stackExpertiseLabel: 'Frontend expertise',
    stackSupportLabel: 'Production context',
    quote: 'The best interface is the one the user understands before thinking.',
    stats: [
      { label: 'Commercial XP', value: '10+ yrs' },
      { label: 'Core rank', value: 'Senior' },
      { label: 'Architecture', value: 'A+' },
      { label: 'UI Systems', value: 'Elite' },
    ],
    missions: [
      'High-load catalogs and real estate platforms',
      'Admin panels, client portals and data-driven interfaces',
      'SSR/SSG frontend architecture with Angular and Nx',
      'Interactive maps, filters, dialog interfaces and complex UI states',
      'Performance, maintainability and production-grade UX',
    ],
    highlights: [
      {
        title: 'Engineering Focus',
        text: 'Architecture first. Clean boundaries, reusable modules, predictable state and code that survives real production pressure.',
      },
      {
        title: 'UI Systems',
        text: 'Filters, cards, dialog interfaces, maps, dashboards, catalogs, animations and interaction-heavy product interfaces.',
      },
      {
        title: 'Performance',
        text: 'SSR, lazy loading, rendering control, asset strategy and frontend optimization for fast user experience.',
      },
      {
        title: 'Delivery',
        text: 'Ownership mindset: not just closing tasks, but building reliable solutions that scale with the product.',
      },
    ],

    performanceTitle: 'Performance Metrics',
    performance: [
      { label: 'Lighthouse Performance', value: '95+', icon: Gauge },
      { label: 'Core Web Vitals', value: 'Green', icon: ShieldCheck },
      { label: 'SSR / SSG Ready', value: 'Yes', icon: Rocket },
      { label: 'Bundle Strategy', value: 'Optimized', icon: Cpu },
    ],
    architectureTitle: 'Architecture Snapshot',
    architectureIntro:
      'How I usually structure frontend delivery: interface layer, state model, API contract, SSR/SSG and the performance strategy behind it.',
    architectureNodes: [
      { id: '01', title: 'UI Layer', detail: 'Design system, composition, complex states' },
      {
        id: '02',
        title: 'State Model',
        detail: 'Predictable flows, async orchestration, isolation',
      },
      { id: '03', title: 'API Contract', detail: 'Typed boundaries, validation, resilience' },
      { id: '04', title: 'SSR / SSG', detail: 'Rendering strategy matched to product shape' },
      { id: '05', title: 'Perf Strategy', detail: 'CWV, bundle control, loading priorities' },
    ] satisfies ArchitectureNode[],
    architecturePrinciplesTitle: 'System Principles',
    architecturePrinciples: [
      'Each layer should solve one class of problems without dragging extra coupling.',
      'UI is designed for product growth, not just for the current screen.',
      'Performance belongs in the architecture, not in the final cleanup pass.',
    ],
    notesTitle: 'Articles / Notes',
    notesIntro:
      'Topics worth writing about once frontend stops being a pile of components and becomes a system.',
    notes: [
      {
        id: '1',
        title: 'SSR Strategy for Product Interfaces',
        summary:
          'How to choose between SSR, SSG and hybrid rendering when SEO, speed and interaction-heavy UX all matter.',
        tag: 'Rendering',
        status: 'Drafting',
      },
      {
        id: '2',
        title: 'Complex Filters Without UX Collapse',
        summary:
          'Patterns for data-heavy interfaces: keeping state, URL, cache and API in sync without turning the codebase into a mess.',
        tag: 'Complex UI',
        status: 'Queued',
      },
      {
        title: 'Frontend Scaling Beyond Components',
        summary:
          'Why frontend scaling starts with module boundaries, contracts and delivery discipline rather than with a UI kit.',
        tag: 'Architecture',
        status: 'Queued',
      },
      {
        title: 'Design Systems That Survive Product Pressure',
        summary:
          'How to build a component system that helps the product scale instead of becoming a gallery of fragile primitives.',
        tag: 'Design Systems',
        status: 'Research',
      },
    ] satisfies ArticleNote[],
    proofTitle: 'Proof of Craft',
    proofIntro:
      'Not just claims, but concrete artifacts that show engineering depth, interface quality and delivery discipline.',
    proofs: [
      {
        title: 'Lighthouse Reports',
        detail:
          'Performance captures and report snapshots focused on Core Web Vitals, TTI and interface stability.',
        label: 'Metrics',
      },
      {
        title: 'Before / After',
        detail:
          'Comparisons before and after redesign or refactor work: speed, UI clarity and reduced visual or technical noise.',
        label: 'Comparative',
      },
      {
        title: 'Component System Preview',
        detail:
          'A set of core interface primitives and patterns that demonstrate system thinking, scalability and UI consistency.',
        label: 'System',
      },
      {
        title: 'Code Samples',
        detail:
          'Code excerpts that show architecture decisions, module boundaries, state handling and performance work.',
        label: 'Code',
      },
    ] satisfies ProofItem[],
    processTitle: 'Process / How I Work',
    processIntro:
      'A delivery process that balances speed with architecture, UX quality and long-term scalability.',
    processSteps: [
      {
        id: '01',
        title: 'Discovery',
        detail:
          'I map product context, risks, user flows and constraints so the solution is grounded in reality.',
      },
      {
        id: '02',
        title: 'Architecture',
        detail:
          'I define module boundaries, rendering strategy, data contracts and the UI system shape required for product growth.',
      },
      {
        id: '03',
        title: 'Implementation',
        detail:
          'I build for predictable state, reuse and clean integration with APIs and business logic.',
      },
      {
        id: '04',
        title: 'Performance Pass',
        detail:
          'I review rendering, loading priorities, bundle behavior and the bottlenecks that affect real UX.',
      },
      {
        id: '05',
        title: 'Release Support',
        detail:
          'I take the work to production, support the release, reduce rollout risk and help stabilize the result.',
      },
    ] satisfies ProcessStep[],
  },
} as const;

export const highlightVisuals = [
  {
    Icon: Code2,
    altClassName: 'text-orange-400',
    defaultClassName: 'text-[var(--hero-accent)]',
  },
  {
    Icon: Layers3,
    altClassName: 'text-sky-300',
    defaultClassName: 'text-[var(--hero-secondary)]',
  },
  {
    Icon: Gauge,
    altClassName: 'text-emerald-300',
    defaultClassName: 'text-[var(--hero-success)]',
  },
  {
    Icon: Rocket,
    altClassName: 'text-violet-300',
    defaultClassName: 'text-[var(--hero-tertiary)]',
  },
] as const;

export const stackCore = [
  {
    title: 'Angular Platform',
    detail: 'SPA · SSR / SSG · RxJS · Nx',
  },
  {
    title: 'React Ecosystem',
    detail: 'SPA · Next.js · SSR / RSC · App architecture',
  },
  {
    title: 'TypeScript',
    detail: 'Typed application architecture',
  },
] as const;

export const stackExpertise = [
  'Complex UI',
  'Architecture',
  'Microfrontends',
  'Monorepo',
  'Performance',
  'Design Systems',
  'State Management',
  'Rendering Strategy',
  'API Integration',
  'Testing & Quality',
  'SEO / JSON-LD',
] as const;

export const stackSupport = [
  'CI / CD',
  'Docker',
  'SQL / Databases',
  'Build Tooling & Bundling',
] as const;
