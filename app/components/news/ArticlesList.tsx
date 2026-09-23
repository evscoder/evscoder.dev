'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { LoadingButton } from '@/app/shared/ui/loading-button/loading-button';
import { NewsCard, type ArticlePreview } from '@/app/components/news/components/NewsCard/NewsCard';
import cardStyles from '@/app/components/news/components/NewsCard/NewsCard.module.scss';
import s from './news.module.scss';

const batchSize = 4;
const minimumLoadingTime = 2000;

export function ArticlesList({ articles }: { articles: ArticlePreview[] }) {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const previousCountRef = useRef(batchSize);
  const hasMore = visibleCount < articles.length;

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visibleCount > previousCountRef.current) {
      const links = gridRef.current?.querySelectorAll<HTMLAnchorElement>('h2 a');
      links?.[previousCountRef.current]?.focus({ preventScroll: true });
    }

    previousCountRef.current = visibleCount;
  }, [visibleCount]);

  const loadMore = () => {
    if (timerRef.current !== null || !hasMore) {
      return;
    }

    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      setVisibleCount((count) => Math.min(count + batchSize, articles.length));
      setIsLoading(false);
      timerRef.current = null;
    }, minimumLoadingTime);
  };

  return (
    <>
      <div
        ref={gridRef}
        id="author-articles"
        className={cardStyles.archiveGrid}
        aria-busy={isLoading}
      >
        {articles.slice(0, visibleCount).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      <p className={s.loadMoreStatus} role="status" aria-live="polite" aria-atomic="true">
        {isLoading
          ? 'Загружаем статьи…'
          : `Показано ${Math.min(visibleCount, articles.length)} из ${articles.length} статей`}
      </p>
      {hasMore && (
        <div className={s.loadMoreWrap}>
          <LoadingButton
            onClick={loadMore}
            isLoading={isLoading}
            icon={<ArrowDown size={20} aria-hidden="true" />}
            aria-controls="author-articles"
          >
            Загрузить ещё
          </LoadingButton>
        </div>
      )}
    </>
  );
}
