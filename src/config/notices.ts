/**
 * Krátká oznámení (zrušený trénink apod.) – ukazují se jako pruh nad menu na všech stránkách.
 *
 * Oznámení se samo schová po `endsAt`, takže po skončení není potřeba nic nasazovat.
 * Nové oznámení = nový záznam s novým `id` a texty pod stejným `id` v `common.json` → `notices`.
 */
export type Notice = {
  id: string;
  startsAt: string;
  endsAt: string;
};

export const notices: readonly Notice[] = [
  {
    // Podzimní prázdniny – páteční trénink 30. 10. 2026 odpadá.
    id: "zruseny-trenink-2026-10-30",
    startsAt: "2026-10-29T00:00:00+01:00",
    /** Konec pátečního tréninku (17:30–19:00) – potom už oznámení nemá smysl. */
    endsAt: "2026-10-30T19:00:00+01:00",
  },
];

export const isNoticeActive = (n: Notice, now: number) =>
  new Date(n.startsAt).getTime() <= now && now <= new Date(n.endsAt).getTime();
