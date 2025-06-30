"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeUploadDialog from "@/app/(routes)/dashboard/_components/ResumeUploadDialog";

function Report({ aiReport }: any) {
  const [openResumeUpload, setOpenResumeDialog] = useState(false);
  if (!aiReport) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading report...</p>
      </div>
    );
  }

  const {
    overall_score,
    summary_comment,
    overall_feedback,
    sections,
    tips_for_improvement,
    whats_good,
    needs_improvement,
  } = aiReport;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
      {/* Header */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            AI Resume Analysis Report
          </h1>
          <Button className="mb-1" onClick={() => setOpenResumeDialog(true)}>
            <Sparkles /> Re - analyze
          </Button>
        </div>

        <p className="text-gray-600">{overall_feedback}</p>
      </div>

      {/* Overall Score */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-lg text-center shadow">
        <div className="text-5xl font-bold">
          {overall_score}
          <span className="text-2xl"> /100</span>
        </div>
        <h2 className="text-lg font-semibold mb-1">Overall Score</h2>
      </div>

      {/* Summary */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          Summary Comment
        </h3>
        <p className="text-gray-600">{summary_comment}</p>
      </div>

      {/* Section Scores */}
      <div className="grid md:grid-cols-2 gap-5">
        {Object.entries(sections).map(([key, val]: any) => (
          <div key={key} className="bg-gray-100 rounded-lg p-4 border shadow">
            <h4 className="text-md font-bold text-gray-800 capitalize">
              {key.replace("_", " ")}
            </h4>
            <div className="text-blue-600 text-xl font-bold">{val.score}%</div>
            <p className="text-gray-600 mt-1">{val.comment}</p>

            {val.whats_good?.length > 0 && (
              <div className="mt-3">
                <h5 className="text-sm font-medium text-green-600">
                  What’s Good
                </h5>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {val.whats_good.map((tip: string, i: number) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {val.needs_improvement?.length > 0 && (
              <div className="mt-2">
                <h5 className="text-sm font-medium text-red-500">
                  Needs Improvement
                </h5>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {val.needs_improvement.map((tip: string, i: number) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {val.tips_for_improvement?.length > 0 && (
              <div className="mt-2">
                <h5 className="text-sm font-medium text-yellow-600">Tips</h5>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {val.tips_for_improvement.map((tip: string, i: number) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* General Tips */}
      {tips_for_improvement?.length > 0 && (
        <div>
          <h3 className="text-md font-semibold text-yellow-600 mb-1">
            General Tips for Improvement
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            {tips_for_improvement.map((tip: string, i: number) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Strengths */}
      {whats_good?.length > 0 && (
        <div>
          <h3 className="text-md font-semibold text-green-600 mb-1">
            What’s Good
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            {whats_good.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Needs Improvement */}
      {needs_improvement?.length > 0 && (
        <div>
          <h3 className="text-md font-semibold text-red-500 mb-1">
            Needs Improvement
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            {needs_improvement.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      <ResumeUploadDialog
        openResumeUpload={openResumeUpload}
        setOpenResumeUpload={() => setOpenResumeDialog(false)}
      />
    </div>
  );
}

export default Report;
