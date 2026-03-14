import PageHeader from "@/components/PageHeader";

export default function ProDospele() {
  return (
    <>
      <PageHeader title="Aikido pro dospívající a dospělé" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Aikido je bojový systém umožňující kontrolovat oponenta bez újmy. Jedná se o jedno
            z nejhumánnějších bojových umění, zároveň vyžaduje velkou kontrolu vlastního ega
            a psychiky.
          </p>

          <h2>Oblečení a vybavení</h2>
          <p>
            Cvičení probíhá na boso. Doporučuje se triko s dlouhým rukávem a dlouhé tepláky.
            Kimono není povinné pro prvních 3 měsíce. Vezměte si s sebou láhev s vodou.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose rounded-r-lg">
            <h3 className="font-bold text-amber-800 mb-2">Důležité</h3>
            <p className="text-amber-700">
              Na tatami není dovoleno nosit šperky (prstýnky, náušnice, řetízky a tak podobně)
              z důvodu bezpečnosti. Na tatami se nesmí nosit jídlo, pití nebo mobilní telefony.
            </p>
          </div>

          <h2>Etiketa a základní pravidla</h2>
          <p>
            Při vstupu do dódžó a při vstupu na tatami se ukláníme směrem k obrazu zakladatele
            aikidó. Na začátku a konci cvičení se používají japonské výrazy vděčnosti a proseb.
          </p>
          <p>
            Pokud někdo odchází z tatami dříve, musí informovat učitele z bezpečnostních důvodů –
            učitel je zodpovědný za dění na tatami.
          </p>
          <p>
            Není dovoleno sedět zády ke kamize (obrazu zakladatele) nebo s nataženýma nohama.
          </p>

          <h2>Pády a bezpečnost</h2>
          <p>
            Cvičení zahrnuje učení padů na měkkých žíněnkách, přičemž nebezpečí úrazu téměř
            nehrozí. Pády jsou základem aikida a postupně se naučíte padat bezpečně a přirozeně.
          </p>
        </div>
      </div>
    </>
  );
}
