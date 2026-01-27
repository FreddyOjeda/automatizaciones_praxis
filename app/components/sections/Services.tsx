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
                className="py-28 px-6 bg-neutral-950 border-t border-neutral-900"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <FadeIn delay={0.1}>
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                ¿Qué hacemos en Praxis?
                            </h2>
                            <p className="text-lg text-gray-300">
                                Diseñamos e implementamos soluciones de automatización e inteligencia
                                artificial enfocadas en mejorar la atención al cliente, potenciar
                                las ventas y optimizar los procesos internos de los negocios.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Services grid */}
                    <Stagger>
                        <div className="grid md:grid-cols-3 gap-8">
                            <StaggerItem key="1">
                                {/* Service 1 */}
                                <FadeIn delay={0.2} >
                                    <div className="relative p-8 rounded-2xl bg-black border border-neutral-800
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]
                                    hover:border-cyan-400/50">
                                        <h3 className="text-xl font-semibold mb-4">
                                            Atención al cliente con IA
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Implementamos agentes inteligentes y chatbots omnicanal capaces de
                                            atender clientes 24/7 a través de WhatsApp, web y redes sociales,
                                            manteniendo conversaciones naturales y efectivas.
                                        </p>
                                    </div>
                                </FadeIn>
                            </StaggerItem>

                            <StaggerItem key="2">
                                {/* Service 2 */}
                                <FadeIn delay={0.3}>
                                    <div className="relative p-8 rounded-2xl bg-black border border-neutral-800
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]
                                    hover:border-purple-400/50">
                                        <h3 className="text-xl font-semibold mb-4">
                                            Automatización de ventas
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Automatizamos flujos de venta, calificación de leads y seguimiento
                                            comercial para convertir conversaciones en oportunidades reales
                                            de negocio.
                                        </p>
                                    </div>
                                </FadeIn>
                            </StaggerItem>

                            <StaggerItem key="3">
                                {/* Service 3 */}
                                <FadeIn delay={0.4}>
                                    <div className="relative p-8 rounded-2xl bg-black border border-neutral-800
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]
                                    hover:border-green-400/50">
                                        <h3 className="text-xl font-semibold mb-4">
                                            Procesos internos y operaciones
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Automatizamos tareas operativas como reportes, control de
                                            inventarios, integraciones entre sistemas y flujos internos para
                                            reducir errores y mejorar la eficiencia.
                                        </p>
                                    </div>
                                </FadeIn>
                            </StaggerItem>
                        </div>
                    </Stagger>
                </div >
            </section >
        </motion.section>
    );
}
