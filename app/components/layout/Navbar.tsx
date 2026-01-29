"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setOpen(false);
    };

    const links = [
        { id: "about", label: "Nosotros" },
        { id: "services", label: "Servicios" },
        { id: "solutions", label: "Soluciones" },
        { id: "plans", label: "Planes" },
        { id: "contact", label: "Contacto" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-neutral-800">
            <nav className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <button
                    onClick={() => scrollToSection("hero")}
                    className="font-bold text-lg tracking-wide hover:opacity-80 transition"
                >
                    Praxis
                </button>

                {/* Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm text-gray-300">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="hover:text-white transition"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden text-white text-2xl"
                    aria-label="Abrir menú"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/70"
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Panel */}
                        <motion.div
                            className="
                                absolute top-0 right-0 h-full w-full max-w-sm
                                bg-[#05070f]
                                border-l border-white/10
                                shadow-2xl
                                flex flex-col
                            "
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                            }}
                        >
                            {/* Header */}
                            <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
                                <span className="font-semibold text-white">
                                    Praxis
                                </span>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2xl text-gray-400 hover:text-white transition"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col divide-y divide-white/10">
                                {links.map(link => (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className="
                                            px-6 py-4
                                            text-center text-lg
                                            text-gray-300
                                            hover:text-white
                                            hover:bg-white/5
                                            bg-black/80
                                            transition
                                        "
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
