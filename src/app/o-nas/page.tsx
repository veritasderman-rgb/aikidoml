import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nás a kontakty",
  description:
    "Seznamte se s aikido klubem BUDO CLUB v Mariánských Lázních. Kontakty na trenéry, informace o vedení klubu a adresa dódžó na Tyršově ulici.",
};

export default function ONas() {
  return (
    <>
      <PageHeader title="O nás & Kontakty" subtitle="Aikido klub Mariánské Lázně – BUDO CLUB" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            道
          </span>
        </div>

        <div className="text-lg text-ink/80 leading-relaxed mb-12 space-y-4">
          <p>
            Jsme malý aikido klub v Mariánských Lázních, který funguje pod názvem BUDO CLUB.
            Trénujeme aikido pro děti, dospívající i dospělé. Naším cílem je šířit filozofii
            aikida – rozvoj těla i ducha a schopnost se ubránit bez násilí.
          </p>
          <p>
            Klub je neziskový a je otevřen všem zájemcům bez ohledu na věk, pohlaví
            nebo předchozí zkušenosti s bojovými uměními.
          </p>
        </div>

        <h2
          className="text-2xl font-bold text-ink mb-6 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Vedení klubu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-tatami/30 text-center">
            <div className="w-20 h-20 bg-washi rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-tatami" style={{ fontFamily: "serif" }}>武</span>
            </div>
            <h3
              className="font-bold text-ink text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Alexander Tóth
            </h3>
            <p className="text-sm text-ink/50 mb-3">Hlavní trenér</p>
            <a href="mailto:alex.toth@tiscali.cz" className="text-vermillion text-sm hover:text-vermillion-dark block">
              alex.toth@tiscali.cz
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border border-tatami/30 text-center">
            <div className="w-20 h-20 bg-washi rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-tatami" style={{ fontFamily: "serif" }}>武</span>
            </div>
            <h3
              className="font-bold text-ink text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Josef Pavlovic
            </h3>
            <p className="text-sm text-ink/50 mb-3">Trenér</p>
            <a href="mailto:mail@josefpavlovic.cz" className="text-vermillion text-sm hover:text-vermillion-dark block">
              mail@josefpavlovic.cz
            </a>
            <a href="tel:+420607517967" className="text-vermillion text-sm hover:text-vermillion-dark block mt-1">
              607 517 967
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border border-tatami/30 text-center">
            <div className="w-20 h-20 bg-washi rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-tatami" style={{ fontFamily: "serif" }}>武</span>
            </div>
            <h3
              className="font-bold text-ink text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Petr Schlossar
            </h3>
            <p className="text-sm text-ink/50 mb-3">Trenér</p>
            <a href="mailto:zubekml@seznam.cz" className="text-vermillion text-sm hover:text-vermillion-dark block">
              zubekml@seznam.cz
            </a>
          </div>
        </div>

        <h2
          className="text-2xl font-bold text-ink mb-6 tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Kde trénujeme
        </h2>
        <div className="bg-white p-6 rounded-lg border border-tatami/30 mb-8">
          <p className="text-lg font-semibold text-ink" style={{ fontFamily: "Georgia, serif" }}>BUDO CLUB</p>
          <p className="text-ink/60">Tyršova ulice, Mariánské Lázně (za zimním stadiónem)</p>
          <div className="mt-4">
            <Link
              href="/detaily-treninku/kde"
              className="text-vermillion font-semibold hover:text-vermillion-dark"
            >
              Zobrazit na mapě →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
