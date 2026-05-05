"use client";

import Link from "next/link";
import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

const products = [
  { tag: "POS",      icon: "🖥" },
  { tag: "CATÁLOGO", icon: "📋" },
  { tag: "LANDING",  icon: "⚡" },
  { tag: "WEB",      icon: "🌐" },
  { tag: "SAAS",     icon: "☁" },
  { tag: "IA EDU",   icon: "🧠" },
];

export default function SoftwareTeaser() {
  const { lang } = useLang();
  const sp = t.softwarePage.teaserHome;

  return (
    <section
      id="software-teaser"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--c-bg)", borderTop: "1px solid var(--c-border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <span
              className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
              style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-surface)" }}
            >
              {tx(sp.label, lang)}
            </span>
            <h2
              className="font-black text-3xl md:text-4xl tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}
            >
              {tx(sp.headline, lang)}
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}
            >
              {tx(sp.sub, lang)}
            </p>
            <Link
              href="/software"
              className="inline-flex items-center gap-2 font-black text-sm px-6 py-3 text-white transition-colors"
              style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal-d)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal)")}
            >
              {tx(sp.link, lang)}
            </Link>
          </div>

          {/* Grid de productos — decorativo */}
          <div className="grid grid-cols-3 gap-0" style={{ border: "1px solid var(--c-border)" }}>
            {products.map((p, i) => (
              <Link
                key={p.tag}
                href="/software"
                className="p-5 flex flex-col items-center justify-center gap-2 transition-colors group"
                style={{
                  borderRight: i % 3 !== 2 ? `1px solid var(--c-border)` : undefined,
                  borderBottom: i < 3 ? `1px solid var(--c-border)` : undefined,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-surface)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--c-signal)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <span className="text-xl leading-none">{p.icon}</span>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase text-center"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
                >
                  {p.tag}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
