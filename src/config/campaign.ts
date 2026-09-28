/**
 * Kampaně, které se na webu ukazují jako popup. Najednou běží vždycky jen jedna:
 * ta první v seznamu, která je právě aktivní (`startsAt` ≤ teď ≤ `endsAt`).
 *
 * Popup se sám vypne po `endsAt`, takže po skončení akce není potřeba nic
 * nasazovat. Nová akce = nový záznam s novým `id` (aby se popup ukázal i lidem,
 * kteří ten minulý zavřeli) a texty pod stejným `id` v `popup.json`.
 *
 * Náhled mimo termín: přidej k adrese `?popup=<id>`, např. `/cs?popup=aikido-cup-open-2026`.
 *
 * Odkazy začínající `/` se doplní o jazyk (`/cs/...`), ostatní se otevřou tak, jak jsou.
 */
export type Campaign = {
  id: string;
  startsAt: string;
  /** Konec popupu; k tomuhle dni se počítá i odpočet dnů. */
  endsAt: string;
  /** Obrázek do hlavičky popupu (`position` = object-position výřezu). */
  image?: { src: string; position: string };
  primaryHref: string;
  secondary: { href: string; icon: "clock" | "pin"; track: string };
};

/** Kuželna Teplá – odkaz na navigaci sdílí popup i pozvánka na úvodní stránce. */
export const aikidoCupMapUrl = "https://www.google.com/maps/search/?api=1&query=Ku%C5%BEelna+Tepl%C3%A1,+%C5%A0koln%C3%AD+592,+Tepl%C3%A1";

export const campaigns: readonly Campaign[] = [
  {
    // „Září – měsíc náborů“: celý měsíc se dá přijít na kterýkoliv trénink.
    id: "zari-mesic-naboru-2026",
    startsAt: "2026-09-01T00:00:00+02:00",
    /** Poslední zářijový trénink je v úterý 29. 9.; popup dobíhá do konce měsíce. */
    endsAt: "2026-09-30T23:59:59+02:00",
    primaryHref: "/detaily-treninku/kde",
    secondary: { href: "/detaily-treninku/casy", icon: "clock", track: "popup_cta_times" },
  },
  {
    // Turnaj v kuželkách pro členy, rodiny a přátele – neděle 22. 11. 2026 od 12:00 v Teplé.
    id: "aikido-cup-open-2026",
    /** Navazuje na zářijový nábor, ať se dva popupy nepřebíjejí. */
    startsAt: "2026-10-01T00:00:00+02:00",
    /** Turnaj začíná ve 12:00, potom už popup nemá smysl. */
    endsAt: "2026-11-22T12:00:00+01:00",
    image: { src: "/akce/aikido-cup-open-2026.jpg", position: "50% 25%" },
    primaryHref: "/#pozvanka",
    secondary: { href: aikidoCupMapUrl, icon: "pin", track: "popup_cta_map" },
  },
];

export const popupSettings = {
  /** Kdy popup vyskočí (ms od načtení stránky), pokud dřív nenastane scroll / exit intent. */
  delayMs: 6000,
  /** Podíl odscrollované stránky, který popup spustí dřív než timeout. */
  scrollTrigger: 0.35,

  phone: "+420602492903",
  phoneDisplay: "602 492 903",
} as const;

export const popupStorageKey = (id: string) => `aikido-popup-${id}`;

/** Aktivní kampaň, nebo ta vynucená přes `?popup=<id>`. */
export function pickCampaign(now: number, forcedId: string | null): Campaign | undefined {
  if (forcedId) return campaigns.find((c) => c.id === forcedId);
  return campaigns.find((c) => new Date(c.startsAt).getTime() <= now && now <= new Date(c.endsAt).getTime());
}
