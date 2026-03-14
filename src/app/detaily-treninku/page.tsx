import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const subpages = [
  { href: "/detaily-treninku/cenik", title: "Ceník aikida", desc: "Ceny tréninků a členských příspěvků" },
  { href: "/detaily-treninku/casy", title: "Časy a popis tréninků", desc: "Rozvrh a popis jednotlivých tréninků" },
  { href: "/detaily-treninku/nabor", title: "Nábor nových členů", desc: "Informace pro nové zájemce" },
  { href: "/detaily-treninku/kde", title: "Kde?", desc: "Jak se k nám dostanete" },
];

export default function DetailyTreninku() {
  return (
    <>
      <PageHeader title="Detaily tréninků" subtitle="Vše, co potřebujete vědět" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 hover:border-primary/20"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{page.title}</h3>
              <p className="text-gray-500">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
