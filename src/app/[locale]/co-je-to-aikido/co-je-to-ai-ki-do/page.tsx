import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.aiKiDo.meta.title, description: dict.aiKiDo.meta.description };
}

export default async function CoJeToAiKiDo({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.aiKiDo;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-ink text-washi p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 text-[12rem] leading-none flex items-center justify-center select-none pointer-events-none">
              合
            </div>
            <div className="text-7xl mb-4 relative z-10 text-kinsui">合</div>
            <h3
              className="text-2xl font-bold text-washi mb-2 tracking-widest relative z-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.ai.name}
            </h3>
            <p className="text-washi/80 relative z-10">{t.ai.meaning}</p>
          </div>
          <div className="bg-ink text-washi p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 text-[12rem] leading-none flex items-center justify-center select-none pointer-events-none">
              氣
            </div>
            <div className="text-7xl mb-4 relative z-10 text-vermillion">氣</div>
            <h3
              className="text-2xl font-bold text-washi mb-2 tracking-widest relative z-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.ki.name}
            </h3>
            <p className="text-washi/80 relative z-10">{t.ki.meaning}</p>
          </div>
          <div className="bg-ink text-washi p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 text-[12rem] leading-none flex items-center justify-center select-none pointer-events-none">
              道
            </div>
            <div className="text-7xl mb-4 relative z-10 text-take">道</div>
            <h3
              className="text-2xl font-bold text-washi mb-2 tracking-widest relative z-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.do.name}
            </h3>
            <p className="text-washi/80 relative z-10">{t.do.meaning}</p>
          </div>
        </div>

        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>
      </div>
    </>
  );
}
