/**
 * Kampaň k zahájení sezóny – první zářijový trénink.
 *
 * Popup se sám vypne po `endsAt`, takže po akci není potřeba nic nasazovat.
 * Když bude příště jiná akce, stačí změnit `id` (aby se popup znovu ukázal
 * i lidem, kteří ten minulý zavřeli) a data.
 */
export const campaign = {
  id: "zahajeni-2026-09-04",

  /** Pátek 4. 9. 2026, 17:30 SELČ */
  startsAt: "2026-09-04T17:30:00+02:00",
  /** Po konci tréninku už popup nikomu nevyskočí. */
  endsAt: "2026-09-04T19:00:00+02:00",

  /** Kdy popup vyskočí (ms od načtení stránky), pokud dřív nenastane scroll / exit intent. */
  delayMs: 6000,
  /** Podíl odscrollované stránky, který popup spustí dřív než timeout. */
  scrollTrigger: 0.35,

  calendarUrl:
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Prvn%C3%AD+z%C3%A1%C5%99ijov%C3%BD+tr%C3%A9nink+%E2%80%93+Aikido+Mari%C3%A1nsk%C3%A9+L%C3%A1zn%C4%9B&dates=20260904T153000Z/20260904T170000Z&location=Budo+club+Mari%C3%A1nsk%C3%A9+L%C3%A1zn%C4%9B%2C+Tyr%C5%A1ova+ulice%2C+Mari%C3%A1nsk%C3%A9+L%C3%A1zn%C4%9B&details=Prvn%C3%AD+tr%C3%A9nink+po+pr%C3%A1zdnin%C3%A1ch.+Skv%C4%9Bl%C3%A1+p%C5%99%C3%ADle%C5%BEitost+za%C4%8D%C3%ADt+s+aikidem+%E2%80%93+prvn%C3%AD+3+tr%C3%A9ninky+zdarma.+Sta%C4%8D%C3%AD+tepl%C3%A1ky+a+tri%C4%8Dko+s+dlouh%C3%BDm+ruk%C3%A1vem%2C+cvi%C4%8D%C3%AD+se+naboso.",

  phone: "+420602492903",
  phoneDisplay: "602 492 903",
} as const;

export const popupStorageKey = `aikido-popup-${campaign.id}`;
