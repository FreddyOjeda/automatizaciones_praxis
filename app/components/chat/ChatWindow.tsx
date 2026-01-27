"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChatMessage } from "./chat.types";
import ChatMessageBubble from "./ChatMessage";

interface Props {
    onClose: () => void;
}

export default function ChatWindow({ onClose }: Props) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    useEffect(() => {
        setMessages([
            {
                id: "welcome",
                role: "bot",
                content:
                    "Hola 👋 Soy el asistente de Praxis. Cuéntame sobre tu negocio y en qué te gustaría automatizar.",
                timestamp: new Date(),
            },
        ]);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="
                fixed bottom-24 right-6 z-50
                w-[360px] h-[520px]
                bg-neutral-950
                border border-neutral-800
                rounded-2xl
                shadow-2xl
                flex flex-col
                overflow-hidden
            "
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                <span className="font-semibold">Praxis IA</span>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white"
                >
                    ✕
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                {messages.map((msg) => (
                    <ChatMessageBubble key={msg.id} message={msg} />
                ))}
            </div>

            {/* Input (solo UI por ahora) */}
            <div className="p-3 border-t border-neutral-800">
                <input
                    placeholder="Escribe tu mensaje..."
                    className="
                        w-full px-4 py-3
                        rounded-xl
                        bg-black
                        border border-neutral-700
                        focus:outline-none focus:border-cyan-500
                        text-sm
                    "
                />
            </div>
        </motion.div>
    );
}
