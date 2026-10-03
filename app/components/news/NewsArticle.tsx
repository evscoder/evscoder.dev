import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Breadcrumbs } from '@/app/shared/ui/breadcrumbs/breadcrumbs';
import type { NewsArticle as Article } from './types';
import s from './news.module.scss';
import { NewsSidebar } from '@/app/components/news/components/NewsSidebar/NewsSidebar';

export function NewsArticle({
  article,
  nextArticle,
}: {
  article: Article;
  nextArticle?: Pick<Article, 'id' | 'title'>;
}) {
  return (
    <article lang="ru" className={s.article}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Статьи', href: '/articles' },
            { label: article.title },
          ]}
        />
        <header className={s.header}>
          <div className={'mb-3'}>
            <p className={s.eyebrow}>ENGINEERING NOTES / {article.tag}</p>
          </div>
          <h1>{article.title}</h1>
          <p className={s.lead}>{article.description}</p>
          <span className={s.language}>Статья на русском языке</span>
        </header>
        <div className={s.layout}>
          <NewsSidebar sections={article.sections.map(({ id, title }) => ({ id, title }))} />
          <div className={s.body}>
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.code && (
                  <div className={s.code}>
                    <span>TypeScript / пример</span>
                    <pre tabIndex={0} role="region" aria-label={`Пример кода: ${section.title}`}>
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}
                {section.checklist && (
                  <ul>
                    {section.checklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <aside className={s.sources} aria-label="Документация">
              <h2>Документация по теме</h2>
              {article.sources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                  {source.title}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
            </aside>
            {nextArticle && (
              <Link className={s.next} href={`/articles/${nextArticle.id}`}>
                <span>Ещё одна заметка</span>
                <strong>{nextArticle.title}</strong>
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
