import PageHeader from "@/components/PageHeader";

export default function CoOcekavat() {
  return (
    <>
      <PageHeader title="Co očekávat" subtitle="Co vás čeká na prvním tréninku" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Pokud vás zajímá co vlastně očekávat na tréninku aikida, doporučuji navštívit
            následující stránku a vše si důkladně přečíst. Osobní zkušenosti se to ovšem nevyrovná.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 not-prose rounded-r-lg">
            <h3 className="font-bold text-blue-800 mb-2">Doporučený zdroj</h3>
            <p className="text-blue-700">
              Podrobný průvodce pro začátečníky najdete na:{" "}
              <a
                href="http://www.cfai.cz/aikido/prirucka/prirucka-aikido"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                www.cfai.cz/aikido/prirucka/prirucka-aikido
              </a>
            </p>
          </div>

          <h2>Obecně na tréninku očekávejte</h2>
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
