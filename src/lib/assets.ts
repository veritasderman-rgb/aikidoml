/**
 * Prefix, pod kterým web běží. Na Vercelu / vlastní doméně je prázdný, při
 * sestavení pro GitHub Pages (`GITHUB_PAGES=true`) je to `/aikidoml` – nastavuje
 * ho `next.config.ts`, ať je na jednom místě.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Cesta k souboru z `public/` (fotky, plakáty, .ics). `next/link` si basePath
 * doplní sám, ale `<img>`, `next/image` s `unoptimized` a obyčejné `<a href>`
 * ne – bez tohohle by na GitHub Pages všechny vracely 404.
 */
export const asset = (path: string) => `${BASE_PATH}${path}`;
