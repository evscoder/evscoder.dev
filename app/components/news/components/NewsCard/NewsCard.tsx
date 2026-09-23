import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { NewsArticle } from '@/app/components/news/types';
import s from './NewsCard.module.scss';

export type ArticlePreview = Pick<NewsArticle, 'id' | 'title' | 'description' | 'tag'>;

const tagColors: Record<string, string> = {
  Rendering: '#a78bfa',
  'Complex UI': '#61b3f2',
  Architecture: '#53e2bd',
  'Design Systems': '#b6ff5c',
  Performance: '#fb923c',
};

type NewsCardProps = {
  article: ArticlePreview;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article
      className={s.archiveCard}
      style={{ '--article-tag-color': tagColors[article.tag] ?? '#61b3f2' } as CSSProperties}
    >
      <div className={s.archiveLabels}>
        <span className={s.archiveTag}>{article.tag}</span>
        <span className={s.archiveStatus}>Статья</span>
      </div>
      <h2>
        <Link href={`/articles/${article.id}`}>{article.title}</Link>
      </h2>
      <p>{article.description}</p>
      <Link
        href={`/articles/${article.id}`}
        className={s.archiveLink}
        aria-label={`Читать статью: ${article.title}`}
      >
        Читать статью
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </article>
  );
}
