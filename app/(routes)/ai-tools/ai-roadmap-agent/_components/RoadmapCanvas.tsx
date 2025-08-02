import React from "react";
import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TurboNode from "./TurboNode";

const nodeTypes = {
  turbo: TurboNode,
};

function RoadmapCanvas({ initialNodes, initialEdges }: any) {
  //   const initialNodes = [
  //     { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  //     { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  //   ];
  //   const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.5 }}
        >
          <Controls showInteractive={false} />
          <MiniMap />
          {/* @ts-ignore */}
          <Background variant="dots" gap={12} size={2} />
        </ReactFlow>
      </div>
    </>
  );
}

export default RoadmapCanvas;

// import React from "react";
// import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";
// import TurboNode from "./TurboNode";
// import { autoLayoutNodes } from "./utils/autoLayoutNodes";

// const nodeTypes = {
//   turbo: TurboNode,
// };

// function RoadmapCanvas({ initialNodes, initialEdges }: any) {
//   const formattedNodes = autoLayoutNodes(initialNodes);

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <ReactFlow
//         nodes={formattedNodes}
//         edges={initialEdges}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <Controls />
//         <MiniMap />
//         {/* @ts-ignore */}
//         <Background variant="dots" gap={12} size={2} />
//       </ReactFlow>
//     </div>
//   );
// }

// export default RoadmapCanvas;
