"use client";

import { useEffect, useState } from "react";
import ChatWidget from "./ChatWidget";
import { useLang } from "../ui/LanguageProvider";
import { t, tx } from "@/app/i18n/translations";

export default function ChatLauncher() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(prev => prev ? prev : true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 text-white font-black text-sm transition-colors"
        style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--c-signal)", boxShadow: "0 4px 24px rgba(46,107,255,0.4)" }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal-d)")}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--c-signal)")}
      >
        <span className="w-2 h-2 bg-white animate-pulse inline-block flex-shrink-0" />
        {tx(t.chat.bubble, lang)}
      </button>

      {open && <ChatWidget onClose={() => setOpen(false)} lang={lang} />}
    </>
  );
}
