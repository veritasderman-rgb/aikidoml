import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.odkazy.meta.title, description: dict.odkazy.meta.description };
}

const urls = [
  "http://www.cfai.cz",
  "http://www.cfai.cz/aikido/prirucka/prirucka-aikido",
  "https://www.facebook.com/aikidoml",
];

export default async function Odkazy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.odkazy;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            鏈
          </span>
        </div>

        <div className="space-y-4">
          {t.links.map((link: { title: string; desc: string }, i: number) => (
            <a
              key={urls[i]}
              href={urls[i]}
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
              <p className="text-xs text-tatami mt-2">{urls[i]}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
