"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

export default function Services() {
  const { lang } = useLang();
  const items = t.services.items;

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <span
            className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-bg)" }}
          >
            {tx(t.services.label, lang)}
          </span>
          <h2 className="font-black text-4xl md:text-5xl tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
            {tx(t.services.headline, lang).split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((service, i) => (
            <div
              key={i}
              className="p-8 flex flex-col transition-colors"
              style={{ border: "1px solid var(--c-border)", backgroundColor: "var(--c-bg)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-signal)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)")}
            >
              <span className="text-[10px] tracking-[0.2em] uppercase block mb-6" style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}>
                {tx(service.tag, lang)}
              </span>
              <h3 className="font-black text-lg leading-tight mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
                {tx(service.title, lang)}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}>
                {tx(service.desc, lang)}
              </p>
              <ul className="space-y-2">
                {service.items[lang].map(item => (
                  <li key={item} className="text-[10px] tracking-wider flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
                    <span className="w-3 h-px inline-block flex-shrink-0" style={{ backgroundColor: "var(--c-signal)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
