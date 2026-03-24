import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.proDeti.meta.title, description: dict.proDeti.meta.description };
}

export default async function ProDeti({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.proDeti;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>{t.intro}</p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.benefitsTitle}</h2>
          <ul>
            {t.benefits.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.practicalTitle}</h2>
          <p>{t.practicalText}</p>

          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-vermillion mr-1">親</span> {t.parentsTitle}
            </h3>
            <p className="text-ink-soft">{t.parentsText}</p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href={`/${locale}/napiste-nam`}
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors tracking-wide"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
