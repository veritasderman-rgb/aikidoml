/**
 * Kampaň „Září – měsíc náborů“: celý měsíc se dá přijít na kterýkoliv trénink
 * a rovnou začít cvičit, není potřeba čekat na jeden konkrétní termín.
 *
 * Popup se sám vypne po `endsAt`, takže po skončení náborového měsíce není
 * potřeba nic nasazovat. Když bude příště jiná akce, stačí změnit `id` (aby se
 * popup znovu ukázal i lidem, kteří ten minulý zavřeli) a data.
 */
export const campaign = {
  id: "zari-mesic-naboru-2026",

  /** Náborový měsíc začíná 1. 9. 2026. */
  startsAt: "2026-09-01T00:00:00+02:00",
  /** Poslední zářijový trénink je v úterý 29. 9.; popup dobíhá do konce měsíce. */
  endsAt: "2026-09-30T23:59:59+02:00",

  /** Kdy popup vyskočí (ms od načtení stránky), pokud dřív nenastane scroll / exit intent. */
  delayMs: 6000,
  /** Podíl odscrollované stránky, který popup spustí dřív než timeout. */
  scrollTrigger: 0.35,

  phone: "+420602492903",
  phoneDisplay: "602 492 903",
} as const;

export const popupStorageKey = `aikido-popup-${campaign.id}`;
