import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.casy.meta.title, description: dict.casy.meta.description };
}

export default async function Casy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.casy;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            時
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-lg border border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              火
            </span>
            <div className="text-sm font-semibold text-vermillion uppercase tracking-widest mb-2">{t.tuesday}</div>
            <div
              className="text-3xl font-bold text-ink"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.tuesdayTime}
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              金
            </span>
            <div className="text-sm font-semibold text-vermillion uppercase tracking-widest mb-2">{t.friday}</div>
            <div
              className="text-3xl font-bold text-ink"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.fridayTime}
            </div>
          </div>
        </div>

        <div className="text-ink/80 leading-relaxed space-y-8">
          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.placeTitle}
            </h2>
            <p className="text-lg">
              <strong className="text-ink">{t.placeName}</strong><br />
              {t.placeAddress}
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.bringTitle}
            </h2>
            <ul className="space-y-2">
              {t.bringItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-vermillion mt-1">&#9656;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.scheduleTitle}
            </h2>
            <ul className="space-y-2">
              {t.scheduleItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-vermillion mt-1">&#9656;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
