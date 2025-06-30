import React from "react";

const questionList = [
  "What skills do I need for a Data Analyst role?",
  "How do I switch careers to UX Design?",
  "Java Developer Roadmap?",
];

function EmptyState({ selectedQuestion }: any) {
  return (
    <div>
      <h2 className="font-bold text-xl text-center">
        Ask anything to Kaizen Ai Career Q/A Chat Agent
      </h2>
      <div>
        {questionList.map((question, index) => (
          <h2
            className="p-3 text-center border rounded-lg my-3 hover:border-primary cursor-pointer"
            key={index}
            onClick={() => selectedQuestion(question)}
          >
            {question}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default EmptyState;
