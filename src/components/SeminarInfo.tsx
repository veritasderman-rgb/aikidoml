import Link from "next/link";
import { aikidoProKazdehoUrl, seminarCalendar, seminarMapUrl } from "@/config/campaign";
import type { Dictionary } from "@/i18n/getDictionary";

/** Detaily semináře s R. Wasserbauerem – sdílí je pozvánka na úvodní stránce i podstránka semináře. */
export default function SeminarInfo({
  t,
  moreHref,
}: {
  t: Dictionary["seminarWasserbauer"]["info"];
  /** Odkaz „Více o semináři“ – jen tam, kde nejsme přímo na podstránce. */
  moreHref?: string;
}) {
  return (
    <>
      <p className="text-ink font-semibold">{t.tagline}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.when}</p>
          <p className="text-ink font-medium">{t.whenDate}</p>
          <ul className="text-ink-soft space-y-0.5 mt-1">
            {t.schedule.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.where}</p>
          <p className="text-ink font-medium">{t.wherePlace}</p>
          <p className="text-ink-soft">{t.whereAddress}</p>
        </div>
        <div>
          <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.fee}</p>
          <p className="text-ink font-medium">{t.feeFull}</p>
          <p className="text-ink-soft">{t.feeSingle}</p>
        </div>
        <div>
          <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.notesTitle}</p>
          <ul className="text-ink-soft space-y-0.5">
            {t.notes.map((item: string) => (
              <li key={item} className="flex gap-2">
                <span className="text-vermillion" aria-hidden="true">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-tatami to-transparent" />
      <p className="text-sm text-ink-soft leading-relaxed">
        {t.coOrg}{" "}
        <a
          href={aikidoProKazdehoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-tatami underline-offset-4 hover:text-vermillion hover:decoration-vermillion transition-colors"
        >
          aikidoprokazdeho.cz
        </a>
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
        <a
          href={seminarMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-vermillion text-washi font-medium px-6 py-2.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" strokeLinejoin="round" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {t.ctaMap}
        </a>
        <a
          href="tel:+420602492903"
          className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink font-medium px-6 py-2.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase"
        >
          {t.ctaCall} · 602 492 903
        </a>
        {moreHref && (
          <Link
            href={moreHref}
            className="inline-flex items-center justify-center gap-2 text-ink font-medium px-2 py-2.5 hover:text-vermillion transition-colors text-sm tracking-widest uppercase"
          >
            {t.ctaMore} →
          </Link>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-2 text-ink-soft uppercase tracking-widest text-xs font-semibold">
          <svg className="w-4 h-4 text-vermillion" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
          {t.calendarTitle}
        </span>
        <a
          href={seminarCalendar.google}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-tatami underline-offset-4 hover:text-vermillion hover:decoration-vermillion transition-colors"
        >
          {t.calendarGoogle}
        </a>
        <a
          href={seminarCalendar.ics}
          className="text-ink underline decoration-tatami underline-offset-4 hover:text-vermillion hover:decoration-vermillion transition-colors"
        >
          {t.calendarIcs}
        </a>
      </div>
    </>
  );
}
