"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

export default function SolutionPillars() {
  const { lang } = useLang();
  const pillars = t.solution.pillars;

  return (
    <section id="solution" className="py-24 px-6" style={{ backgroundColor: "var(--c-bg)", borderTop: "1px solid var(--c-border)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <span
            className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-surface)" }}
          >
            {tx(t.solution.label, lang)}
          </span>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
            {tx(t.solution.headline, lang)}
          </h2>
          <p className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--c-signal)" }}>
            {tx(t.solution.sub, lang)}
          </p>
        </div>

        <div className="grid md:grid-cols-3" style={{ border: "1px solid var(--c-border)" }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="p-8 transition-colors"
              style={{ borderRight: i < 2 ? `1px solid var(--c-border)` : undefined }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-surface)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
            >
              <div className="pl-4 mb-6" style={{ borderLeft: "2px solid var(--c-signal)" }}>
                <span className="text-xs tracking-[0.2em] uppercase block mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}>
                  {pillar.number}
                </span>
                <h3 className="font-black text-xl leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
                  {tx(pillar.title, lang)}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}>
                {tx(pillar.desc, lang)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
