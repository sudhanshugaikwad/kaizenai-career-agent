"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { UserPlus, LayoutGrid, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Create Your Account",
    description:
      "Sign up in seconds to unlock your personalized AI-driven career tools.",
    icon: <UserPlus className="h-6 w-6" />,
  },
  {
    number: "2",
    title: "Select a Service",
    description:
      "Access tools like Career Q&A Chat, Resume Analyzer, Roadmap Generator & more.",
    icon: <LayoutGrid className="h-6 w-6" />,
  },
  {
    number: "3",
    title: "Use for Free",
    description:
      "Enjoy unlimited, free access to tools designed to advance your career.",
    icon: <BadgeCheck className="h-6 w-6" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full py-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          How It Works
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Horizontal connector line for roadmap flow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-2.5rem] w-5 h-[2px] bg-gray-300 dark:bg-gray-700" />
              )}

              <Card className="bg-gray-50 dark:bg-gray-900 transition-all hover:shadow-xl border-none">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-tl from-blue-600 to-violet-600 text-white flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>

                  <CardTitle className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-center text-gray-600 dark:text-gray-400">
                  {step.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[repeating-linear-gradient(315deg,rgba(30,41,59,0.04)_0,rgba(30,41,59,0.04)_1px,transparent_0,transparent_50%)] bg-[size:14px_14px] dark:bg-[repeating-linear-gradient(315deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_0,transparent_50%)]" />
    </section>
  );
}
