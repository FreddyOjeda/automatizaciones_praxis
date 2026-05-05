"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

export default function ResultSection() {
  const { lang } = useLang();
  return (
    <section id="result" className="py-24 px-6" style={{ backgroundColor: "var(--c-bg)", borderTop: "1px solid var(--c-border)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <span
            className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-surface)" }}
          >
            {tx(t.result.label, lang)}
          </span>
          <h2 className="font-black text-4xl md:text-5xl tracking-tight leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
            {tx(t.result.headline, lang)}
          </h2>
          <p className="font-black text-3xl md:text-4xl tracking-tight leading-none mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--c-signal)" }}>
            {tx(t.result.sub, lang)}
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mb-12">
          {[
            { label: tx(t.result.client, lang), value: "GordoTech" },
            { label: tx(t.result.sector, lang), value: tx(t.result.sectorV, lang) },
            { label: tx(t.result.impl,   lang), value: tx(t.result.implV,   lang) },
          ].map(item => (
            <div key={item.label}>
              <span className="text-[10px] tracking-[0.2em] uppercase block mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
                {item.label}
              </span>
              <span className="font-black text-base" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_8px_1fr]">
          <div className="p-8 md:p-12" style={{ backgroundColor: "var(--c-surface)", border: "1px solid var(--c-border)", borderRight: "none" }}>
            <span className="text-[10px] tracking-[0.25em] uppercase block mb-6" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
              {tx(t.result.before, lang)}
            </span>
            <p className="font-black leading-none tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)", fontSize: "clamp(56px, 10vw, 96px)" }}>
              3h
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
              {tx(t.result.beforeL, lang)}
            </p>
          </div>

          <div style={{ backgroundColor: "var(--c-signal)" }} />

          <div className="p-8 md:p-12" style={{ backgroundColor: "var(--c-surface)", border: "1px solid var(--c-signal)", borderLeft: "none" }}>
            <span className="text-[10px] tracking-[0.25em] uppercase block mb-6" style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}>
              {tx(t.result.after, lang)}
            </span>
            <p className="font-black leading-none tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)", fontSize: "clamp(56px, 10vw, 96px)" }}>
              2min
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}>
              {tx(t.result.afterL, lang)}
            </p>
          </div>
        </div>

        <p className="text-[10px] tracking-wider mt-6" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
          {tx(t.result.note, lang)}
        </p>

      </div>
    </section>
  );
}
