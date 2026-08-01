import i18next, { type Resource } from "i18next";

import type { SupportedLanguage } from "@/app/components/home/model/site-content";

const resources = {
  ru: {
    translation: {
      name: "Евгений",
      family: "Староверов",
      about: {
        social1: "Как со мной связаться?",
        social2: "Я в социальных сетях",
      },
    },
  },
  en: {
    translation: {
      name: "Evgeny",
      family: "Staroverov",
      about: {
        social1: "How to contact me?",
        social2: "I'm on social networks",
      },
    },
  },
} satisfies Resource;

let initPromise: Promise<void> | null = null;

function getNestedValue(
  language: SupportedLanguage,
  key: string,
): string | undefined {
  return key
    .split(".")
    .reduce<unknown>((current, segment) => {
      if (typeof current !== "object" || current === null) {
        return undefined;
      }

      return (current as Record<string, unknown>)[segment];
    }, resources[language].translation) as string | undefined;
}

export async function ensureI18n(language: SupportedLanguage) {
  if (!initPromise) {
    initPromise = i18next
      .init({
        lng: language,
        fallbackLng: "ru",
        resources,
        interpolation: {
          escapeValue: false,
        },
      })
      .then(() => undefined);
  }

  await initPromise;

  if (i18next.language !== language) {
    await i18next.changeLanguage(language);
  }

  return i18next;
}

export function t(language: SupportedLanguage, key: string) {
  if (!i18next.isInitialized) {
    return getNestedValue(language, key) ?? key;
  }

  return (
    i18next.t(key, {
      lng: language,
      defaultValue: getNestedValue(language, key) ?? key,
    }) ?? key
  );
}

