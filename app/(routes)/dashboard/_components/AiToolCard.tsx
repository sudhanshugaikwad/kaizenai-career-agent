import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ResumeUploadDialog from "./ResumeUploadDialog";
import { ArrowRight } from "lucide-react";
import RoadmapGeneratorDialog from "./RoadmapGeneratorDialog";
interface TOOL {
  name: string;
  desc: string;
  icon: string;
  button: string;
  path: string;
}

type AIToolProps = {
  tool: TOOL;
};

function AiToolCard({ tool }: AIToolProps) {
  const id = uuidv4();
  const router = useRouter();
  const [openResumeUpload, setOpenResumeUpload] = useState(false);
  const [openRoadmapDialog, setOpenRoadmapDialog] = useState(false);
  const onClickButton = async () => {
    if (tool.name == "Ai Resume Analyzer") {
      setOpenResumeUpload(true);
      return;
    }
    if (tool.path == "/ai-tools/ai-roadmap-agent") {
      setOpenRoadmapDialog(true);
      return;
    }

    // Create new Reacord to History Table
    const result = await axios.post("/api/history", {
      recordId: id,
      content: [],
      aiAgentType: tool.path,
    });
    console.log(result);
    router.push(tool.path + "/" + id);
  };

  return (
    <>
      <div className="p-4  border rounded-lg flex items-center gap-4">
        <div>
          <Image src={tool.icon} width={50} height={50} alt={tool.name} />
          <h2 className="font-bold mt-2">{tool.name}</h2>
          <p className="text-sm text-gray-400 mb-2">{tool.desc}</p>
          {/* <Link href={tool.path + "/" + id}>
            <Button onClick={onClickButton}>{tool.button}</Button>
          </Link> */}

          <Button onClick={onClickButton}>
            {tool.button} <ArrowRight />
          </Button>

          <ResumeUploadDialog
            openResumeUpload={openResumeUpload}
            setOpenResumeUpload={setOpenResumeUpload}
          />
          <RoadmapGeneratorDialog
            openDialog={openRoadmapDialog}
            setOpenDialog={() => setOpenRoadmapDialog(false)}
          />
        </div>
      </div>
    </>
  );
}

export default AiToolCard;
