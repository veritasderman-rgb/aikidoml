import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Sociální sítě",
  description:
    "Sledujte aikido klub BUDO CLUB Mariánské Lázně na Facebooku. Aktuální informace o trénincích, seminářích a akcích klubu na sociálních sítích.",
};

export default function SocialniSite() {
  return (
    <>
      <PageHeader title="Sociální sítě & Newsletter" subtitle="Sledujte nás a buďte v obraze" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            繋
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.facebook.com/aikidoml"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white p-8 rounded-lg border border-tatami/30 hover:border-vermillion/40 hover:shadow-md transition-all relative overflow-hidden"
          >
            <span
              className="absolute right-4 top-2 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              友
            </span>
            <h2
              className="text-xl font-bold text-ink group-hover:text-vermillion transition-colors mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Facebook
            </h2>
            <p className="text-ink/60 mb-4">
              Sledujte naši stránku na Facebooku pro aktuální informace o trénincích,
              seminářích a akcích klubu.
            </p>
            <span className="text-vermillion font-semibold">
              facebook.com/aikidoml →
            </span>
          </a>

          <div className="bg-white p-8 rounded-lg border border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-4 top-2 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              信
            </span>
            <h2
              className="text-xl font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Kontaktujte nás přímo
            </h2>
            <p className="text-ink/60 mb-4">
              Pro aktuální informace nás kontaktujte e-mailem nebo telefonicky.
              Rádi vás budeme informovat o novinkách v klubu.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:mail@josefpavlovic.cz"
                className="text-vermillion font-semibold hover:text-vermillion-dark block"
              >
                mail@josefpavlovic.cz
              </a>
              <a
                href="tel:+420607517967"
                className="text-vermillion font-semibold hover:text-vermillion-dark block"
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
