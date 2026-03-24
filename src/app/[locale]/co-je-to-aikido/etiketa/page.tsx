import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.etiketa.meta.title, description: dict.etiketa.meta.description };
}

export default async function Etiketa({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.etiketa;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.ethicsTitle}</h2>
          <ul>
            {t.ethics.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.rulesTitle}</h2>
          <ul>
            {t.rules.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.tatamiTitle}</h2>
          <ul>
            {t.tatami.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="bg-washi-dark border-l-3 border-tatami p-4 my-6 not-prose rounded-r-lg">
            <p className="text-ink-soft italic">
              <span className="text-vermillion mr-1">礼</span>
              &quot;{t.quote}&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
