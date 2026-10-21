"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { heroEmojis } from "./types";

export default function IllustrationZone() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (activeTooltip) {
      timeout = setTimeout(() => {
        setActiveTooltip(null);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [activeTooltip]);

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  return (
    <div
      className="hidden lg:flex relative w-full h-[600px] rounded-3xl overflow-hidden items-center justify-center flex-col"
      style={{ background: "linear-gradient(180deg, #F5E6D3 0%, #FAF6EE 100%)" }}
    >
      <div
        className="absolute bottom-0 w-full h-32"
        style={{ background: 'linear-gradient(to top, #FAF6EE 0%, rgba(250,246,238,0.8) 50%, transparent 100%)' }}
      />

      <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-[#1B2A4A] shadow-sm border border-[#E5DEC9]">
        ☕ Oxford Street • 5:00 PM
      </div>

      <div className="absolute bottom-24 left-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-[#1B2A4A] shadow-sm border border-[#E5DEC9]">
        💬 Shall we start?
      </div>

      <div className="flex gap-8 relative z-10">
        {heroEmojis.map((item, index) => {
          const isActive = activeTooltip === item.id;
          const delay = index * 0.5;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              <motion.div
                onClick={() => setActiveTooltip(isActive ? null : item.id)}
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
                className="text-6xl lg:text-7xl cursor-pointer select-none drop-shadow-md"
              >
                {item.emoji}
              </motion.div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1B2A4A] text-white text-sm px-4 py-2 rounded-xl shadow-lg z-20 pointer-events-none"
                  >
                    {item.tooltipText}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1B2A4A] rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
