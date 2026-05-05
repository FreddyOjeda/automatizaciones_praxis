"use client";

import { useEffect, useRef, useState } from "react";
import { t, tx, type Lang } from "@/app/i18n/translations";

type Message = { role: string; content: string };

export default function ChatWidget({ onClose, lang }: { onClose: () => void; lang: Lang }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: tx(t.chat.greeting, lang) },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    const next = [...messages, { role: "user", content: input }];
    setMessages(next);
    setInput("");
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: next }),
    });
    const data = await res.json();
    setMessages([...next, { role: "assistant", content: data.message }]);
    setLoading(false);
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 animate-pulse" style={{ backgroundColor: "var(--c-signal)" }} />
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--c-text)", fontSize: "0.7rem", letterSpacing: "0.2em" }}>
            PRAXISIA BOT
          </span>
        </div>
        <button onClick={onClose} style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)", fontSize: "0.75rem" }}>✕</button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.role === "user" ? "msg-user" : "msg-ai"}`}>
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="animate-pulse text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--c-muted)" }}>
            {tx(t.chat.writing, lang)}
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder={tx(t.chat.placeholder, lang)}
        />
        <button onClick={sendMessage}>{tx(t.chat.send, lang)}</button>
      </div>
    </div>
  );
}
