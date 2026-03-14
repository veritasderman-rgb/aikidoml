import PageHeader from "@/components/PageHeader";

export default function Casy() {
  return (
    <>
      <PageHeader title="Časy a popis tréninků" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-xl shadow">
            <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Úterý</div>
            <div className="text-3xl font-bold text-primary">18:30 – 20:00</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow">
            <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Pátek</div>
            <div className="text-3xl font-bold text-primary">17:30 – 19:00</div>
          </div>
        </div>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h2>Místo</h2>
          <p>
            <strong>BUDO CLUB</strong><br />
            Tyršova ulice, Mariánské Lázně (za zimním stadiónem)
          </p>

          <h2>Co si vzít s sebou</h2>
          <ul>
            <li>Tepláky a tričko s dlouhým rukávem</li>
            <li>Láhev s vodou</li>
            <li>Ponožky nejsou potřeba – cvičí se na boso</li>
          </ul>

          <h2>Průběh tréninku</h2>
          <ul>
            <li>Úvodní pozdrav a meditace</li>
            <li>Rozcvička a protažení</li>
            <li>Nácvik padů (ukemi)</li>
            <li>Ukázka a procvičování technik ve dvojicích</li>
            <li>Závěrečný pozdrav</li>
          </ul>
        </div>
      </div>
    </>
  );
}
