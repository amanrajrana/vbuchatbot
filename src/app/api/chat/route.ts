import { chatRequestSchema } from "@/app/schemas/chatRequest.schema";
import { google } from "@ai-sdk/google";
import { Message, streamText } from "ai";
import { NextRequest, NextResponse } from "next/server";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as { messages: Message[] };

  if (!messages) {
    return NextResponse.json(
      { messages: "Messages array cannot be empty" },
      { status: 400 }
    );
  }

  // Validate the request using zod
  const { success, data, error } = chatRequestSchema.safeParse(messages);

  if (!success) {
    return NextResponse.json({ message: error.issues }, { status: 400 });
  }

  data.unshift({
    role: "system",
    content:
      "You are an AI-powered chatbot assistant for the Department of Computer Application, Vinoba Bhave University, Hazaribagh. Your primary responsibility is to provide accurate, helpful, and up-to-date information about the department, its academic programs, admission processes, faculty members, courses, fees, and general university-related queries.",
  });

  try {
    const result = await streamText({
      model: google("models/gemini-1.5-flash-latest"),
      messages: data,
      maxTokens: 300,
    });

    return result.toAIStreamResponse();
  } catch (error: Error | unknown) {
    return NextResponse.json(
      { message: (error as Error)?.message || "An error occurred" },
      { status: 500 }
    );
  }
}
