import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL, languageAlternates, localizedPath } from "@/lib/seo";

// Statický export – sitemap se vygeneruje jednou při sestavení do out/sitemap.xml.
export const dynamic = "force-static";

/**
 * Cesty všech stránek (bez jazyka) podle složek v `app/[locale]`. Čte se to
 * z disku, aby nová stránka byla v sitemapě sama a žádná adresa se nemusela
 * opisovat ručně – v ruční sitemapě chyběl jazyk a byl v ní překlep.
 */
function pagePaths(dir: string, prefix = ""): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return pagePaths(path.join(dir, entry.name), `${prefix}/${entry.name}`);
    return entry.name === "page.tsx" ? [prefix] : [];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = pagePaths(path.join(process.cwd(), "src/app/[locale]")).sort();
  return paths.flatMap((p) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(locale, p)}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p.split("/").length === 2 ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(p)).map(([lang, href]) => [lang, `${SITE_URL}${href}`]),
        ),
      },
    })),
  );
}
