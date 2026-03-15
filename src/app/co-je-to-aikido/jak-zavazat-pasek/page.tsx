import PageHeader from "@/components/PageHeader";

export default function JakZavazatPasek() {
  return (
    <>
      <PageHeader title="Jak si správně zavázat pásek" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Decorative kanji */}
        <div className="text-center mb-10">
          <span className="text-6xl text-ink/5 select-none" style={{ fontFamily: "serif" }}>
            帯
          </span>
        </div>

        <div className="max-w-none text-ink/80 leading-relaxed">
          <p className="text-lg">
            Pro všechny, kteří si v tom nejste jistí, přinášíme návod, jak si zavázat pásek
            u vašeho obi.
          </p>

          <h2
            className="text-2xl font-bold text-ink mt-10 mb-6 tracking-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Postup vázání
          </h2>
          <ol className="space-y-4">
            {[
              "Najděte střed pásku a přiložte jej na břicho, těsně pod pupek.",
              "Oba konce obtočte kolem těla dozadu a zpět dopředu.",
              "Překřižte oba konce – pravý přes levý.",
              "Spodní konec protáhněte pod všemi vrstvami pásku zdola nahoru.",
              "Utáhněte a zavažte jednoduchý uzel.",
              "Oba konce by měly být stejně dlouhé a uzel plochý.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 bg-ink text-washi rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="bg-washi-dark border-l-3 border-vermillion p-5 my-8 rounded-r-lg">
            <h3
              className="font-bold text-ink mb-2 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Tip
            </h3>
            <p className="text-ink/70">
              Pokud si nejste jistí, požádejte na tréninku zkušenějšího spolucvičence nebo
              instruktora – rádi vám pomohou.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
