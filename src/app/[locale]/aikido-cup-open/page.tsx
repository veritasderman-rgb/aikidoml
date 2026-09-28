import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";
import TournamentInfo from "@/components/TournamentInfo";
import { aikidoCupPoster } from "@/config/campaign";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.aikidoCupOpen;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${locale}/aikido-cup-open` },
    // Při sdílení odkazu (Facebook, WhatsApp) se ukáže plakát.
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}/aikido-cup-open`,
      images: [{ url: aikidoCupPoster, width: 1280, height: 1956, alt: dict.home.tournament.posterAlt }],
    },
  };
}

export default async function AikidoCupOpen({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.aikidoCupOpen;
  const tt = dict.home.tournament;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Originální plakát v celku, bez ořezu */}
          <figure className="lg:col-span-7">
            <a
              href={aikidoCupPoster}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-tatami/30 rounded-lg overflow-hidden shadow-md"
              title={t.posterFull}
            >
              <Image
                src={aikidoCupPoster}
                alt={tt.posterAlt}
                width={1280}
                height={1956}
                unoptimized
                priority
                className="w-full h-auto"
              />
            </a>
            <figcaption className="mt-3 text-center">
              <a
                href={aikidoCupPoster}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft text-sm hover:text-vermillion transition-colors"
              >
                {t.posterFull} ↗
              </a>
            </figcaption>
          </figure>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white border border-tatami/30 rounded-lg overflow-hidden shadow-md">
              <div className="bg-ink px-6 py-5">
                <h2 className="text-washi font-bold text-2xl tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                  {tt.eventTitle}
                </h2>
                <p className="text-tatami/70 text-sm mt-1">{tt.eventOrg}</p>
              </div>
              <div className="p-6 space-y-5">
                <TournamentInfo t={tt} />
              </div>
            </div>
            <Link
              href={`/${locale}`}
              className="inline-block mt-6 text-ink-soft text-sm hover:text-vermillion transition-colors"
            >
              ← {t.back}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
