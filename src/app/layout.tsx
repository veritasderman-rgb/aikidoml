import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { CONSENT_KEY, GA_ID } from "@/lib/consent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aikido Mariánské Lázně – BUDO CLUB",
    template: "%s | Aikido Mariánské Lázně",
  },
  description:
    "Aikido klub v Mariánských Lázních. Tréninky aikida pro děti, dospívající i dospělé. Úterý a pátek v BUDO CLUBu na Tyršově ulici.",
  metadataBase: new URL("https://aikidoml.cz"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col bg-washi text-ink">
        {children}
        {process.env.NODE_ENV === "production" && GA_ID && (
          <>
            {/* Google Consent Mode v2 – výchozí stav (denied) se nastaví ještě
                před načtením GA. Když už uživatel dřív souhlasil, načteme
                volbu z localStorage, ať banner neotravuje podruhé. */}
            <Script id="ga-consent-default" strategy="beforeInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
var granted = false;
try { granted = localStorage.getItem('${CONSENT_KEY}') === 'granted'; } catch (e) {}
gtag('consent', 'default', {
  ad_storage: granted ? 'granted' : 'denied',
  ad_user_data: granted ? 'granted' : 'denied',
  ad_personalization: granted ? 'granted' : 'denied',
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
