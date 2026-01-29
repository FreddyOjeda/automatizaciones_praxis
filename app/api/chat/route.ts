import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

// 👉 cargamos el prompt una sola vez
const systemPrompt = fs.readFileSync(
    path.join(process.cwd(), "prompts/praxis-agent.md"),
    "utf-8"
);

export async function POST(req: Request) {
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
