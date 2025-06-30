// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { aiToolsList } from "./AiTools";
// import Link from "next/link";
// import { Skeleton } from "@/components/ui/skeleton";
// function History() {
//   const [userHistory, setUserHistory] = useState([]);
//   const [loding, setLoding] = useState(false);
//   useEffect(() => {
//     GetHistory();
//   }, []); // Add empty dependency array

//   const GetHistory = async () => {
//     setLoding(true);
//     const result = await axios.get("/api/history");
//     console.log(result.data);
//     setUserHistory(result.data);
//     setLoding(false);
//   };

//   const GetAgentName = (path: string) => {
//     const agent = aiToolsList.find((item) => item.path == path);
//     return agent;
//   };
//   return (
//     <div className="mt-5 p-5 border rounded-xl">
//       <h2 className="font-bold text-lg">Previous History</h2>
//       <p>What your previously work on, you can find here</p>

//       {loding && (
//         <div>
//           {[1, 2, 3, 4, 5].map((item, index) => (
//             <div key={index}>
//               <Skeleton className="h-[50px] mt-4 w-full rounded-md" />
//             </div>
//           ))}
//         </div>
//       )}

//       {userHistory.length == 0 && !loding ? (
//         <div className="flex items-center justify-center mt-6 flex-col">
//           <Image src="/idea.png" alt="idea" width={50} height={50} />
//           <h2> You don't have any history</h2>
//           <Button className="mt-5">Explore Ai tools</Button>
//         </div>
//       ) : (
//         <div>
//           {userHistory?.map((history: any, index: number) => (
//             <Link
//               href={history?.aiAgentType + "/" + history?.recordId}
//               className="flex justify-between items-center my-3 border p-3 rounded-lg"
//             >
//               <div key={index} className="flex gap-5 ">
//                 <Image
//                   src={GetAgentName(history?.aiAgentType)?.icon}
//                   alt={"image"}
//                   width={20}
//                   height={20}
//                 />
//                 <h2>{GetAgentName(history?.aiAgentType)?.name}</h2>
//               </div>
//               <h2>{history.createdAt}</h2>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default History;

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { aiToolsList } from "./AiToolsList";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function History() {
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Correct spelling

  useEffect(() => {
    GetHistory();
  }, []); // ✅ Run only once on mount

  const GetHistory = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/history");
      console.log(result.data);
      setUserHistory(result.data);
    } catch (error) {
      console.error("Failed to fetch history", error);
    } finally {
      setLoading(false);
    }
  };

  const GetAgentName = (path: string) => {
    const agent = aiToolsList.find((item) => item.path === path);
    return agent;
  };

  return (
    <div className="mt-5 p-5 border rounded-xl">
      <h2 className="font-bold text-lg">Previous History</h2>
      <p>What you previously worked on, you can find here</p>

      {/* Skeleton Loading State */}
      {loading && (
        <div>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index}>
              <Skeleton className="h-[50px] mt-4 w-full rounded-md" />
            </div>
          ))}
        </div>
      )}

      {/* No history and not loading */}
      {userHistory.length === 0 && !loading ? (
        <div className="flex items-center justify-center mt-6 flex-col">
          <Image src="/idea.png" alt="idea" width={50} height={50} />
          <h2>You don't have any history</h2>
          <Button className="mt-5">Explore AI tools</Button>
        </div>
      ) : (
        <div>
          {userHistory?.map((history: any, index: number) => (
            <Link
              key={index} // ✅ Key on outermost element
              href={`${history?.aiAgentType}/${history?.recordId}`}
              className="flex justify-between items-center my-3 border p-3 rounded-lg hover:shadow transition"
            >
              <div className="flex gap-5 items-center">
                <Image
                  src={
                    GetAgentName(history?.aiAgentType)?.icon ||
                    "/default-icon.png"
                  }
                  alt="Tool Icon"
                  width={20}
                  height={20}
                />
                <h2>
                  {GetAgentName(history?.aiAgentType)?.name || "Unknown Tool"}
                </h2>
              </div>
              <h2 className="text-sm text-gray-500">{history.createdAt}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
