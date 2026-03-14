import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function Cenik() {
  return (
    <>
      <PageHeader title="Ceník aikida" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
          <p className="text-green-800 text-xl font-bold">
            První tři tréninky jsou zdarma!
          </p>
          <p className="text-green-700 mt-1">Přijďte si aikido vyzkoušet bez jakéhokoliv závazku.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-xl shadow text-center border-2 border-primary/10">
            <h3 className="text-lg text-gray-500 mb-2">Dospělí</h3>
            <div className="text-4xl font-bold text-primary mb-1">200 Kč</div>
            <p className="text-gray-500">/ měsíc</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center border-2 border-primary/10">
            <h3 className="text-lg text-gray-500 mb-2">Studenti</h3>
            <div className="text-4xl font-bold text-primary mb-1">160 Kč</div>
            <p className="text-gray-500">/ měsíc</p>
          </div>
        </div>

        <div className="prose prose-lg text-gray-700">
          <p>
            Příspěvky slouží k pokrytí nákladů na pronájem tělocvičny a údržbu vybavení.
            Jsme neziskový klub a veškeré příspěvky jdou zpět do činnosti klubu.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/napiste-nam"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Máte dotaz k ceníku? Napište nám
          </Link>
        </div>
      </div>
    </>
  );
}
