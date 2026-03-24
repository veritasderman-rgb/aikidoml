import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.kdyMohuCvicit.meta.title, description: dict.kdyMohuCvicit.meta.description };
}

export default async function KdyMohuCvicit({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.kdyMohuCvicit;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.ageTitle}</h2>
          <p>{t.ageText}</p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.accessTitle}</h2>
          <p>{t.accessText}</p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.healthTitle}</h2>
          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <p className="text-ink-soft">
              <span className="text-vermillion font-bold mr-1">注意</span>{" "}
              {t.healthText}
            </p>
          </div>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.safetyTitle}</h2>
          <ul>
            {t.safetyItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
