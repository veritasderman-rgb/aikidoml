import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.cenik.meta.title, description: dict.cenik.meta.description };
}

export default async function Cenik({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.cenik;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-washi-dark border-l-3 border-take p-6 rounded-r-lg mb-8">
          <p className="text-ink text-xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
            {t.freeNote}
          </p>
          <p className="text-ink/70 mt-1">{t.freeSubnote}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-lg text-center border-2 border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              大
            </span>
            <h3 className="text-lg text-ink/60 mb-2">{t.adults}</h3>
            <div className="text-4xl font-bold text-vermillion mb-1" style={{ fontFamily: "Georgia, serif" }}>{t.adultPrice}</div>
            <p className="text-ink/50">{t.perMonth}</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center border-2 border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              学
            </span>
            <h3 className="text-lg text-ink/60 mb-2">{t.students}</h3>
            <div className="text-4xl font-bold text-vermillion mb-1" style={{ fontFamily: "Georgia, serif" }}>{t.studentPrice}</div>
            <p className="text-ink/50">{t.perMonth}</p>
          </div>
        </div>

        <div className="text-lg text-ink/80 leading-relaxed">
          <p>
            {t.note}
          </p>
        </div>

        <div className="mt-8">
          <Link
            href={`/${locale}/napiste-nam`}
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
