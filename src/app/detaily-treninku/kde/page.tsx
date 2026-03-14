import PageHeader from "@/components/PageHeader";

export default function Kde() {
  return (
    <>
      <PageHeader title="Kde nás najdete" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">BUDO CLUB</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Tyršova ulice, Mariánské Lázně</strong>
          </p>
          <p className="text-gray-600">(za zimním stadiónem)</p>
        </div>

        {/* Map embed */}
        <div className="rounded-xl overflow-hidden shadow mb-8">
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

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h2>Jak se k nám dostanete</h2>
          <p>
            Budova se nachází na Tyršově ulici za zimním stadiónem. Orientačními body jsou
            plavecký stadión a obchod Kaufland. Od Kauflandu pokračujte směrem k zimnímu
            stadiónu, za ním najdete naši tělocvičnu.
          </p>
          <p>
            Pokud budete mít problém s nalezením, zavolejte na <strong>607 517 967</strong> a
            navedeme vás.
          </p>
        </div>
      </div>
    </>
  );
}
