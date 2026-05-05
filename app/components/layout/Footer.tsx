"use client";

import Image from "next/image";
import { useTheme } from "../ui/ThemeProvider";
import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

const navLinks = [
  { href: "#services",  key: "services"  as const },
  { href: "#result",    key: "cases"     as const },
  { href: "#for-whom",  key: "forWhom"   as const },
  { href: "#cta-final", key: "contact"   as const },
];

export default function Footer() {
  const { theme } = useTheme();
  const { lang } = useLang();

  return (
    <footer className="border-t" style={{ backgroundColor: "var(--c-bg)", borderColor: "var(--c-border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="Praxisia"
                width={22}
                height={32}
                className="object-contain"
              />
              <span className="font-black text-lg tracking-[-0.06em]" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
                praxisia
              </span>
            </div>
            <p className="text-[9px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
              {tx(t.footer.tagline, lang)}
            </p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors hover:opacity-80"
                style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
              >
                {tx(t.nav[link.key], lang)}
              </a>
            ))}
          </nav>

          {/* Contacto */}
          <div className="flex flex-col gap-2">
            <a href="mailto:hola@praxisia.org" className="text-xs tracking-wider hover:opacity-80 transition-opacity" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
              automatizacionespraxisthinks@gmail.com
            </a>
            <a href="https://www.instagram.com/praxisia.ai/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider hover:opacity-80 transition-opacity" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
              @praxisia.ai
            </a>
            <span className="text-xs tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>praxisia.org</span>
          </div>
        </div>

        <div className="h-px mb-8" style={{ backgroundColor: "var(--c-border)" }} />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[10px] tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
            © {new Date().getFullYear()} Praxisia. {tx(t.footer.copy, lang)}
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
            praxisia.org
          </p>
        </div>

      </div>
    </footer>
  );
}
