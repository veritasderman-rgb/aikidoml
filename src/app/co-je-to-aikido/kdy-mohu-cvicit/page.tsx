import PageHeader from "@/components/PageHeader";

export default function KdyMohuCvicit() {
  return (
    <>
      <PageHeader title="Kdy mohu a nemohu cvičit aikido" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Věkové hranice</h2>
          <p>
            Obecně se považuje za rozumnou hranici minimální věk 14 let a maximální věk do 115 let.
          </p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Přístupnost</h2>
          <p>
            Aikido je přizpůsobivé pro osoby různých charakteristik – bez ohledu na velikost či
            pohlaví. Aikido se přizpůsobuje každému jedinci individuálně, nikoliv naopak.
          </p>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Zdravotní omezení</h2>
          <div className="bg-washi-dark border-l-3 border-vermillion p-4 my-6 not-prose rounded-r-lg">
            <p className="text-ink-soft">
              <span className="text-vermillion font-bold mr-1">注意</span>{" "}
              Jedinou závažnou překážkou je závažná srdeční vada, nemoci kostí, a případné vážné
              problémy s tlakem.
            </p>
          </div>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Bezpečnostní pokyny</h2>
          <ul>
            <li>Oznamte trenérovi jakékoliv fyzické překážky</li>
            <li>Ihned hlaste zdravotní problémy během tréninku</li>
            <li>Dodržujte rozcvičku na začátku</li>
            <li>Sledujte pokyny vedoucího a nebojte se ptát</li>
          </ul>
        </div>
      </div>
    </>
  );
}
