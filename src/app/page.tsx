import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero - Japanese ink wash */}
      <section className="ink-wash text-washi relative overflow-hidden">
        {/* Giant kanji watermark */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] select-none pointer-events-none"
          style={{ fontSize: "30rem", fontFamily: "serif", lineHeight: 1 }}
        >
          合
        </div>

        <div className="max-w-5xl mx-auto px-4 py-24 lg:py-36 relative">
          <div className="flex flex-col items-center text-center">
            {/* Ensō circle SVG */}
            <svg viewBox="0 0 200 200" className="w-32 h-32 mb-8 opacity-20">
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="enso-circle"
              />
            </svg>

            <h1
              className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              合氣道
            </h1>
            <p className="text-xl lg:text-2xl text-tatami/60 mb-2 tracking-widest font-light">
              AIKIDO MARIÁNSKÉ LÁZNĚ
            </p>

            {/* Vermillion divider */}
            <div className="w-16 h-0.5 bg-vermillion my-8" />

            <p className="text-lg lg:text-xl text-tatami/70 mb-10 max-w-xl leading-relaxed font-light">
              Myšlenkou cvičení aikida je rozvoj těla i ducha a dokázat se ubránit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/detaily-treninku/kde"
                className="bg-vermillion text-washi font-medium px-8 py-3.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase"
              >
                Přijďte cvičit
              </Link>
              <Link
                href="/co-je-to-aikido"
                className="border border-tatami/30 text-tatami/80 font-medium px-8 py-3.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase"
              >
                Co je aikido?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards - floating on washi paper */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 text-center border-b md:border-b-0 md:border-r border-washi-dark">
            <div className="text-vermillion text-3xl mb-3" style={{ fontFamily: "serif" }}>稽古</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-soft mb-3">Tréninky</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              Úterý 18:30 – 20:00
              <br />
              Pátek 17:30 – 19:00
            </p>
          </div>
          <div className="p-8 text-center border-b md:border-b-0 md:border-r border-washi-dark">
            <div className="text-vermillion text-3xl mb-3" style={{ fontFamily: "serif" }}>場</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-soft mb-3">Dódžó</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              Tyršova ulice
              <br />
              Mariánské Lázně
            </p>
          </div>
          <div className="p-8 text-center">
            <div className="text-vermillion text-3xl mb-3" style={{ fontFamily: "serif" }}>無料</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-soft mb-3">3 tréninky zdarma</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              Poté 200 Kč / měsíc
              <br />
              Student 160 Kč / měsíc
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>道</span>
          <h2 className="text-2xl font-bold text-ink tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            Cesta harmonie
          </h2>
        </div>
        <div className="space-y-6 text-ink-soft leading-relaxed">
          <p>
            Aikido je jedno z nejmladších bojových umění na světě. Jeho filozofie zdůrazňuje harmonii
            namísto destrukce. Jedná se o systém neodporování, který umožňuje efektivní sebeobranu
            bez destruktivních technik.
          </p>
          <p>
            Aikido je bojový systém umožňující kontrolovat oponenta bez újmy. Jedná se o jedno
            z nejhumánnějších bojových umění, které zároveň vyžaduje velkou kontrolu vlastního ega
            a psychiky.
          </p>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/co-je-to-aikido"
            className="inline-block text-vermillion font-medium text-sm tracking-widest uppercase hover:text-vermillion-dark transition-colors group"
          >
            Zjistit více
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-tatami to-transparent" />
      </div>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>始</span>
          <h2
            className="text-2xl font-bold text-ink mb-4 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Přijďte si zkusit trénink
          </h2>
          <p className="text-ink-soft mb-8 leading-relaxed">
            Stačí tepláky a tričko s dlouhým rukávem. Cvičí se na boso. Žádné předchozí zkušenosti
            nejsou potřeba.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/napiste-nam"
              className="bg-ink text-washi font-medium px-8 py-3.5 rounded hover:bg-ink-light transition-colors text-sm tracking-widest uppercase"
            >
              Napište nám
            </Link>
            <a
              href="tel:+420607517967"
              className="border border-ink/20 text-ink font-medium px-8 py-3.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase"
            >
              607 517 967
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
