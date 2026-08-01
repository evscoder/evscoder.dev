"use client";

import cn from "clsx";
import { useEffect, useState } from "react";

import { useSiteContext } from "@/app/components/layout/site-provider";
import { LanguageSwitcher } from "@/app/shared/ui/language-switcher/language-switcher";
import { ThemeSwitcher } from "@/app/shared/ui/switcher-theme/switcher-theme";

import s from "./site-header.module.scss";

export function SiteHeader() {
  const [isFixed, setFixed] = useState(false);
  const {
    currentDate,
    currentTime,
    isThemeAlt,
    language,
    setLanguage,
    toggleTheme,
  } = useSiteContext();

  useEffect(() => {
    const onScroll = () => {
      setFixed(window.scrollY > 74);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        s["page-header"],
        isFixed && s["is-fixed"],
      )}
    >
      <div className={cn(s["page-header__container"], "container")}>
        <div className={s["page-header__row"]}>
          <div className={s["page-header__left"]}>
            <div className={s["page-header__nav"]}>
              <div className={s["page-header__end"]}>
                <ThemeSwitcher
                  isActive={isThemeAlt}
                  onToggle={toggleTheme}
                />
                <LanguageSwitcher
                  currentLanguage={language}
                  onLanguageChange={setLanguage}
                />

                <div className={s["page-header__time"]}>
                  <div className="time">{currentTime}</div>
                  <div className={s["page-header__date"]}>{currentDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
