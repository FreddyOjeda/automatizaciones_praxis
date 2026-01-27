"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatLauncher() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Chat Window */}
            <AnimatePresence>
                {open && <ChatWindow onClose={() => setOpen(false)} />}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.button
                    onClick={() => setOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                        flex items-center gap-3
                        px-4 py-3
                        rounded-full
                        bg-black border border-neutral-700
                        shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)]
                    "
                >
                    {/* Logo / Avatar */}
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src="/praxis-removebg-preview.png" // tú puedes cambiarla
                            alt="Agente Praxis"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Texto */}
                    <span className="text-sm font-medium text-white">
                        ¿Chateamos?
                    </span>
                </motion.button>
            </motion.div>
        </>
    );
}
