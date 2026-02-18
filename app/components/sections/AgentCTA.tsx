"use client";

import { motion } from "framer-motion";

export default function AgentCTA() {
    return (
        <section
            id="agent"
            className="relative py-28 px-6 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden"
        >
            {/* Glow ambiental */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-150 h-150 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
                {/* Badge */}
                <div className="
                    inline-flex items-center gap-2 px-4 py-2 mb-6
                    rounded-full
                    border border-cyan-500/40
                    bg-cyan-500/10
                    text-cyan-600 dark:text-cyan-400
                    text-sm
                ">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Agente disponible
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    ¿Hablamos sobre tu empresa?
                </h2>

                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
                    Nuestro agente puede ayudarte a identificar oportunidades de
                    automatización, resolver dudas y recomendarte la mejor solución según
                    tu operación.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => {
                            window.dispatchEvent(new Event("open-chat"));
                        }}
                        className="
                            px-8 py-4 rounded-xl font-semibold
                            bg-gradient-to-r from-cyan-500 to-purple-600
                            text-white
                            shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)]
                        "
                    >
                        Hablar con un agente
                    </motion.button>

                    <button
                        onClick={() => {
                            const message = encodeURIComponent(
                                "Hola, quiero información sobre automatizaciones para mi empresa."
                            );

                            window.open(
                                `https://wa.me/573125946327?text=${message}`,
                                "_blank"
                            );
                        }}
                        className="
                            px-8 py-4 rounded-xl font-semibold text-white
                            border border-neutral-100 dark:border-neutral-700
                            bg-green-600
                            hover:bg-white/5
                            hover:border-green-600
                            hover:text-green-600
                            transition
                        "
                    >
                        <i className="fa-brands fa-whatsapp mx-2"></i>
                        Contacto por WhatsApp
                    </button>
                </div>

                {/* Nota */}
                <p className="mt-6 text-sm text-neutral-500">
                    Atención asistida por inteligencia artificial y equipo humano.
                </p>

                {/* -------- REDES SOCIALES -------- */}
                <div className="mt-10 border-neutral-200 dark:border-neutral-800 pt-5">
                    <p className="text-sm text-neutral-400 mb-6">
                        Síguenos en nuestras redes sociales
                    </p>

                    <div className="flex justify-center gap-6">
                        {/* Instagram */}
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.instagram.com/praxis_automatizaciones/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                w-14 h-14 flex items-center justify-center
                                rounded-xl
                                border border-neutral-300 dark:border-neutral-700
                                bg-neutral-100 dark:bg-neutral-900
                                hover:border-pink-500 hover:text-pink-500
                                transition text-xl
                            "
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </motion.a>

                        {/* Facebook */}
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.facebook.com/profile.php?id=61585835588023"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                w-14 h-14 flex items-center justify-center
                                rounded-xl
                                border border-neutral-300 dark:border-neutral-700
                                bg-neutral-100 dark:bg-neutral-900
                                hover:border-blue-500 hover:text-blue-500
                                transition text-xl
                            "
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </motion.a>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
