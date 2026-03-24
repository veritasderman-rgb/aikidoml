import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.jakZavazatPasek.meta.title, description: dict.jakZavazatPasek.meta.description };
}

export default async function JakZavazatPasek({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.jakZavazatPasek;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            帯
          </span>
        </div>

        <div className="max-w-none text-ink/80 leading-relaxed">
          <p className="text-lg">
            {t.intro}
          </p>

          <h2
            className="text-2xl font-bold text-ink mt-10 mb-6 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t.procedureTitle}
          </h2>
          <ol className="space-y-4">
            {t.steps.map((step: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 bg-ink text-washi rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="bg-washi-dark border-l-3 border-vermillion p-5 my-8 rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.tipTitle}
            </h3>
            <p className="text-ink/70">
              {t.tipText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
