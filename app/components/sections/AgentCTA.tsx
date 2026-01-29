"use client";

import { motion } from "framer-motion";

export default function AgentCTA() {
    return (
        <section
            id="agent"
            className="relative py-28 px-6 border-t border-neutral-900 overflow-hidden"
        >
            {/* Glow ambiental */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Agente disponible
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ¿Hablamos sobre tu negocio?
                </h2>

                <p className="text-lg text-gray-300 mb-10">
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
                            bg-gradient-to-r from-cyan-400 to-purple-500
                            text-black
                            shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)]
                        "
                    >
                        Hablar con un agente
                    </motion.button>


                    <button
                        onClick={() => {
                            const message = encodeURIComponent(
                                "Hola, quiero información sobre automatizaciones para mi negocio."
                            );

                            window.open(
                                `https://wa.me/573125946327?text=${message}`,
                                "_blank"
                            );
                        }}
                        className="
                            px-8 py-4 rounded-xl
                            border border-neutral-700
                            hover:bg-white/5 transition
                        "
                    >
                        Contacto por WhatsApp
                    </button>

                </div>

                {/* Nota futura */}
                <p className="mt-6 text-sm text-gray-500">
                    Atención asistida por inteligencia artificial y equipo humano.
                </p>
            </motion.div>
        </section>
    );
}
