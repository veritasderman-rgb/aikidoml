// Souhlas s cookies (GDPR / Google Consent Mode v2)
//
// Sdílený klíč pro localStorage. Používá ho jak inline skript v root layoutu
// (nastaví výchozí stav souhlasu ještě před načtením GA), tak banner
// CookieConsent, který volbu ukládá a aktualizuje gtag. Banner se na stav ptá
// přes useSyncExternalStore, aby se překreslil po volbě i po znovuotevření
// z patičky — proto tu vedle čtení a zápisu žije i drobná registrace
// posluchačů.
export const CONSENT_KEY = "aikidoml.cookieConsent.v1";

export type ConsentChoice = "granted" | "denied";

/** Měřicí kód GA4. Bez proměnné prostředí se analytika vůbec nenačte. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

let listeners: (() => void)[] = [];

/** Banner otevřený z patičky, i když volba už padla (odvolání souhlasu). */
let reopened = false;

function notify(): void {
  for (const l of listeners) l();
}

let storageListener: ((e: StorageEvent) => void) | null = null;

/** Volba padlá v jiné záložce. Bez tohohle by odvolaný souhlas platil
 *  v ostatních otevřených záložkách až po jejich přenačtení. */
function handleStorage(e: StorageEvent): void {
  // key === null je localStorage.clear()
  if (e.key !== null && e.key !== CONSENT_KEY) return;
  // Cizí zápis je čerstvější než naše nouzová volba v paměti.
  fallbackChoice = null;
  const choice = readStored();
  if (choice) updateGtagConsent(choice);
  notify();
}

export function subscribeConsent(onChange: () => void): () => void {
  listeners = [...listeners, onChange];
  if (!storageListener) {
    storageListener = handleStorage;
    window.addEventListener("storage", storageListener);
  }
  return () => {
    listeners = listeners.filter((l) => l !== onChange);
    if (listeners.length === 0 && storageListener) {
      window.removeEventListener("storage", storageListener);
      storageListener = null;
    }
  };
}

/** Volba se tu drží JEN když ji localStorage odmítl uložit (privátní režim,
 *  plné úložiště, jen pro čtení). Pak je v úložišti pořád ta stará a neplatná,
 *  takže tahle má přednost. Po úspěšném zápisu je null a pravdu drží úložiště. */
let fallbackChoice: ConsentChoice | null = null;

function readStored(): ConsentChoice | null {
  if (fallbackChoice) return fallbackChoice;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") return stored;
  } catch {
    // Privátní režim — volba se drží jen v paměti.
  }
  return null;
}

/** Má se banner vykreslit? */
export function isConsentOpen(): boolean {
  return reopened || readStored() === null;
}

/** Na serveru se banner nevykresluje, jinak by blikl při hydrataci. */
export function isConsentOpenOnServer(): boolean {
  return false;
}

/** Odkaz „Nastavení cookies" v patičce — souhlas musí jít odvolat stejně
 *  snadno, jako se dával. */
export function reopenConsent(): void {
  reopened = true;
  notify();
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
    fallbackChoice = null; // uloženo, pravdu drží úložiště
  } catch {
    // Úložiště volbu odmítlo — držíme ji v paměti pro tuhle návštěvu.
    fallbackChoice = choice;
  }
  reopened = false;
  updateGtagConsent(choice);
  notify();
}

// Aktualizuje Google Consent Mode v2 po volbě uživatele. Když GA není
// načtená (vývoj / nenastavené NEXT_PUBLIC_GA_ID), tiše se nic nestane.
//
// Přepíná se jen `analytics_storage`. Reklamní souhlas zůstává denied —
// banner slibuje měření návštěvnosti a nic víc, takže na reklamní účely
// souhlas nemáme.
function updateGtagConsent(choice: ConsentChoice): void {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("consent", "update", { analytics_storage: choice });
}
