import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.detailyTreninku.meta.title, description: dict.detailyTreninku.meta.description };
}

const kanji: Record<string, string> = {
  cenik: "\u5186",
  casy: "\u6642",
  nabor: "\u65B0",
  kde: "\u5834",
};

export default async function DetailyTreninku({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.detailyTreninku;

  const subpages = [
    { key: "cenik" as const, href: `/${locale}/detaily-treninku/cenik` },
    { key: "casy" as const, href: `/${locale}/detaily-treninku/casy` },
    { key: "nabor" as const, href: `/${locale}/detaily-treninku/nabor` },
    { key: "kde" as const, href: `/${locale}/detaily-treninku/kde` },
  ];

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block bg-white p-6 rounded-lg border border-tatami/30 hover:border-vermillion/40 hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Decorative kanji */}
              <span
                className="absolute right-4 top-2 text-ink/[0.04] text-7xl select-none pointer-events-none"
                style={{ fontFamily: "serif" }}
              >
                {kanji[page.key]}
              </span>
              <h2
                className="text-xl font-bold text-ink group-hover:text-vermillion transition-colors mb-2 tracking-tight relative"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t.subpages[page.key].title}
              </h2>
              <p className="text-ink/60 relative">{t.subpages[page.key].desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
