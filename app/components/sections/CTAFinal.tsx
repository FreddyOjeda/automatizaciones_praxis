"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

const WA_NUMBER = "573112195155";
const WA_MSG_ES = encodeURIComponent("Hola, quiero un diagnóstico gratuito de mi operación.");
const WA_MSG_EN = encodeURIComponent("Hello, I want a free diagnosis of my operation.");

export default function CTAFinal() {
  const { lang } = useLang();
  const waMsg = lang === "es" ? WA_MSG_ES : WA_MSG_EN;

  return (
    <section id="cta-final" className="relative overflow-hidden" style={{ borderTop: "1px solid var(--c-border)" }}>
      <div className="grid md:grid-cols-2 min-h-[520px]">

        {/* Panel izquierdo */}
        <div className="px-10 py-16 md:px-16 md:py-24 flex flex-col justify-center relative" style={{ backgroundColor: "var(--c-bg)" }}>
          <span
            className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8 self-start"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-surface)" }}
          >
            {tx(t.cta.label, lang)}
          </span>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}>
            {tx(t.cta.heading, lang)}
          </h2>
        </div>

        {/* Panel derecho — siempre Signal Blue */}
        <div className="px-10 py-16 md:px-16 md:py-24 flex flex-col justify-center relative" style={{ backgroundColor: "#2E6BFF" }}>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}>
            {tx(t.cta.sub, lang)}
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-black text-base px-8 py-5 self-start mb-6 transition-colors"
            style={{ fontFamily: "var(--font-display)", backgroundColor: "#fff", color: "#2E6BFF" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#E2E6EC")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#fff")}
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            {tx(t.cta.btn, lang)}
          </a>
          <a
            href="https://www.instagram.com/praxisia.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase self-start opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontFamily: "var(--font-mono)", color: "#fff" }}
          >
            <i className="fa-brands fa-instagram" />
            @praxisia.ai
          </a>
          <div className="absolute bottom-8 right-8 text-xs tracking-widest uppercase opacity-20" style={{ fontFamily: "var(--font-mono)", color: "#fff" }}>
            praxisia.org
          </div>
        </div>

      </div>
    </section>
  );
}
