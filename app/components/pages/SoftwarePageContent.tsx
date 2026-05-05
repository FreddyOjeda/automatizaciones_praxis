"use client";

import Link from "next/link";
import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

const WA_NUMBER = "573125946327";
const WA_MSG_ES = encodeURIComponent("Hola, quiero hablar sobre un proyecto de software.");
const WA_MSG_EN = encodeURIComponent("Hello, I want to talk about a software project.");

function RegMark({ pos }: { pos: string }) {
  return (
    <div className={`absolute w-6 h-6 pointer-events-none ${pos}`}>
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-20" style={{ backgroundColor: "var(--c-signal)", transform: "translateY(-50%)" }} />
      <div className="absolute left-1/2 top-0 bottom-0 w-px opacity-20" style={{ backgroundColor: "var(--c-signal)", transform: "translateX(-50%)" }} />
    </div>
  );
}

export default function SoftwarePageContent() {
  const { lang } = useLang();
  const sp = t.softwarePage;
  const products = sp.products;
  const waMsg = lang === "es" ? WA_MSG_ES : WA_MSG_EN;

  const headline = tx(sp.headline, lang).split("\n");

  return (
    <div style={{ backgroundColor: "var(--c-bg)" }}>

      {/* ── Back bar ── */}
      <div
        className="border-b"
        style={{ backgroundColor: "var(--c-surface)", borderColor: "var(--c-border)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-10 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-[10px] tracking-widest uppercase transition-colors group"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--c-signal)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--c-muted)")}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 1L3 5l4 4"/>
            </svg>
            {lang === "es" ? "Volver a inicio" : "Back to home"}
          </Link>
          <span className="mx-3" style={{ color: "var(--c-border)" }}>|</span>
          <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}>
            {tx(sp.label, lang)}
          </span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-end px-6 pt-16 pb-16 overflow-hidden"
        style={{ backgroundColor: "var(--c-bg)", borderBottom: "1px solid var(--c-border)" }}
      >
        <RegMark pos="top-6 left-6" />
        <RegMark pos="top-6 right-6" />

        <div className="max-w-5xl mx-auto w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
            <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: "var(--c-muted)" }}>Praxisia</Link>
            <span style={{ color: "var(--c-border)" }}>—</span>
            <span style={{ color: "var(--c-signal)" }}>{tx(sp.label, lang)}</span>
          </nav>

          <span
            className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
            style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-surface)" }}
          >
            {tx(sp.label, lang)}
          </span>

          <h1
            className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}
          >
            {headline.map((line, i) => (
              <span key={i}>{line}{i < headline.length - 1 && <br />}</span>
            ))}
          </h1>

          <p className="text-lg md:text-xl max-w-xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}>
            {tx(sp.sub, lang)}
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-black text-base px-8 py-4 text-white transition-colors"
            style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal-d)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal)")}
          >
            <i className="fa-brands fa-whatsapp" />
            {tx(sp.cta, lang)}
          </a>
        </div>
      </section>

      {/* ── Grid de productos ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--c-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <article
                key={i}
                className="p-8 flex flex-col transition-colors group"
                style={{ border: "1px solid var(--c-border)", backgroundColor: "var(--c-bg)" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c-signal)";
                  el.style.backgroundColor = "var(--c-surface)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c-border)";
                  el.style.backgroundColor = "var(--c-bg)";
                }}
              >
                {/* Tag */}
                <span
                  className="text-[10px] tracking-[0.25em] uppercase block mb-6"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}
                >
                  {tx(product.tag, lang)}
                </span>

                {/* Título */}
                <h2
                  className="font-black text-2xl leading-tight mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}
                >
                  {tx(product.title, lang)}
                </h2>

                {/* Descripción */}
                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}
                >
                  {tx(product.desc, lang)}
                </p>

                {/* Divider */}
                <div className="h-px mb-6" style={{ backgroundColor: "var(--c-border)" }} />

                {/* Features */}
                <div className="mb-6">
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase block mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
                  >
                    {tx(sp.featLabel, lang)}
                  </span>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {product.features[lang].map((feat: string) => (
                      <li
                        key={feat}
                        className="text-[10px] tracking-wider flex items-center gap-2"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
                      >
                        <span className="w-2 h-px inline-block flex-shrink-0" style={{ backgroundColor: "var(--c-signal)" }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal para */}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid var(--c-border)" }}
                >
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase block mb-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}
                  >
                    {tx(sp.forLabel, lang)}
                  </span>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)" }}
                  >
                    {tx(product.for, lang)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="text-xs tracking-[0.25em] uppercase px-4 py-2 inline-block mb-8"
              style={{ fontFamily: "var(--font-mono)", color: "var(--c-signal)", borderLeft: "2px solid var(--c-signal)", backgroundColor: "var(--c-bg)" }}
            >
              {tx(sp.label, lang)}
            </span>
            <h2
              className="font-black text-4xl md:text-5xl tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--c-text)" }}
            >
              {tx(sp.ctaSection.headline, lang)}
            </h2>
          </div>
          <div>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--c-muted)" }}
            >
              {tx(sp.ctaSection.sub, lang)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-black text-base px-8 py-4 text-white transition-colors"
                style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal-d)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal)")}
              >
                <i className="fa-brands fa-whatsapp" />
                {tx(sp.ctaSection.btn, lang)}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 transition-colors"
                style={{ fontFamily: "var(--font-display)", color: "var(--c-text)", border: "1px solid var(--c-border)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-signal)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)")}
              >
                ← Praxisia.org
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
