import PageHeader from "@/components/PageHeader";

export default function CoJeToAiKiDo() {
  return (
    <>
      <PageHeader title="Co je to Ai Ki Dó" subtitle="Význam jednotlivých znaků" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-6xl mb-4">合</div>
            <h3 className="text-2xl font-bold text-primary mb-2">AI</h3>
            <p className="text-gray-600">Harmonie, sjednocení, setkání. Znamená soulad s okolním světem a s partnerem.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-6xl mb-4">氣</div>
            <h3 className="text-2xl font-bold text-primary mb-2">KI</h3>
            <p className="text-gray-600">Energie, duch, vnitřní síla. Životní energie, která proudí vším živým.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <div className="text-6xl mb-4">道</div>
            <h3 className="text-2xl font-bold text-primary mb-2">DÓ</h3>
            <p className="text-gray-600">Cesta, způsob. Celoživotní cesta osobního rozvoje a zdokonalování.</p>
          </div>
        </div>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            <strong>Aikidó</strong> tedy znamená <em>&quot;Cesta harmonie s vnitřní energií&quot;</em>.
            Je to japonské bojové umění založené na principu neodporování a přesměrování
            útočníkovy síly.
          </p>
          <p>
            Aikido vytvořil <strong>Morihei Ueshiba</strong> (1883–1969), známý jako Ó-sensei
            (Velký učitel). Vycházel z tradičních japonských bojových umění, především z Daitó-ryú
            Aiki-džúdžucu, a propojil je se svou duchovní filozofií.
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
