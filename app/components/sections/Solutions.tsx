"use client";

import { motion } from "framer-motion";

export default function Solutions() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="solutions"
                className="py-28 px-6 bg-black border-t border-neutral-900"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Soluciones enfocadas en resultados reales
                        </h2>
                        <p className="text-lg text-gray-300">
                            Nuestras soluciones están diseñadas para adaptarse a la operación de
                            cada negocio. Nos especializamos en restaurantes, sin limitarnos a
                            otras industrias que buscan automatizar su atención, ventas y
                            procesos internos.
                        </p>
                    </div>

                    {/* Solutions grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Restaurants */}
                        <div className="relative p-10 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/40 transition">
                            <span className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400">
                                Especialización
                            </span>

                            <h3 className="text-2xl font-semibold mb-6">
                                Restaurantes
                            </h3>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Atención automatizada por WhatsApp y web</li>
                                <li>• Toma de pedidos inteligente</li>
                                <li>• Seguimiento a clientes y ventas recurrentes</li>
                                <li>• Reportes automáticos y métricas del negocio</li>
                                <li>• Control y alertas de inventario</li>
                            </ul>

                            <p className="mt-8 text-gray-400">
                                Diseñamos soluciones que se integran a la operación del restaurante
                                para reducir carga operativa y aumentar las ventas sin perder el
                                control.
                            </p>
                        </div>

                        {/* Other businesses */}
                        <div className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-purple-500/40 transition">
                            <h3 className="text-2xl font-semibold mb-6">
                                Otros negocios
                            </h3>

                            <ul className="space-y-4 text-gray-300">
                                <li>• Agentes de IA para atención al cliente</li>
                                <li>• Automatización de procesos internos</li>
                                <li>• Calificación y seguimiento de leads</li>
                                <li>• Integraciones entre plataformas y sistemas</li>
                                <li>• Soluciones personalizadas según el flujo del negocio</li>
                            </ul>

                            <p className="mt-8 text-gray-400">
                                Aplicamos la inteligencia artificial y la automatización en
                                cualquier industria que busque optimizar su operación y mejorar la
                                experiencia del cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>   
    );
}
