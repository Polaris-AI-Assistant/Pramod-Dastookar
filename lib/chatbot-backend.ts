import { NextRequest, NextResponse } from 'next/server';
import { fileSearchTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";

// Tool definitions
const fileSearch = fileSearchTool([
  "vs_6921d4f6dfc08191b751d4ce3a6fd206"
]);

const pramodSirChatbot = new Agent({
  name: "Pramod sir chatbot",
  instructions: `You are an AI assistant integrated into the portfolio website of Prof. Pramod P. Dastoorkar. 
Use the file-search tool to accurately answer all user queries strictly based on the information 
present in the uploaded PDFs and documents.

Your goals:
- Understand the user's question clearly and respond with accurate, concise, and well-structured answers.
- Only provide information that exists in the provided documents. Do not guess or fabricate.
- Maintain a professional, respectful tone appropriate for an academic profile.
- Refer to him always as "Prof. Pramod P. Dastoorkar."
- If information is missing or cannot be found, say: 
  "I may not have that information in the available documents."

Allowed topics include his awards, recognitions, research work, publications, teaching experience,
educational background, professional activities, institutional contributions, technical/social work,
roles, achievements, and any other content explicitly found in the provided files.

If the user asks about something unrelated to the professor or outside the given documents, 
politely explain that the information is not available.

Your purpose is to assist users in learning about Prof. Pramod P. Dastoorkar using verified content 
from the uploaded files only.
`,
  model: "gpt-4o-mini",
  tools: [
    fileSearch
  ],
  modelSettings: {
    temperature: 1,
    topP: 1,
    maxTokens: 2048,
    store: true
  }
});

type WorkflowInput = { input_as_text: string };

// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("PramodSirChatbot", async () => {
    const conversationHistory: AgentInputItem[] = [
      { role: "user", content: [{ type: "input_text", text: workflow.input_as_text }] }
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_69022ac7eda08190be0c7ecf9904494b0e8e056732799de8"
      }
    });
    const pramodSirChatbotResultTemp = await runner.run(
      pramodSirChatbot,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...pramodSirChatbotResultTemp.newItems.map((item) => item.rawItem));

    if (!pramodSirChatbotResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const pramodSirChatbotResult = {
      output_text: pramodSirChatbotResultTemp.finalOutput ?? ""
    };

    return pramodSirChatbotResult;
  });
}

// POST endpoint for chat
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    const result = await runWorkflow({ input_as_text: message });
    
    return NextResponse.json({ response: result.output_text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}