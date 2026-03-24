import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.galerie.meta.title, description: dict.galerie.meta.description };
}

const photoSrcs = [
  "/photos/IMG_4070.jpg",
  "/photos/IMG_4099.jpg",
  "/photos/IMG_4105.jpg",
  "/photos/IMG_4128.jpg",
  "/photos/IMG_4508.jpg",
  "/photos/IMG_8630.jpg",
  "/photos/IMG_8643.jpg",
  "/photos/IMG_9601.jpg",
];

export default async function Galerie({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.galerie;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            画
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photoSrcs.map((src, i) => (
            <div
              key={src}
              className="overflow-hidden rounded-lg border border-tatami/30 bg-white"
            >
              <Image
                src={src}
                alt={t.photos[i].alt}
                width={800}
                height={533}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/aikidoml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-vermillion text-washi font-semibold px-6 py-3 rounded-lg hover:bg-vermillion-dark transition-colors"
          >
            {t.moreOnFacebook}
          </a>
        </div>
      </div>
    </>
  );
}
