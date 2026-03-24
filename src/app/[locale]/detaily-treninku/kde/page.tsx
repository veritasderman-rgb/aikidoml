import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.kde.meta.title, description: dict.kde.meta.description };
}

export default async function Kde({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.kde;

  return (
    <>
      <PageHeader title={t.header.title} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            場
          </span>
        </div>

        <div className="bg-white p-8 rounded-lg border border-tatami/30 mb-8">
          <h2
            className="text-2xl font-bold text-ink mb-4 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t.clubName}
          </h2>
          <p className="text-lg text-ink/80 mb-2">
            <strong className="text-ink">{t.address}</strong>
          </p>
          <p className="text-ink/60">{t.behindStadium}</p>
        </div>

        {/* Map embed */}
        <div className="rounded-lg overflow-hidden border border-tatami/30 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.5!2d12.7!3d49.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTyr%C5%A1ova%2C%20Mari%C3%A1nsk%C3%A9%20L%C3%A1zn%C4%9B!5e0!3m2!1scs!2scz!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - BUDO CLUB Mariánské Lázně"
          />
        </div>

        <div className="text-ink/80 leading-relaxed space-y-6">
          <h2
            className="text-2xl font-bold text-ink tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t.directionsTitle}
          </h2>
          <p className="text-lg">
            {t.directionsP1}
          </p>
          <p className="text-lg">
            {t.directionsP2}
          </p>
        </div>
      </div>
    </>
  );
}
