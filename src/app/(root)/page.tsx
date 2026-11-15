import { defaultLocale } from "@/i18n/config";
import { asset } from "@/lib/assets";
import RootRedirect from "@/components/RootRedirect";

/**
 * Kořenová adresa. Web je statický export, takže tu není server, který by poslal
 * skutečné přesměrování – `redirect()` z Next se provede až JavaScriptem a bez
 * něj zbyla prázdná stránka. `<meta refresh>` funguje i bez JS a odkaz je
 * poslední záchrana.
 */
export default function RootPage() {
  const target = asset(`/${defaultLocale}`);
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <RootRedirect href={target} />
      <main className="flex-1 flex items-center justify-center px-4 py-24 text-center">
        <a href={target} className="text-vermillion font-medium tracking-widest uppercase text-sm hover:text-vermillion-dark">
          Aikido Mariánské Lázně →
        </a>
      </main>
    </>
  );
}
