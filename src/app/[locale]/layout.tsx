import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HtmlShell from "@/components/HtmlShell";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CampaignPopup from "@/components/CampaignPopup";
import NoticeBanner from "@/components/NoticeBanner";
import CookieConsent from "@/components/CookieConsent";
import { GA_ID } from "@/lib/consent";
import { pendingNotices } from "@/config/notices";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  // Kanonickou adresu, hreflang a Open Graph si nastavuje každá stránka sama
  // (src/lib/seo.ts) – odsud by je všechny podstránky zdědily s adresou úvodní stránky.
  return {
    title: {
      default: dict.common.meta.siteTitle,
      template: `%s | ${dict.common.meta.siteTitle}`,
    },
    description: dict.common.meta.siteDescription,
    metadataBase: new URL(SITE_URL),
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  return (
    <HtmlShell lang={locale}>
      <NoticeBanner notices={pendingNotices()} texts={dict.common.notices} />
      <Navigation locale={locale as Locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} />
      <CampaignPopup locale={locale as Locale} dict={dict.popup} />
      {/* Dokud není nastavené NEXT_PUBLIC_GA_ID, není k čemu souhlas dávat. */}
      {GA_ID && <CookieConsent dict={dict.common.cookies} />}
    </HtmlShell>
  );
}
