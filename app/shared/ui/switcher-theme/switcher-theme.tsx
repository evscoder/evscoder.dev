"use client";

import cn from "clsx";
import { Moon, SunMedium } from "lucide-react";
import { motion } from "motion/react";

import s from "./switcher-theme.module.scss";

type ThemeSwitcherProps = {
  isActive: boolean;
  onToggle: () => void;
};

export function ThemeSwitcher({
  isActive,
  onToggle,
}: ThemeSwitcherProps) {
  const selectedTheme = isActive ? "dark" : "light";

  return (
    <div
      className={s["switcher-theme"]}
      role="radiogroup"
      aria-label="Theme"
    >
      {[
        {
          id: "dark",
          icon: Moon,
          label: "Dark",
        },
        {
          id: "light",
          icon: SunMedium,
          label: "Light",
        },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = selectedTheme === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={option.label}
            className={cn(
              s["switcher-theme__option"],
              isSelected && s["switcher-theme__option--active"],
            )}
            onClick={() => {
              if (!isSelected) {
                onToggle();
              }
            }}
          >
            {isSelected ? (
              <motion.span
                layoutId="theme-switcher-pill"
                className={s["switcher-theme__pill"]}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className={s["switcher-theme__content"]}>
              <Icon size={16} strokeWidth={2.1} />
              <span>{option.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
