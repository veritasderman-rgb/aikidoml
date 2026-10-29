"use client";

import { useEffect, useState } from "react";
import { isNoticeActive, type Notice } from "@/config/notices";

/**
 * Pruh s oznámeními nad menu. Stránky jsou statické, takže server pošle oznámení
 * aktivní v době sestavení a prohlížeč je po `endsAt` schová sám.
 */
export default function NoticeBanner({ notices, texts }: { notices: readonly Notice[]; texts: Record<string, string> }) {
  const [active, setActive] = useState(notices);

  useEffect(() => {
    setActive(notices.filter((n) => isNoticeActive(n, Date.now())));
  }, [notices]);

  const shown = active.filter((n) => texts[n.id]);
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
