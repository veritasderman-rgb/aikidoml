"use client";

import { useSyncExternalStore } from "react";
import {
  isConsentOpen,
  isConsentOpenOnServer,
  reopenConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

export type CookiesDict = {
  text: string;
  accept: string;
  reject: string;
  settings: string;
};

export default function CookieConsent({ dict }: { dict: CookiesDict }) {
  // localStorage je externí úložiště mimo React — čteme ho přes
  // useSyncExternalStore, ať se banner překreslí po volbě i po znovuotevření
  // z patičky. Serverový snapshot banner skrývá, aby při hydrataci neblikl.
  const open = useSyncExternalStore(subscribeConsent, isConsentOpen, isConsentOpenOnServer);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-sm border border-ink-soft/20 bg-washi px-6 py-5 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">{dict.text}</p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => writeConsent("denied")}
            className="border border-ink-soft/40 px-5 py-2.5 text-xs uppercase tracking-widest text-ink-soft transition-colors hover:bg-ink hover:text-washi"
          >
            {dict.reject}
          </button>
          <button
            type="button"
            onClick={() => writeConsent("granted")}
            className="bg-vermillion px-5 py-2.5 text-xs uppercase tracking-widest text-washi transition-colors hover:bg-vermillion-dark"
          >
            {dict.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Odkaz do patičky, kterým jde souhlas kdykoli znovu otevřít a odvolat. */
export function CookieSettingsLink({ label }: { label: string }) {
  return (
    <button type="button" onClick={reopenConsent} className="hover:text-vermillion transition-colors">
      {label}
    </button>
  );
}
