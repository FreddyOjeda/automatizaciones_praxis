/* import fs from "fs";
import path from "path";
import OpenAI from "openai";

// 👉 cargamos el prompt una sola vez
const systemPrompt = fs.readFileSync(
    path.join(process.cwd(), "prompts/praxis-agent.md"),
    "utf-8"
);

export async function POST(req: Request) {
    // ⚠️ crea el cliente aquí, en runtime
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY!,
    });

    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: systemPrompt },
            ...messages,
        ],
    });

    return Response.json({
        message: completion.choices[0].message.content,
    });
}
 */

import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

// 👉 cargamos el prompt una sola vez
const systemPrompt = fs.readFileSync(
    path.join(process.cwd(), "prompts/praxis-agent.md"),
    "utf-8"
);

export async function POST(req: Request) {
    const { messages } = await req.json();

    // 👉 cliente Gemini
    const genAI = new GoogleGenerativeAI(
        process.env.GEMINI_API_KEY!
    );

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
    });

    // 🔁 Convertimos formato OpenAI → Gemini
    const formattedMessages = messages.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
    }));

    // 👉 Unimos system prompt + conversación
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: systemPrompt }],
            },
            ...formattedMessages,
        ],
    });

    const result = await chat.sendMessage(
        messages[messages.length - 1].content
    );

    const response = await result.response;

    return Response.json({
        message: response.text(),
    });
}
