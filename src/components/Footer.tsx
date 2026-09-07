import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { CookieSettingsLink } from "@/components/CookieConsent";
import { GA_ID } from "@/lib/consent";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.common.footer;
  return (
    <footer className="bg-ink text-tatami/80">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-vermillion to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-vermillion text-xl" style={{ fontFamily: "serif" }}>合氣道</span>
              <span className="text-sm text-tatami/50">Mariánské Lázně</span>
            </div>
            <p className="text-sm text-tatami/60 leading-relaxed">{f.motto}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-vermillion/80 mb-4">{f.treninky}</h3>
            <ul className="text-sm space-y-2 text-tatami/60">
              <li>{f.uteryTime}</li>
              <li>{f.patekTime}</li>
              <li className="pt-2 border-t border-ink-soft/30">
                {f.address}
                <br />
                <span className="text-tatami/40">{f.behindStadium}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-vermillion/80 mb-4">{f.kontakt}</h3>
            <ul className="text-sm space-y-2 text-tatami/60">
              <li>Alexander Tóth – 602 492 903</li>
              <li>Josef Pavlovic – 607 517 967</li>
              <li>
                <a href="mailto:mail@josefpavlovic.cz" className="hover:text-vermillion transition-colors">
                  mail@josefpavlovic.cz
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aikidoml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vermillion transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-soft/20 mt-10 pt-6 text-center text-tatami/30 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} {f.copyright}</p>
          {GA_ID && (
            <p className="mt-2">
              <CookieSettingsLink label={dict.common.cookies.settings} />
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
