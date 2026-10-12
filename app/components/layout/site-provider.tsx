'use client';

import { createContext, startTransition, useContext, useEffect, type ReactNode } from 'react';

import type { SupportedLanguage } from '@/app/components/home/model/site-content';
import { useClock } from '@/app/shared/hooks/use-clock';
import { ensureI18n } from '@/app/shared/lib/i18n';
import {
  hydrateSite,
  setLanguage as setLanguageAction,
  toggleTheme as toggleThemeAction,
} from '@/app/store/features/site/site-slice';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

const LANGUAGE_STORAGE_KEY = 'evscoder-language';
const THEME_STORAGE_KEY = 'evscoder-theme';

type SiteContextValue = {
  animationCycle: number;
  currentDate: string;
  currentTime: string;
  isLanguageReady: boolean;
  isThemeAlt: boolean;
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { animationCycle, isLanguageReady, language, theme } = useAppSelector(
    (state) => state.site,
  );

  const clock = useClock(language);
  const isThemeAlt = theme === 'dark';

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as SupportedLanguage | null;
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    const language = savedLanguage === 'ru' || savedLanguage === 'en' ? savedLanguage : undefined;
    const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : undefined;

    startTransition(() => {
      dispatch(hydrateSite({ language, theme }));
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isLanguageReady) {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;
    void ensureI18n(language);
  }, [isLanguageReady, language]);

  useEffect(() => {
    if (!isLanguageReady) {
      return;
    }

    document.documentElement.classList.toggle('theme-alt', isThemeAlt);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [isLanguageReady, isThemeAlt, theme]);

  const setLanguage = (nextLanguage: SupportedLanguage) => {
    if (nextLanguage === language) {
      return;
    }

    const animatedItems = document.querySelectorAll<HTMLElement>(
      '[data-animate="intro-text"], [data-animate="reveal"]',
    );

    animatedItems.forEach((item) => {
      item.classList.remove('is-visible');
    });

    startTransition(() => {
      dispatch(setLanguageAction(nextLanguage));
    });
  };

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <SiteContext.Provider
      value={{
        animationCycle,
        currentDate: clock?.dateLabel ?? '',
        currentTime: clock?.timeLabel ?? '',
        isLanguageReady,
        isThemeAlt,
        language,
        setLanguage,
        toggleTheme,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error('useSiteContext must be used within SiteProvider');
  }

  return context;
}
