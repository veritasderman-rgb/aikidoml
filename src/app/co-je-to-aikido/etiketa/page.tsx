import PageHeader from "@/components/PageHeader";

export default function Etiketa() {
  return (
    <>
      <PageHeader title="Etiketa" subtitle="Pravidla chování v dódžó" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-ink-soft max-w-none">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Základní etické zásady</h2>
          <ul>
            <li>Při vstupu do dódžó a při vstupu na tatami se ukláníme směrem k obrazu zakladatele aikidó.</li>
            <li>Meditace na začátku a konci tréninku slouží k přípravě a integraci.</li>
            <li>Při vstupu se používá pozdrav <strong>&quot;onegaišimas(u)&quot;</strong> a na konci <strong>&quot;dómo arigatou gozaimaš(i)ta&quot;</strong>.</li>
            <li>Na začátku i na konci cvičení s partnerem se navzájem ukláníme.</li>
          </ul>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Praktická pravidla</h2>
          <ul>
            <li>Pozdní příchod vyžaduje čekání na okraji tatami a pozvání učitele.</li>
            <li>Předčasný odchod či přerušení musí být hlášeno instruktorovi.</li>
            <li>Správný sed: seiza nebo zkřížené nohy se vzpřímenými zády.</li>
            <li>Není dovoleno sedět zády ke kamize nebo s nataženýma nohama.</li>
            <li>Starší studenti mají pomáhat nováčkům.</li>
          </ul>

          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-ink tracking-tight">Na tatami</h2>
          <ul>
            <li>Nenoste šperky (prstýnky, náušnice, řetízky) z důvodu bezpečnosti.</li>
            <li>Na tatami se nesmí nosit jídlo, pití nebo mobilní telefony.</li>
            <li>Udržujte čistotu – čistý gi, ostříhané nehty.</li>
          </ul>

          <div className="bg-washi-dark border-l-3 border-tatami p-4 my-6 not-prose rounded-r-lg">
            <p className="text-ink-soft italic">
              <span className="text-vermillion mr-1">礼</span>
              &quot;Všechna tato pravidla mají svůj smysl a pomáhají nám na tatami vytvářet ducha
              soustředění a rozvoje.&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
