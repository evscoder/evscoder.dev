'use client';

import { useMemo } from 'react';
import { useScrollSpy } from '@/app/shared/hooks/use-scroll-spy';
import { useSmartSticky } from '@/app/shared/hooks/use-smart-sticky';
import s from './NewsSidebar.module.scss';
import { NewsSection } from '@/app/components/news/types';

const topOffset = 110;

export function NewsSidebar({ sections }: { sections: Pick<NewsSection, 'id' | 'title'>[] }) {
  const { rootRef, contentRef } = useSmartSticky({ minWidth: 768, topOffset });
  const sectionIds = useMemo(() => sections.map(({ id }) => id), [sections]);
  const activeId = useScrollSpy(sectionIds, { topOffset });

  return (
    <div ref={rootRef} className={s.sidebar}>
      <div ref={contentRef}>
        <nav className={s.contents} aria-label="Содержание статьи">
          <span>В этой статье</span>
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={activeId === section.id ? 'location' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
