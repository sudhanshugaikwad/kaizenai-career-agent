import { inngest } from "@/inngest/client";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json();

    const resultIds = await inngest.send({
      name: "AiCareerAgent",
      data: {
        userInput,
      },
    });

    const runId = resultIds?.ids[0];
    console.log(runId);
    // if (!runId) {
    //   return NextResponse.json(
    //     { error: "No run ID returned" },
    //     { status: 500 }
    //   );
    // }

    let runStatus;
    while (true) {
      runStatus = await getRuns(runId);
      if (runStatus?.data[0]?.status === "Completed") break;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // return NextResponse.json(runStatus);
    // return NextResponse.json(runStatus.data?.[0].output?.output[0]);
    return NextResponse.json(runStatus?.data?.[0]?.output?.result?.output?.[0]);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}

export async function getRuns(runId: string) {
  try {
    const url = `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`;
    const result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.INNGEST_SIGING_KEY}`,
      },
    });
    return result.data;
  } catch (error) {
    console.error("getRuns error:", error);
    throw error;
  }
}
