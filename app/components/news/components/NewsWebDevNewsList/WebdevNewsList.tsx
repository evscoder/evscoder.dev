'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

import { ArrowUpRight } from 'lucide-react';
import type { WebdevNewsItem } from '@/app/components/news/types';
import s from './WebDevNewsList.module.scss';
import { Pagination } from '@/app/components/news/components/shared/Pagination/Pagination';

const pageSize = 6;

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function WebdevNewsList({ items }: { items: WebdevNewsItem[] }) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(items.length / pageSize);
  const currentPage = Math.min(selectedPage, Math.max(totalPages, 1));
  const startIndex = (currentPage - 1) * pageSize;
  const visibleItems = items.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    setSelectedPage(page);
    gridRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  };

  return (
    <>
      <div ref={gridRef} className={`${s.archiveGrid} ${s.feedGrid}`}>
        {visibleItems.map((item) => (
          <article key={item.href} className={s.archiveCard}>
            <div className={s.newsCover}>
              {item.imageUrl && item.imageUrl !== failedSrc ? (
                <Image
                  src={item.imageUrl}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1099px) 50vw, 33vw"
                  className={s.newsCoverImage}
                  onError={() => setFailedSrc(item.imageUrl)}
                />
              ) : (
                <div className={s.newsCoverPlaceholder} aria-hidden="true">
                  <ImageIcon size={32} strokeWidth={1.25} />
                  <span>web.dev</span>
                </div>
              )}
            </div>
            <div className={s.archiveLabels}>
              <span className={s.archiveTag}>web.dev</span>
              <span className={s.archiveStatus}>Новость · EN</span>
            </div>
            <h3 lang="en">
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h3>
            {item.description && <p lang="en">{item.description}</p>}
            <div
              className={
                'flex items-center w-full mt-auto border-t border-(--hero-card-border) pt-2'
              }
            >
              {item.publishedAt && (
                <time className={s.feedDate} dateTime={item.publishedAt}>
                  {dateFormatter.format(new Date(item.publishedAt))}
                </time>
              )}
              <div className={'ml-auto'}>
                <a
                  href={item.href}
                  className={s.archiveLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Читать на web.dev: ${item.title} (в новой вкладке)`}
                >
                  Читать на web.dev
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalItems={items.length}
        itemLabel="новостей"
        ariaLabel="Страницы новостей web.dev"
        onPageChange={goToPage}
      />
    </>
  );
}
