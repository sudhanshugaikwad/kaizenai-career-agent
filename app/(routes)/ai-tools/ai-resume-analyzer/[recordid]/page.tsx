"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Report from "./_components/Report";
import { LoaderCircle } from "lucide-react";

function AiResumeAnalzyer() {
  const { recordid } = useParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [aiReport, setAiReport] = useState<any>(null);

  useEffect(() => {
    recordid && GetResumeAnalyzerRecord();
  }, [recordid]);

  const GetResumeAnalyzerRecord = async () => {
    try {
      const result = await axios.get(`/api/history?recordId=${recordid}`);
      setPdfUrl(result.data?.metaData || null);
      setAiReport(result.data || null); // Full object
    } catch (error) {
      console.error("Error fetching resume report:", error);
    }
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: AI Analysis Report */}
        <div className="col-span-1">
          {aiReport?.content ? (
            <Report aiReport={aiReport.content} />
          ) : (
            <div className="flex justify-center py-20 p-3 rounded-lg  gap-2  text-gray-500 text-lg">
              <LoaderCircle className="animate-spin " />
              <span>Loading AI report...</span>
            </div>
          )}
        </div>

        {/* Right: PDF Resume Preview */}
        <div className="col-span-1 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Resume Preview
          </h2>
          {pdfUrl ? (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              width="100%"
              height="800"
              className="rounded-md border"
            />
          ) : (
            <div className="flex justify-center py-20 p-3 rounded-lg  gap-2  text-gray-500 text-lg">
              <LoaderCircle className="animate-spin " />
              <span>Loading Resume Preview...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AiResumeAnalzyer;
