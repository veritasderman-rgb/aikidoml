import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.treninkoveZasady.meta.title, description: dict.treninkoveZasady.meta.description };
}

export default async function TreninkoveZasady({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.treninkoveZasady;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            武
          </span>
        </div>

        <div className="max-w-none">
          <p className="text-xl italic text-vermillion tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            {t.intro}
          </p>

          <ol className="space-y-6 mt-10">
            {t.principles.map((item: { strong: string; text: string }, i: number) => (
              <li
                key={i}
                className="bg-washi border-l-3 border-vermillion rounded-r-lg p-5 text-ink/80 leading-relaxed"
              >
                <strong className="text-ink" style={{ fontFamily: "Georgia, serif" }}>
                  {item.strong}
                </strong>{" "}
                {item.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
