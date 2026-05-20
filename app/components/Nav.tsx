"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Protocolo", href: "#protocolo" },
  { label: "Staff", href: "#staff" },
  { label: "Planos", href: "#planos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }`}
    >

      {/* Main nav row */}
      <nav className="px-[clamp(20px,5vw,72px)] h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Elite Football Lab"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim hover:text-fg transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#formulario"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-bg font-mono text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 hover:bg-fg transition-colors duration-150"
        >
          + Marcar avaliação
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-fg transition-transform duration-200 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-fg transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-fg transition-transform duration-200 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 as number, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-bg-elev border-t border-rule md:hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-[13px] uppercase tracking-[0.2em] text-fg-dim hover:text-fg transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#formulario"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-[11px] uppercase tracking-[0.18em] px-5 py-2.5"
                >
                  + Marcar avaliação
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

