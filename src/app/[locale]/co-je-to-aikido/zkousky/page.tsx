import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.zkousky.meta.title, description: dict.zkousky.meta.description };
}

export default async function Zkousky({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.zkousky;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            段
          </span>
        </div>

        <div className="text-lg text-ink/80 leading-relaxed mb-10">
          <p>
            {t.intro}
          </p>
        </div>

        {/* Table for larger screens */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-tatami/30">
          <table className="w-full">
            <thead>
              <tr className="bg-ink text-washi">
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.colRank}</th>
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.colBelt}</th>
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.colReq}</th>
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.colDesc}</th>
              </tr>
            </thead>
            <tbody>
              {t.ranks.map((z: { rank: string; belt: string; req: string; desc: string }, i: number) => (
                <tr
                  key={z.rank}
                  className={i % 2 === 0 ? "bg-washi" : "bg-white"}
                >
                  <td className="px-5 py-4 font-bold text-ink">{z.rank}</td>
                  <td className="px-5 py-4 text-ink/70">{z.belt}</td>
                  <td className="px-5 py-4 text-sm text-ink/60">{z.req}</td>
                  <td className="px-5 py-4 text-ink/70">{z.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="md:hidden space-y-4">
          {t.ranks.map((z: { rank: string; belt: string; req: string; desc: string }) => (
            <div key={z.rank} className="bg-white p-5 rounded-lg border border-tatami/30">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-ink text-lg" style={{ fontFamily: "Georgia, serif" }}>{z.rank}</span>
                <span className="text-ink/60">({z.belt})</span>
                <span className="text-sm text-tatami">{z.req}</span>
              </div>
              <p className="text-ink/70 mt-2">{z.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
