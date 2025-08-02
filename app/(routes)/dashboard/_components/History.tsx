"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { aiToolsList } from "./AiToolsList";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function History() {
  const [userHistory, setUserHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetHistory();
  }, []);

  const GetHistory = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/history");
      setUserHistory(result.data || []);
    } catch (error) {
      console.error("Failed to fetch history", error);
    } finally {
      setLoading(false);
    }
  };

  const GetAgentName = (path: string) => {
    return aiToolsList.find((item) => item.path === path);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPreviewTitle = (history: any) => {
    if (history.content?.roadmapTitle) {
      return history.content.roadmapTitle;
    }
    if (history.aiAgentType?.includes("resume")) {
      return "Resume Analysis";
    }
    if (typeof history.content === "string") {
      return history.content.slice(0, 40) + "...";
    }
    return "AI Output";
  };

  return (
    <div className="mt-5 p-5 border rounded-xl">
      <h2 className="font-bold text-lg">Previous History</h2>
      <p>What you previously worked on, you can find here</p>

      {loading && (
        <div>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Skeleton key={index} className="h-[50px] mt-4 w-full rounded-md" />
          ))}
        </div>
      )}

      {!loading && userHistory.length === 0 ? (
        <div className="flex items-center justify-center mt-6 flex-col">
          <Image src="/idea.png" alt="idea" width={50} height={50} />
          <h2>You don't have any history</h2>
          <Button className="mt-5">Explore AI tools</Button>
        </div>
      ) : (
        <div>
          {userHistory.map((history, index) => {
            const agentInfo = GetAgentName(history.aiAgentType);
            return (
              <Link
                key={index}
                href={`${history.aiAgentType}/${history.recordId}`}
                className="flex justify-between items-center my-3 border p-3 rounded-lg hover:shadow transition"
              >
                <div className="flex gap-5 items-center">
                  <Image
                    src={agentInfo?.icon || "/default-icon.png"}
                    alt={agentInfo?.name || "Tool Icon"}
                    width={20}
                    height={20}
                  />
                  <div>
                    <h2 className="font-medium">{getPreviewTitle(history)}</h2>
                    <p className="text-sm text-gray-500">
                      {agentInfo?.name || "Unknown Tool"}
                    </p>
                  </div>
                </div>
                <h2 className="text-sm text-gray-500">
                  {formatDate(history.createdAt)}
                </h2>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;
