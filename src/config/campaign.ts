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

/** Originální plakát turnaje (1280 × 1956). */
export const aikidoCupPoster = "/akce/aikido-cup-open-2026.jpg";

/** Kuželna Teplá – odkaz na navigaci sdílí popup i pozvánka na úvodní stránce. */
export const aikidoCupMapUrl = "https://www.google.com/maps/search/?api=1&query=Ku%C5%BEelna+Tepl%C3%A1,+%C5%A0koln%C3%AD+592,+Tepl%C3%A1";

/**
 * Turnaj do kalendáře. Plakát uvádí jen začátek (12:00), konec v 17:00 je odhad,
 * ať má událost v kalendáři rozumnou délku. Stejné časy jsou v `public/akce/aikido-cup-open-2026.ics`.
 */
export const aikidoCupCalendar = {
  /** Soubor .ics – otevře se v kalendáři telefonu / počítače (Apple, Outlook, Android). */
  ics: "/akce/aikido-cup-open-2026.ics",
  google: `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: "Aikido Cup Open – turnaj v kuželkách",
    dates: "20261122T120000/20261122T170000",
    ctz: "Europe/Prague",
    location: "Kuželna Teplá, Školní 592, Teplá",
    details:
      "1. ročník turnaje v kuželkách pro členy, rodiny a přátele Aikido Mariánské Lázně.\n" +
      "Startovné 100 Kč + přinést jednu věcnou cenu.\n" +
      "Sportovní oblečení a čistou obuv s bílou podrážkou.\n" +
      "Občerstvení zajišťuje Pizzerie Kuželna.\n" +
      "https://aikidoml.cz/cs/aikido-cup-open",
  })}`,
};

/** Originální plakát semináře (1280 × 1811, převedený z PDF A3). */
export const seminarPoster = "/akce/seminar-wasserbauer-2026.jpg";

/** BUDO CLUB v Tyršově ulici – tam seminář probíhá (běžné dódžó). */
export const seminarMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Budo club, Tyršova, Mariánské Lázně")}`;

/** Spolupořadatel semináře. */
export const aikidoProKazdehoUrl = "https://www.aikidoprokazdeho.cz";

/**
 * Seminář do kalendáře. Google odkaz umí jen jednu událost, proto pokrývá celý
 * seminář (pá 18:00 – so 17:00); soubor .ics obsahuje všechny tři tréninky zvlášť.
 */
export const seminarCalendar = {
  ics: "/akce/seminar-wasserbauer-2026.ics",
  google: `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: "Aikido seminář – Richard Wasserbauer, 5. dan Aikikai",
    dates: "20261106T180000/20261107T170000",
    ctz: "Europe/Prague",
    location: "Budo club, Tyršova ulice, Mariánské Lázně",
    details:
      "Tréninky:\n" +
      "Pátek 6. 11. 18:00–20:00\n" +
      "Sobota 7. 11. 10:00–12:00 a 15:00–17:00\n" +
      "Celá stáž 500 Kč, jeden trénink 250 Kč. Přespání na tatami možné. Zbraně s sebou!\n" +
      "https://aikidoml.cz/cs/seminar-wasserbauer",
  })}`,
};

export const campaigns: readonly Campaign[] = [
  {
    // Seminář s Richardem Wasserbauerem (5. dan Aikikai), 6.–7. 11. 2026 v Budo clubu.
    // Je v seznamu první, takže do začátku semináře má přednost před Aikido Cup Open;
    // ten se potom zase ukáže až do 22. 11.
    id: "seminar-wasserbauer-2026",
    startsAt: "2026-10-19T00:00:00+02:00",
    /** Začátek prvního tréninku – k tomu sedí i odpočet „do semináře zbývá…“. */
    endsAt: "2026-11-06T18:00:00+01:00",
    image: { src: seminarPoster, position: "50% 22%" },
    primaryHref: "/seminar-wasserbauer",
    secondary: { href: seminarMapUrl, icon: "pin", track: "popup_cta_map" },
  },
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
    image: { src: aikidoCupPoster, position: "50% 25%" },
    primaryHref: "/aikido-cup-open",
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
