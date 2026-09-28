"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { pickCampaign, popupSettings, popupStorageKey, type Campaign } from "@/config/campaign";
import type { Locale } from "@/i18n/config";

type CampaignDict = {
  eyebrow: string;
  title: string;
  date: string;
  place: string;
  lead: string;
  bullets: string[];
  /** Tři tvary odpočtu s {n} – pořadí podle `pluralIndex`: many (5+), one, few (2–4). */
  countdown: [string, string, string] | string[];
  lastDay: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaCall: string;
  imageAlt?: string;
};

type PopupDict = {
  close: string;
  dismiss: string;
  campaigns: Record<string, CampaignDict>;
};

/** Index do countdownDays: 0 = many (5+), 1 = one, 2 = few (2–4). */
function pluralIndex(locale: Locale, n: number) {
  if (locale === "uk") {
    const m10 = n % 10;
    const m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return 1;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return 2;
    return 0;
  }
  if (n === 1) return 1;
  if (n >= 2 && n <= 4) return 2;
  return 0;
}

/** Kolik kalendářních dnů zbývá do `endsAt` – porovnáváme dny, ne hodiny, ať odpočet sedí na to, co lidem říká kalendář. */
function daysLeft(campaign: Campaign) {
  const midnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const diff = midnight(new Date(campaign.endsAt)) - midnight(new Date());
  return Math.max(0, Math.round(diff / 86_400_000));
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/** Odkaz z configu: interní cesty dostanou prefix jazyka a jdou přes Next Link, externí se otevřou v nové záložce. */
function CtaLink({
  href,
  locale,
  onClick,
  className,
  children,
}: {
  href: string;
  locale: Locale;
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={`/${locale}${href}`} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
      {children}
    </a>
  );
}

export default function CampaignPopup({ locale, dict }: { locale: Locale; dict: PopupDict }) {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<Element | null>(null);

  const dismiss = useCallback(
    (reason: "close" | "cta") => {
      setOpen(false);
      if (!campaign) return;
      try {
        localStorage.setItem(popupStorageKey(campaign.id), String(Date.now()));
      } catch {
        /* private mode – popup se prostě ukáže znovu příště */
      }
      if (reason === "close") track("popup_dismiss", { campaign: campaign.id });
    },
    [campaign],
  );

  // Rozhodnutí, jestli popup vůbec nabídnout, a jeho spouštěče.
  useEffect(() => {
    const forcedId = new URLSearchParams(window.location.search).get("popup");
    const picked = pickCampaign(Date.now(), forcedId);
    if (!picked || !dict.campaigns[picked.id]) return;
    if (!forcedId) {
      try {
        if (localStorage.getItem(popupStorageKey(picked.id))) return;
      } catch {
        /* localStorage nedostupný – jedeme dál */
      }
    }

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      cleanup();
      openerRef.current = document.activeElement;
      setCampaign(picked);
      setDays(daysLeft(picked));
      setOpen(true);
      track("popup_view", { campaign: picked.id });
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= popupSettings.scrollTrigger) show();
    };
    const onExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };

    // Náhled přes ?popup= se ukáže hned, ať se na něj nemusí čekat.
    const timer = window.setTimeout(show, forcedId ? 0 : popupSettings.delayMs);
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onExitIntent);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onExitIntent);
    return cleanup;
  }, [dict.campaigns]);

  // Esc, focus a zámek scrollu, dokud je popup otevřený.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss("close");
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, dismiss]);

  if (!open || !campaign) return null;

  const t = dict.campaigns[campaign.id];
  const countdown =
    days === null || days === 0 ? t.lastDay : t.countdown[pluralIndex(locale, days)].replace("{n}", String(days));

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss("close");
      }}
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-[2px] popup-fade" aria-hidden="true" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-popup-title"
        tabIndex={-1}
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-washi rounded-t-xl sm:rounded-lg shadow-2xl outline-none popup-in"
      >
        <button
          type="button"
          onClick={() => dismiss("close")}
          aria-label={dict.close}
          className={`absolute right-3 top-3 z-10 w-9 h-9 flex items-center justify-center rounded transition-colors ${
            campaign.image
              ? "bg-ink/70 text-washi hover:bg-ink hover:text-vermillion"
              : "text-tatami/60 hover:text-vermillion hover:bg-white/5"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {campaign.image && (
          // eslint-disable-next-line @next/next/no-img-element -- statický export, obrázek se nijak neoptimalizuje
          <img
            src={campaign.image.src}
            alt={t.imageAlt ?? ""}
            className="block w-full h-48 sm:h-56 object-cover bg-washi"
            style={{ objectPosition: campaign.image.position }}
          />
        )}

        {/* Hlavička – inkoustová plocha se znakem 始 (začátek) */}
        <div className="ink-wash text-washi relative overflow-hidden px-6 pt-7 pb-6">
          <span
            className="absolute -right-4 -top-6 text-white/[0.06] select-none pointer-events-none"
            style={{ fontSize: "10rem", fontFamily: "serif", lineHeight: 1 }}
            aria-hidden="true"
          >
            始
          </span>

          <p className="text-vermillion text-xs uppercase tracking-[0.2em] font-semibold mb-2">{t.eyebrow}</p>
          <h2
            id="campaign-popup-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight pr-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t.title}
          </h2>
          <p className="text-tatami/80 text-sm mt-3 font-medium">{t.date}</p>
          <p className="text-tatami/50 text-sm">{t.place}</p>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-vermillion to-transparent" />

        <div className="px-6 py-6">
          <p className="inline-block hanko mb-4">{countdown}</p>

          <p className="text-ink-soft text-sm leading-relaxed mb-4">{t.lead}</p>

          <ul className="space-y-2 mb-6">
            {t.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-ink-soft">
                <span className="text-vermillion mt-0.5" aria-hidden="true">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <CtaLink
              href={campaign.primaryHref}
              locale={locale}
              onClick={() => {
                track("popup_cta_primary", { campaign: campaign.id });
                dismiss("cta");
              }}
              className="bg-vermillion text-washi text-center font-medium px-6 py-3.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase"
            >
              {t.ctaPrimary}
            </CtaLink>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <CtaLink
                href={campaign.secondary.href}
                locale={locale}
                onClick={() => {
                  track(campaign.secondary.track, { campaign: campaign.id });
                  dismiss("cta");
                }}
                className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink font-medium px-4 py-3 rounded hover:border-vermillion hover:text-vermillion transition-colors text-xs tracking-widest uppercase"
              >
                {campaign.secondary.icon === "pin" ? <PinIcon /> : <ClockIcon />}
                {t.ctaSecondary}
              </CtaLink>
              <a
                href={`tel:${popupSettings.phone}`}
                onClick={() => track("popup_cta_call", { campaign: campaign.id })}
                className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink font-medium px-4 py-3 rounded hover:border-vermillion hover:text-vermillion transition-colors text-xs tracking-widest uppercase"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                {popupSettings.phoneDisplay}
              </a>
            </div>

            <button
              type="button"
              onClick={() => dismiss("close")}
              className="text-ink-soft/60 text-xs tracking-wide hover:text-ink-soft transition-colors pt-1"
            >
              {dict.dismiss}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
