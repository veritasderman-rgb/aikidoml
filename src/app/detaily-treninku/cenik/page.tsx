import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ceník aikida",
  description:
    "Ceník tréninků aikida v Mariánských Lázních. Dospělí 200 Kč/měsíc, studenti 160 Kč/měsíc. První tři tréninky jsou zcela zdarma.",
};

export default function Cenik() {
  return (
    <>
      <PageHeader title="Ceník aikida" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-washi-dark border-l-3 border-take p-6 rounded-r-lg mb-8">
          <p className="text-ink text-xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
            První tři tréninky jsou zdarma!
          </p>
          <p className="text-ink/70 mt-1">Přijďte si aikido vyzkoušet bez jakéhokoliv závazku.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-lg text-center border-2 border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              大
            </span>
            <h3 className="text-lg text-ink/60 mb-2">Dospělí</h3>
            <div className="text-4xl font-bold text-vermillion mb-1" style={{ fontFamily: "Georgia, serif" }}>200 Kč</div>
            <p className="text-ink/50">/ měsíc</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center border-2 border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              学
            </span>
            <h3 className="text-lg text-ink/60 mb-2">Studenti</h3>
            <div className="text-4xl font-bold text-vermillion mb-1" style={{ fontFamily: "Georgia, serif" }}>160 Kč</div>
            <p className="text-ink/50">/ měsíc</p>
          </div>
        </div>

        <div className="text-lg text-ink/80 leading-relaxed">
          <p>
            Příspěvky slouží k pokrytí nákladů na pronájem tělocvičny a údržbu vybavení.
            Jsme neziskový klub a veškeré příspěvky jdou zpět do činnosti klubu.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/napiste-nam"
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors"
          >
            Máte dotaz k ceníku? Napište nám
          </Link>
        </div>
      </div>
    </>
  );
}
