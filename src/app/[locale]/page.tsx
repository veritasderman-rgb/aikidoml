import type { Metadata } from "next";
import Link from "next/link";
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

      {/* Aktuality */}
      <section className="max-w-5xl mx-auto px-4 py-16" id="aktuality">
        <div className="text-center mb-10">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>新</span>
          <h2 className="text-2xl font-bold text-ink tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{t.aktuality.title}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-tatami/30 rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="hidden sm:block text-vermillion text-2xl mt-1" style={{ fontFamily: "serif" }}>休</div>
              <div>
                <h3 className="font-semibold text-ink mb-2">{t.aktuality.easterTitle}</h3>
                <p className="text-ink-soft leading-relaxed">
                  {t.aktuality.easterText1} <strong className="text-ink">{t.aktuality.easterDate}</strong> {t.aktuality.easterText2} <strong className="text-ink">{t.aktuality.easterReturn}</strong>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Semináře */}
      <section className="max-w-5xl mx-auto px-4 pb-16" id="seminare">
        <div className="text-center mb-10">
          <span className="text-vermillion text-4xl block mb-4" style={{ fontFamily: "serif" }}>研</span>
          <h2 className="text-2xl font-bold text-ink tracking-tight" style={{ fontFamily: "Georgia, serif" }}>{t.seminar.title}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-tatami/30 rounded-lg overflow-hidden shadow-md">
            <div className="bg-ink px-6 py-4">
              <h3 className="text-washi font-bold text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.seminar.seminarTitle}</h3>
              <p className="text-tatami/70 text-sm">{t.seminar.seminarOrg}</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-ink font-semibold mb-1">{t.seminar.leader}</p>
                <p className="text-vermillion text-sm font-medium">{t.seminar.rank}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.seminar.when}</p>
                  <p className="text-ink font-medium">{t.seminar.whenDate}</p>
                </div>
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.seminar.where}</p>
                  <p className="text-ink font-medium">{t.seminar.wherePlace}</p>
                  <p className="text-ink-soft">{t.seminar.whereAddress}</p>
                </div>
              </div>
              <div>
                <p className="text-ink-soft uppercase tracking-widest text-xs mb-2 font-semibold">{t.seminar.trainings}</p>
                <div className="text-sm text-ink space-y-1">
                  <p>{t.seminar.fri}</p>
                  <p>{t.seminar.sat1}</p>
                  <p>{t.seminar.sat2}</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-tatami to-transparent" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.seminar.price}</p>
                  <p className="text-ink">{t.seminar.priceFull} <strong>{t.seminar.priceFullAmount}</strong></p>
                  <p className="text-ink">{t.seminar.priceSingle} <strong>{t.seminar.priceSingleAmount}</strong></p>
                </div>
                <div>
                  <p className="text-ink-soft uppercase tracking-widest text-xs mb-1 font-semibold">{t.seminar.info}</p>
                  <p className="text-ink-soft">{t.seminar.infoSleep}</p>
                  <p className="text-ink-soft">{t.seminar.infoWeapons}</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Aikido+semin%C3%A1%C5%99+%E2%80%93+Richard+Wasserbauer&dates=20260522T160000Z/20260523T140000Z&location=Budo+club+Mari%C3%A1nsk%C3%A9+L%C3%A1zn%C4%9B%2C+Tyr%C5%A1ova+ulice%2C+Mari%C3%A1nsk%C3%A9+L%C3%A1zn%C4%9B&details=Aikido+semin%C3%A1%C5%99+pod+veden%C3%ADm+Richarda+Wasserbauera+(5.+DAN+AIKIKAI).%0AP%C3%A1tek+18%3A00%E2%80%9320%3A00%2C+Sobota+10%3A00%E2%80%9312%3A00+a+14%3A00%E2%80%9316%3A00.%0ACel%C3%A1+st%C3%A1%C5%BE+500+K%C4%8D%2C+jeden+tr%C3%A9nink+250+K%C4%8D."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-vermillion text-washi font-medium px-6 py-2.5 rounded hover:bg-vermillion-light transition-colors text-sm tracking-widest uppercase"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {t.seminar.addToCalendar}
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
