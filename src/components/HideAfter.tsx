"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Schová obsah, jakmile uplyne `until` (ISO datum). Stránky jsou statické, takže
 * pozvánka na akci by jinak visela na webu až do dalšího nasazení. Server obsah
 * vykreslí (rozhoduje o tom podle data sestavení už stránka sama) a prohlížeč ho
 * po termínu skryje – i na stránce, která zůstala otevřená přes konec akce.
 */
export default function HideAfter({ until, children }: { until: string; children: React.ReactNode }) {
  const end = new Date(until).getTime();

  // Čas je externí stav: odběr = časovač, který React upozorní v okamžiku konce.
  const subscribe = useCallback(
    (onChange: () => void) => {
      const left = end - Date.now();
      // setTimeout neumí víc než ~24 dní; vzdálenější konec se ohlídá při příští návštěvě.
      if (left <= 0 || left > 2 ** 31 - 1) return () => {};
      const timer = setTimeout(onChange, left + 500);
      return () => clearTimeout(timer);
    },
    [end],
  );
  const expired = useSyncExternalStore(
    subscribe,
    () => Date.now() > end,
    // Na serveru se obsah kreslí vždycky, ať HTML sedí s hydratací.
    () => false,
  );

  return expired ? null : <>{children}</>;
}
