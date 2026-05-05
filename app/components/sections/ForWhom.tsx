"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

export default function ForWhom() {
  const { lang } = useLang();
  const sectors = t.forWhom.sectors;

  return (
    <section id="for-whom" className="py-24 px-6" style={{ backgroundColor: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <span
            className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-bg)" }}
          >
            {tx(t.forWhom.label, lang)}
          </span>
          <h2 className="font-black text-4xl md:text-5xl tracking-tight leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
            {tx(t.forWhom.headline, lang)}
          </h2>
          <p className="text-lg mt-4 max-w-lg" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}>
            {tx(t.forWhom.sub, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ border: "1px solid var(--c-border)" }}>
          {sectors.map((sector, i) => (
            <div
              key={sector.tag}
              className="p-8 transition-colors"
              style={{
                backgroundColor: sector.featured ? "var(--c-bg)" : "transparent",
                borderRight: i % 3 !== 2 ? `1px solid var(--c-border)` : undefined,
                borderBottom: i < 3 ? `1px solid var(--c-border)` : undefined,
                borderTop: sector.featured ? `2px solid var(--c-signal)` : undefined,
              }}
              onMouseEnter={e => { if (!sector.featured) (e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-bg)"; }}
              onMouseLeave={e => { if (!sector.featured) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              <span className="text-[10px] tracking-[0.25em] uppercase block mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}>
                {sector.tag}
                {sector.featured && <span style={{ color: "var(--c-muted)" }}> {tx(t.forWhom.ref, lang)}</span>}
              </span>
              <h3 className="font-black text-base leading-tight mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
                {tx(sector.title, lang)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}>
                {tx(sector.desc, lang)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
