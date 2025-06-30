import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { inngest } from "@/inngest/client";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  // FormData : change it in all component
  const FormData = await req.formData();
  const resumeFile: any = FormData.get("resumeFile");
  const recordId = FormData.get("recordId");
  const user = await currentUser();
  const loader = new WebPDFLoader(resumeFile);
  const docs = await loader.load();
  +console.log(docs[0]); // logs raw PDF content

  const arrayBuffer = await resumeFile.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  const resultIds = await inngest.send({
    name: "AiRoadMapAgent",
    data: {
      recordId: recordId,
      resumeFile: resumeFile,
      base64ResumeFile: base64,
      pdfText: docs[0]?.pageContent,
      aiAgentType: "/ai-tools/ai-resume-analyzer",
      useEmail: user?.primaryEmailAddress?.emailAddress,
    },
  });

  const runId = resultIds?.ids[0];
  if (!runId) {
    return NextResponse.json({ error: "No run ID returned" }, { status: 500 });
  }

  let runStatus;
  while (true) {
    runStatus = await getRuns(runId);
    if (runStatus?.data[0]?.status === "Completed") break;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return NextResponse.json(runStatus);
  // return NextResponse.json({
  //   ...runStatus?.data?.[0]?.output?.result?.output?.[0],
  //   metaData: URL.createObjectURL(resumeFile), // 👈 match schema
  // });

  // return NextResponse.json(runStatus.data?.[0].output?.output[0]);
  // return NextResponse.json(runStatus?.data?.[0]?.output?.result?.output?.[0]);
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
  }
}
