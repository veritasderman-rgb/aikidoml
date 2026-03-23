"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Co je to aikidó",
    href: "/co-je-to-aikido",
    children: [
      { label: "Co je to Ai Ki Dó", href: "/co-je-to-aikido/co-je-to-ai-ki-do" },
      { label: "Aikido pro dospívající a dospělé", href: "/co-je-to-aikido/pro-dospele" },
      { label: "Aikido pro děti", href: "/co-je-to-aikido/pro-deti" },
      { label: "Kdy mohu cvičit", href: "/co-je-to-aikido/kdy-mohu-cvicit" },
      { label: "Co očekávat", href: "/co-je-to-aikido/co-ocekavat" },
      { label: "Japonský slovník", href: "/co-je-to-aikido/japonsky-slovnik" },
      { label: "Etiketa", href: "/co-je-to-aikido/etiketa" },
      { label: "Tréninkové zásady", href: "/co-je-to-aikido/treninkove-zasady" },
      { label: "Jak zavázat pásek", href: "/co-je-to-aikido/jak-zavazat-pasek" },
      { label: "Odkazy a soubory", href: "/co-je-to-aikido/odkazy" },
      { label: "Zkoušky", href: "/co-je-to-aikido/zkousky" },
    ],
  },
  {
    label: "Detaily tréninků",
    href: "/detaily-treninku",
    children: [
      { label: "Ceník aikida", href: "/detaily-treninku/cenik" },
      { label: "Časy a popis tréninků", href: "/detaily-treninku/casy" },
      { label: "Nábor nových členů", href: "/detaily-treninku/nabor" },
      { label: "Kde?", href: "/detaily-treninku/kde" },
    ],
  },
  { label: "Semináře", href: "/#seminare" },
  { label: "Galerie", href: "/galerie" },
  { label: "Napište nám", href: "/napiste-nam" },
  { label: "O nás", href: "/o-nas" },
  { label: "Sociální sítě", href: "/socialni-site" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-ink text-washi sticky top-0 z-50 border-b border-ink-soft/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with kanji */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-vermillion text-2xl font-bold leading-none" style={{ fontFamily: "serif" }}>
              合氣道
            </span>
            <span className="hidden sm:block text-sm tracking-wide text-tatami/80 font-light">
              Mariánské Lázně
            </span>
          </Link>

          {/* Desktop Nav */}
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
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-tatami hover:text-vermillion transition-colors"
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

        {/* Mobile Nav */}
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
