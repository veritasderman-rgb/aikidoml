"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import LanguageSwitcher from "./LanguageSwitcher";

function buildNavItems(locale: Locale, nav: Dictionary["common"]["nav"]) {
  const p = `/${locale}`;
  return [
    {
      label: nav.coJeToAikido,
      href: `${p}/co-je-to-aikido`,
      children: [
        { label: nav.aiKiDo, href: `${p}/co-je-to-aikido/co-je-to-ai-ki-do` },
        { label: nav.proDospele, href: `${p}/co-je-to-aikido/pro-dospele` },
        { label: nav.proDeti, href: `${p}/co-je-to-aikido/pro-deti` },
        { label: nav.kdyMohuCvicit, href: `${p}/co-je-to-aikido/kdy-mohu-cvicit` },
        { label: nav.coOcekavat, href: `${p}/co-je-to-aikido/co-ocekavat` },
        { label: nav.japonskySlovnik, href: `${p}/co-je-to-aikido/japonsky-slovnik` },
        { label: nav.etiketa, href: `${p}/co-je-to-aikido/etiketa` },
        { label: nav.treninkoveZasady, href: `${p}/co-je-to-aikido/treninkove-zasady` },
        { label: nav.jakZavazatPasek, href: `${p}/co-je-to-aikido/jak-zavazat-pasek` },
        { label: nav.odkazy, href: `${p}/co-je-to-aikido/odkazy` },
        { label: nav.zkousky, href: `${p}/co-je-to-aikido/zkousky` },
      ],
    },
    {
      label: nav.detailyTreninku,
      href: `${p}/detaily-treninku`,
      children: [
        { label: nav.cenik, href: `${p}/detaily-treninku/cenik` },
        { label: nav.casy, href: `${p}/detaily-treninku/casy` },
        { label: nav.nabor, href: `${p}/detaily-treninku/nabor` },
        { label: nav.kde, href: `${p}/detaily-treninku/kde` },
      ],
    },
    { label: nav.seminare, href: `${p}/#seminare` },
    { label: nav.galerie, href: `${p}/galerie` },
    { label: nav.napisteNam, href: `${p}/napiste-nam` },
    { label: nav.oNas, href: `${p}/o-nas` },
    { label: nav.socialniSite, href: `${p}/socialni-site` },
  ];
}

export default function Navigation({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navItems = buildNavItems(locale, dict.common.nav);

  return (
    <nav className="bg-ink text-washi sticky top-0 z-50 border-b border-ink-soft/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-vermillion text-2xl font-bold leading-none" style={{ fontFamily: "serif" }}>
              合氣道
            </span>
            <span className="hidden sm:block text-sm tracking-wide text-tatami/80 font-light">
              Mariánské Lázně
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm tracking-wide text-tatami/90 hover:text-vermillion transition-colors"
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs opacity-50">▾</span>}
                </Link>
                {item.children && openDropdown === item.href && (
                  <div className="absolute left-0 top-full w-64 bg-ink border border-ink-soft/30 rounded-b-md shadow-xl py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-tatami/80 hover:text-vermillion hover:bg-ink-light/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="ml-3 border-l border-ink-soft/30 pl-3">
              <LanguageSwitcher current={locale} />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher current={locale} />
            <button
              className="p-2 text-tatami hover:text-vermillion transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-ink-soft/20 mt-1 pt-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm text-tatami/90 hover:text-vermillion transition-colors"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l border-vermillion/20 ml-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-xs text-tatami/60 hover:text-vermillion transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
