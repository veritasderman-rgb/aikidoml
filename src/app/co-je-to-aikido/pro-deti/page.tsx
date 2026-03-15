import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ProDeti() {
  return (
    <>
      <PageHeader title="Aikido pro děti" subtitle="Informace pro rodiče" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>
            Aikido je ideální bojové umění pro děti. Rozvíjí koordinaci, rovnováhu, disciplínu
            a respekt k ostatním. Na rozdíl od jiných bojových sportů se v aikidu nesoutěží –
            děti se učí spolupracovat a pomáhat si navzájem.
          </p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Co aikido dětem přináší</h2>
          <ul>
            <li>Rozvoj pohybových dovedností a koordinace</li>
            <li>Zvýšení sebevědomí a sebeúcty</li>
            <li>Učení disciplíny a respektu</li>
            <li>Schopnost řešit konflikty bez násilí</li>
            <li>Zlepšení koncentrace a pozornosti</li>
          </ul>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Praktické informace</h2>
          <p>
            Děti cvičí v pohodlném oblečení – tepláky a tričko s dlouhým rukávem. Cvičí se na
            boso. Kimono není nutné hned na začátku. Nezapomeňte na láhev s vodou.
          </p>

          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-vermillion mr-1">親</span> Pro rodiče
            </h3>
            <p className="text-ink-soft">
              Rodiče jsou vítáni na tréninku jako pozorovatelé. Pokud máte jakékoliv dotazy ohledně
              zdravotního stavu vašeho dítěte ve vztahu k cvičení, neváhejte se na nás obrátit.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/napiste-nam"
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors tracking-wide"
          >
            Máte dotaz? Napište nám
          </Link>
        </div>
      </div>
    </>
  );
}
