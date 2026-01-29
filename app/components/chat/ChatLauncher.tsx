"use client";

import { useEffect, useState } from "react";
import ChatWidget from "./ChatWidget";

export default function ChatLauncher() {
    const [open, setOpen] = useState(false);

    // 👇 AQUÍ VA (ESTE ERA EL DUDOSO)
    useEffect(() => {
        const openChat = () => {
            setOpen((prev) => (prev ? prev : true));
        };

        window.addEventListener("open-chat", openChat);

        return () => {
            window.removeEventListener("open-chat", openChat);
        };
    }, []);


    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-neutral-900 px-4 py-3 shadow-xl border border-neutral-700 hover:bg-neutral-800 transition"
            >
                <img
                    src="/praxis-removebg-preview.png"
                    alt="Praxis"
                    className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-white">¿Chateamos?</span>
            </button>

            {open && <ChatWidget onClose={() => setOpen(false)} />}
        </>
    );
}
