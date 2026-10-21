"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { heroEmojis } from "./types";

export default function EmojiRow() {
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

  const handleEmojiClick = (id: string) => {
    if (activeTooltip === id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(id);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 py-3 lg:hidden relative z-10">
      {heroEmojis.map((item) => {
        const isActive = activeTooltip === item.id;
        return (
          <div key={item.id} className="relative flex flex-col items-center">
            <motion.div
              onClick={() => handleEmojiClick(item.id)}
              className="text-4xl sm:text-5xl cursor-pointer select-none"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
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
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1B2A4A] text-white text-xs px-3 py-1.5 rounded-lg shadow-md z-20 pointer-events-none"
                >
                  {item.tooltipText}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1B2A4A] rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
