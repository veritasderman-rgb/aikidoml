import PageHeader from "@/components/PageHeader";

const slovnik = [
  { term: "Ai", meaning: "Harmonie, sjednocení" },
  { term: "Ki", meaning: "Energie, duch, vnitřní síla" },
  { term: "Dó", meaning: "Cesta, způsob" },
  { term: "Sensei", meaning: "Učitel" },
  { term: "Ó-sensei", meaning: "Velký učitel (Morihei Ueshiba)" },
  { term: "Dódžó", meaning: "Místo pro cvičení cesty" },
  { term: "Tatami", meaning: "Cvičební žíněnky" },
  { term: "Kamiza", meaning: "Čestné místo v dódžó s obrazem zakladatele" },
  { term: "Keikogi (Gi)", meaning: "Cvičební úbor (kimono)" },
  { term: "Obi", meaning: "Pásek" },
  { term: "Hakama", meaning: "Široké kalhoty nošené pokročilými cvičenci" },
  { term: "Seiza", meaning: "Sed na kolenou" },
  { term: "Rei", meaning: "Úklon, pozdrav" },
  { term: "Onegaišimas", meaning: "Prosím (žádost o společné cvičení)" },
  { term: "Dómo arigatou gozaimašita", meaning: "Děkuji mnohokrát" },
  { term: "Ukemi", meaning: "Pády" },
  { term: "Nage", meaning: "Ten, kdo hází (obránce)" },
  { term: "Uke", meaning: "Ten, kdo útočí a přijímá techniku" },
  { term: "Tachi waza", meaning: "Techniky ve stoji" },
  { term: "Suwari waza", meaning: "Techniky v sedu" },
  { term: "Hanmi handachi waza", meaning: "Nage sedí, uke stojí" },
  { term: "Irimi", meaning: "Vstup, přiblížení" },
  { term: "Tenkan", meaning: "Otočení, změna směru" },
  { term: "Šómen uči", meaning: "Přímý úder na hlavu" },
  { term: "Jokomen uči", meaning: "Boční úder na hlavu" },
  { term: "Katate dori", meaning: "Úchop jednou rukou za zápěstí" },
  { term: "Rjóte dori", meaning: "Úchop oběma rukama za obě zápěstí" },
  { term: "Ikjó", meaning: "První princip (kontrola)" },
  { term: "Nikjó", meaning: "Druhý princip (zámek na zápěstí)" },
  { term: "Sankjó", meaning: "Třetí princip (rotace zápěstí)" },
  { term: "Jonkjó", meaning: "Čtvrtý princip (tlak na nerv)" },
  { term: "Gokjó", meaning: "Pátý princip" },
  { term: "Iriminage", meaning: "Hod vstupem" },
  { term: "Šihónage", meaning: "Hod do čtyř směrů" },
  { term: "Kotegaeši", meaning: "Zvrat zápěstí" },
  { term: "Kokunagenage", meaning: "Hod dýcháním" },
  { term: "Bokken", meaning: "Dřevěný meč" },
  { term: "Džó", meaning: "Dřevěná tyč" },
  { term: "Tanto", meaning: "Dřevěný nůž" },
];

export default function JaponskySlovnik() {
  return (
    <>
      <PageHeader title="Japonský slovník" subtitle="Základní termíny používané v aikidu" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-6 py-3 font-semibold">Japonsky</th>
                <th className="text-left px-6 py-3 font-semibold">Význam</th>
              </tr>
            </thead>
            <tbody>
              {slovnik.map((item, i) => (
                <tr key={item.term} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-3 font-semibold text-primary">{item.term}</td>
                  <td className="px-6 py-3 text-gray-700">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
