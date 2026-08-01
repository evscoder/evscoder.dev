"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { SupportedLanguage } from "@/app/components/home/model/site-content";
import { useClock } from "@/app/shared/hooks/use-clock";
import { ensureI18n } from "@/app/shared/lib/i18n";

const LANGUAGE_STORAGE_KEY = "evscoder-language";
const THEME_STORAGE_KEY = "evscoder-theme";

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
  const [language, setLanguageState] = useState<SupportedLanguage>("ru");
  const [manualThemeAlt, setManualThemeAlt] = useState(true);
  const [animationCycle, setAnimationCycle] = useState(0);
  const [isLanguageReady, setIsLanguageReady] = useState(false);

  const clock = useClock(language);
  const isThemeAlt = manualThemeAlt;

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as SupportedLanguage | null;
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    startTransition(() => {
      if (savedLanguage === "ru" || savedLanguage === "en") {
        setLanguageState(savedLanguage);
      }

      if (savedTheme === "light" || savedTheme === "dark") {
        setManualThemeAlt(savedTheme === "dark");
      }

      setIsLanguageReady(true);
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;
    void ensureI18n(language);
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-alt", isThemeAlt);
    window.localStorage.setItem(THEME_STORAGE_KEY, isThemeAlt ? "dark" : "light");
  }, [isThemeAlt]);

  const setLanguage = (nextLanguage: SupportedLanguage) => {
    if (nextLanguage === language) {
      return;
    }

    const animatedItems = document.querySelectorAll<HTMLElement>(
      '[data-animate="intro-text"], [data-animate="reveal"]',
    );

    animatedItems.forEach((item) => {
      item.classList.remove("is-visible");
    });

    startTransition(() => {
      setLanguageState(nextLanguage);
      setAnimationCycle((current) => current + 1);
    });
  };

  const toggleTheme = () => {
    setManualThemeAlt((current) => !current);
  };

  return (
    <SiteContext.Provider
      value={{
        animationCycle,
        currentDate: clock?.dateLabel ?? "",
        currentTime: clock?.timeLabel ?? "",
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
    throw new Error("useSiteContext must be used within SiteProvider");
  }

  return context;
}
