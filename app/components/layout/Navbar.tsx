"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../ui/ThemeProvider";
import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

const WA_NUMBER = "573112195155";
const WA_MSG_ES = encodeURIComponent("Hola, quiero un diagnóstico gratuito de mi operación.");
const WA_MSG_EN = encodeURIComponent("Hello, I want a free diagnosis of my operation.");

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="w-8 h-8 flex items-center justify-center border transition-colors"
      style={{ borderColor: "var(--c-border)", color: "var(--c-muted)" }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-signal)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)")}
    >
      {theme === "dark" ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="w-8 h-8 flex items-center justify-center border transition-colors font-black text-[10px] tracking-widest"
      style={{
        fontFamily: "var(--font-mono)",
        borderColor: "var(--c-border)",
        color: "var(--c-muted)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--c-signal)";
        (e.currentTarget as HTMLElement).style.color = "var(--c-signal)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)";
        (e.currentTarget as HTMLElement).style.color = "var(--c-muted)";
      }}
      title={lang === "es" ? "Switch to English" : "Cambiar a español"}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}

export default function Navbar() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const pathname = usePathname();
  const isSoftware = pathname === "/software";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const anchorLinks = [
    { id: "services",  label: tx(t.nav.services, lang) },
    { id: "result",    label: tx(t.nav.cases,    lang) },
    { id: "for-whom",  label: tx(t.nav.forWhom,  lang) },
    { id: "cta-final", label: tx(t.nav.contact,  lang) },
  ];

  const waMsg = lang === "es" ? WA_MSG_ES : WA_MSG_EN;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b"
      style={{
        backgroundColor: scrolled
          ? "var(--c-bg)"
          : "color-mix(in srgb, var(--c-bg) 85%, transparent)",
        backdropFilter: "blur(8px)",
        borderColor: "var(--c-border)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="Praxisia"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-black text-lg tracking-[-0.07em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}
            >
              praxisia
            </span>
            <span
              className="text-[8px] tracking-[0.22em] uppercase mt-0.5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
            >
              {tx(t.nav.tagline, lang)}
            </span>
          </div>
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {isSoftware ? (
            <>
              <Link
                href="/"
                className="text-xs tracking-widest uppercase transition-colors flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--c-text)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--c-muted)")}
              >
                ← {lang === "es" ? "Inicio" : "Home"}
              </Link>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderBottom: "1px solid var(--c-signal)", paddingBottom: "2px" }}
              >
                {tx(t.nav.software, lang)}
              </span>
            </>
          ) : (
            <>
              {anchorLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-xs tracking-widest uppercase transition-colors"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--c-text)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--c-muted)")}
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/software"
                className="text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}
              >
                <span className="w-1.5 h-1.5 inline-block" style={{ backgroundColor: "var(--c-signal)" }} />
                {tx(t.nav.software, lang)}
              </Link>
            </>
          )}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-black text-sm px-5 py-2.5 text-white transition-colors ml-1"
            style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal-d)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal)")}
          >
            {tx(t.nav.cta, lang)}
          </a>

          <button
            onClick={() => setOpen(prev => !prev)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-xl"
            style={{ color: "var(--c-text)" }}
            aria-label="Abrir menú"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-b" style={{ backgroundColor: "var(--c-surface)", borderColor: "var(--c-border)" }}>
          {isSoftware ? (
            <>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="w-full px-6 py-4 text-left text-xs tracking-widest uppercase border-b flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)", borderColor: "var(--c-border)" }}
              >
                ← {lang === "es" ? "Inicio" : "Home"}
              </Link>
              <div
                className="w-full px-6 py-4 text-xs tracking-widest uppercase border-b"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderColor: "var(--c-border)", borderLeft: "2px solid var(--c-signal)" }}
              >
                {tx(t.nav.software, lang)}
              </div>
            </>
          ) : (
            <>
              {anchorLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full px-6 py-4 text-left text-xs tracking-widest uppercase border-b transition-colors"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--c-muted)",
                    borderColor: "var(--c-border)",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/software"
                onClick={() => setOpen(false)}
                className="w-full px-6 py-4 text-left text-xs tracking-widest uppercase border-b flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderColor: "var(--c-border)", display: "flex" }}
              >
                <span className="w-1.5 h-1.5 inline-block" style={{ backgroundColor: "var(--c-signal)" }} />
                {tx(t.nav.software, lang)}
              </Link>
            </>
          )}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-6 my-4 font-black text-sm px-5 py-3 text-center text-white"
            style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)" }}
          >
            {tx(t.nav.cta, lang)}
          </a>
        </div>
      )}
    </header>
  );
}
