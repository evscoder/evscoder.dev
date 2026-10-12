import type { SupportedLanguage } from '@/app/components/home/model/site-content';
import type { ProjectCaseStudy } from '../project-types';

export const feStarterBricksCaseStudy: Record<SupportedLanguage, ProjectCaseStudy> = {
  ru: {
    eyebrow: 'CLI / FRONTEND STARTER',
    description:
      'Генератор проектов для многостраничных сайтов, CMS-тем, Symfony-шаблонов и email-вёрстки. Выбор технологий и готовая сборка через командную строку.',
    seoTitle: 'Fe Starter Bricks — генератор frontend-проектов | EVS.CODER',
    imageAlt: 'Иллюстрация интерактивного CLI Fe Starter Bricks',
    sections: [
      {
        id: 'task',
        label: 'Задача',
        eyebrow: '01 / CONTEXT',
        title: 'Быстрый старт для шаблонной вёрстки',
        blocks: [
          {
            type: 'paragraph',
            text: 'Новый проект требует настройки шаблонов, стилей, скриптов и обработки ассетов. Fe Starter Bricks собирает основу из общего базового шаблона и выбранных технологических слоёв. Такой подход подходит для статических сайтов и интеграции frontend-вёрстки в CMS или Symfony.',
          },
        ],
      },
      {
        id: 'workflow',
        label: 'Создание проекта',
        eyebrow: '02 / WORKFLOW',
        title: 'От команды до локального сервера',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              {
                title: 'Запустить генератор.',
                text: 'Команда npm create starter-bricks@latest запускает интерактивную настройку.',
              },
              {
                title: 'Выбрать основу.',
                text: 'Указать имя папки, выбрать Pug, Nunjucks или Twig, включить TypeScript или оставить JavaScript и при необходимости добавить MJML-письма.',
              },
              {
                title: 'Запустить разработку.',
                text: 'Перейти в созданную папку, выполнить npm install и npm start. BrowserSync обслуживает локальный сайт и обновляет страницу при изменениях.',
              },
              {
                title: 'Собрать результат.',
                text: 'npm run build запускает production-сборку шаблонов, стилей, скриптов и ассетов.',
              },
            ],
          },
          {
            type: 'image',
            image: {
              src: '/images/projects/fe-starter-bricks/cli.png',
              unoptimized: true,
              width: 2880,
              height: 1800,
              alt: 'Иллюстрация выбора Twig, Pug или Nunjucks в CLI',
            },
            caption:
              'Оформленная иллюстрация выбора движка шаблонов на основе реального интерфейса CLI.',
          },
        ],
      },
      {
        id: 'decisions',
        label: 'Технические решения',
        eyebrow: '03 / ENGINEERING',
        title: 'Общая база и независимые слои',
        blocks: [
          {
            type: 'decisions',
            items: [
              {
                title: 'Составной шаблон',
                text: 'CLI копирует базовую структуру, добавляет выбранный движок шаблонов, слой JavaScript или TypeScript и опциональные email-шаблоны. Настройки записываются в user.config.js, имя проекта — в package.json.',
              },
              {
                title: 'Gulp и Webpack',
                text: 'Gulp отвечает за шаблоны, копирование файлов и обработку изображений. Webpack собирает скрипты и стили; SCSS и PostCSS дополняются поддержкой Tailwind CSS.',
              },
              {
                title: 'Ассеты и письма',
                text: 'В шаблоне предусмотрены оптимизация изображений, SVG- и PNG-спрайты и сборка MJML-писем. Возможности включаются через конфигурацию проекта.',
              },
              {
                title: 'Проверка ввода',
                text: 'Генератор проверяет имя папки, запрещает пути и зарезервированные имена Windows и не записывает проект в непустую папку.',
              },
            ],
          },
          {
            type: 'image',
            image: {
              src: '/images/projects/fe-starter-bricks/generated.png',
              unoptimized: true,
              width: 2880,
              height: 1800,
              alt: 'Иллюстрация результата генерации проекта с TypeScript и MJML',
            },
            caption: 'Оформленная иллюстрация этапов генерации и команд для запуска проекта.',
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: 'CLI / FRONTEND STARTER',
    description:
      'A project generator for multipage websites, CMS themes, Symfony views and email templates. Choose your technologies and get a build setup from the command line.',
    seoTitle: 'Fe Starter Bricks — frontend project generator | EVS.CODER',
    imageAlt: 'Illustration of the interactive Fe Starter Bricks CLI',
    sections: [
      {
        id: 'task',
        label: 'Task',
        eyebrow: '01 / CONTEXT',
        title: 'A quick start for template-based websites',
        blocks: [
          {
            type: 'paragraph',
            text: 'Starting a project requires configuring templates, styles, scripts and asset processing. Fe Starter Bricks assembles a foundation from a shared base template and selected technology layers. It supports static websites and frontend integration into a CMS or Symfony application.',
          },
        ],
      },
      {
        id: 'workflow',
        label: 'Project creation',
        eyebrow: '02 / WORKFLOW',
        title: 'From a command to a local server',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              {
                title: 'Run the generator.',
                text: 'npm create starter-bricks@latest starts the interactive setup.',
              },
              {
                title: 'Choose the foundation.',
                text: 'Enter a folder name, select Pug, Nunjucks or Twig, choose TypeScript or JavaScript, and optionally add MJML emails.',
              },
              {
                title: 'Start development.',
                text: 'Open the generated folder, run npm install and npm start. BrowserSync serves the local website and reloads it when files change.',
              },
              {
                title: 'Build the output.',
                text: 'npm run build runs the production pipeline for templates, styles, scripts and assets.',
              },
            ],
          },
          {
            type: 'image',
            image: {
              src: '/images/projects/fe-starter-bricks/cli.png',
              unoptimized: true,
              width: 2880,
              height: 1800,
              alt: 'Illustration of choosing Twig, Pug or Nunjucks in the CLI',
            },
            caption:
              'A styled illustration of template engine selection, based on the actual CLI interface.',
          },
        ],
      },
      {
        id: 'decisions',
        label: 'Technical decisions',
        eyebrow: '03 / ENGINEERING',
        title: 'A shared base with independent layers',
        blocks: [
          {
            type: 'decisions',
            items: [
              {
                title: 'Composable templates',
                text: 'The CLI copies the base structure, adds the chosen template engine, a JavaScript or TypeScript layer, and optional email templates. It writes settings to user.config.js and the project name to package.json.',
              },
              {
                title: 'Gulp and Webpack',
                text: 'Gulp handles templates, file copying and image processing. Webpack bundles scripts and styles, with SCSS, PostCSS and Tailwind CSS support.',
              },
              {
                title: 'Assets and emails',
                text: 'The template includes image optimization, SVG and PNG sprites, and MJML email compilation. Features are enabled through the project configuration.',
              },
              {
                title: 'Input validation',
                text: 'The generator validates folder names, rejects paths and Windows reserved names, and refuses to write a project into a nonempty folder.',
              },
            ],
          },
          {
            type: 'image',
            image: {
              src: '/images/projects/fe-starter-bricks/generated.png',
              unoptimized: true,
              width: 2880,
              height: 1800,
              alt: 'Illustration of project generation with TypeScript and MJML',
            },
            caption:
              'A styled illustration of the generation steps and commands to start the project.',
          },
        ],
      },
    ],
  },
};
