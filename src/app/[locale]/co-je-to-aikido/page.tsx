import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.aikido.meta.title, description: dict.aikido.meta.description };
}

export default async function CoJeToAikido({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.aikido;

  const subpages = [
    { href: `/${locale}/co-je-to-aikido/co-je-to-ai-ki-do`, title: t.subpages.aiKiDo.title, desc: t.subpages.aiKiDo.desc },
    { href: `/${locale}/co-je-to-aikido/pro-dospele`, title: t.subpages.proDospele.title, desc: t.subpages.proDospele.desc },
    { href: `/${locale}/co-je-to-aikido/pro-deti`, title: t.subpages.proDeti.title, desc: t.subpages.proDeti.desc },
    { href: `/${locale}/co-je-to-aikido/kdy-mohu-cvicit`, title: t.subpages.kdyMohuCvicit.title, desc: t.subpages.kdyMohuCvicit.desc },
    { href: `/${locale}/co-je-to-aikido/co-ocekavat`, title: t.subpages.coOcekavat.title, desc: t.subpages.coOcekavat.desc },
    { href: `/${locale}/co-je-to-aikido/japonsky-slovnik`, title: t.subpages.japonskySlovnik.title, desc: t.subpages.japonskySlovnik.desc },
    { href: `/${locale}/co-je-to-aikido/etiketa`, title: t.subpages.etiketa.title, desc: t.subpages.etiketa.desc },
    { href: `/${locale}/co-je-to-aikido/treninkove-zasady`, title: t.subpages.treninkoveZasady.title, desc: t.subpages.treninkoveZasady.desc },
    { href: `/${locale}/co-je-to-aikido/jak-zavazat-pasek`, title: t.subpages.jakZavazatPasek.title, desc: t.subpages.jakZavazatPasek.desc },
    { href: `/${locale}/co-je-to-aikido/odkazy`, title: t.subpages.odkazy.title, desc: t.subpages.odkazy.desc },
    { href: `/${locale}/co-je-to-aikido/zkousky`, title: t.subpages.zkousky.title, desc: t.subpages.zkousky.desc },
  ];

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none mb-12">
          <p>{t.intro.p1}</p>
          <p>{t.intro.p2}</p>
        </div>

        <h2
          className="text-2xl font-bold text-ink tracking-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="text-vermillion mr-2">道</span>{t.learnMore}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="card-ink block bg-white p-5 rounded-lg hover:shadow-md transition-shadow border border-tatami/30"
            >
              <h3
                className="font-semibold text-ink mb-1 tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {page.title}
              </h3>
              <p className="text-sm text-ink-soft">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
