import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Breadcrumbs } from '@/app/shared/ui/breadcrumbs/breadcrumbs';
import { ArticlesList } from '@/app/components/news/ArticlesList';
import { WebdevNews } from '@/app/components/news/WebdevNews';
import { newsArticles } from '@/app/components/news/model';
import s from '@/app/components/news/news.module.scss';

const title = 'Статьи о frontend-разработке';
const description =
  'Практические разборы архитектуры, производительности, сложных интерфейсов и дизайн-систем.';

export const metadata: Metadata = {
  title: `${title} | EVS.CODER`,
  description,
  alternates: { canonical: '/articles' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/articles',
    locale: 'ru_RU',
    siteName: 'EVS.CODER',
  },
};

export const revalidate = 3600;

export default function ArticlesPage() {
  return (
    <section lang="ru" className={s.article} aria-labelledby="articles-title">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Статьи' }]} />
        <header className={s.header}>
          <div className={'mb-3'}>
            <p className={s.eyebrow}>ENGINEERING NOTES / ВСЕ СТАТЬИ</p>
          </div>
          <h1 id="articles-title">{title}</h1>
          <p className={s.lead}>{description}</p>
          <span className={s.language}>Материалы на русском языке</span>
        </header>
        <ArticlesList
          articles={newsArticles.map(({ id, title, description, tag }) => ({
            id,
            title,
            description,
            tag,
          }))}
        />
        <Suspense
          fallback={
            <p className={s.feedFallback} role="status">
              Загружаем новости web.dev…
            </p>
          }
        >
          <WebdevNews />
        </Suspense>
      </div>
    </section>
  );
}
