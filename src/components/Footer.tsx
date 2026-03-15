import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-tatami/80">
      {/* Vermillion accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-vermillion to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-vermillion text-xl" style={{ fontFamily: "serif" }}>合氣道</span>
              <span className="text-sm text-tatami/50">Mariánské Lázně</span>
            </div>
            <p className="text-sm text-tatami/60 leading-relaxed">
              Myšlenkou cvičení aikida je rozvoj těla i ducha a dokázat se ubránit.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-vermillion/80 mb-4">Tréninky</h3>
            <ul className="text-sm space-y-2 text-tatami/60">
              <li>Úterý 18:30 – 20:00</li>
              <li>Pátek 17:30 – 19:00</li>
              <li className="pt-2 border-t border-ink-soft/30">
                Tyršova ulice, Mariánské Lázně
                <br />
                <span className="text-tatami/40">(za zimním stadiónem)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-vermillion/80 mb-4">Kontakt</h3>
            <ul className="text-sm space-y-2 text-tatami/60">
              <li>Josef Pavlovic – 607 517 967</li>
              <li>
                <a href="mailto:mail@josefpavlovic.cz" className="hover:text-vermillion transition-colors">
                  mail@josefpavlovic.cz
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aikidoml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vermillion transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-soft/20 mt-10 pt-6 text-center text-tatami/30 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Aikido Mariánské Lázně – BUDO CLUB</p>
        </div>
      </div>
    </footer>
  );
}
