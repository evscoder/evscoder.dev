'use client';

import { useMemo } from 'react';
import { useScrollSpy } from '@/app/shared/hooks/use-scroll-spy';
import { useSmartSticky } from '@/app/shared/hooks/use-smart-sticky';
import s from './contents-sidebar.module.scss';

type ContentsSidebarProps = {
  sections: readonly { id: string; title: string }[];
  heading: string;
  ariaLabel: string;
  minWidth?: number;
  topOffset?: number;
};

export function ContentsSidebar({
  sections,
  heading,
  ariaLabel,
  minWidth = 768,
  topOffset = 110,
}: ContentsSidebarProps) {
  const { rootRef, contentRef } = useSmartSticky({ minWidth, topOffset });
  const sectionIds = useMemo(() => sections.map(({ id }) => id), [sections]);
  const activeId = useScrollSpy(sectionIds, { topOffset });

  return (
    <div ref={rootRef} className={s.sidebar}>
      <div ref={contentRef}>
        <nav className={s.contents} aria-label={ariaLabel}>
          <span>{heading}</span>
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
