"use client";

import { useEffect, useState } from "react";
import ChatWidget from "./ChatWidget";

export default function ChatLauncher() {
    const [open, setOpen] = useState(false);

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
                className="
                    fixed bottom-6 right-6 z-50
                    flex items-center gap-3
                    rounded-full
                    px-5 py-3
                    bg-linear-to-r from-cyan-400 to-purple-500
                    font-semibold
                    shadow-[0_0_30px_-8px_rgba(34,211,238,0.7)]
                    hover:scale-105
                    active:scale-95
                    transition-all duration-300
                "
            >
                <img
                    src="/praxis-removebg-preview.png"
                    alt="Praxis"
                    className="w-10 h-10 rounded-full"
                />
                <span className="text-sm">¿Chateamos?</span>
            </button>


            {open && <ChatWidget onClose={() => setOpen(false)} />}
        </>
    );
}
