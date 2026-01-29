"use client";
import { useEffect, useRef } from "react";

import { useState } from "react";

type Message = {
    role: string;
    content: string;
};

export default function ChatWidget({ onClose }: { onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hola 👋 Soy el asistente de Praxis. ¿En qué te puedo ayudar hoy?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);


    async function sendMessage() {
        console.log("Entro al metoodo")
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: newMessages }),
        });

        const data = await res.json();

        setMessages([
            ...newMessages,
            { role: "assistant", content: data.message },
        ]);
        setLoading(false);
    }

    return (
        <div className="chat-window fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-black border border-neutral-800 shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="chat-header flex items-center justify-between px-4 py-3 
                            bg-linear-to-r from-cyan-400 to-purple-500 text-black">
                <span className="text-sm font-medium"><strong>Praxis Bot</strong></span>
                <button onClick={onClose}>✕</button>
            </div>

            {/* Messages */}
            <div className="chat-messages flex-1 p-4 space-y-3 overflow-y-auto text-sm">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-[85%] px-3 py-2 rounded-xl ${msg.role === "user"
                            ? "ml-auto bg-white text-black"
                            : "bg-neutral-800"
                            }`}
                    >
                        {msg.content}
                    </div>
                ))}
                {loading && (
                    <div className="text-xs text-neutral-400">Escribiendo…</div>
                )}
                {/* ancla */}
                <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="chat-input flex gap-2 p-3 border-t border-neutral-800">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 rounded-lg bg-neutral-900 px-3 py-2 text-sm outline-none"
                />
                <button
                    onClick={sendMessage}
                    className="px-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-sm"
                >
                    <strong>Enviar</strong>
                </button>
            </div>
        </div>
    );
}
