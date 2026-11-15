import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { CONSENT_KEY, GA_ID } from "@/lib/consent";

/**
 * Společná kostra `<html>` pro všechny kořenové layouty. Je jich víc (jazykové
 * stránky, kořenová `/` a 404), protože `lang` musí odpovídat jazyku stránky –
 * z jediného layoutu nad `[locale]` by se k němu nedalo dostat.
 */
export default function HtmlShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className="min-h-screen flex flex-col bg-washi text-ink">
        {children}
        {process.env.NODE_ENV === "production" && GA_ID && (
          <>
            {/* Google Consent Mode v2 – výchozí stav (denied) se nastaví ještě
                před načtením GA. Když už uživatel dřív souhlasil, načteme
                volbu z localStorage, ať banner neotravuje podruhé.
                Reklamní souhlas (ad_*) zůstává vždycky denied — banner mluví
                jen o měření návštěvnosti, tak se na víc ptát nesmíme. */}
            {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document -- HtmlShell je kostra kořenových layoutů, kam beforeInteractive patří */}
            <Script id="ga-consent-default" strategy="beforeInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
var granted = false;
try { granted = localStorage.getItem('${CONSENT_KEY}') === 'granted'; } catch (e) {}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: granted ? 'granted' : 'denied',
  wait_for_update: 500
});`}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <Analytics />
      </body>
    </html>
  );
}
