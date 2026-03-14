import PageHeader from "@/components/PageHeader";

export default function NapisteNam() {
  return (
    <>
      <PageHeader title="Napište nám" subtitle="Rádi vám odpovíme na vaše dotazy" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Kontakty</h2>
            <p className="text-gray-600 mb-6">
              Pokud máte dotaz – pošlete nám e-mail nebo zavolejte:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-bold text-gray-800">Josef Pavlovic</h3>
                <a href="mailto:mail@josefpavlovic.cz" className="text-primary hover:underline block mt-1">
                  mail@josefpavlovic.cz
                </a>
                <a href="tel:+420607517967" className="text-primary hover:underline block mt-1">
                  607 517 967
                </a>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-bold text-gray-800">Alexander Tóth</h3>
                <a href="mailto:alex.toth@tiscali.cz" className="text-primary hover:underline block mt-1">
                  alex.toth@tiscali.cz
                </a>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-bold text-gray-800">Petr Schlossar</h3>
                <a href="mailto:zubekml@seznam.cz" className="text-primary hover:underline block mt-1">
                  zubekml@seznam.cz
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Napište nám zprávu</h2>
            <form
              action={`mailto:mail@josefpavlovic.cz`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors resize-vertical"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-light transition-colors"
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
