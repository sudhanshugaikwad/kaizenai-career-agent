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
import FounderImage from "../../icons/founder.jpg";
import Dev1 from "../../icons/dev1.jpg";
import Dev2 from "../../icons/dev1.jpg";
import Dev3 from "../../icons/dev1.jpg";
import {
  Linkedin,
  Github,
  Newspaper,
  Instagram,
  Bot,
  FileText,
  Compass,
  Mail,
  Mic,
  BadgeCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          About Us
        </h2>
        <div className="grid grid-cols-1 p-3 md:grid-cols-2 items-center gap-0 mt-10 border rounded-lg my-3 ">
          {/* Image Section */}
          <div className="flex justify-center ">
            <Image
              src={Logo}
              alt="Kaizen AI Logo"
              className="rounded-xl shadow-lg"
              width={300}
              height={300}
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-gray-700 leading-relaxed text-base">
              <strong className="text-gray-800 text-2xl">Kaizen Ai</strong>{" "}
              Career Coach Agent is an intelligent platform created by{" "}
              <span className="font-medium text-blue-600">
                Sudhanshu Gaikwad
              </span>{" "}
              to transform the way individuals navigate their career journeys.
              What started as a personal mission to solve career development
              frustrations has evolved into an AI-powered solution that offers
              actionable guidance, resume feedback, personalized learning paths,
              and more.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              By blending technology, data, and human insights, Kaizen AI
              empowers users to unlock opportunities, track progress, and
              confidently pursue their professional goals. Whether you're a
              student, a job seeker, or a seasoned professional, Kaizen AI is
              your dedicated career companion.
            </p>
            {/* Social Media Icons */}

            <div className="flex justify-start items-start gap-6 mt-2 mb-2 ">
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
                className="text-gray-500 hover:text-gray-900 transition"
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
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            AI-Powered Career Tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            {[
              {
                icon: <Bot className="w-6 h-6 text-blue-600" />,
                title: "AI Career Q&A Chat",
                desc: "Get instant answers to your career-related questions through our smart chatbot.",
              },
              {
                icon: <FileText className="w-6 h-6 text-green-600" />,
                title: "AI Resume Analyzer",
                desc: "Improve and refine your resume with actionable AI feedback.",
              },
              {
                icon: <Compass className="w-6 h-6 text-purple-600" />,
                title: "Learning Roadmap Generator",
                desc: "Design a custom learning path tailored to your skills and career goals.",
              },
              {
                icon: <Mail className="w-6 h-6 text-pink-600" />,
                title: "Cover Letter Generator",
                desc: "Quickly create personalized and professional cover letters.",
              },
              {
                icon: <Mic className="w-6 h-6 text-yellow-600" />,
                title: "AI Interview Preparation",
                desc: "Practice and get guidance with an AI agent. (Coming soon)",
              },
              {
                icon: <BadgeCheck className="w-6 h-6 text-indigo-600" />,
                title: "Resume Match for Job Role",
                desc: "Check how well your resume fits a job posting. (Coming soon)",
              },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-4 rounded-lg shadow-sm border hover:border-blue-500 transition-all duration-200 flex items-start gap-4 cursor-pointer"
              >
                <div>{tool.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{tool.title}</h4>
                  <p className="text-sm text-gray-700 mt-1">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Team */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Meet Our Developers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                img: Dev1,
                name: "XYZ - 1",
                role: "Frontend Developer",
                social: {
                  linkedin: "https://www.linkedin.com/in/dev1",
                  instagram: "https://instagram.com/dev1",
                },
              },
              {
                img: Dev2,
                name: "XYZ - 2",
                role: "Backend Engineer",
                social: {
                  linkedin: "https://www.linkedin.com/in/dev2",
                  instagram: "https://instagram.com/dev2",
                },
              },
              {
                img: Dev3,
                name: "XYZ - 3",
                role: "AI Model Engineer",
                social: {
                  linkedin: "https://www.linkedin.com/in/dev3",
                  instagram: "https://instagram.com/dev3",
                },
              },
            ].map((dev, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-4 shadow text-center border hover:border-blue-500 transition-all duration-200 cursor-pointer"
              >
                <Image
                  src={dev.img}
                  alt={dev.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="text-md font-semibold text-gray-800">
                  {dev.name}
                </h3>
                <p className="text-sm text-gray-600">{dev.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href={dev.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={dev.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 mt-12 border-t pt-6">
          &copy; {new Date().getFullYear()} Kaizen Ai. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
