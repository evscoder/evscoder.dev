"use client";

import cn from "clsx";
import Image from "next/image";
import { motion } from "motion/react";

import {
  languageOptions,
  type SupportedLanguage,
} from "@/app/components/home/model/site-content";

import s from "./language-switcher.module.scss";

type LanguageSwitcherProps = {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
};

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className={s["language-switcher"]}
      role="radiogroup"
      aria-label="Language"
    >
      {languageOptions.map((option) => {
        const isSelected = option.code === currentLanguage;

        return (
          <button
            key={option.code}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={option.fullLabel}
            className={cn(
              s["language-switcher__option"],
              isSelected && s["language-switcher__option--active"],
            )}
            onClick={() => onLanguageChange(option.code)}
          >
            {isSelected ? (
              <motion.span
                layoutId="language-switcher-pill"
                className={s["language-switcher__pill"]}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className={s["language-switcher__content"]}>
              <Image
                className={s["language-switcher__flag"]}
                src={option.flagSrc}
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
              />
              <span>{option.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
