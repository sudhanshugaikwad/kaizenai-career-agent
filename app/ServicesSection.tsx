// "use client";

// import { Briefcase, FileText, MessageSquareHeart, Rocket } from "lucide-react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Career Chat Q&A",
//     description:
//       "Ask questions and receive instant career guidance from our 12/7 AI career assistant.",
//     icon: <MessageSquareHeart size={28} />,
//   },
//   {
//     title: "AI Resume Analyzer",
//     description:
//       "Instantly analyze and optimize your resume with personalized AI insights for better job matching.",
//     icon: <FileText size={28} />,
//   },
//   {
//     title: "Career Roadmap Generator",
//     description:
//       "Get step-by-step learning paths tailored to your career goals, backed by AI analysis.",
//     icon: <Rocket size={28} />,
//   },

//   {
//     title: "Internship & Job Finder",
//     description:
//       "Explore opportunities and get matched to internships or jobs relevant to your skills.",
//     icon: <Briefcase size={28} />,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 bg-white dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
//           Our AI-Powered Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center"
//             >
//               <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 text-white shadow-lg mb-4">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import {
//   MessageSquareHeart,
//   FileText,
//   Rocket,
//   FileEdit,
//   UserCheck,
//   ListChecks,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Career Chat Q&A",
//     description:
//       "Ask any career-related question and receive instant guidance from our 12/7 AI career assistant.",
//     icon: <MessageSquareHeart size={28} />,
//   },
//   {
//     title: "AI Resume Analyzer",
//     description:
//       "Analyze and optimize your resume with AI-powered insights for better visibility and job matching.",
//     icon: <FileText size={28} />,
//   },
//   {
//     title: "Career Roadmap Generator",
//     description:
//       "Generate step-by-step personalized learning and career paths aligned with your goals.",
//     icon: <Rocket size={28} />,
//   },
//   {
//     title: "Cover Letter Generator",
//     description:
//       "Create compelling, job-specific cover letters instantly with AI assistance.",
//     icon: <FileEdit size={28} />,
//   },
//   {
//     title: "AI Interview Preparation",
//     description:
//       "Practice mock interviews and get feedback on your answers to boost your confidence.",
//     icon: <UserCheck size={28} />,
//   },
//   {
//     title: "Resume Match for Job Role",
//     description:
//       "Check how well your resume matches a specific job and get suggestions to improve it.",
//     icon: <ListChecks size={28} />,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 bg-white dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
//           Our AI-Powered Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="group relative bg-gray-50 dark:bg-gray-900 cursor-pointer shadow-md hover:shadow-xl transition-all p-6 text-center border border-transparent "
//             >
//               <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 text-white shadow-lg mb-4">
//                 {service.icon}
//               </div>

//               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                 {service.title}
//               </h3>

//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {service.description}
//               </p>

//               {/* Gradient Bottom Border */}
//               <div className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-blue-600 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  MessageSquareHeart,
  FileText,
  Rocket,
  FileEdit,
  UserCheck,
  ListChecks,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Career Chat Q&A",
    description:
      "Ask any career-related question and receive instant guidance from our 12/7 AI career assistant.",
    icon: <MessageSquareHeart size={28} />,
    status: "available",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Analyze and optimize your resume with AI-powered insights for better visibility and job matching.",
    icon: <FileText size={28} />,
    status: "available",
  },
  {
    title: "Career Roadmap Generator",
    description:
      "Generate step-by-step personalized learning and career paths aligned with your goals.",
    icon: <Rocket size={28} />,
    status: "available",
  },
  {
    title: "Cover Letter Generator",
    description:
      "Create compelling, job-specific cover letters instantly with AI assistance.",
    icon: <FileEdit size={28} />,
    status: "inprogress",
  },
  {
    title: "AI Interview Preparation",
    description:
      "Practice mock interviews and get feedback on your answers to boost your confidence.",
    icon: <UserCheck size={28} />,
    status: "inprogress",
  },
  {
    title: "Resume Match for Job Role",
    description:
      "Check how well your resume matches a specific job and get suggestions to improve it.",
    icon: <ListChecks size={28} />,
    status: "unavailable",
  },
];

const getDotColor = (status: string) => {
  switch (status) {
    case "available":
      return "bg-blue-500";
    case "inprogress":
      return "bg-yellow-500";
    case "unavailable":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 border  border-gray-200  dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          Our AI-Powered Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-50 dark:bg-gray-900 cursor-pointer shadow-md hover:shadow-xl transition-all p-6 text-center border border-transparent rounded-xl"
            >
              {/* Status Dot - Top Right */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-medium">
                <span
                  className={
                    service.status === "available"
                      ? "text-green-600"
                      : service.status === "inprogress"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {service.status === "available"
                    ? "Available"
                    : service.status === "inprogress"
                    ? "Coming Soon"
                    : "Unavailable"}
                </span>
              </div>

              <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 text-white shadow-lg mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>

              {/* Bottom Border Animation */}
              <div className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-blue-600 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
