'use client';

import { useEffect, useState } from 'react';

type ScrollSpyOptions = {
  topOffset?: number;
};

// IDs follow the visual section order. The first section stays active above the content.
export function useScrollSpy(
  sectionIds: readonly string[],
  { topOffset = 0 }: ScrollSpyOptions = {},
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    let frame: number | null = null;

    const update = () => {
      frame = null;
      let currentId = elements[0]?.id ?? null;

      for (const element of elements) {
        if (element.getBoundingClientRect().top > topOffset + 1) {
          break;
        }

        currentId = element.id;
      }

      setActiveId(currentId);
    };

    const requestUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const observer = new ResizeObserver(requestUpdate);

    for (const element of elements) {
      observer.observe(element);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      observer.disconnect();

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [sectionIds, topOffset]);

  return activeId;
}
