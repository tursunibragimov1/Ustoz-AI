"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { goals, GoalId } from "./types";

export default function GoalSelector() {
  const [selectedGoal, setSelectedGoal] = useState<GoalId | null>(null);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const handleStart = () => {
    if (selectedGoal) {
      router.push(`/onboarding?goal=${selectedGoal}`);
    } else {
      router.push("/onboarding");
    }
  };

  const activeGoal = goals.find((g) => g.id === selectedGoal);

  return (
    <div className="w-full mb-6">
      <h2 className="text-sm font-medium text-[#475569] mb-3">Siz qaysi holatdasiz?</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-4">
        {goals.map((goal, index) => {
          const isSelected = selectedGoal === goal.id;
          const isLastOdd = index === goals.length - 1 && goals.length % 2 !== 0;

          return (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 flex flex-col gap-2 ${
                isLastOdd ? "col-span-2 md:col-span-1" : "col-span-1"
              } ${
                isSelected
                  ? "bg-[#FEF3C7] border-[#D97706] shadow-md"
                  : "bg-white/85 border-[#E5DEC9] hover:border-[#D97706] hover:bg-white"
              }`}
            >
              <span className="text-xl sm:text-2xl">{goal.icon}</span>
              <span className="font-semibold text-[#1B2A4A] leading-snug">{goal.title}</span>
            </button>
          );
        })}
      </div>

      <div className="h-16 mb-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeGoal ? (
            <motion.div
              key={activeGoal.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 5 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-sm sm:text-base font-medium text-[#D94625] bg-white/80 p-3 rounded-xl border border-[#E5DEC9] w-full text-center shadow-sm"
            >
              {activeGoal.response}
            </motion.div>
          ) : (
            <div className="text-sm text-transparent select-none">
              Placeholder to prevent layout shift
            </div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={handleStart}
        className="w-full py-3.5 sm:py-4 bg-[#D94625] hover:bg-[#C23B1D] text-white font-semibold rounded-xl text-lg transition-colors shadow-sm"
      >
        O&apos;rganishni boshlash &rarr;
      </button>
    </div>
  );
}
