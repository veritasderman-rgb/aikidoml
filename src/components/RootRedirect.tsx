"use client";

import { useEffect } from "react";

/** Přesměrování bez zápisu do historie, ať tlačítko Zpět nevrací na prázdnou `/`. */
export default function RootRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href + window.location.search + window.location.hash);
  }, [href]);
  return null;
}
