"use client";
import { motion } from "framer-motion";
export default function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="contact"
                className="py-28 px-6 bg-black border-t border-neutral-900"
            >
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Hablemos sobre tu negocio
                    </h2>
                    <p className="text-lg text-gray-300 mb-12">
                        Cuéntanos qué tipo de negocio tienes y qué te gustaría automatizar.
                        Te ayudamos a identificar la mejor solución para tu operación.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
                            Agendar asesoría
                        </button>

                        <button className="px-8 py-4 rounded-xl border border-neutral-700 hover:bg-white/5 transition">
                            Hablar por WhatsApp
                        </button>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}
