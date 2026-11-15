import type { Metadata } from "next";
import HtmlShell from "@/components/HtmlShell";
import { defaultLocale } from "@/i18n/config";
import { SITE_URL, languageAlternates, localizedPath } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = {
  title: "Aikido Mariánské Lázně – BUDO CLUB",
  description:
    "Aikido klub v Mariánských Lázních. Tréninky aikida pro děti, dospívající i dospělé. Úterý a pátek v BUDO CLUBu na Tyršově ulici.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: localizedPath(defaultLocale, ""), languages: languageAlternates("") },
};

/** Layout jen pro kořenovou adresu `/`, která hned přesměruje na výchozí jazyk. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <HtmlShell lang={defaultLocale}>{children}</HtmlShell>;
}
