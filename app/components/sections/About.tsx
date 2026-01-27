"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="about"
                className="py-28 px-6 bg-black border-t border-neutral-900"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                ¿Quiénes somos en Praxis?
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Automatizaciones Praxis nace con un objetivo claro: ayudar a los
                                negocios a aprovechar la inteligencia artificial y la
                                automatización de forma práctica, estratégica y alineada a su
                                operación real.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                No creemos en soluciones genéricas. Cada implementación que
                                desarrollamos parte de un análisis profundo del negocio, sus
                                procesos y sus objetivos, para construir sistemas que realmente
                                aporten valor y crezcan junto con la empresa.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800">
                            <h3 className="text-xl font-semibold mb-6">
                                Nuestra forma de trabajar
                            </h3>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Enfoque en resultados reales</li>
                                <li>• Automatización alineada al negocio</li>
                                <li>• Uso estratégico de la inteligencia artificial</li>
                                <li>• Soluciones escalables y sostenibles</li>
                                <li>• Acompañamiento continuo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}
