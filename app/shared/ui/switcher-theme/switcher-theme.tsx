'use client';

import { SunMedium } from 'lucide-react';
import s from './switcher-theme.module.scss';

type ThemeSwitcherProps = {
  isActive: boolean;
  onToggle: () => void;
  language?: 'ru' | 'en';
};

export function ThemeSwitcher({ isActive, onToggle, language = 'ru' }: ThemeSwitcherProps) {
  const label = language === 'ru' ? 'Светлая тема' : 'Light theme';
  const hint =
    language === 'ru'
      ? isActive
        ? 'Включить светлую тему'
        : 'Выключить светлую тему'
      : isActive
        ? 'Enable light theme'
        : 'Disable light theme';

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={!isActive}
      title={hint}
      className={s['switcher-theme']}
      onClick={onToggle}
    >
      <SunMedium size={20} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}
