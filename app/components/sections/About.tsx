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
                className="py-28 px-6 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                ¿Quiénes somos en Praxis?
                            </h2>

                            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                                Automatizaciones Praxis nace con un objetivo claro: ayudar a las
                                empresas a aprovechar la inteligencia artificial y la
                                automatización de forma práctica, estratégica y alineada a su
                                operación real.
                            </p>

                            <p className="text-neutral-500 dark:text-neutral-500 leading-relaxed">
                                No creemos en soluciones genéricas. Cada implementación que
                                desarrollamos parte de un análisis profundo de la empresa, sus
                                procesos y sus objetivos, para construir sistemas que realmente
                                aporten valor y crezcan de manera conjunta.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="
                            p-10 rounded-3xl
                            border-2 border-neutral-200 dark:border-neutral-800
                            hover:-translate-y-1 hover:border-cyan-400/50
                            hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.25)]
                            bg-neutral-50 dark:bg-neutral-900/40
                            transition-all duration-300
                        ">
                            <h3 className="text-xl font-semibold mb-6 text-foreground">
                                Nuestra forma de trabajar
                            </h3>

                            <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <li>• Enfoque en resultados reales</li>
                                <li>• Automatización alineada a tu empresa</li>
                                <li>• Uso estratégico de la inteligencia artificial para mejorar la productividad</li>
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
