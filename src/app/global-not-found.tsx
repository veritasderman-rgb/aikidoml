import type { Metadata } from "next";
import HtmlShell from "@/components/HtmlShell";
import NotFoundContent from "@/components/NotFoundContent";
import { defaultLocale } from "@/i18n/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stránka nenalezena | Aikido Mariánské Lázně",
  robots: { index: false, follow: true },
};

/**
 * 404 pro celý web. Statický export z ní udělá jediné `404.html`, takže jazyk
 * se nedá zjistit na serveru – stránka se vykreslí česky a `NotFoundContent`
 * ji v prohlížeči přepne podle prefixu adresy (/en, /de, /uk).
 */
export default function GlobalNotFound() {
  return (
    <HtmlShell lang={defaultLocale}>
      <NotFoundContent />
    </HtmlShell>
  );
}
