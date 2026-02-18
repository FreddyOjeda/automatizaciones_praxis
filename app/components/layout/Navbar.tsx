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
        { id: "agent", label: "Contacto" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur dark:border-neutral-800 bg-background/40">
            <nav className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <button
                    onClick={() => scrollToSection("hero")}
                    className="font-bold text-lg tracking-wide hover:opacity-80 transition text-foreground"
                >
                    Automatizaciones Praxis
                </button>

                {/* Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm text-neutral-600 dark:text-neutral-300">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="hover:text-foreground transition"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="md:hidden text-foreground text-2xl transition"
                    aria-label="Toggle menú"
                >
                    {open ? "✕" : "☰"}
                </button>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="
                            md:hidden
                            flex flex-col
                            divide-y divide-neutral-200 dark:divide-neutral-800 
                            border-b border-neutral-200 dark:border-neutral-800
                        "
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 30,
                        }}
                    >
                        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
                            {links.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="
                                    px-6 py-4
                                    text-center text-lg
                                    text-neutral-600 dark:text-neutral-300
                                    hover:text-foreground
                                    hover:bg-neutral-100 dark:hover:bg-neutral-900
                                    transition
                                "
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
