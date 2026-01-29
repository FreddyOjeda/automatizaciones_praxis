export function getAIResponse(text: string): string {
    const input = text.toLowerCase();

    if (input.includes("hola") || input.includes("buen")) {
        return "¡Hola! 👋 Soy el agente de Praxis. ¿Te interesa automatizar un restaurante o una empresa tech?";
    }

    if (input.includes("restaurante")) {
        return "Para restaurantes automatizamos pedidos por WhatsApp, reservas, pagos y comunicación con cocina. ¿Quieres ver una demo?";
    }

    if (input.includes("tech") || input.includes("empresa")) {
        return "En empresas tech implementamos agentes que califican leads, responden soporte y agendan demos integrándose a tu CRM.";
    }

    if (input.includes("precio") || input.includes("costo")) {
        return "Nuestros planes son personalizados según volumen e integraciones. ¿Quieres que un asesor te contacte?";
    }

    return "Buena pregunta 🤖 Cuéntame un poco más sobre tu negocio y lo analizamos.";
}
