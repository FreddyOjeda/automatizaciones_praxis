"use client";

import { Stagger, StaggerItem } from "../ui/Stagger";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function UseCasesSection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="usecases"
                className="py-28 px-6 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <FadeIn delay={0.1}>
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Casos de uso reales de automatización empresarial
                            </h2>

                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Aplicamos automatización e inteligencia artificial
                                en diferentes áreas del negocio para generar eficiencia,
                                control y crecimiento sostenible.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Cards */}
                    <Stagger>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Atención automatizada 24/7",
                                    description:
                                        "Flujos inteligentes que responden mensajes en múltiples canales, clasifican consultas y asignan cada conversación al área correcta.",
                                },
                                {
                                    title: "Seguimiento automático de ventas",
                                    description:
                                        "Automatización del proceso comercial desde el primer contacto hasta el cierre, con recordatorios y priorización estratégica.",
                                },
                                {
                                    title: "Integración de sistemas empresariales",
                                    description:
                                        "Sincronización entre facturación, inventario, CRM y herramientas internas para eliminar tareas manuales repetitivas.",
                                },
                                {
                                    title: "Automatización de procesos internos",
                                    description:
                                        "Aprobaciones automáticas, generación de reportes, alertas operativas y centralización de información en tiempo real.",
                                },
                            ].map((item, index) => (
                                <StaggerItem key={index}>
                                    <FadeIn delay={0.2 + index * 0.1}>
                                        <div
                                            className="
                                                p-8 rounded-2xl
                                                border-2 border-neutral-200 dark:border-neutral-800
                                                bg-neutral-50 dark:bg-neutral-900/40
                                                transition-all duration-300
                                                hover:-translate-y-1
                                                hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.25)]
                                            "
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

                </div>
            </section>
        </motion.section>
    );
}