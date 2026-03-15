import PageHeader from "@/components/PageHeader";

export default function Casy() {
  return (
    <>
      <PageHeader title="Časy a popis tréninků" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            時
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-lg border border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              火
            </span>
            <div className="text-sm font-semibold text-vermillion uppercase tracking-widest mb-2">Úterý</div>
            <div
              className="text-3xl font-bold text-ink"
              style={{ fontFamily: "Georgia, serif" }}
            >
              18:30 – 20:00
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-3 top-1 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              金
            </span>
            <div className="text-sm font-semibold text-vermillion uppercase tracking-widest mb-2">Pátek</div>
            <div
              className="text-3xl font-bold text-ink"
              style={{ fontFamily: "Georgia, serif" }}
            >
              17:30 – 19:00
            </div>
          </div>
        </div>

        <div className="text-ink/80 leading-relaxed space-y-8">
          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Místo
            </h2>
            <p className="text-lg">
              <strong className="text-ink">BUDO CLUB</strong><br />
              Tyršova ulice, Mariánské Lázně (za zimním stadiónem)
            </p>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Co si vzít s sebou
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Tepláky a tričko s dlouhým rukávem</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Láhev s vodou</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Ponožky nejsou potřeba – cvičí se na boso</span>
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-ink mb-4 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Průběh tréninku
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Úvodní pozdrav a meditace</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Rozcvička a protažení</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Nácvik padů (ukemi)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Ukázka a procvičování technik ve dvojicích</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-vermillion mt-1">&#9656;</span>
                <span>Závěrečný pozdrav</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
