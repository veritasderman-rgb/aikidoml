import PageHeader from "@/components/PageHeader";

export default function SocialniSite() {
  return (
    <>
      <PageHeader title="Sociální sítě & Newsletter" subtitle="Sledujte nás a buďte v obraze" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.facebook.com/aikidoml"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">📘</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Facebook</h3>
            <p className="text-gray-600 mb-4">
              Sledujte naši stránku na Facebooku pro aktuální informace o trénincích,
              seminářích a akcích klubu.
            </p>
            <span className="text-primary font-semibold">
              facebook.com/aikidoml →
            </span>
          </a>

          <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Kontaktujte nás přímo</h3>
            <p className="text-gray-600 mb-4">
              Pro aktuální informace nás kontaktujte e-mailem nebo telefonicky.
              Rádi vás budeme informovat o novinkách v klubu.
            </p>
            <div className="space-y-2">
              <a href="mailto:mail@josefpavlovic.cz" className="text-primary font-semibold hover:underline block">
                mail@josefpavlovic.cz
              </a>
              <a href="tel:+420607517967" className="text-primary font-semibold hover:underline block">
                607 517 967
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
