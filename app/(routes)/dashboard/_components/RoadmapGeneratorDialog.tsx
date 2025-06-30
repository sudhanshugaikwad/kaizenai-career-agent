// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader2Icon, SparklesIcon, SpeakerIcon } from "lucide-react";
// import axios from "axios";
// import { v4 } from "uuid";
// import { useRouter } from "next/navigation";

// function RoadmapGeneratorDialog({ openDialog, setOpenDialog }: any) {
//   const [userInput, setUserInput] = useState<string>();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const GenerateRoadmap = async () => {
//     const roadmapId = v4();
//     setLoading(true);
//     try {
//       const result = await axios.post("/api/ai-roadmap-agent", {
//         roadmapId: roadmapId,
//         userInput: userInput,
//       });
//       console.log(result.data);
//       router.push("/ai-tools/ai-roadmap-agent" + roadmapId);
//       setLoading(false);
//     } catch (e) {
//       setLoading(false);
//       console.log(e);
//     }
//   };

//   return (
//     <>
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         {/* <DialogTrigger>Open</DialogTrigger> */}
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               Enter Position / Skill To Generate Roadmap
//             </DialogTitle>
//             <DialogDescription asChild>
//               <div className="mt-2">
//                 <Input
//                   onChange={(event) => setUserInput(event.target.value)}
//                   placeholder="e.g Full Stack Developer"
//                 />
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <Button variant={"outline"}>Cancle</Button>
//             <Button onClick={GenerateRoadmap} disabled={loading || !userInput}>
//               {loading ? (
//                 <Loader2Icon className="animate-spin" />
//               ) : (
//                 <SparklesIcon />
//               )}
//               Generate Roadmap
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

// export default RoadmapGeneratorDialog;

// "use client";

// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader2Icon, SparklesIcon } from "lucide-react";
// import axios from "axios";
// import { v4 } from "uuid";
// import { useRouter } from "next/navigation";
// import { useUser } from "@clerk/nextjs"; // ✅ Import useUser

// function RoadmapGeneratorDialog({ openDialog, setOpenDialog }: any) {
//   const [userInput, setUserInput] = useState<string>();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { user } = useUser(); // ✅ Get user from Clerk
//   const userEmail = user?.primaryEmailAddress?.emailAddress;

//   const GenerateRoadmap = async () => {
//     const roadmapId = v4();
//     setLoading(true);
//     try {
//       const result = await axios.post("/api/ai-roadmap-agent", {
//         roadmapId: roadmapId,
//         userInput: userInput,
//         userEmail: userEmail, // ✅ Include userEmail in request
//       });
//       console.log(result.data);
//       router.push("/ai-tools/ai-roadmap-agent" + roadmapId);
//       setLoading(false);
//     } catch (e) {
//       setLoading(false);
//       console.log(e);
//     }
//   };

//   return (
//     <>
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               Enter Position / Skill To Generate Roadmap
//             </DialogTitle>
//             <DialogDescription asChild>
//               <div className="mt-2">
//                 <Input
//                   onChange={(event) => setUserInput(event.target.value)}
//                   placeholder="e.g Full Stack Developer"
//                 />
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <Button variant={"outline"}>Cancle</Button>
//             <Button onClick={GenerateRoadmap} disabled={loading || !userInput}>
//               {loading ? (
//                 <Loader2Icon className="animate-spin" />
//               ) : (
//                 <SparklesIcon />
//               )}
//               Generate Roadmap
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

// export default RoadmapGeneratorDialog;

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useParams, useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";

function RoadmapGeneratorDialog({ openDialog, setOpenDialog }: any) {
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { has } = useAuth();

  const { user } = useUser();

  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const GenerateRoadmap = async () => {
    const roadmapId = uuidv4();
    setLoading(true);
    try {
      // This is Subscription plan Code
      // @ts-ignore
      const hasSubscriptionEnabled = await has({ plan: "pro" });
      if (!hasSubscriptionEnabled) {
        const resutHistory = await axios.get("/api/history");
        const historyList = resutHistory.data;
        const isPresent = await historyList.find(
          (item: any) => item?.aiAgentType == "/ai-tools/ai-roadmap-agent"
        );
        router.push("/billing");
        if (isPresent) {
          return null;
        }
      }

      const result = await axios.post("/api/ai-roadmap-agent", {
        roadmapId,
        userInput,
        userEmail,
      });
      console.log(result.data);
      router.push("/ai-tools/ai-roadmap-agent/" + roadmapId);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Position / Skill To Generate Roadmap</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-2">
              <Input
                onChange={(event) => setUserInput(event.target.value)}
                placeholder="e.g Full Stack Developer"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
          <Button onClick={GenerateRoadmap} disabled={loading || !userInput}>
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <SparklesIcon />
            )}
            Generate Roadmap
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RoadmapGeneratorDialog;
