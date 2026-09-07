// Souhlas s cookies (GDPR / Google Consent Mode v2)
//
// Sdílený klíč pro localStorage. Používá ho jak inline skript v root layoutu
// (nastaví výchozí stav souhlasu ještě před načtením GA), tak banner
// CookieConsent, který volbu ukládá a aktualizuje gtag.
export const CONSENT_KEY = "aikidoml.cookieConsent.v1";

export type ConsentChoice = "granted" | "denied";

/** Měřicí kód GA4. Bez proměnné prostředí se analytika vůbec nenačte. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
