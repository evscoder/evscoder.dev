'use client';

import { RefreshCw, Rss } from 'lucide-react';

import { WebdevNewsList } from '@/app/components/news/components/NewsWebDevNewsList/WebdevNewsList';
import listStyles from '@/app/components/news/components/NewsWebDevNewsList/WebDevNewsList.module.scss';
import { useGetWebdevNewsQuery } from '@/app/store/services/webdev-api';

import s from './news.module.scss';

const webdevFeedUrl = 'https://web.dev/feed.xml';

export function WebdevNews() {
  const { data: items = [], isError, isFetching, isLoading, refetch } = useGetWebdevNewsQuery();

  return (
    <section className={s.feed} aria-labelledby="webdev-news-title">
      <div className="flex flex-col gap-2 mb-4">
        <div className={'flex justify-between'}>
          <p className={s.eyebrow}>ИЗ ДРУГИХ ИСТОЧНИКОВ</p>
          <div className={s.feedActions}>
            <button
              type="button"
              className={s.back}
              disabled={isFetching}
              onClick={() => void refetch()}
            >
              <RefreshCw size={17} aria-hidden="true" />
              {isFetching ? 'Обновляем…' : 'Обновить'}
            </button>
            <a href={webdevFeedUrl} className={s.back} target="_blank" rel="noreferrer">
              <Rss size={17} aria-hidden="true" />
              RSS web.dev
            </a>
          </div>
        </div>
        <h2 id="webdev-news-title" className={s.feedTitle}>
          Новости web.dev
        </h2>
      </div>
      <div className={'text-lg'}>
        <p className={listStyles.feedIntro}>
          Публикации команды Chrome и экспертов веб-платформы. Материалы на английском языке, ссылки
          ведут на web.dev.
        </p>
      </div>
      {isLoading ? (
        <p className={listStyles.feedFallback} role="status" aria-live="polite">
          Загружаем новости web.dev…
        </p>
      ) : items.length > 0 ? (
        <WebdevNewsList items={items} />
      ) : (
        <p className={listStyles.feedFallback} role={isError ? 'alert' : 'status'}>
          Сейчас не удалось загрузить новости. Попробуйте ещё раз или{' '}
          <a href="https://web.dev/blog/" target="_blank" rel="noreferrer">
            Открыть блог web.dev <span aria-hidden="true">↗</span>
          </a>
        </p>
      )}
    </section>
  );
}
