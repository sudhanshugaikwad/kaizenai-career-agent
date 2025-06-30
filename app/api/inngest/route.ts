// import { serve } from "inngest/next";
// import { inngest } from "../../../inngest/client";
// import {
//   AiCareerAgent,
//   AiResumeAgent,
//   AIRoadMapAgent,
//   helloWorld,
// } from "@/inngest/functions";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [AiCareerAgent, AiResumeAgent, AIRoadMapAgent],
// });

import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import {
  AiCareerAgent,
  AiResumeAgent,
  AiRoadMapAgent,
} from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [AiCareerAgent, AiResumeAgent, AiRoadMapAgent],
});
