import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('models/gemini-pro'),
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Error generating content:', error);
    return new Response('Error generating content', { status: 500 });
  }
}