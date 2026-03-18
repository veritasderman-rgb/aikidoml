import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Zkoušky a stupně v aikidu",
  description:
    "Přehled zkouškových stupňů v aikidu od 6. kjú po 1. dan. Požadavky na počet tréninků, barvy pásků a popis dovedností pro každý stupeň.",
};

const zkousky = [
  { stupen: "6. kjú", barva: "Bílý pásek", cas: "cca 60 tréninků", popis: "Základní pády, úchopy, první techniky" },
  { stupen: "5. kjú", barva: "Žlutý pásek", cas: "cca 80 tréninků po 6. kjú", popis: "Rozšíření technik, lepší ukemi" },
  { stupen: "4. kjú", barva: "Oranžový pásek", cas: "cca 100 tréninků po 5. kjú", popis: "Plynulejší techniky, práce se zbraněmi" },
  { stupen: "3. kjú", barva: "Zelený pásek", cas: "cca 120 tréninků po 4. kjú", popis: "Pokročilé techniky a variace" },
  { stupen: "2. kjú", barva: "Modrý pásek", cas: "cca 150 tréninků po 3. kjú", popis: "Vysoká úroveň technik, randori" },
  { stupen: "1. kjú", barva: "Hnědý pásek", cas: "cca 200 tréninků po 2. kjú", popis: "Příprava na černý pásek" },
  { stupen: "1. dan", barva: "Černý pásek (hakama)", cas: "cca 300 tréninků po 1. kjú", popis: "Začátek skutečného studia aikida" },
];

export default function Zkousky() {
  return (
    <>
      <PageHeader title="Zkoušky" subtitle="Přehled stupňů a požadavků" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            段
          </span>
        </div>

        <div className="text-lg text-ink/80 leading-relaxed mb-10">
          <p>
            V aikidu se postupuje systémem kjú (žákovských) a dan (mistrovských) stupňů. Zkoušky
            se skládají před komisí a zahrnují předvedení požadovaných technik.
          </p>
        </div>

        {/* Table for larger screens */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-tatami/30">
          <table className="w-full">
            <thead>
              <tr className="bg-ink text-washi">
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>Stupeň</th>
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>Pásek</th>
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>Požadavek</th>
                <th className="text-left px-5 py-3 font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "Georgia, serif" }}>Popis</th>
              </tr>
            </thead>
            <tbody>
              {zkousky.map((z, i) => (
                <tr
                  key={z.stupen}
                  className={i % 2 === 0 ? "bg-washi" : "bg-white"}
                >
                  <td className="px-5 py-4 font-bold text-ink">{z.stupen}</td>
                  <td className="px-5 py-4 text-ink/70">{z.barva}</td>
                  <td className="px-5 py-4 text-sm text-ink/60">{z.cas}</td>
                  <td className="px-5 py-4 text-ink/70">{z.popis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="md:hidden space-y-4">
          {zkousky.map((z) => (
            <div key={z.stupen} className="bg-white p-5 rounded-lg border border-tatami/30">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-ink text-lg" style={{ fontFamily: "Georgia, serif" }}>{z.stupen}</span>
                <span className="text-ink/60">({z.barva})</span>
                <span className="text-sm text-tatami">{z.cas}</span>
              </div>
              <p className="text-ink/70 mt-2">{z.popis}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
