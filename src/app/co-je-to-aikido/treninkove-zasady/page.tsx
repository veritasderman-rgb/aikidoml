import PageHeader from "@/components/PageHeader";

export default function TreninkoveZasady() {
  return (
    <>
      <PageHeader title="Tréninkové zásady od Moriheie Ueshiby" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl italic text-primary">
            Morihei Ueshiba, zakladatel aikida, stanovil základní zásady pro trénink,
            které platí dodnes.
          </p>

          <ol className="space-y-4 mt-8">
            <li>
              <strong>Aikido rozhoduje o životě a smrti jediným úderem.</strong> Při cvičení
              dodržujte pokyny instruktora a nesnažte se silou řešit techniky.
            </li>
            <li>
              <strong>Aikido je cesta, kterou jeden poráží tisíce nepřátel.</strong> I při
              cvičení s jedním partnerem buďte připraveni na útok z jakéhokoliv směru.
            </li>
            <li>
              <strong>Cvičení by mělo být vždy radostné.</strong> Cvičte v duchu vzájemného
              respektu a radosti z pohybu.
            </li>
            <li>
              <strong>Učitel vás může naučit jen malou část.</strong> Většinu umění si musíte
              osvojit vlastním pilným cvičením a přemýšlením.
            </li>
            <li>
              <strong>Denní cvičení začíná rozcvičkou</strong> a postupně zvyšujte intenzitu.
              Nepřemáhejte se. I starší lidé mohou cvičit s radostí a bez zranění.
            </li>
            <li>
              <strong>Účelem aikida je trénovat tělo i mysl</strong> a vytvořit upřímné,
              čestné lidi. Techniky jsou tajné a nesmí být ukazovány nezasvěceným.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
