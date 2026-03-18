import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Co je to Ai Ki Do",
  description:
    "Význam japonských znaků Ai (harmonie), Ki (energie) a Do (cesta). Historie aikida, zakladatel Morihei Ueshiba a filozofie bojového umění.",
};

export default function CoJeToAiKiDo() {
  return (
    <>
      <PageHeader title="Co je to Ai Ki Do" subtitle="Význam jednotlivých znaků" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-ink text-washi p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 text-[12rem] leading-none flex items-center justify-center select-none pointer-events-none">
              合
            </div>
            <div className="text-7xl mb-4 relative z-10 text-kinsui">合</div>
            <h3
              className="text-2xl font-bold text-washi mb-2 tracking-widest relative z-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              AI
            </h3>
            <p className="text-washi/80 relative z-10">Harmonie, sjednocení, setkání. Znamená soulad s okolním světem a s partnerem.</p>
          </div>
          <div className="bg-ink text-washi p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 text-[12rem] leading-none flex items-center justify-center select-none pointer-events-none">
              氣
            </div>
            <div className="text-7xl mb-4 relative z-10 text-vermillion">氣</div>
            <h3
              className="text-2xl font-bold text-washi mb-2 tracking-widest relative z-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              KI
            </h3>
            <p className="text-washi/80 relative z-10">Energie, duch, vnitřní síla. Životní energie, která proudí vším živým.</p>
          </div>
          <div className="bg-ink text-washi p-8 rounded-xl shadow-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 text-[12rem] leading-none flex items-center justify-center select-none pointer-events-none">
              道
            </div>
            <div className="text-7xl mb-4 relative z-10 text-take">道</div>
            <h3
              className="text-2xl font-bold text-washi mb-2 tracking-widest relative z-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              DO
            </h3>
            <p className="text-washi/80 relative z-10">Cesta, způsob. Celoživotní cesta osobního rozvoje a zdokonalování.</p>
          </div>
        </div>

        <div className="prose prose-lg text-ink-soft max-w-none">
          <p>
            <strong>Aikido</strong> tedy znamená <em>&quot;Cesta harmonie s vnitřní energií&quot;</em>.
            Je to japonské bojové umění založené na principu neodporování a přesměrování
            útočníkovy síly.
          </p>
          <p>
            Aikido vytvořil <strong>Morihei Ueshiba</strong> (1883–1969), známý jako O-sensei
            (Velký učitel). Vycházel z tradičních japonských bojových umění, především z Daito-ryu
            Aiki-džudžucu, a propojil je se svou duchovní filozofií.
          </p>
          <p>
            Na rozdíl od mnoha jiných bojových umění, aikido neusiluje o zničení protivníka.
            Cílem je kontrolovat situaci tak, aby nebyl nikdo zraněn – ani obránce, ani útočník.
          </p>
        </div>
      </div>
    </>
  );
}
