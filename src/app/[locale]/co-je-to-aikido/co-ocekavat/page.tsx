import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.coOcekavat.meta.title, description: dict.coOcekavat.meta.description };
}

export default async function CoOcekavat({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.coOcekavat;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>{t.intro}</p>

          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-vermillion mr-1">書</span> {t.sourceTitle}
            </h3>
            <p className="text-ink-soft">
              {t.sourceText}{" "}
              <a
                href="http://www.cfai.cz/aikido/prirucka/prirucka-aikido"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vermillion hover:text-vermillion-dark underline font-semibold"
              >
                www.cfai.cz/aikido/prirucka/prirucka-aikido
              </a>
            </p>
          </div>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">{t.expectTitle}</h2>
          <ul>
            {t.expectItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>{t.encouragement}</p>
        </div>
      </div>
    </>
  );
}
