import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { File, Loader2Icon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/navigation";

function ResumeUploadDialog({ openResumeUpload, setOpenResumeUpload }: any) {
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file.name);
      setFile(file);
    }
  };

  const onUpladAndAnalyze = async () => {
    setLoading(true);
    const recordId = uuidv4();
    const formData = new FormData();
    formData.append("recordId", recordId);
    formData.append("resumeFile", file);
    // formData.append("aiAgentType", "/ai-tools/ai-resume-analyzer");

    // send FormData to Backend Server
    const result = await axios.post("/api/ai-resume-agent", formData);
    console.log(result.data);
    setLoading(false);
    router.push("/ai-tools/ai-resume-analyzer/" + recordId);
    // setOpenResumeUpload(false);
    setOpenResumeUpload(false);
  };

  return (
    <Dialog open={openResumeUpload} onOpenChange={setOpenResumeUpload}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload resume pdf file</DialogTitle>
          <DialogDescription>
            <div>
              <label
                htmlFor="resumeUplad"
                className="mt-3 flex items-center flex-col
                justify-center p-7 border border-deshed
                round-xl hover:bg-slate-100 cursor-pointer"
              >
                <File className="max-h-10 w-10" />
                {file ? (
                  <h2 className="mt-3 text-blue-600">{file?.name}</h2>
                ) : (
                  <h2 className="mt-3">Click here to upload PDF File</h2>
                )}
              </label>
              <input
                type="file"
                id="resumeUplad"
                className="hidden"
                onChange={onFileChange}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"outline"}>Cancle</Button>
          <Button disabled={!file || loading} onClick={onUpladAndAnalyze}>
            {loading ? <Loader2Icon className="animate-spin" /> : <Sparkles />}
            Upload & Analyze
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResumeUploadDialog;
