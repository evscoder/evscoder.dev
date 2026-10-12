'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useSiteContext } from '@/app/components/layout/site-provider';

import s from './scroll-to-top.module.scss';

const SCROLL_THRESHOLD = 400;
const FOOTER_CLEARANCE = 24;

export function ScrollToTop() {
  const { language } = useSiteContext();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('[data-site-footer]');

    const updateVisibility = () => {
      setIsPastThreshold(window.scrollY > SCROLL_THRESHOLD);
      setIsFooterVisible(
        Boolean(
          footer && footer.getBoundingClientRect().top <= window.innerHeight + FOOTER_CLEARANCE,
        ),
      );
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  const isVisible = isPastThreshold && !isFooterVisible;
  const label = language === 'ru' ? 'Наверх' : 'Back to top';

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={s.button}
      data-visible={isVisible}
      aria-label={label}
      aria-hidden={!isVisible}
      title={label}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
    >
      <ArrowUp size={22} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
