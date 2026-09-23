'use client';

import cn from 'clsx';
import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';

import { languageOptions, type SupportedLanguage } from '@/app/components/home/model/site-content';
import { Dropdown } from '@/app/shared/ui/dropdown/dropdown';

import s from './language-switcher.module.scss';

type LanguageSwitcherProps = {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
};

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const currentOption = languageOptions.find((option) => option.code === currentLanguage)!;
  const label = currentLanguage === 'ru' ? 'Выбрать язык' : 'Choose language';

  return (
    <Dropdown.Root className={s['language-dropdown']}>
      <Dropdown.Trigger>
        {(triggerProps) => (
          <button
            type="button"
            className={s['language-dropdown__trigger']}
            aria-haspopup="menu"
            aria-label={label}
            aria-expanded={triggerProps['aria-expanded']}
            aria-controls={triggerProps['aria-controls']}
            onClick={triggerProps.onClick}
          >
            <Image
              className={s['language-dropdown__flag']}
              src={currentOption.flagSrc}
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />
            <span>{currentOption.label}</span>
            <ChevronDown
              className={cn(s['language-dropdown__chevron'], triggerProps.isOpen && s['is-open'])}
              size={16}
              aria-hidden="true"
            />
          </button>
        )}
      </Dropdown.Trigger>

      <Dropdown.Content className={s['language-dropdown__menu']} role="menu" aria-label={label}>
        {languageOptions.map((option) => {
          const isSelected = option.code === currentLanguage;

          return (
            <Dropdown.Item key={option.code}>
              {({ onClick }) => (
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  className={cn(
                    s['language-dropdown__option'],
                    isSelected && s['language-dropdown__option--active'],
                  )}
                  onClick={(event) => {
                    onLanguageChange(option.code);
                    onClick(event);
                  }}
                >
                  <Image
                    className={s['language-dropdown__flag']}
                    src={option.flagSrc}
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                  <span>{option.fullLabel}</span>
                  <Check className={s['language-dropdown__check']} size={16} aria-hidden="true" />
                </button>
              )}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
