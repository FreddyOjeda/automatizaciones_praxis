"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "¿Qué es la automatización empresarial?",
        answer:
            "La automatización empresarial consiste en implementar sistemas que ejecutan tareas repetitivas de forma automática, reduciendo errores humanos y aumentando la eficiencia operativa. En Praxis utilizamos herramientas como n8n e inteligencia artificial para optimizar procesos empresariales en Colombia.",
    },
    {
        question: "¿Qué es n8n y cómo lo usan en las empresas?",
        answer:
            "n8n es una herramienta de automatización que permite conectar múltiples aplicaciones y crear flujos de trabajo personalizados. Lo utilizamos para integrar CRMs, WhatsApp, sistemas contables, plataformas de ventas y herramientas internas.",
    },
    {
        question: "¿Cuánto cuesta implementar automatización en una empresa?",
        answer:
            "El costo depende del nivel de complejidad del proceso, las integraciones necesarias y el volumen de operaciones. En Praxis ofrecemos planes adaptados a pequeñas, medianas y grandes empresas.",
    },
    {
        question: "¿La automatización reemplaza empleados?",
        answer:
            "No reemplaza talento humano, lo potencia. La automatización elimina tareas repetitivas para que los equipos puedan enfocarse en actividades estratégicas y de mayor valor.",
    },
    {
        question: "¿Puedo automatizar WhatsApp y mi CRM?",
        answer:
            "Sí. Podemos integrar WhatsApp con CRM, sistemas de soporte, plataformas de ventas y herramientas internas para automatizar respuestas, seguimiento de clientes y procesos comerciales.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="relative py-24 px-6 md:px-12"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Preguntas Frecuentes sobre Automatización Empresarial
                </motion.h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/60 backdrop-blur"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left flex justify-between items-center"
                            >
                                <h3 className="text-lg font-semibold">
                                    {faq.question}
                                </h3>
                                <span className="text-xl">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 text-neutral-300 leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}