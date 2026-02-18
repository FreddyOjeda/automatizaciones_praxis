"use client";

import { Stagger, StaggerItem } from "../ui/Stagger";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="services"
                className="py-28 px-6 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <FadeIn delay={0.1}>
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                ¿Qué hacemos en Praxis?
                            </h2>

                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Diseñamos e implementamos soluciones de automatización e inteligencia
                                artificial enfocadas en mejorar la atención al cliente, potenciar
                                las ventas y optimizar los procesos internos de las empresas.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
                        <Stagger>
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Card base style */}
                                {[
                                    {
                                        title: "Atención al cliente con IA",
                                        description:
                                            "Implementamos agentes inteligentes y chatbots omnicanal capaces de atender clientes 24/7 a través de WhatsApp, web y redes sociales, manteniendo conversaciones naturales y efectivas.",
                                        hover: "hover:border-cyan-400/50",
                                    },
                                    {
                                        title: "Automatización de ventas",
                                        description:
                                            "Automatizamos flujos de venta, calificación de leads y seguimiento comercial para convertir conversaciones en oportunidades reales de negocio.",
                                        hover: "hover:border-purple-400/50",
                                    },
                                    {
                                        title: "Procesos internos y operaciones",
                                        description:
                                            "Automatizamos tareas operativas como reportes, control de inventarios, integraciones entre sistemas y flujos internos para reducir errores y mejorar la eficiencia.",
                                        hover: "hover:border-green-400/50",
                                    },
                                    {
                                        title: "Integraciones multicanal",
                                        description:
                                            "Conectamos tu operación con múltiples canales como WhatsApp, Facebook, Instagram y Telegram, centralizando la atención en una sola infraestructura inteligente.",
                                        hover: "hover:border-blue-400/50",
                                    },
                                ].map((item, index) => (
                                    <StaggerItem key={index}>
                                        <FadeIn delay={0.2 + index * 0.1}>
                                            <div
                                                className={`
                                                    relative p-8 rounded-2xl
                                                    border-2 border-neutral-200 dark:border-neutral-800
                                                    bg-neutral-50 dark:bg-neutral-900/40
                                                    transition-all duration-300
                                                    hover:-translate-y-1
                                                    hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.25)]
                                                    ${item.hover}
                                                `}
                                            >
                                                <h3 className="text-xl font-semibold mb-4 text-foreground">
                                                    {item.title}
                                                </h3>

                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </FadeIn>
                                    </StaggerItem>
                                ))}
                            </div>
                        </Stagger>

                        <div className="hidden lg:block" />
                    </div>
                </div>
            </section>
        </motion.section>
    );
}
