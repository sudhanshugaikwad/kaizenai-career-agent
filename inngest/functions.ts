import { HistoryTable } from "@/configs/schema";
import { inngest } from "./client";
import { createAgent, gemini } from "@inngest/agent-kit";
import ImageKit from "imagekit";
import { db } from "@/configs/db";

// Sample function for testing
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

// Define AI Career chat Agent
export const AiCareerChatAgent = createAgent({
  name: "AiCareerChatAgent",
  description: "An AI Agent that answers career-related questions",
  system: `You are a helpful, professional AI Career Coach Agent.`,
  model: gemini({
    model: "gemini-2.0-flash-lite",
    apiKey: process.env.GEMINI_API_KEY,
  }),
});

// Define the AI Roadmap Generator Agent
export const AIRoadmapGeneratorAgent = createAgent({
  name: "AIRoadmapGeneratorAgent",
  description: "Generate Details Tree Like Flow Roadmap",
  system: `Generate a React flow tree-structured learning roadmap for user input position/skills the following format:
Vertical tree structure with meaningful x/y positions to form a flow
• Structure should be similar to roadmap.sh layout
• Steps should be ordered from fundamentals to advanced
• Include branching for different specializations (if applicable)
• Each node must have a title, short description, and learning resource link
• Use unique IDs for all nodes and edges
• Make it more spacious node position,
• Response in JSON format
{
  "roadmapTitle": "",
  "description": "<3-5 Lines>",
  "duration": "",
  "initialNodes": [
    {
      "id": "1",
      "type": "turbo",
      "position": { "x": 5, "y": 5 },
      "data": {
        "title": "Step Title",
        "description": "Short two-line explanation of what the step covers.",
        "link": "Helpful link for learning this step"
      }
    },
    ...
  ],
  "initialEdges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2"
    },
    ...
  ]
}`,
  model: gemini({
    model: "gemini-2.0-flash-lite",
    apiKey: process.env.GEMINI_API_KEY,
  }),
});

// Define the agent execution function
export const AiCareerAgent = inngest.createFunction(
  { id: "AiCareerAgent" },
  { event: "AiCareerAgent" },
  async ({ event, step }) => {
    const { userInput } = event.data;
    const result = await AiCareerChatAgent.run(userInput);
    return { result };
  }
);

// Ai AiResume Analyzer Agent Agent
export const AiResumeAnalyzerAgent = createAgent({
  name: "AiResumeAnalyzerAgent",
  description: "Ai Resume Analzyer Agent help to return report",
  system: `You are an advanced AI Resume Analyzer Agent.
Your task is to evaluate a candidate’s resume and return a detailed analysis in the following structured JSON schema format.
The schema must match the layout and structure of a visual UI that includes overall score, section scores, summary feedback, improvement tips, strengths, and weaknesses.

📥 INPUT: I will provide a plain text resume.
🎯 GOAL: Output a JSON report as per the schema below. The report should reflect:

overall_score (0–100)

overall_feedback (short message e.g., “Excellent!”, “Needs improvement”)

summary_comment (1–2 sentence evaluation summary)

Section scores for:

Contact Info

Experience

Education

Skills

Each section should include:

score (as percentage)

Optional comment about that section

Tips for improvement (3–5 tips)

What’s Good (1–3 strengths)

Needs Improvement (1–3 weaknesses)

🔴 Output JSON Schema:{
  "overall_score": 85,
  "overall_feedback": "Excellent!",
  "summary_comment": "Your resume is strong, but there are areas to refine.",
  "sections": {
    "contact_info": {
      "score": 95,
      "comment": "Perfectly structured and complete."
    },
    "experience": {
      "score": 88,
      "comment": "Strong bullet points and impact."
    },
    "education": {
      "score": 70,
      "comment": "Consider adding relevant coursework."
    },
    "skills": {
      "score": 60,
      "comment": "Expand on specific skill proficiencies."
    }
  },
  "tips_for_improvement": [
    "Add more numbers and metrics to your experience section to show impact.",
    "Integrate more industry-specific keywords relevant to your target roles.",
    "Start bullet points with strong action verbs to make your achievements stand out."
  ],
  "whats_good": [
    "Clean and professional formatting.",
    "Clear and concise contact information.",
    "Relevant work experience."
  ],
  "needs_improvement": [
    "Skills section lacks detail.",
    "Some experience bullet points could be stronger.",
    "Missing a professional summary/objective."
  ]
}`,
  model: gemini({
    model: "gemini-2.0-flash-lite",
    apiKey: process.env.GEMINI_API_KEY,
  }),
});

//  This is save pdf on the imagekit database
var imagekit = new ImageKit({
  // @ts-ignore
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  // @ts-ignore

  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  // @ts-ignore

  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

export const AiResumeAgent = inngest.createFunction(
  { id: "AiResumeAgent" },
  { event: "AiResumeAgent" },
  async ({ event, step }) => {
    const { recordId, base64ResumeFile, pdfText, aiAgentType, userEmail } =
      await event.data;
    // uplad file to cloud

    const uploadFileUrl = await step.run("uploadImage", async () => {
      const imageKitFile = await imagekit.upload({
        file: base64ResumeFile,
        fileName: `${Date.now()}.pdf`,
        isPublished: true,
      });
      return imageKitFile.url;
    });

    const aiResumeReport = await AiResumeAnalyzerAgent.run(pdfText);
    // @ts-ignore
    const rawContent = aiResumeReport.output[0]?.content;
    const rawContentJson = rawContent.replace("```json", "").replace("```", "");
    const parseJson = JSON.parse(rawContentJson);
    // return parseJson;

    // Save to database
    const saveToDb = await step.run("SaveToDb", async () => {
      const result = await db.insert(HistoryTable).values({
        recordId: recordId,
        content: parseJson,
        aiAgentType: aiAgentType,
        createdAt: new Date().toString(),
        userEmail: userEmail,
        metaData: uploadFileUrl,
      });
      console.log(result);
      return parseJson;
    });
  }
);

export const AiRoadMapAgent = inngest.createFunction(
  { id: "AiRoadMapAgent" },
  { event: "AiRoadMapAgent" },
  async ({ event, step }) => {
    const { roadmapId, userInput, userEmail } = event.data;

    const roadmapResult = await AIRoadmapGeneratorAgent.run(
      "userInput :" + userInput
    );

    console.log("🚀 Gemini Output:", roadmapResult);

    // Optional: Save to DB or parse further if needed
    // return roadmapResult;

    // @ts-ignore
    const rawContent = roadmapResult.output[0]?.content;
    const rawContentJson = rawContent.replace("```json", "").replace("```", "");
    const parseJson = JSON.parse(rawContentJson);

    // // Save to Database result
    const saveToDb = await step.run("SaveToDb", async () => {
      const result = await db.insert(HistoryTable).values({
        recordId: roadmapId,
        content: parseJson,
        aiAgentType: "/ai-tools/ai-roadmap-agent",
        createdAt: new Date().toString(),
        userEmail: userEmail,
        metaData: userInput,
      });
      console.log(">>> ", result);
      return parseJson;
    });
  }
);
