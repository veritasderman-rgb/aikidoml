export const locales = ["cs", "en", "de", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "cs";

export const localeNames: Record<Locale, string> = {
  cs: "Čeština",
  en: "English",
  de: "Deutsch",
  uk: "Українська",
};

export const localeFlags: Record<Locale, string> = {
  cs: "🇨🇿",
  en: "🇬🇧",
  de: "🇩🇪",
  uk: "🇺🇦",
};
