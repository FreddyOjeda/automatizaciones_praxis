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
                className="py-28 px-6 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Implementaciones y planes a la medida
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                            No trabajamos con soluciones genéricas. Analizamos cada empresa y
                            diseñamos una implementación personalizada según sus objetivos,
                            procesos y nivel de automatización deseado.
                        </p>
                    </div>

                    {/* Plans */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* START */}
                        <div className="p-8 rounded-2xl border-2 border-neutral-800 hover:border-cyan-500/40 transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Start</h3>

                            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm mb-8 flex-1">
                                <li>• Automatización básica de atención</li>
                                <li>• Integración con WhatsApp</li>
                                <li>• CRM omnicanal</li>
                                <li>• Aplicación móvil</li>
                                <li>• Soporte técnico estándar</li>
                                <li>• Consumo de mensajes IA por volumen</li>
                            </ul>

                            <div className="mb-6">
                                <p className="text-m mr-2">
                                    Desde
                                </p>
                                <span className="text-3xl font-bold">
                                    $198.000
                                </span>
                                <span className="text-m ml-1">
                                    / mes
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    Valor base mensual. El consumo de IA se ajusta según el volumen de mensajes.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi empresa con el plan *Start*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="
                                        w-full px-6 py-3 rounded-xl font-semibold
                                        bg-foreground text-background
                                        hover:opacity-90 transition
                                    "
                                >
                                Hablar con un asesor
                            </button>
                        </div>

                        {/* GROWTH */}
                        <div className="p-8 rounded-2xl border-2 border-neutral-800 hover:border-purple-500/40 transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">Growth</h3>

                            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm mb-8 flex-1">
                                <li>• Automatización avanzada</li>
                                <li>• Integración multicanal</li>
                                <li>• CRM omnicanal</li>
                                <li>• Reportes y métricas</li>
                                <li>• Soporte prioritario</li>
                                <li>• Consumo de mensajes IA por volumen</li>
                            </ul>

                            <div className="mb-6">
                                <p className="text-m mr-2">
                                    Desde
                                </p>
                                <span className="text-3xl font-bold">
                                    $200.000
                                </span>
                                <span className="text-m ml-1">
                                    / mes
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    Valor base mensual. El consumo de IA se ajusta según el volumen de mensajes.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi empresa con el plan *Growth*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="
                                        w-full px-6 py-3 rounded-xl font-semibold
                                        bg-foreground text-background
                                        hover:opacity-90 transition
                                    "
                                >
                                Solicitar información
                            </button>
                        </div>

                        {/* PRO (Destacado) */}
                        <div className="p-8 rounded-2xl border border-cyan-500 flex flex-col relative">
                            <span className="absolute top-4 right-4 text-xs bg-cyan-500 text-black px-3 py-1 rounded-full font-semibold">
                                Más solicitado
                            </span>

                            <h3 className="text-xl font-semibold mb-3">Pro</h3>

                            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm mb-8 flex-1">
                                <li>• Arquitectura IA optimizada</li>
                                <li>• Integración multicanal completa</li>
                                <li>• CRM avanzado</li>
                                <li>• Automatización de ventas</li>
                                <li>• Flujos personalizados</li>
                                <li>• Consumo de mensajes IA por volumen</li>
                            </ul>

                            <div className="mb-6">
                                <p className="text-m mr-2">
                                    Desde
                                </p>
                                <span className="text-3xl font-bold">
                                    $230.000
                                </span>
                                <span className="text-m ml-1">
                                    / mes
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    Valor base mensual. El consumo de IA se ajusta según el volumen.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi empresa con el plan *Expert*."
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
                        <div className="p-8 rounded-2xl border-2 border-neutral-800 hover:border-green-400/50 transition flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">Enterprise</h3>

                            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm mb-8 flex-1">
                                <li>• Arquitectura personalizada</li>
                                <li>• Integraciones avanzadas</li>
                                <li>• Escalabilidad de alto volumen</li>
                                <li>• Soporte dedicado</li>
                                <li>• Consultoría estratégica</li>
                                <li>• Consumo de mensajes IA por volumen</li>
                            </ul>

                            <div className="mb-6">
                                <p className="text-m mr-2">
                                    Desde
                                </p>
                                <span className="text-3xl font-bold">
                                    $350.000
                                </span>
                                <span className="text-m ml-1">
                                    / mes
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    Plan corporativo con configuración personalizada.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre como automatizar mi empresa con el plan *Enterprise*."
                                    );

                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="
                                        w-full px-6 py-3 rounded-xl font-semibold
                                        bg-foreground text-background
                                        hover:opacity-90 transition
                                    "
                                >
                                Contactar asesor senior
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </motion.section>
    );
}
