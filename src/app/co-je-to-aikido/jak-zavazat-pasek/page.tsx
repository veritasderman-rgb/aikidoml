import PageHeader from "@/components/PageHeader";

export default function JakZavazatPasek() {
  return (
    <>
      <PageHeader title="Jak si správně zavázat pásek" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Pro všechny, kteří si v tom nejste jistí, přinášíme návod, jak si zavázat pásek
            u vašeho obi.
          </p>

          <h2>Postup vázání</h2>
          <ol className="space-y-3">
            <li>Najděte střed pásku a přiložte jej na břicho, těsně pod pupek.</li>
            <li>Oba konce obtočte kolem těla dozadu a zpět dopředu.</li>
            <li>Překřižte oba konce – pravý přes levý.</li>
            <li>Spodní konec protáhněte pod všemi vrstvami pásku zdola nahoru.</li>
            <li>Utáhněte a zavažte jednoduchý uzel.</li>
            <li>Oba konce by měly být stejně dlouhé a uzel plochý.</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 not-prose rounded-r-lg">
            <h3 className="font-bold text-blue-800 mb-2">Tip</h3>
            <p className="text-blue-700">
              Pokud si nejste jistí, požádejte na tréninku zkušenějšího spolucvičence nebo
              instruktora – rádi vám pomohou.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
