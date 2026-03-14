import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Aikido Mariánské Lázně
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Myšlenkou cvičení aikida je rozvoj těla i ducha a dokázat se ubránit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/detaily-treninku/kde"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Kdy a kde?
            </Link>
            <Link
              href="/co-je-to-aikido"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Chci vědět víc!
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-3">🥋</div>
            <h3 className="text-lg font-bold text-primary mb-2">Tréninky</h3>
            <p className="text-gray-600">
              Úterý 18:30 – 20:00
              <br />
              Pátek 17:30 – 19:00
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-bold text-primary mb-2">Kde nás najdete</h3>
            <p className="text-gray-600">
              Tyršova ulice, Mariánské Lázně
              <br />
              (za zimním stadiónem)
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-primary mb-2">První 3 tréninky zdarma</h3>
            <p className="text-gray-600">
              Poté 200 Kč / měsíc
              <br />
              Student 160 Kč / měsíc
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Co je aikido?</h2>
        <div className="prose prose-lg mx-auto text-gray-700 space-y-4">
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
        <div className="text-center mt-8">
          <Link
            href="/co-je-to-aikido"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Zjistit více o aikidu
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Přijďte si zkusit trénink!</h2>
          <p className="text-gray-600 text-lg mb-6">
            Stačí tepláky a tričko s dlouhým rukávem. Cvičí se na boso. Žádné předchozí zkušenosti
            nejsou potřeba.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/napiste-nam"
              className="bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-light transition-colors text-lg"
            >
              Napište nám
            </Link>
            <a
              href="tel:+420607517967"
              className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-lg"
            >
              Zavolat: 607 517 967
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
