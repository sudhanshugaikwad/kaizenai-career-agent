import React from "react";
import AiToolCard from "./AiToolCard";

export const aiToolsList = [
  {
    name: "Ai Career Q&A Chat",
    desc: "Ask career-related questions to our AI assistant.",
    icon: "/chatbot.png",
    button: "Ask Now",
    path: "/ai-tools/ai-chat",
  },
  {
    name: "Ai Resume Analyzer",
    desc: "Ask career-related questions to our AI assistant.",
    icon: "/resume.png",
    button: "Analyze Now",
    path: "/ai-tools/ai-resume-analyzer",
  },
  {
    name: "Career Roadmap Generator",
    desc: "Ask career-related questions to our AI assistant.",
    icon: "/roadmap.png",
    button: "Generate Now",
    path: "/ai-tools/ai-roadmap-agent",
  },
  {
    name: "Cover Letter Generator",
    desc: "Ask career-related questions to our AI assistant.",
    icon: "/coverletter.png",
    button: "Create Now",
    path: "",
  },
  // Add more tools as needed
];

function AiToolsList() {
  return (
    <div className="mt-7 p-5 bg-white border rounded-xl">
      <h2 className="font-bold text-lg">Available Kaizen Ai Tools</h2>
      <p className="text-sm text-gray-600 mb-4">
        Explore various AI-powered tools designed to assist your career and
        productivity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
        {aiToolsList.map((tool, index) => (
          <AiToolCard tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AiToolsList;
