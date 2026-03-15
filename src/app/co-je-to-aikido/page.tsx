import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const subpages = [
  { href: "/co-je-to-aikido/co-je-to-ai-ki-do", title: "Co je to Ai Ki Do", desc: "Význam jednotlivých znaků a filozofie aikida" },
  { href: "/co-je-to-aikido/pro-dospele", title: "Aikido pro dospívající a dospělé", desc: "Informace pro začínající dospělé cvičence" },
  { href: "/co-je-to-aikido/pro-deti", title: "Aikido pro děti", desc: "Informace pro rodiče dětských cvičenců" },
  { href: "/co-je-to-aikido/kdy-mohu-cvicit", title: "Kdy mohu a nemohu cvičit", desc: "Věkové a zdravotní podmínky" },
  { href: "/co-je-to-aikido/co-ocekavat", title: "Co očekávat", desc: "Co vás čeká na prvním tréninku" },
  { href: "/co-je-to-aikido/japonsky-slovnik", title: "Japonský slovník", desc: "Základní japonské termíny používané v aikidu" },
  { href: "/co-je-to-aikido/etiketa", title: "Etiketa", desc: "Pravidla chování na tatami" },
  { href: "/co-je-to-aikido/treninkove-zasady", title: "Tréninkové zásady", desc: "Zásady od zakladatele Moriheie Ueshiby" },
  { href: "/co-je-to-aikido/jak-zavazat-pasek", title: "Jak si zavázat pásek", desc: "Obrázkový návod na vázání obi" },
  { href: "/co-je-to-aikido/odkazy", title: "Odkazy a soubory", desc: "Užitečné odkazy a materiály ke stažení" },
  { href: "/co-je-to-aikido/zkousky", title: "Zkoušky", desc: "Informace o zkouškách a stupních" },
];

export default function CoJeToAikido() {
  return (
    <>
      <PageHeader title="Co je to aikido" subtitle="Poznejte bojové umění harmonie" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none mb-12">
          <p>
            Aikido je jedno z nejmladších bojových umění na světě. Jeho filozofie zdůrazňuje
            harmonii namísto destrukce. Jedná se o systém neodporování, který umožňuje efektivní
            sebeobranu bez destruktivních technik.
          </p>
          <p>
            Aikido je bojový systém umožňující kontrolovat oponenta bez újmy. Jedná se o jedno
            z nejhumánnějších bojových umění, které zároveň vyžaduje velkou kontrolu vlastního ega
            a psychiky.
          </p>
        </div>

        <h2
          className="text-2xl font-bold text-ink tracking-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="text-vermillion mr-2">道</span>Zjistěte více
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="card-ink block bg-white p-5 rounded-lg hover:shadow-md transition-shadow border border-tatami/30"
            >
              <h3
                className="font-semibold text-ink mb-1 tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {page.title}
              </h3>
              <p className="text-sm text-ink-soft">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
