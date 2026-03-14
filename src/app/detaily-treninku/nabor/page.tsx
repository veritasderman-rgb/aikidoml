import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function Nabor() {
  return (
    <>
      <PageHeader title="Nábor nových členů" subtitle="Přidejte se k nám!" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Hledáme nové členy do našeho aikido klubu v Mariánských Lázních! Přijímáme
            začátečníky bez jakýchkoliv předchozích zkušeností s bojovými uměními.
          </p>

          <h2>Co nabízíme</h2>
          <ul>
            <li>První tři tréninky zcela zdarma</li>
            <li>Přátelské a bezpečné prostředí</li>
            <li>Zkušené instruktory</li>
            <li>Možnost cvičit pro děti, dospívající i dospělé</li>
            <li>Pravidelné semináře a workshopy</li>
          </ul>

          <h2>Jak začít</h2>
          <ol>
            <li>Přijďte na trénink v úterý (18:30) nebo v pátek (17:30)</li>
            <li>Vezměte si tepláky a tričko s dlouhým rukávem</li>
            <li>Představte se instruktorovi – postaráme se o vás!</li>
          </ol>

          <p>
            Nemáte se čeho bát. Každý na tréninku byl jednou úplný začátečník. Atmosféra je
            přátelská a každý vám rád pomůže s prvními kroky.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/napiste-nam"
            className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors text-center"
          >
            Napište nám
          </Link>
          <a
            href="tel:+420607517967"
            className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
          >
            Zavolat: 607 517 967
          </a>
        </div>
      </div>
    </>
  );
}
