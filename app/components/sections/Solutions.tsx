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
                className="py-28 px-6 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Soluciones enfocadas en resultados reales
                        </h2>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            Nuestras soluciones se adaptan a la operación de cada negocio.
                            Nos especializamos en restaurantes, sin limitarnos a otras industrias.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Restaurantes */}
                        <div className="
                            relative p-10 rounded-3xl
                            border-2 border-neutral-200 dark:border-neutral-800
                            bg-neutral-50 dark:bg-neutral-900/40
                            hover:border-cyan-500/40
                            transition
                        ">
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">
                                Restaurantes
                            </h3>

                            <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <li>• Atención automatizada por WhatsApp y web</li>
                                <li>• Toma de pedidos inteligente</li>
                                <li>• Seguimiento a clientes y ventas recurrentes</li>
                                <li>• Reportes automáticos y métricas</li>
                                <li>• Control y alertas de inventario</li>
                            </ul>

                            <p className="mt-8 text-neutral-500 dark:text-neutral-500">
                                Diseñamos soluciones integradas a la operación del restaurante
                                para reducir carga operativa y aumentar las ventas.
                            </p>
                        </div>

                        {/* Otros negocios */}
                        <div className="
                            p-10 rounded-3xl
                            border-2 border-neutral-200 dark:border-neutral-800
                            bg-neutral-50 dark:bg-neutral-900/40
                            hover:border-purple-500/40
                            transition
                        ">
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">
                                Otros negocios
                            </h3>

                            <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <li>• Agentes de IA para atención</li>
                                <li>• Automatización de procesos internos</li>
                                <li>• Calificación y seguimiento de leads</li>
                                <li>• Integraciones entre plataformas</li>
                                <li>• Soluciones personalizadas</li>
                            </ul>

                            <p className="mt-8 text-neutral-500 dark:text-neutral-500">
                                Aplicamos automatización e inteligencia artificial en cualquier
                                industria que busque optimizar su operación.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </motion.section>
    );
}
