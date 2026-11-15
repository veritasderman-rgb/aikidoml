import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export const SITE_URL = "https://aikidoml.cz";

const ogLocale: Record<Locale, string> = { cs: "cs_CZ", en: "en_GB", de: "de_DE", uk: "uk_UA" };

/** Adresa stránky v daném jazyce; `path` je cesta bez jazyka ("" = úvodní stránka, jinak "/o-nas"). */
export const localizedPath = (locale: Locale, path: string) => `/${locale}${path}`;

/** hreflang odkazy na tutéž stránku v ostatních jazycích. */
export const languageAlternates = (path: string): Record<string, string> => ({
  ...Object.fromEntries(locales.map((l) => [l, localizedPath(l, path)])),
  "x-default": localizedPath(defaultLocale, path),
});

type OgImage = { url: string; width: number; height: number; alt: string };

/**
 * Metadata jedné stránky: titulek, popis, kanonická adresa, hreflang a Open Graph.
 *
 * Každá stránka je musí nastavit sama – kdyby je zdědila z layoutu, ukazovala by
 * kanonická adresa všech podstránek na úvodní stránku. `openGraph` se navíc
 * s layoutem neslučuje, ale přepisuje celý, proto je tu kompletní.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  siteTitle: string,
  meta: { title: string; description: string },
  image?: OgImage,
): Metadata {
  const url = localizedPath(locale, path);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      siteName: siteTitle,
      title: meta.title,
      description: meta.description,
      url,
      ...(image ? { images: [image] } : {}),
    },
  };
}
