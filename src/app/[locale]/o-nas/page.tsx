import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.oNas.meta.title, description: dict.oNas.meta.description };
}

export default async function ONas({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.oNas;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            道
          </span>
        </div>

        <div className="text-lg text-ink/80 leading-relaxed mb-12 space-y-4">
          <p>
            {t.aboutP1}
          </p>
          <p>
            {t.aboutP2}
          </p>
        </div>

        <h2
          className="text-2xl font-bold text-ink mb-6 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t.leadershipTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl">
          <div className="bg-white p-6 rounded-lg border border-tatami/30 text-center">
            <div className="w-20 h-20 bg-washi rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-tatami" style={{ fontFamily: "serif" }}>武</span>
            </div>
            <h3
              className="font-bold text-ink text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Alexander Tóth
            </h3>
            <p className="text-sm text-ink/50 mb-3">{t.hlavniTrener}</p>
            <a href="mailto:alex.toth@tiscali.cz" className="text-vermillion text-sm hover:text-vermillion-dark block">
              alex.toth@tiscali.cz
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border border-tatami/30 text-center">
            <div className="w-20 h-20 bg-washi rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-tatami" style={{ fontFamily: "serif" }}>武</span>
            </div>
            <h3
              className="font-bold text-ink text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Josef Pavlovic
            </h3>
            <p className="text-sm text-ink/50 mb-3">{t.trener}</p>
            <a href="mailto:mail@josefpavlovic.cz" className="text-vermillion text-sm hover:text-vermillion-dark block">
              mail@josefpavlovic.cz
            </a>
            <a href="tel:+420607517967" className="text-vermillion text-sm hover:text-vermillion-dark block mt-1">
              607 517 967
            </a>
          </div>
        </div>

        <h2
          className="text-2xl font-bold text-ink mb-6 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t.whereTitle}
        </h2>
        <div className="bg-white p-6 rounded-lg border border-tatami/30 mb-8">
          <p className="text-lg font-semibold text-ink" style={{ fontFamily: "Georgia, serif" }}>BUDO CLUB</p>
          <p className="text-ink/60">Tyršova ulice, Mariánské Lázně (za zimním stadiónem)</p>
          <div className="mt-4">
            <Link
              href={`/${locale}/detaily-treninku/kde`}
              className="text-vermillion font-semibold hover:text-vermillion-dark"
            >
              {t.showOnMap}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
