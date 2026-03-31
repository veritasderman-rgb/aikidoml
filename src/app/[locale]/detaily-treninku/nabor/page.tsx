import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.nabor.meta.title, description: dict.nabor.meta.description };
}

export default async function Nabor({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.nabor;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            新
          </span>
        </div>

        <div className="text-ink/80 leading-relaxed space-y-8">
          <p className="text-lg">
            {t.intro}
          </p>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.offerTitle}
            </h2>
            <ul className="space-y-2">
              {t.offers.map((item: string, i: number) => (
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
              {t.howTitle}
            </h2>
            <ol className="space-y-3">
              {t.howSteps.map((step: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-ink text-washi rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-washi-dark border-l-3 border-vermillion p-5 rounded-r-lg">
            <p className="text-ink/80">
              {t.encouragement}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href={`/${locale}/napiste-nam`}
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors text-center"
          >
            {t.ctaWrite}
          </Link>
          <a
            href="tel:+420602492903"
            className="inline-block border-2 border-ink text-ink font-semibold px-6 py-3 rounded-lg hover:bg-ink hover:text-washi transition-colors text-center"
          >
            {t.ctaCall2}
          </a>
          <a
            href="tel:+420607517967"
            className="inline-block border-2 border-ink text-ink font-semibold px-6 py-3 rounded-lg hover:bg-ink hover:text-washi transition-colors text-center"
          >
            {t.ctaCall}
          </a>
        </div>
      </div>
    </>
  );
}
