"use client";

import { useEffect, useState } from "react";
import { CONSENT_KEY } from "@/lib/consent";

export type CookiesDict = {
  text: string;
  accept: string;
  reject: string;
};

// Aktualizuje Google Consent Mode v2 po volbě uživatele. Když GA není
// načtená (vývoj / nenastavené NEXT_PUBLIC_GA_ID), tiše se nic nestane.
function updateGtagConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  const value = granted ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

export default function CookieConsent({ dict }: { dict: CookiesDict }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      if (stored !== "granted" && stored !== "denied") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (granted: boolean) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      /* private mode – volbu jen aplikujeme na tuto návštěvu */
    }
    updateGtagConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-sm border border-ink-soft/20 bg-washi px-6 py-5 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">{dict.text}</p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="border border-ink-soft/40 px-5 py-2.5 text-xs uppercase tracking-widest text-ink-soft transition-colors hover:bg-ink hover:text-washi"
          >
            {dict.reject}
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="bg-vermillion px-5 py-2.5 text-xs uppercase tracking-widest text-washi transition-colors hover:bg-vermillion-dark"
          >
            {dict.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
