import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ONas() {
  return (
    <>
      <PageHeader title="O nás & Kontakty" subtitle="Aikido klub Mariánské Lázně – BUDO CLUB" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 max-w-none mb-12">
          <p>
            Jsme malý aikido klub v Mariánských Lázních, který funguje pod názvem BUDO CLUB.
            Trénujeme aikido pro děti, dospívající i dospělé. Naším cílem je šířit filozofii
            aikida – rozvoj těla i ducha a schopnost se ubránit bez násilí.
          </p>
          <p>
            Klub je neziskový a je otevřen všem zájemcům bez ohledu na věk, pohlaví
            nebo předchozí zkušenosti s bojovými uměními.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Vedení klubu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🥋</span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Josef Pavlovic</h3>
            <p className="text-sm text-gray-500 mb-3">Hlavní instruktor</p>
            <a href="mailto:mail@josefpavlovic.cz" className="text-primary text-sm hover:underline block">
              mail@josefpavlovic.cz
            </a>
            <a href="tel:+420607517967" className="text-primary text-sm hover:underline block mt-1">
              607 517 967
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🥋</span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Alexander Tóth</h3>
            <p className="text-sm text-gray-500 mb-3">Instruktor</p>
            <a href="mailto:alex.toth@tiscali.cz" className="text-primary text-sm hover:underline block">
              alex.toth@tiscali.cz
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🥋</span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Petr Schlossar</h3>
            <p className="text-sm text-gray-500 mb-3">Instruktor</p>
            <a href="mailto:zubekml@seznam.cz" className="text-primary text-sm hover:underline block">
              zubekml@seznam.cz
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">Kde trénujeme</h2>
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <p className="text-lg font-semibold text-gray-800">BUDO CLUB</p>
          <p className="text-gray-600">Tyršova ulice, Mariánské Lázně (za zimním stadiónem)</p>
          <div className="mt-4">
            <Link
              href="/detaily-treninku/kde"
              className="text-primary font-semibold hover:underline"
            >
              Zobrazit na mapě →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
