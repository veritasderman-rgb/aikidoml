import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Co očekávat na tréninku",
  description:
    "Co vás čeká na prvním tréninku aikida. Rozcvička, nácvik pádů, procvičování technik ve dvojicích. Průvodce pro úplné začátečníky aikida.",
};

export default function CoOcekavat() {
  return (
    <>
      <PageHeader title="Co očekávat" subtitle="Co vás čeká na prvním tréninku" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>
            Pokud vás zajímá co vlastně očekávat na tréninku aikida, doporučuji navštívit
            následující stránku a vše si důkladně přečíst. Osobní zkušenosti se to ovšem nevyrovná.
          </p>

          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-vermillion mr-1">書</span> Doporučený zdroj
            </h3>
            <p className="text-ink-soft">
              Podrobný průvodce pro začátečníky najdete na:{" "}
              <a
                href="http://www.cfai.cz/aikido/prirucka/prirucka-aikido"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vermillion hover:text-vermillion-dark underline font-semibold"
              >
                www.cfai.cz/aikido/prirucka/prirucka-aikido
              </a>
            </p>
          </div>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Obecně na tréninku očekávejte</h2>
          <ul>
            <li>Rozcvičku a protažení na začátku</li>
            <li>Nácvik pádů (ukemi) – základní dovednost v aikidu</li>
            <li>Ukázku techniky učitelem a následné procvičování ve dvojicích</li>
            <li>Závěrečný pozdrav a uklidnění</li>
          </ul>

          <p>
            Nebojte se přijít – každý začínal jako úplný nováček. Atmosféra na tréninku je
            přátelská a každý vám rád pomůže.
          </p>
        </div>
      </div>
    </>
  );
}
