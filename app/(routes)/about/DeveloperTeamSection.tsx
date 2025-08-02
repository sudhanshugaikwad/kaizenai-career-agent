// "use client";

// import { Linkedin, Instagram } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import FounderImage from "../../icons/dummyimage.jpg";

// const developers = [
//   {
//     img: FounderImage,
//     name: "XYZ - 1",
//     role: "Frontend Developer",
//     social: {
//       linkedin: "https://www.linkedin.com/in/dev1",
//       instagram: "https://instagram.com/dev1",
//     },
//   },
//   {
//     img: FounderImage,
//     name: "XYZ - 2",
//     role: "Backend Engineer",
//     social: {
//       linkedin: "https://www.linkedin.com/in/dev2",
//       instagram: "https://instagram.com/dev2",
//     },
//   },
//   {
//     img: FounderImage,
//     name: "XYZ - 3",
//     role: "AI Model Engineer",
//     social: {
//       linkedin: "https://www.linkedin.com/in/dev3",
//       instagram: "https://instagram.com/dev3",
//     },
//   },
// ];

// export default function DeveloperTeamSection() {
//   return (
//     <div className="text-center mt-20">
//       <h2 className="text-3xl font-extrabold mb-10 text-gray-900 dark:text-white">
//         Meet Our Developers
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//         {developers.map((dev, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: idx * 0.2 }}
//             className="relative group bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
//           >
//             <Image
//               src={dev.img}
//               alt={dev.name}
//               width={120}
//               height={120}
//               className="rounded-full mx-auto mb-4 object-cover"
//             />
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//               {dev.name}
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               {dev.role}
//             </p>

//             <div className="flex justify-center gap-5 mt-4">
//               <a
//                 href={dev.social.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-blue-600 transition"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href={dev.social.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-pink-500 transition"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>

//             {/* Bottom Border Animation */}
//             <div className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-blue-600 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import FounderImage from "../../icons/dummyimage.jpg";

const developers = [
  {
    img: FounderImage,
    name: "XYZ - 1",
    role: "Frontend Developer / AI Model Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/dev1",
      instagram: "https://instagram.com/dev1",
    },
  },
  {
    img: FounderImage,
    name: "XYZ - 2",
    role: "Backend Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/dev2",
      instagram: "https://instagram.com/dev2",
    },
  },
  {
    img: FounderImage,
    name: "XYZ - 3",
    role: "System Engineer ",
    social: {
      linkedin: "https://www.linkedin.com/in/dev3",
      instagram: "https://instagram.com/dev3",
    },
  },
];

export default function DeveloperTeamSection() {
  return (
    <div className="text-center mt-20 px-4">
      <h2 className="text-3xl font-extrabold mb-12 text-gray-900 dark:text-white">
        Meet Our Developers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {developers.map((dev, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative group bg-white/60 cursor-pointer dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            {/* Gradient BG Pattern (subtle) */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50/20 to-transparent dark:from-violet-900/10" />

            <Image
              src={dev.img}
              alt={dev.name}
              width={110}
              height={110}
              className="rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md dark:border-gray-800 z-10 relative"
            />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white z-10 relative">
              {dev.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 z-10 relative">
              {dev.role}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mt-4 z-10 relative">
              <a
                href={dev.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={dev.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Bottom Border Animation */}
            {/* <div className="absolute left-0 bottom-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-blue-600 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" /> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
