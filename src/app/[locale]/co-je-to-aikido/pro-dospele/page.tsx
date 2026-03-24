import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.proDospele.meta.title, description: dict.proDospele.meta.description };
}

export default async function ProDospele({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.proDospele;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>{t.intro}</p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.clothingTitle}</h2>
          <p>{t.clothingText}</p>

          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-vermillion mr-1">注</span> {t.importantTitle}
            </h3>
            <p className="text-ink-soft">{t.importantText}</p>
          </div>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.etiketaTitle}</h2>
          <p>{t.etiketaP1}</p>
          <p>{t.etiketaP2}</p>
          <p>{t.etiketaP3}</p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.fallsTitle}</h2>
          <p>{t.fallsText}</p>
        </div>
      </div>
    </>
  );
}
