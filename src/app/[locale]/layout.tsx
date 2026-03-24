import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const langMap: Record<string, string> = { cs: "cs_CZ", en: "en_GB", de: "de_DE", uk: "uk_UA" };

  return {
    title: {
      default: dict.common.meta.siteTitle,
      template: `%s | ${dict.common.meta.siteTitle}`,
    },
    description: dict.common.meta.siteDescription,
    metadataBase: new URL("https://aikidoml.cz"),
    openGraph: {
      type: "website",
      locale: langMap[locale] || "cs_CZ",
      siteName: dict.common.meta.siteTitle,
      title: dict.common.meta.siteTitle,
      description: dict.common.meta.siteDescription,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
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
    <>
      <Navigation locale={locale as Locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} dict={dict} />
    </>
  );
}
