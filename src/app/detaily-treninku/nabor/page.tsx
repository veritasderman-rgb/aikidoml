import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function Nabor() {
  return (
    <>
      <PageHeader title="Nábor nových členů" subtitle="Přidejte se k nám!" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            新
          </span>
        </div>

        <div className="text-ink/80 leading-relaxed space-y-8">
          <p className="text-lg">
            Hledáme nové členy do našeho aikido klubu v Mariánských Lázních! Přijímáme
            začátečníky bez jakýchkoliv předchozích zkušeností s bojovými uměními.
          </p>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Co nabízíme
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>První tři tréninky zcela zdarma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Přátelské a bezpečné prostředí</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Zkušené instruktory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Možnost cvičit pro děti, dospívající i dospělé</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Pravidelné semináře a workshopy</span>
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Jak začít
            </h2>
            <ol className="space-y-3">
              {[
                "Přijďte na trénink v úterý (18:30) nebo v pátek (17:30)",
                "Vezměte si tepláky a tričko s dlouhým rukávem",
                "Představte se instruktorovi – postaráme se o vás!",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-ink text-washi rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-washi-dark border-l-3 border-vermillion p-5 rounded-r-lg">
            <p className="text-ink/80">
              Nemáte se čeho bát. Každý na tréninku byl jednou úplný začátečník. Atmosféra je
              přátelská a každý vám rád pomůže s prvními kroky.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/napiste-nam"
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors text-center"
          >
            Napište nám
          </Link>
          <a
            href="tel:+420607517967"
            className="inline-block border-2 border-ink text-ink font-semibold px-6 py-3 rounded-lg hover:bg-ink hover:text-washi transition-colors text-center"
          >
            Zavolat: 607 517 967
          </a>
        </div>
      </div>
    </>
  );
}
