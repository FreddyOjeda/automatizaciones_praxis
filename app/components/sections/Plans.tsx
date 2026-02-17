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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* START */}
                        <div className="p-8 rounded-2xl border border-neutral-800 hover:border-cyan-500/40 transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">Start</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Ideal para microempresas en proceso de digitalización.
                            </p>

                            <ul className="space-y-2 text-gray-300 text-sm mb-8 flex-1">
                                <li>• Automatización básica de atención</li>
                                <li>• Integración con WhatsApp</li>
                                <li>• CRM omnicanal</li>
                                <li>• Aplicación móvil</li>
                                <li>• Soporte técnico estándar</li>
                            </ul>

                            <button 
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi negocio con el plan *Start*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold">
                                Hablar con un asesor
                            </button>
                        </div>

                        {/* GROWTH */}
                        <div className="p-8 rounded-2xl border border-neutral-800 hover:border-purple-500/40 transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">Growth</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Para empresas en expansión que necesitan mayor volumen y control.
                            </p>

                            <ul className="space-y-2 text-gray-300 text-sm mb-8 flex-1">
                                <li>• Automatización avanzada</li>
                                <li>• Integración multicanal (WhatsApp, Facebook, Instagram)</li>
                                <li>• CRM omnicanal</li>
                                <li>• Aplicación móvil</li>
                                <li>• Reportes y métricas</li>
                                <li>• Soporte prioritario</li>
                            </ul>

                            <button 
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi negocio con el plan *Growth*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold">
                                Solicitar información
                            </button>
                        </div>

                        {/* PRO (Destacado) */}
                        <div className="p-8 rounded-2xl border border-cyan-500 bg-neutral-900/40 shadow-lg shadow-emerald-500/10 flex flex-col relative">
                            <span className="absolute top-4 right-4 text-xs bg-cyan-500 text-black px-3 py-1 rounded-full font-semibold">
                                Más solicitado
                            </span>

                            <h3 className="text-xl font-semibold mb-3">Pro</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Diseñado para empresas de alto rendimiento con gran volumen de interacciones.
                            </p>

                            <ul className="space-y-2 text-gray-300 text-sm mb-8 flex-1">
                                <li>• Arquitectura IA optimizada</li>
                                <li>• Integración multicanal completa</li>
                                <li>• CRM omnicanal avanzado</li>
                                <li>• Automatización de ventas</li>
                                <li>• Flujos personalizados</li>
                                <li>• Soporte prioritario extendido</li>
                            </ul>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi negocio con el plan *Expert*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="w-full px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:bg-cyan-400 transition">
                                Hablar con un experto
                            </button>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="p-8 rounded-2xl border border-neutral-800 hover:border-amber-500/40 transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">Enterprise</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Solución corporativa con infraestructura dedicada y personalización total.
                            </p>

                            <ul className="space-y-2 text-gray-300 text-sm mb-8 flex-1">
                                <li>• Arquitectura personalizada</li>
                                <li>• Integraciones avanzadas</li>
                                <li>• Escalabilidad de alto volumen</li>
                                <li>• Automatización completa de procesos</li>
                                <li>• Soporte dedicado</li>
                                <li>• Consultoría estratégica continua</li>
                            </ul>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi negocio con el plan *Enterprise*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold">
                                Contactar asesor senior
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </motion.section>
    );
}
