// "use client";
// import React from "react";
// import Image from "next/image";
// import Logo from "../../icons/image.png";

// import { Linkedin, Github, Newspaper } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-white text-gray-800 px-4 py-8 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto space-y-10">
//         {/* Top section with logo and creator info */}
//         <div className="text-center">
//           <Image
//             src={Logo}
//             alt="Kaizen Ai Logo"
//             width={200}
//             height={200}
//             className="mx-auto mb-4"
//           />

//           <p className="mt-2 text-sm text-gray-500">
//             Created by <strong>Sudhanshu Gaikwad</strong> – Contact:{" "}
//             <a
//               href="mailto:kaizenai.support@gmail.com"
//               className="text-blue-500 hover:underline"
//             >
//               kaizenai.support@gmail.com
//             </a>
//           </p>
//         </div>

//         {/* Services Section */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
//             Our AI-Powered Tools
//           </h2>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//             <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <strong>🤖 AI Career Q&A Chat</strong>
//               <p className="text-sm mt-1">
//                 Get instant answers to all your career-related questions.
//               </p>
//             </li>
//             <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <strong>📄 AI Resume Analyzer</strong>
//               <p className="text-sm mt-1">
//                 Optimize and evaluate your resume with AI feedback.
//               </p>
//             </li>
//             <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <strong>🧭 Learning Roadmap</strong>
//               <p className="text-sm mt-1">
//                 Personalized learning paths tailored to your goals.
//               </p>
//             </li>
//             <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               <strong>✉️ Cover Letter Generator</strong>
//               <p className="text-sm mt-1">
//                 Create professional cover letters in seconds.
//               </p>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center items-center gap-6 mt-10">
//           <a
//             href="https://www.linkedin.com/in/sudhanshugaikwad"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-blue-600 transition"
//           >
//             <Linkedin className="w-6 h-6" />
//           </a>
//           <a
//             href="https://github.com/sudhanshu-kaizen"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-gray-900 transition"
//           >
//             <Github className="w-6 h-6" />
//           </a>
//           <a
//             href="https://kaizenai.blog" // Replace with your actual blog URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-purple-600 transition"
//           >
//             <Newspaper className="w-6 h-6" />
//           </a>
//         </div>

//         {/* Footer */}
//         <footer className="text-center text-sm text-gray-400 mt-12 border-t pt-6">
//           &copy; {new Date().getFullYear()} Kaizen Ai. All rights reserved.
//         </footer>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../icons/image.png";

import { Linkedin, Github, Newspaper } from "lucide-react";
import ServicesSection from "@/app/ServicesSection";
import DeveloperTeamSection from "./DeveloperTeamSection";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 border rounded-xl bg-white dark:bg-gray-950 shadow-sm">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={Logo}
              alt="Kaizen AI Logo"
              className="rounded-xl shadow-md"
              width={300}
              height={300}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              <strong className="text-2xl text-gray-900 dark:text-white font-semibold">
                Kaizen AI
              </strong>{" "}
              is your intelligent career companion, founded by{" "}
              <span className="font-semibold text-blue-600">
                Sudhanshu Gaikwad
              </span>
              , with a mission to eliminate the friction in career growth. What
              began as a personal journey now empowers students, job seekers,
              and professionals with smart tools like resume analyzers, roadmap
              generators, and AI-driven chat guidance.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Blending the power of AI, real-world insights, and intuitive
              design, Kaizen AI helps users make informed decisions, track
              progress, and confidently advance in their careers—anytime,
              anywhere.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/sudhanshugaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/sudhanshugaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://dev.to/sudhanshudevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 transition"
              >
                <Newspaper className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Developer Team */}
        <DeveloperTeamSection />

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 mt-12 border-t pt-6">
          &copy; {new Date().getFullYear()} Kaizen Ai. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
