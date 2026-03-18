import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Detaily tréninků",
  description:
    "Vše o trénincích aikida v Mariánských Lázních – rozvrh, ceník, místo konání a nábor nových členů. Přehled praktických informací pro cvičence.",
};

const subpages = [
  { href: "/detaily-treninku/cenik", title: "Ceník aikida", desc: "Ceny tréninků a členských příspěvků", kanji: "円" },
  { href: "/detaily-treninku/casy", title: "Časy a popis tréninků", desc: "Rozvrh a popis jednotlivých tréninků", kanji: "時" },
  { href: "/detaily-treninku/nabor", title: "Nábor nových členů", desc: "Informace pro nové zájemce", kanji: "新" },
  { href: "/detaily-treninku/kde", title: "Kde?", desc: "Jak se k nám dostanete", kanji: "場" },
];

export default function DetailyTreninku() {
  return (
    <>
      <PageHeader title="Detaily tréninků" subtitle="Vše, co potřebujete vědět" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block bg-white p-6 rounded-lg border border-tatami/30 hover:border-vermillion/40 hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Decorative kanji */}
              <span
                className="absolute right-4 top-2 text-ink/[0.04] text-7xl select-none pointer-events-none"
                style={{ fontFamily: "serif" }}
              >
                {page.kanji}
              </span>
              <h2
                className="text-xl font-bold text-ink group-hover:text-vermillion transition-colors mb-2 tracking-tight relative"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {page.title}
              </h2>
              <p className="text-ink/60 relative">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
