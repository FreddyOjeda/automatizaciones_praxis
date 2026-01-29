"use client";
import { motion } from "framer-motion";

export default function Plans() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="plans"
                className="py-28 px-6 border-t border-neutral-900"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Implementaciones y planes a la medida
                        </h2>
                        <p className="text-lg text-gray-300">
                            No trabajamos con soluciones genéricas. Analizamos cada negocio y
                            diseñamos una implementación personalizada según sus objetivos,
                            procesos y nivel de automatización deseado.
                        </p>
                    </div>

                    {/* Plans */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="p-8 rounded-2xl border border-neutral-800 hover:border-cyan-500/40 transition">
                            <h3 className="text-xl font-semibold mb-4">
                                Diagnóstico y asesoría
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Analizamos tu negocio, tus procesos actuales y tus objetivos para
                                identificar oportunidades de automatización y uso de IA.
                            </p>
                            <ul className="space-y-2 text-gray-300 text-sm mb-8">
                                <li>• Análisis de procesos</li>
                                <li>• Recomendaciones técnicas</li>
                                <li>• Propuesta de solución</li>
                            </ul>
                            <button className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold">
                                Solicitar diagnóstico
                            </button>
                        </div>

                        {/* Plan 2 */}
                        <div className="p-8 rounded-2xl border border-neutral-800 hover:border-purple-500/40 transition">
                            <h3 className="text-xl font-semibold mb-4">
                                Implementación de soluciones
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Diseñamos e implementamos soluciones de automatización e
                                inteligencia artificial totalmente adaptadas a tu operación.
                            </p>
                            <ul className="space-y-2 text-gray-300 text-sm mb-8">
                                <li>• Chatbots y agentes de IA</li>
                                <li>• Automatización de ventas</li>
                                <li>• Integraciones y flujos internos</li>
                            </ul>
                            <button className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold">
                                Hablar con un experto
                            </button>
                        </div>

                        {/* Plan 3 */}
                        <div className="p-8 rounded-2xl border border-neutral-800 hover:border-emerald-500/40 transition">
                            <h3 className="text-xl font-semibold mb-4">
                                Evolución y soporte
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Acompañamos a tu negocio en la evolución continua de sus
                                automatizaciones, optimizando y escalando las soluciones
                                implementadas.
                            </p>
                            <ul className="space-y-2 text-gray-300 text-sm mb-8">
                                <li>• Optimización continua</li>
                                <li>• Soporte técnico</li>
                                <li>• Nuevas integraciones</li>
                            </ul>
                            <button className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold">
                                Solicitar información
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}
