import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.napisteNam.meta.title, description: dict.napisteNam.meta.description };
}

export default async function NapisteNam({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.napisteNam;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            筆
          </span>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-ink/60 mb-6 text-center">
            {t.intro}
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-tatami/30">
              <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                Alexander Tóth
              </h3>
              <p className="text-xs text-ink/50">{t.hlavniTrener}</p>
              <a
                href="mailto:alex.toth@tiscali.cz"
                className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
              >
                alex.toth@tiscali.cz
              </a>
            </div>

            <div className="bg-white p-5 rounded-lg border border-tatami/30">
              <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                Josef Pavlovic
              </h3>
              <p className="text-xs text-ink/50">{t.trener}</p>
              <a
                href="mailto:mail@josefpavlovic.cz"
                className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
              >
                mail@josefpavlovic.cz
              </a>
              <a
                href="tel:+420607517967"
                className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
              >
                607 517 967
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
