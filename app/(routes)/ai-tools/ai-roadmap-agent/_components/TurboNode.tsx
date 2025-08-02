import { Handle, Position } from "@xyflow/react";
import Link from "next/link";
import React from "react";

function TurboNode({ id, data }: any) {
  return (
    <>
      {/* <div className="rounded-lg border-gray-300 bg-blue-100 shadow-md w-64 p-5">
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
      </div> */}

      <div className="rounded-2xl border bg-white shadow-lg w-72 p-4 transition-transform hover:scale-[1.02]">
        <div className="font-semibold text-lg text-gray-900">
          {id}. {data.title}
        </div>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">
          {data.description}
        </p>
        <Link
          href={data?.link}
          target="_blank"
          className="text-indigo-600 underline text-sm mt-3 inline-block"
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
