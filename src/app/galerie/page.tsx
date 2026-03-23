import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Fotografie z tréninků aikida, seminářů a ukázkových cvičení klubu BUDO CLUB Mariánské Lázně.",
};

const photos = [
  { src: "/photos/IMG_4070.jpg", alt: "Ukázkové cvičení – hod na tatami" },
  { src: "/photos/IMG_4099.jpg", alt: "Ukázkové cvičení – technika pádu" },
  { src: "/photos/IMG_4105.jpg", alt: "Ukázkové cvičení – letový pád" },
  { src: "/photos/IMG_4128.jpg", alt: "Ukázkové cvičení – koshi nage" },
  { src: "/photos/IMG_4508.jpg", alt: "Ukázkové cvičení – pokročilí aikidisté" },
  { src: "/photos/IMG_8630.jpg", alt: "Vánoční trénink – skupinové foto" },
  { src: "/photos/IMG_8643.jpg", alt: "Skupina dospělých aikidistů" },
  { src: "/photos/IMG_9601.jpg", alt: "Skupinové foto ze semináře" },
];

export default function Galerie() {
  return (
    <>
      <PageHeader title="Galerie" subtitle="Fotografie z tréninků a akcí" />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            画
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-lg border border-tatami/30 bg-white"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
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
            Více fotek na Facebooku
          </a>
        </div>
      </div>
    </>
  );
}
