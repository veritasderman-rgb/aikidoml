import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Napište nám",
  description:
    "Kontaktujte aikido klub BUDO CLUB Mariánské Lázně. E-maily a telefon na trenéry, kontaktní formulář pro dotazy ohledně tréninků a náboru.",
};

export default function NapisteNam() {
  return (
    <>
      <PageHeader title="Napište nám" subtitle="Rádi vám odpovíme na vaše dotazy" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            筆
          </span>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-ink/60 mb-6 text-center">
            Pokud máte dotaz – pošlete nám e-mail nebo zavolejte:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-tatami/30">
              <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                Alexander Tóth
              </h3>
              <p className="text-xs text-ink/50">Hlavní trenér</p>
              <a
                href="mailto:alex.toth@tiscali.cz"
                className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
              >
                alex.toth@tiscali.cz
              </a>
            </div>

            <div className="bg-white p-5 rounded-lg border border-tatami/30">
              <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                Josef Pavlovic
              </h3>
              <p className="text-xs text-ink/50">Trenér</p>
              <a
                href="mailto:mail@josefpavlovic.cz"
                className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
              >
                mail@josefpavlovic.cz
              </a>
              <a
                href="tel:+420607517967"
                className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
              >
                607 517 967
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
