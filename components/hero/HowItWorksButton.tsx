"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function HowItWorksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="flex justify-center w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-transparent text-[#1B2A4A] border-2 border-[#E5DEC9] rounded-xl font-semibold hover:bg-white transition-colors"
        >
          Qanday ishlaydi?
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#1B2A4A] text-center">
                Ustoz AI qanday ishlaydi?
              </h3>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 shrink-0 bg-[#FEF3C7] text-[#D97706] rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <p className="font-medium text-[#1B2A4A]">Maqsadingizni aytasiz</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 shrink-0 bg-[#FEF3C7] text-[#D97706] rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <p className="font-medium text-[#1B2A4A]">Darajangizni aniqlaymiz</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 shrink-0 bg-[#FEF3C7] text-[#D97706] rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <p className="font-medium text-[#1B2A4A]">Shaxsiy reja olasiz</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-[#1B2A4A] text-white rounded-xl text-lg font-bold hover:bg-[#2A3F6D] transition-colors"
              >
                Tushundim
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
