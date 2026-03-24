"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  // Replace the locale segment in the path
  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is the locale
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={switchLocale(locale)}
          className={`px-2 py-1 text-xs uppercase tracking-wider rounded transition-colors ${
            locale === current
              ? "bg-vermillion text-washi font-bold"
              : "text-tatami/60 hover:text-vermillion"
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
