"use client";

import { motion } from "framer-motion";

export function Stagger({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: { staggerChildren: 0.12 },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
