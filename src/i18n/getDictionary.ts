import type { Locale } from "./config";

// Per-page dictionary loaders — each page has a small JSON file
const load = (locale: Locale, page: string) =>
  import(`./dictionaries/${locale}/${page}.json`).then((m) => m.default);

export const getDictionary = async (locale: Locale) => {
  const [common, home, aikido, aiKiDo, proDospele, proDeti, kdyMohuCvicit, coOcekavat, japonskySlovnik, etiketa, treninkoveZasady, jakZavazatPasek, odkazy, zkousky, cenik, casy, kde, nabor, galerie, napisteNam, oNas, socialniSite, detailyTreninku, popup] = await Promise.all([
    load(locale, "common"),
    load(locale, "home"),
    load(locale, "aikido"),
    load(locale, "ai-ki-do"),
    load(locale, "pro-dospele"),
    load(locale, "pro-deti"),
    load(locale, "kdy-mohu-cvicit"),
    load(locale, "co-ocekavat"),
    load(locale, "japonsky-slovnik"),
    load(locale, "etiketa"),
    load(locale, "treninkove-zasady"),
    load(locale, "jak-zavazat-pasek"),
    load(locale, "odkazy"),
    load(locale, "zkousky"),
    load(locale, "cenik"),
    load(locale, "casy"),
    load(locale, "kde"),
    load(locale, "nabor"),
    load(locale, "galerie"),
    load(locale, "napiste-nam"),
    load(locale, "o-nas"),
    load(locale, "socialni-site"),
    load(locale, "detaily-treninku"),
    load(locale, "popup"),
  ]);

  return { common, home, aikido, aiKiDo, proDospele, proDeti, kdyMohuCvicit, coOcekavat, japonskySlovnik, etiketa, treninkoveZasady, jakZavazatPasek, odkazy, zkousky, cenik, casy, kde, nabor, galerie, napisteNam, oNas, socialniSite, detailyTreninku, popup };
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
