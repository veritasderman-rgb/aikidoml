"use client";

import { useEffect, useState } from "react";
import { isNoticeActive, type Notice } from "@/config/notices";

/**
 * Pruh s oznámeními nad menu. Stránky jsou statické, takže server pošle všechna
 * oznámení, která v době sestavení ještě neskončila, a o tom, která jsou vidět
 * právě teď, rozhodne až prohlížeč – oznámení nasazené před `startsAt` se tak
 * ukáže samo a po `endsAt` zase zmizí, i na stránce, která zůstala otevřená.
 *
 * Do prvního vykreslení v prohlížeči je `now` null a pruh se nekreslí, ať se
 * HTML ze serveru shoduje s hydratací.
 */
export default function NoticeBanner({ notices, texts }: { notices: readonly Notice[]; texts: Record<string, string> }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = Date.now();
      setNow(current);
      // Nejbližší okamžik, kdy nějaké oznámení začne nebo skončí.
      const next = notices
        .flatMap((n) => [new Date(n.startsAt).getTime(), new Date(n.endsAt).getTime()])
        .filter((t) => t >= current)
        .sort((a, b) => a - b)[0];
      if (next === undefined) return;
      // setTimeout neumí víc než ~24 dní, delší čekání se prostě přeplánuje.
      timer = setTimeout(tick, Math.min(next - current + 1000, 2 ** 31 - 1));
    };
    tick();
    return () => clearTimeout(timer);
  }, [notices]);

  if (now === null) return null;
  const shown = notices.filter((n) => isNoticeActive(n, now) && texts[n.id]);
  if (shown.length === 0) return null;

  return (
    <div role="status" className="bg-vermillion text-washi">
      {shown.map((n) => (
        <p key={n.id} className="max-w-6xl mx-auto px-4 py-2.5 text-center text-sm font-medium tracking-wide">
          {texts[n.id]}
        </p>
      ))}
    </div>
  );
}
