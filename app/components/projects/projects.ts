import type { SupportedLanguage } from '@/app/components/home/model/site-content';

import { feStarterBricksCaseStudy } from './data/fe-starter-bricks';
import { imageConverterCaseStudy } from './data/image-converter';
import type { ProjectCaseStudy } from './project-types';

type ProjectCopy = {
  category: string;
  summary: string;
  description: string;
  detail: string;
  imageAlt: string;
};

export type Project = {
  id: string;
  title: string;
  href: string;
  repository?: string;
  featured: boolean;
  platform: string;
  stack: readonly string[];
  image: { src: string; width: number; height: number; unoptimized?: boolean };
  copy: Record<SupportedLanguage, ProjectCopy>;
  caseStudy: Record<SupportedLanguage, ProjectCaseStudy>;
};

export const projects: readonly Project[] = [
  {
    id: 'image-converter',
    caseStudy: imageConverterCaseStudy,
    title: 'Image Converter',
    href: '/projects/image-converter',
    repository: 'https://github.com/evscoder/image-converter',
    featured: true,
    platform: 'DESKTOP / UBUNTU + WINDOWS',
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'JSZip'],
    image: {
      src: '/images/projects/image-converter/comparison.png',
      width: 1316,
      height: 687,
    },
    copy: {
      ru: {
        category: 'Desktop-приложение',
        summary: 'Изображения легче. Качество под контролем.',
        description:
          'Пакетная оптимизация изображений на Ubuntu и Windows. Предпросмотр сжатия, настройка качества и размера, сохранение в папку на компьютере или ZIP.',
        detail:
          'React-интерфейс, нативная обработка на Rust и работа с файловой системой через Tauri.',
        imageAlt: 'Сравнение оригинала и WebP в Image Converter',
      },
      en: {
        category: 'Desktop application',
        summary: 'Lighter images. Quality under control.',
        description:
          'Batch image optimization on Ubuntu and Windows. Compression previews, quality and size controls, and local folder or ZIP export.',
        detail:
          'A React interface, native Rust processing and filesystem integration through Tauri.',
        imageAlt: 'Original and WebP comparison in Image Converter',
      },
    },
  },
  {
    id: 'fe-starter-bricks',
    caseStudy: feStarterBricksCaseStudy,
    title: 'Fe Starter Bricks',
    href: '/projects/fe-starter-bricks',
    repository: 'https://github.com/evscoder/fe-starter-bricks',
    featured: false,
    platform: 'CLI / FRONTEND STARTER',
    stack: ['Node.js', 'Gulp 4', 'Webpack 5', 'TypeScript', 'SCSS', 'MJML'],
    image: {
      src: '/images/projects/fe-starter-bricks/cli.png',
      width: 2880,
      height: 1800,
      unoptimized: true,
    },
    copy: {
      ru: {
        category: 'Инструмент для разработки',
        summary: 'Готовая основа для следующего сайта.',
        description:
          'CLI-генератор frontend-проектов: Pug, Nunjucks или Twig, JavaScript или TypeScript, стили, ассеты и опциональные MJML-письма в одной сборке.',
        detail:
          'Общий базовый шаблон и выбранные слои, сборка на Gulp и Webpack, локальный сервер BrowserSync.',
        imageAlt: 'Иллюстрация выбора шаблона в CLI Fe Starter Bricks',
      },
      en: {
        category: 'Developer tool',
        summary: 'A ready foundation for your next website.',
        description:
          'A frontend project CLI generator: Pug, Nunjucks or Twig, JavaScript or TypeScript, styles, assets and optional MJML emails in one build setup.',
        detail:
          'A shared base template with selected layers, Gulp and Webpack builds, and a local BrowserSync server.',
        imageAlt: 'Illustration of template selection in the Fe Starter Bricks CLI',
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}
