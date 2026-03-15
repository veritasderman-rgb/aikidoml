import PageHeader from "@/components/PageHeader";

export default function TreninkoveZasady() {
  return (
    <>
      <PageHeader title="Tréninkové zásady od Moriheie Ueshiby" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            武
          </span>
        </div>

        <div className="max-w-none">
          <p className="text-xl italic text-vermillion tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            Morihei Ueshiba, zakladatel aikida, stanovil základní zásady pro trénink,
            které platí dodnes.
          </p>

          <ol className="space-y-6 mt-10">
            {[
              {
                strong: "Aikido rozhoduje o životě a smrti jediným úderem.",
                text: "Při cvičení dodržujte pokyny instruktora a nesnažte se silou řešit techniky.",
              },
              {
                strong: "Aikido je cesta, kterou jeden poráží tisíce nepřátel.",
                text: "I při cvičení s jedním partnerem buďte připraveni na útok z jakéhokoliv směru.",
              },
              {
                strong: "Cvičení by mělo být vždy radostné.",
                text: "Cvičte v duchu vzájemného respektu a radosti z pohybu.",
              },
              {
                strong: "Učitel vás může naučit jen malou část.",
                text: "Většinu umění si musíte osvojit vlastním pilným cvičením a přemýšlením.",
              },
              {
                strong: "Denní cvičení začíná rozcvičkou",
                text: "a postupně zvyšujte intenzitu. Nepřemáhejte se. I starší lidé mohou cvičit s radostí a bez zranění.",
              },
              {
                strong: "Účelem aikida je trénovat tělo i mysl",
                text: "a vytvořit upřímné, čestné lidi. Techniky jsou tajné a nesmí být ukazovány nezasvěceným.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="bg-washi border-l-3 border-vermillion rounded-r-lg p-5 text-ink/80 leading-relaxed"
              >
                <strong className="text-ink" style={{ fontFamily: "Georgia, serif" }}>
                  {item.strong}
                </strong>{" "}
                {item.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
