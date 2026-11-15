"use client";

import { useEffect, useSyncExternalStore } from "react";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { BASE_PATH } from "@/lib/assets";

const texts: Record<Locale, { title: string; text: string; home: string; contact: string }> = {
  cs: {
    title: "Stránka nenalezena",
    text: "Tahle adresa na našem webu není. Možná se stránka přestěhovala, nebo je v odkazu překlep.",
    home: "Na úvodní stránku",
    contact: "Napište nám",
  },
  en: {
    title: "Page not found",
    text: "There is nothing at this address. The page may have moved, or the link may contain a typo.",
    home: "Back to the homepage",
    contact: "Contact us",
  },
  de: {
    title: "Seite nicht gefunden",
    text: "Unter dieser Adresse gibt es nichts. Vielleicht ist die Seite umgezogen oder der Link enthält einen Tippfehler.",
    home: "Zur Startseite",
    contact: "Schreiben Sie uns",
  },
  uk: {
    title: "Сторінку не знайдено",
    text: "За цією адресою нічого немає. Можливо, сторінку перенесли або в посиланні є помилка.",
    home: "На головну сторінку",
    contact: "Напишіть нам",
  },
};

/** Jazyk podle prefixu adresy (/en/…, /de/…, /uk/…); cokoli jiného je čeština. */
function localeFromUrl(): Locale {
  const first = window.location.pathname.slice(BASE_PATH.length).split("/")[1];
  return locales.find((l) => l === first) ?? defaultLocale;
}

const noSubscription = () => () => {};

export default function NotFoundContent() {
  // Adresa se během života stránky nemění, jde jen o rozdíl server (čeština) × prohlížeč.
  const locale = useSyncExternalStore(noSubscription, localeFromUrl, () => defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = texts[locale];
  // Obyčejné odkazy místo next/link: stránka nemá jazykový layout, ať se načte celá.
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="max-w-xl text-center">
        <span className="text-vermillion text-5xl block mb-6" style={{ fontFamily: "serif" }} aria-hidden="true">
          迷
        </span>
        <p className="text-ink-soft text-sm tracking-[0.3em] mb-3">404</p>
        <h1 className="text-3xl font-bold text-ink mb-4 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
          {t.title}
        </h1>
        <p className="text-ink-soft leading-relaxed mb-10">{t.text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${BASE_PATH}/${locale}`}
            className="bg-vermillion text-washi font-medium px-8 py-3.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase"
          >
            {t.home}
          </a>
          <a
            href={`${BASE_PATH}/${locale}/napiste-nam`}
            className="border border-ink/20 text-ink font-medium px-8 py-3.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </main>
  );
}
