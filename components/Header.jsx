"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#software", label: "Software" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        <Link href="#" className="font-semibold text-slate-900 tracking-tight">
          Matthew Willey <span className="text-slate-500 font-normal hidden sm:inline">• Resume Base</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden md:flex items-center gap-5 whitespace-nowrap">
          {links.map((link) => (
            <Link key={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 px-4 py-3 grid grid-cols-2 gap-2 bg-white">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-sm text-slate-700 hover:text-slate-900"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
