import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/aikidoml" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGitHubPages ? "/aikidoml/" : "",
  // Stejný prefix pro soubory z public/, které si ho samy nedoplní (src/lib/assets.ts).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  experimental: {
    // Kořenových layoutů je víc (kvůli <html lang> podle jazyka), 404 má proto vlastní
    // celou stránku v app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
