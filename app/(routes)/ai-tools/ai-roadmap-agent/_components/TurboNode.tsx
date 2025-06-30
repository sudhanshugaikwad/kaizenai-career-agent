import { Handle, Position } from "@xyflow/react";
import Link from "next/link";
import React from "react";

function TurboNode({ data }: any) {
  return (
    <>
      <div className="rounded-lg border-gray-300 bg-blue-100 shadow-md w-64 p-5">
        <div className="font-bold text-lg text-gray-800">{data.title}</div>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {data.description}
        </p>
        <Link
          href={data?.link}
          target="_blank"
          className="text-blue-600 underline text-sm mt-2 inline-block"
        >
          Learn More
        </Link>
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </div>
    </>
  );
}

export default TurboNode;

// import { Handle, Position } from "@xyflow/react";
// import Link from "next/link";
// import React from "react";

// function TurboNode({ data }: any) {
//   return (
//     <div className=" w-72 bg-white border border-gray-200 shadow-lg rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
//       <div className="flex flex-col gap-5">
//         <h3 className="text-xl font-semibold text-blue-800">{data.title}</h3>
//         <p className="text-gray-600 text-sm line-clamp-3">{data.description}</p>
//         <Link
//           href={data?.link}
//           target="_blank"
//           className="text-blue-500 text-sm font-medium hover:underline hover:text-blue-700 transition-all"
//         >
//           Learn More →
//         </Link>
//       </div>

//       {/* Flow Handles */}
//       <Handle type="target" position={Position.Top} className="!bg-blue-600" />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         className="!bg-blue-600"
//       />
//     </div>
//   );
// }

// export default TurboNode;
