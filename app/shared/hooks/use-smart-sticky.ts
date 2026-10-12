'use client';

import { useLayoutEffect, useRef } from 'react';

type SmartStickyOptions = {
  minWidth?: number;
  topOffset?: number;
  bottomOffset?: number;
};

type AffixType = 'static' | 'viewport-top' | 'viewport-bottom' | 'viewport-unBottom' | 'container-bottom';

// The root must stretch to the boundary height; content stays in normal flow.
export function useSmartSticky({
  minWidth = 1024,
  topOffset = 96,
  bottomOffset = 24,
}: SmartStickyOptions = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;

    if (!root || !content) {
      return;
    }

    const media = window.matchMedia(`(min-width: ${minWidth}px)`);
    const originalStyles = {
      position: content.style.position,
      top: content.style.top,
      right: content.style.right,
      bottom: content.style.bottom,
      left: content.style.left,
      width: content.style.width,
      transform: content.style.transform,
    };
    let frame: number | null = null;
    let affixType: AffixType = 'static';
    let direction: 'up' | 'down' = 'down';
    let translateY = 0;
    let lastViewportTop = window.scrollY;

    const restoreStyles = () => {
      Object.assign(content.style, originalStyles);
    };

    const applyStyles = (nextAffixType: AffixType, rootRect: DOMRect, maxTranslateY: number) => {
      content.style.right = '';

      if (nextAffixType === 'viewport-top') {
        content.style.position = 'fixed';
        content.style.top = `${topOffset}px`;
        content.style.bottom = '';
        content.style.left = `${rootRect.left}px`;
        content.style.width = `${rootRect.width}px`;
        content.style.transform = '';
        return;
      }

      if (nextAffixType === 'viewport-bottom') {
        content.style.position = 'fixed';
        content.style.top = '';
        content.style.bottom = `${bottomOffset}px`;
        content.style.left = `${rootRect.left}px`;
        content.style.width = `${rootRect.width}px`;
        content.style.transform = '';
        return;
      }

      if (nextAffixType === 'static') {
        restoreStyles();
        return;
      }

      const boundedTranslateY = Math.min(Math.max(translateY, 0), maxTranslateY);

      content.style.position = 'relative';
      content.style.top = '';
      content.style.bottom = '';
      content.style.left = '';
      content.style.width = '';
      content.style.transform = `translate3d(0, ${Math.round(boundedTranslateY)}px, 0)`;
    };

    const update = () => {
      frame = null;

      if (!media.matches) {
        affixType = 'static';
        translateY = 0;
        lastViewportTop = window.scrollY;
        restoreStyles();
        return;
      }

      const viewportTop = window.scrollY;

      if (viewportTop !== lastViewportTop) {
        direction = viewportTop < lastViewportTop ? 'up' : 'down';
      }

      const rootRect = root.getBoundingClientRect();
      const contentHeight = content.offsetHeight;
      const containerTop = rootRect.top + viewportTop;
      const containerHeight = root.clientHeight;
      const containerBottom = containerTop + containerHeight;
      const sidebarBottom = containerTop + contentHeight;
      const viewportBottom = viewportTop + window.innerHeight;
      const colliderTop = viewportTop + topOffset;
      const colliderBottom = viewportBottom - bottomOffset;
      const maxTranslateY = Math.max(containerHeight - contentHeight, 0);
      const fitsViewport =
        contentHeight + (direction === 'down' ? bottomOffset : topOffset) < window.innerHeight;
      let nextAffixType = affixType;

      if (colliderTop <= containerTop || containerHeight <= contentHeight) {
        translateY = 0;
        nextAffixType = 'static';
      } else if (direction === 'down') {
        if (fitsViewport) {
          if (contentHeight + colliderTop >= containerBottom) {
            translateY = maxTranslateY;
            nextAffixType = 'container-bottom';
          } else {
            translateY = colliderTop - containerTop;
            nextAffixType = 'viewport-top';
          }
        } else if (containerBottom <= colliderBottom) {
          translateY = maxTranslateY;
          nextAffixType = 'container-bottom';
        } else if (sidebarBottom + translateY <= colliderBottom) {
          translateY = colliderBottom - sidebarBottom;
          nextAffixType = 'viewport-bottom';
        } else if (
          containerTop + translateY <= colliderTop &&
          translateY !== 0 &&
          translateY !== maxTranslateY
        ) {
          nextAffixType = 'viewport-unBottom';
        }
      } else if (colliderTop <= containerTop + translateY) {
        translateY = colliderTop - containerTop;
        nextAffixType = 'viewport-top';
      } else if (containerBottom <= colliderBottom) {
        translateY = maxTranslateY;
        nextAffixType = 'container-bottom';
      } else if (
        !fitsViewport &&
        containerTop <= colliderTop &&
        translateY !== 0 &&
        translateY !== maxTranslateY
      ) {
        nextAffixType = 'viewport-unBottom';
      }

      translateY = Math.min(Math.max(Math.round(translateY), 0), maxTranslateY);
      applyStyles(nextAffixType, rootRect, maxTranslateY);
      affixType = nextAffixType;
      lastViewportTop = viewportTop;
    };

    const requestUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const observer = new ResizeObserver(requestUpdate);
    observer.observe(root);
    observer.observe(content);

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    media.addEventListener('change', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      media.removeEventListener('change', requestUpdate);
      observer.disconnect();

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }

      restoreStyles();
    };
  }, [minWidth, topOffset, bottomOffset]);

  return { rootRef, contentRef };
}
