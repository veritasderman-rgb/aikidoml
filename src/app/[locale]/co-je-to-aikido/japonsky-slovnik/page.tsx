import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.japonskySlovnik.meta.title, description: dict.japonskySlovnik.meta.description };
}

export default async function JaponskySlovnik({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.japonskySlovnik;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>辞書</span>
        </div>

        <div className="overflow-hidden rounded-lg border border-tatami/30">
          <table className="w-full">
            <thead>
              <tr className="bg-ink text-washi">
                <th className="text-left px-6 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.colTerm}</th>
                <th className="text-left px-6 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.colMeaning}</th>
              </tr>
            </thead>
            <tbody>
              {t.terms.map((item: { term: string; meaning: string }, i: number) => (
                <tr key={item.term} className={i % 2 === 0 ? "bg-washi" : "bg-white"}>
                  <td className="px-6 py-3 font-semibold text-ink">{item.term}</td>
                  <td className="px-6 py-3 text-ink/70">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
