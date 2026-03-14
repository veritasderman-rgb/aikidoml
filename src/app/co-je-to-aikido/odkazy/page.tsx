import PageHeader from "@/components/PageHeader";

const odkazy = [
  { title: "Česká federace aikido (ČFAI)", url: "http://www.cfai.cz", desc: "Zastřešující organizace aikida v České republice" },
  { title: "Příručka aikido – ČFAI", url: "http://www.cfai.cz/aikido/prirucka/prirucka-aikido", desc: "Podrobná příručka pro začátečníky" },
  { title: "Aikido Mariánské Lázně – Facebook", url: "https://www.facebook.com/aikidoml", desc: "Naše stránka na Facebooku" },
];

export default function Odkazy() {
  return (
    <>
      <PageHeader title="Odkazy a soubory" subtitle="Užitečné zdroje a materiály" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {odkazy.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 hover:border-primary/20"
            >
              <h3 className="font-semibold text-primary mb-1">{link.title}</h3>
              <p className="text-sm text-gray-500">{link.desc}</p>
              <p className="text-xs text-gray-400 mt-1">{link.url}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
