"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/app/i18n/translations";

interface LangCtx { lang: Lang; toggle: () => void }

const LangContext = createContext<LangCtx>({ lang: "es", toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("praxisia-lang") as Lang | null;
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const toggle = () =>
    setLang(prev => {
      const next: Lang = prev === "es" ? "en" : "es";
      localStorage.setItem("praxisia-lang", next);
      return next;
    });

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
