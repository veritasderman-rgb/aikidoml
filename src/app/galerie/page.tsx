import PageHeader from "@/components/PageHeader";

const galerie = [
  {
    title: "Fotografie z posledního tréninku 2014",
    date: "Pátek 19.12.2014",
    type: "foto",
  },
  {
    title: "Fotografie před zkouškami – 5. kjú",
    date: "16.12.2014",
    type: "foto",
  },
  {
    title: "Začátek sezóny 2014/2015 – s dětmi",
    date: "2014",
    type: "foto",
  },
  {
    title: "Konec roku 2014",
    date: "17.6.2014",
    type: "foto",
  },
  {
    title: "Fotografie před zkouškami",
    date: "1.11.2013",
    type: "foto",
  },
  {
    title: "Fotografie z tréninku",
    date: "18.12.2012",
    type: "foto",
  },
  {
    title: "Seminář Richard Wasserbauer",
    date: "2015",
    type: "video",
  },
  {
    title: "Seminář Pavel Bolf",
    date: "22.–23.11.2014",
    type: "video",
  },
  {
    title: "Video z tréninku",
    date: "10.1.2014",
    type: "video",
  },
  {
    title: "Ukázkové cvičení na kolonádě – Mariánské Lázně",
    date: "2012",
    type: "video",
  },
  {
    title: "Aikido – kompilace fotografií (od roku 1997)",
    date: "1997–současnost",
    type: "video",
  },
  {
    title: "Ukázkové video – Christian Tissier Shihan",
    date: "",
    type: "video",
  },
];

export default function Galerie() {
  return (
    <>
      <PageHeader title="Galerie" subtitle="Fotografie a videa z tréninků a akcí" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-600 text-lg">
            Přehled fotografií a videí z tréninků, seminářů a ukázkových cvičení našeho klubu.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Fotogalerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {galerie
            .filter((g) => g.type === "foto")
            .map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-lg shadow border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">📷</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Videa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galerie
            .filter((g) => g.type === "video")
            .map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-lg shadow border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">🎬</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/aikidoml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Více fotek na Facebooku
          </a>
        </div>
      </div>
    </>
  );
}
