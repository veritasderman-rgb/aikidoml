import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aikido Mariánské Lázně – BUDO CLUB",
    template: "%s | Aikido Mariánské Lázně",
  },
  description:
    "Aikido klub v Mariánských Lázních. Tréninky aikida pro děti, dospívající i dospělé. Úterý a pátek v BUDO CLUBu na Tyršově ulici.",
  metadataBase: new URL("https://aikidoml.cz"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col bg-washi text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
