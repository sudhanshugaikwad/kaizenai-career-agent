import { inngest } from "@/inngest/client";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { roadmapId, userInput } = await req.json();
  const user = await currentUser();

  const resultIds = await inngest.send({
    name: "AiRoadMapAgent",
    data: {
      userInput,
      roadmapId,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    },
  });

  const runId = resultIds?.ids?.[0];
  let runStatus;
  while (true) {
    runStatus = await getRuns(runId);
    if (
      runStatus?.data?.[0]?.status === "completed" ||
      runStatus?.data?.[0]?.status === "Cancelled"
    ) {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return NextResponse.json(runStatus.data?.[0]?.output?.output?.[0]);
}

export async function getRuns(runId: string) {
  const url = process.env.INNGEST_SERVER_HOST + "/v1/events/" + runId + "/runs";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + process.env.INNGEST_SIGNING_KEY,
    },
  });
  return response.data;
}
