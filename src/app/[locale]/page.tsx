import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aikidoCupMapUrl } from "@/config/campaign";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: dict.home.meta.title, description: dict.home.meta.description };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const t = dict.home;
  const p = `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="ink-wash text-washi relative overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] select-none pointer-events-none"
          style={{ fontSize: "30rem", fontFamily: "serif", lineHeight: 1 }}
        >
          合
        </div>
        <div className="max-w-5xl mx-auto px-4 py-24 lg:py-36 relative">
          <div className="flex flex-col items-center text-center">
            <svg viewBox="0 0 200 200" className="w-32 h-32 mb-8 opacity-20" role="img" aria-label="Ensō">
              <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="enso-circle" />
            </svg>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>合氣道</h1>
            <p className="text-xl lg:text-2xl text-tatami/60 mb-2 tracking-widest font-light">{t.hero.subtitle}</p>
            <div className="w-16 h-0.5 bg-vermillion my-8" />
            <p className="text-lg lg:text-xl text-tatami/70 mb-10 max-w-xl leading-relaxed font-light">{t.hero.motto}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`${p}/detaily-treninku/kde`} className="bg-vermillion text-washi font-medium px-8 py-3.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase">
                {t.hero.ctaPrimary}
              </Link>
              <Link href={`${p}/co-je-to-aikido`} className="border border-tatami/30 text-tatami/80 font-medium px-8 py-3.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 text-center border-b md:border-b-0 md:border-r border-washi-dark">
            <div className="text-vermillion text-3xl mb-3" style={{ fontFamily: "serif" }}>稽古</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-soft mb-3">{t.cards.treninky}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">{t.cards.uteryTime}<br />{t.cards.patekTime}</p>
          </div>
          <div className="p-8 text-center border-b md:border-b-0 md:border-r border-washi-dark">
            <div className="text-vermillion text-3xl mb-3" style={{ fontFamily: "serif" }}>場</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-soft mb-3">{t.cards.dodzo}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">{t.cards.tyrsovaUl}<br />{t.cards.ml}</p>
          </div>
          <div className="p-8 text-center">
            <div className="text-vermillion text-3xl mb-3" style={{ fontFamily: "serif" }}>無料</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-soft mb-3">{t.cards.freeTrainings}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">{t.cards.priceAdult}<br />{t.cards.priceStudent}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>始</span>
          <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{t.cta.title}</h2>
          <p className="text-ink-soft mb-8 leading-relaxed">{t.cta.text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${p}/napiste-nam`} className="bg-ink text-washi font-medium px-8 py-3.5 rounded hover:bg-ink-light transition-colors text-sm tracking-widest uppercase">
              {t.cta.napisteNam}
            </Link>
            <a href="tel:+420602492903" className="border border-ink/20 text-ink font-medium px-8 py-3.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase">
              602 492 903
            </a>
            <a href="tel:+420607517967" className="border border-ink/20 text-ink font-medium px-8 py-3.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase">
              607 517 967
            </a>
          </div>
        </div>
      </section>

      {/* Pozvánka – Aikido Cup Open, turnaj v kuželkách */}
      <section className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-20" id="pozvanka">
        <div className="text-center mb-10">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>招</span>
          <h2 className="text-2xl font-bold text-ink tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{t.tournament.title}</h2>
        </div>
        <div className="bg-white border border-tatami/30 rounded-lg overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-5">
          <a
            href="/akce/aikido-cup-open-2026.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 block bg-washi group relative"
            title={t.tournament.posterOpen}
          >
            <Image
              src="/akce/aikido-cup-open-2026.jpg"
              alt={t.tournament.posterAlt}
              width={1280}
              height={1956}
              unoptimized
              className="w-full h-auto"
            />
            <span className="absolute bottom-3 right-3 bg-ink/80 text-washi text-xs tracking-widest uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
              {t.tournament.posterOpen}
            </span>
          </a>
          <div className="md:col-span-3 flex flex-col">
            <div className="bg-ink px-6 py-5">
              <h3 className="text-washi font-bold text-2xl tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.tournament.eventTitle}</h3>
              <p className="text-tatami/70 text-sm mt-1">{t.tournament.eventOrg}</p>
            </div>
            <div className="p-6 space-y-5 flex-1">
              <p className="text-ink font-semibold">{t.tournament.tagline}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.tournament.when}</p>
                  <p className="text-ink font-medium">{t.tournament.whenDate}</p>
                </div>
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.tournament.where}</p>
                  <p className="text-ink font-medium">{t.tournament.wherePlace}</p>
                  <p className="text-ink-soft">{t.tournament.whereAddress}</p>
                </div>
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.tournament.fee}</p>
                  <p className="text-ink font-medium">{t.tournament.feeText}</p>
                </div>
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.tournament.bringTitle}</p>
                  <ul className="text-ink-soft space-y-0.5">
                    {t.tournament.bring.map((item: string) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-vermillion" aria-hidden="true">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-tatami to-transparent" />
              <p className="text-sm text-ink-soft leading-relaxed">{t.tournament.food}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={aikidoCupMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-vermillion text-washi font-medium px-6 py-2.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" strokeLinejoin="round" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  {t.tournament.ctaMap}
                </a>
                <a
                  href="tel:+420602492903"
                  className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink font-medium px-6 py-2.5 rounded hover:border-vermillion hover:text-vermillion transition-colors text-sm tracking-widest uppercase"
                >
                  {t.tournament.ctaCall} · 602 492 903
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-tatami to-transparent" />
      </div>

      {/* About */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>道</span>
          <h2 className="text-2xl font-bold text-ink tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{t.about.title}</h2>
        </div>
        <div className="space-y-6 text-ink-soft leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
        <div className="text-center mt-10">
          <Link href={`${p}/co-je-to-aikido`} className="inline-block text-vermillion font-medium text-sm tracking-widest uppercase hover:text-vermillion-dark transition-colors group">
            {t.about.learnMore}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
