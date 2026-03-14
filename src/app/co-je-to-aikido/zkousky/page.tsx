import PageHeader from "@/components/PageHeader";

const zkousky = [
  { stupen: "6. kjú", barva: "Bílý pásek", cas: "cca 60 tréninků", popis: "Základní pády, úchopy, první techniky" },
  { stupen: "5. kjú", barva: "Žlutý pásek", cas: "cca 80 tréninků po 6. kjú", popis: "Rozšíření technik, lepší ukemi" },
  { stupen: "4. kjú", barva: "Oranžový pásek", cas: "cca 100 tréninků po 5. kjú", popis: "Plynulejší techniky, práce se zbraněmi" },
  { stupen: "3. kjú", barva: "Zelený pásek", cas: "cca 120 tréninků po 4. kjú", popis: "Pokročilé techniky a variace" },
  { stupen: "2. kjú", barva: "Modrý pásek", cas: "cca 150 tréninků po 3. kjú", popis: "Vysoká úroveň technik, randori" },
  { stupen: "1. kjú", barva: "Hnědý pásek", cas: "cca 200 tréninků po 2. kjú", popis: "Příprava na černý pásek" },
  { stupen: "1. dan", barva: "Černý pásek (hakama)", cas: "cca 300 tréninků po 1. kjú", popis: "Začátek skutečného studia aikida" },
];

export default function Zkousky() {
  return (
    <>
      <PageHeader title="Zkoušky" subtitle="Přehled stupňů a požadavků" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 mb-8">
          <p>
            V aikidu se postupuje systémem kjú (žákovských) a dan (mistrovských) stupňů. Zkoušky
            se skládají před komisí a zahrnují předvedení požadovaných technik.
          </p>
        </div>

        <div className="space-y-4">
          {zkousky.map((z) => (
            <div key={z.stupen} className="bg-white p-5 rounded-lg shadow border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-bold text-primary text-lg">{z.stupen}</span>
                <span className="text-gray-600">({z.barva})</span>
                <span className="text-sm text-gray-400 sm:ml-auto">{z.cas}</span>
              </div>
              <p className="text-gray-600 mt-1">{z.popis}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
