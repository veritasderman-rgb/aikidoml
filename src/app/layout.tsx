import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aikido Mariánské Lázně – BUDO CLUB",
    template: "%s | Aikido Mariánské Lázně",
  },
  description:
    "Aikido klub v Mariánských Lázních. Tréninky aikida pro děti, dospívající i dospělé. Úterý a pátek v BUDO CLUBu na Tyršově ulici.",
  metadataBase: new URL("https://aikidoml.cz"),
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Aikido Mariánské Lázně – BUDO CLUB",
    title: "Aikido Mariánské Lázně – BUDO CLUB",
    description:
      "Aikido klub v Mariánských Lázních. Tréninky aikida pro děti, dospívající i dospělé. Úterý a pátek v BUDO CLUBu na Tyršově ulici.",
  },
  twitter: {
    card: "summary",
    title: "Aikido Mariánské Lázně – BUDO CLUB",
    description:
      "Aikido klub v Mariánských Lázních. Tréninky aikida pro děti, dospívající i dospělé.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col bg-washi text-ink">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
