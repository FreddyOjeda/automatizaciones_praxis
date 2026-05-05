"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

export default function Problem() {
  const { lang } = useLang();
  return (
    <section
      id="problem"
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--c-surface)", borderTop: "1px solid var(--c-border)", borderLeft: "4px solid var(--c-signal)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative inline-block mb-6">
          <span
            className="font-black leading-none tracking-tight select-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--c-text)", fontSize: "clamp(120px, 20vw, 220px)", lineHeight: 1 }}
          >
            60%
          </span>
          <div className="absolute left-0 right-0 h-1 pointer-events-none" style={{ top: "52%", backgroundColor: "var(--c-signal)", opacity: 0.4 }} />
        </div>

        <p className="text-xl md:text-2xl max-w-lg leading-snug mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}>
          {tx(t.problem.copy, lang)}
        </p>
        <p className="font-black text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
          {tx(t.problem.emphasis, lang)}
        </p>
        <p className="text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
          {tx(t.problem.remate, lang)}
        </p>
      </div>
    </section>
  );
}
