import { ChatMessage } from "./chat.types";

export default function ChatMessageBubble({
    message,
}: {
    message: ChatMessage;
}) {
    const isBot = message.role === "bot";

    return (
        <div
            className={`flex ${isBot ? "justify-start" : "justify-end"}`}
        >
            <div
                className={`
                    max-w-[80%] px-4 py-3 rounded-2xl text-sm
                    ${isBot
                                    ? "bg-neutral-800 text-white"
                                    : "bg-cyan-500 text-black"
                                }
                    `}
            >
                {message.content}
            </div>
        </div>
    );
}
