import PageHeader from "@/components/PageHeader";

export default function NapisteNam() {
  return (
    <>
      <PageHeader title="Napište nám" subtitle="Rádi vám odpovíme na vaše dotazy" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            筆
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl font-bold text-ink mb-6 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Kontakty
            </h2>
            <p className="text-ink/60 mb-6">
              Pokud máte dotaz – pošlete nám e-mail nebo zavolejte:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-tatami/30">
                <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                  Josef Pavlovic
                </h3>
                <a
                  href="mailto:mail@josefpavlovic.cz"
                  className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
                >
                  mail@josefpavlovic.cz
                </a>
                <a
                  href="tel:+420607517967"
                  className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
                >
                  607 517 967
                </a>
              </div>

              <div className="bg-white p-5 rounded-lg border border-tatami/30">
                <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                  Alexander Tóth
                </h3>
                <a
                  href="mailto:alex.toth@tiscali.cz"
                  className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
                >
                  alex.toth@tiscali.cz
                </a>
              </div>

              <div className="bg-white p-5 rounded-lg border border-tatami/30">
                <h3 className="font-bold text-ink" style={{ fontFamily: "Georgia, serif" }}>
                  Petr Schlossar
                </h3>
                <a
                  href="mailto:zubekml@seznam.cz"
                  className="text-vermillion hover:text-vermillion-dark block mt-1 text-sm"
                >
                  zubekml@seznam.cz
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2
              className="text-2xl font-bold text-ink mb-6 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Napište nám zprávu
            </h2>
            <form
              action="mailto:mail@josefpavlovic.cz"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-1">
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-tatami/40 rounded-lg focus:ring-2 focus:ring-vermillion/50 focus:border-vermillion outline-none transition-colors bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-tatami/40 rounded-lg focus:ring-2 focus:ring-vermillion/50 focus:border-vermillion outline-none transition-colors bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-tatami/40 rounded-lg focus:ring-2 focus:ring-vermillion/50 focus:border-vermillion outline-none transition-colors resize-vertical bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-vermillion text-washi font-semibold py-3 rounded-lg hover:bg-vermillion-dark transition-colors"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
