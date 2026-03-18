import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Odkazy a soubory",
  description:
    "Užitečné odkazy a materiály pro cvičence aikida. Česká federace aikido, příručka pro začátečníky a další zdroje informací o aikidu.",
};

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
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            鏈
          </span>
        </div>

        <div className="space-y-4">
          {odkazy.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg border border-tatami/30 hover:border-vermillion/40 hover:shadow-md transition-all group"
            >
              <h3
                className="font-semibold text-ink group-hover:text-vermillion transition-colors tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {link.title}
              </h3>
              <p className="text-sm text-ink/60 mt-1">{link.desc}</p>
              <p className="text-xs text-tatami mt-2">{link.url}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
