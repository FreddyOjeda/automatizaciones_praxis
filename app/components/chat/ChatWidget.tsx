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
        <div className="chat-window fixed bottom-24 right-6 z-50 w-80 rounded-2xl 
                    backdrop-blur-xl
                    border dark:border-neutral-600
                    shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]
                    flex flex-col overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3
                        bg-linear-to-r from-cyan-400 to-purple-500
                        text-black">
                <span className="text-sm font-semibold">
                    Praxis Bot
                </span>
                <button
                    onClick={onClose}
                    className="text-black/70 hover:text-black transition"
                >
                    ✕
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm
                        ${msg.role === "user"
                                ? "ml-auto bg-linear-to-r from-cyan-400 to-purple-500 text-black shadow-md"
                                : "bg-neutral-400 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                            }`}
                    >
                        {msg.content}
                    </div>
                ))}

                {loading && (
                    <div className="text-xs text-neutral-500 animate-pulse">
                        Escribiendo…
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2 p-3">

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 rounded-xl bg-neutral-400 dark:bg-neutral-800 px-3 py-2 text-sm
                        placeholder-neutral-500
                        outline-none
                        focus:ring-2 focus:ring-cyan-400/50
                        transition"
                />

                <button
                    onClick={sendMessage}
                    className="px-4 rounded-xl
                        bg-linear-to-r from-cyan-400 to-purple-500
                        text-black text-sm font-semibold
                        hover:scale-105 active:scale-95
                        transition-all duration-200
                        shadow-[0_0_20px_-5px_rgba(34,211,238,0.7)]"
                >
                    Enviar
                </button>

            </div>
        </div>
    );

}
