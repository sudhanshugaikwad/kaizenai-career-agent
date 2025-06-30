"use client";

import React from "react";
import { ArrowRight, Bot, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

function WelcomeBanner() {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#BE575F] via-[#a338e3] to-[#ac76d6] shadow-xl text-white">
      <div className=" sm:flex-row items-start sm:items-center  gap-4">
        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-2">
            {/* <Rocket className="w-8 h-8 text-white drop-shadow-md" /> */}
            <Bot className="w-8 h-8 text-white drop-shadow-md" />
            Kaizen Ai Career Coach Agent
          </h2>
          <p className="mt-2 max-w-5xl text-base sm:text-lg">
            Kaizen AI is your intelligent career companion, created by{" "}
            <span className="text-1xl font-bold text-white px-1 py-1">
              Sudhanshu Gaikwad
            </span>
            to transform how individuals navigate their professional journey.
            Powered by AI, it delivers resume feedback, personalized learning
            paths, and actionable career guidance helping students, job seekers,
            and professionals unlock new opportunities with confidence.
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-3 text-black border-white hover:bg-white hover:text-[#a338e3] transition-all"
        >
          Let's Get Started <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default WelcomeBanner;
