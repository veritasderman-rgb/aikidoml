import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.socialniSite.meta.title, description: dict.socialniSite.meta.description };
}

export default async function SocialniSite({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.socialniSite;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            繋
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.facebook.com/aikidoml"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white p-8 rounded-lg border border-tatami/30 hover:border-vermillion/40 hover:shadow-md transition-all relative overflow-hidden"
          >
            <span
              className="absolute right-4 top-2 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              友
            </span>
            <h2
              className="text-xl font-bold text-ink group-hover:text-vermillion transition-colors mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Facebook
            </h2>
            <p className="text-ink/60 mb-4">
              {t.facebookDesc}
            </p>
            <span className="text-vermillion font-semibold">
              facebook.com/aikidoml →
            </span>
          </a>

          <div className="bg-white p-8 rounded-lg border border-tatami/30 relative overflow-hidden">
            <span
              className="absolute right-4 top-2 text-ink/[0.04] text-7xl select-none pointer-events-none"
              style={{ fontFamily: "serif" }}
            >
              信
            </span>
            <h2
              className="text-xl font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.contactTitle}
            </h2>
            <p className="text-ink/60 mb-4">
              {t.contactDesc}
            </p>
            <div className="space-y-2">
              <a
                href="mailto:mail@josefpavlovic.cz"
                className="text-vermillion font-semibold hover:text-vermillion-dark block"
              >
                mail@josefpavlovic.cz
              </a>
              <a
                href="tel:+420607517967"
                className="text-vermillion font-semibold hover:text-vermillion-dark block"
              >
                607 517 967
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
