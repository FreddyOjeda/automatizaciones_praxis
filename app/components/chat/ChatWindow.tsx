"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChatMessage } from "./chat.types";
import ChatMessageBubble from "./ChatMessage";
import { getAIResponse } from "./chat.logic";

interface Props {
    onClose: () => void;
}

export default function ChatWindow({ onClose }: Props) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        setMessages([
            {
                id: "welcome",
                role: "bot",
                content:
                    "Hola 👋 Soy el agente de Praxis. ¿Te gustaría saber cómo podemos automatizar tu negocio?",
            },
        ]);
    }, []);

    function sendMessage() {
        if (!input.trim()) return;

        const userMsg: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        setTimeout(() => {
            const botMsg: ChatMessage = {
                id: crypto.randomUUID(),
                role: "bot",
                content: getAIResponse(userMsg.content),
            };

            setMessages((prev) => [...prev, botMsg]);
        }, 800);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="
                    fixed bottom-24 right-6 z-50
                    w-[360px] h-[520px]
                    bg-neutral-950
                    border border-white/10
                    rounded-2xl
                    shadow-2xl
                    flex flex-col
                    overflow-hidden
                "
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="font-semibold">Praxis IA</span>
                <button onClick={onClose} className="text-gray-400 hover:text-white">
                    ✕
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                {messages.map((msg) => (
                    <ChatMessageBubble key={msg.id} message={msg} />
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="
                        flex-1 px-4 py-3 rounded-xl
                        bg-black border border-white/10
                        focus:outline-none focus:border-cyan-400
                        text-sm
                    "
                />
                <button
                    onClick={sendMessage}
                    className="px-4 rounded-xl bg-cyan-400 text-black font-semibold"
                >
                    ➤
                </button>
            </div>
        </motion.div>
    );
}
