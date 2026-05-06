"use client";

import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

const WA_NUMBER = "573112195155";
const WA_MSG_ES = encodeURIComponent("Hola, quiero un diagnóstico gratuito de mi operación.");
const WA_MSG_EN = encodeURIComponent("Hello, I want a free diagnosis of my operation.");

function RegMark({ pos }: { pos: string }) {
  return (
    <div className={`absolute w-6 h-6 pointer-events-none ${pos}`}>
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-25" style={{ backgroundColor: "var(--c-signal)", transform: "translateY(-50%)" }} />
      <div className="absolute left-1/2 top-0 bottom-0 w-px opacity-25" style={{ backgroundColor: "var(--c-signal)", transform: "translateX(-50%)" }} />
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const waMsg = lang === "es" ? WA_MSG_ES : WA_MSG_EN;

  const headline = tx(t.hero.headline, lang).split("\n");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden"
      style={{ backgroundColor: "var(--c-bg)" }}
    >
      <RegMark pos="top-20 left-6" />
      <RegMark pos="top-20 right-6" />
      <RegMark pos="bottom-10 left-6" />
      <RegMark pos="bottom-10 right-6" />

      <div className="max-w-5xl mx-auto w-full py-24 md:py-32">

        {/* Etiqueta */}
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase px-4 py-2"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-surface)" }}
          >
            {tx(t.hero.label, lang)}
          </span>
        </div>

        {/* Titular */}
        <h1
          className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}
        >
          {headline.map((line, i) => (
            <span key={i}>{line}{i < headline.length - 1 && <br />}</span>
          ))}
        </h1>

        {/* Subtítulo */}
        <p
          className="text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}
        >
          {tx(t.hero.sub, lang)}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-black text-base px-8 py-4 text-white transition-colors"
            style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal-d)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal)")}
          >
            {tx(t.hero.cta1, lang)}
          </a>
          <button
            onClick={() => scrollTo("solution")}
            className="inline-flex items-center justify-center font-bold text-base px-8 py-4 transition-colors"
            style={{ fontFamily: "var(--font-display)", color: "var(--c-text)", border: "1px solid var(--c-border)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-signal)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)")}
          >
            {tx(t.hero.cta2, lang)}
          </button>
        </div>

        {/* Métricas */}
        <div className="mt-16 pt-8 flex flex-wrap gap-8 items-center" style={{ borderTop: "1px solid var(--c-border)" }}>
          {[
            { stat: "24/7",  label: tx(t.hero.stat1l, lang) },
            { stat: "70%",   label: tx(t.hero.stat2l, lang) },
            { stat: "2 min", label: tx(t.hero.stat3l, lang) },
          ].map(item => (
            <div key={item.stat} className="flex items-center gap-3">
              <span className="font-black text-2xl tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--c-signal)" }}>
                {item.stat}
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
