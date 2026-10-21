"use client";

import { useState, useEffect } from "react";
import { useSpeech } from "./useSpeech";
import { phrases, PhraseItem } from "./types";

export default function DailyPhrase() {
  const [phrase, setPhrase] = useState<PhraseItem | null>(null);
  const { speak, isSpeaking, isSupported } = useSpeech();

  useEffect(() => {
    const day = new Date().getDate();
    setPhrase(phrases[day % phrases.length]);
  }, []);

  return (
    <div className="bg-white/85 border border-[#E5DEC9] rounded-2xl p-4 sm:p-5 shadow-sm mb-6 w-full flex items-center justify-between">
      <div className="flex flex-col">
        <div className="text-xs font-semibold text-[#475569] mb-1 flex items-center gap-1.5">
          <span>📅</span> Bugungi ibora
        </div>
        {phrase ? (
          <div>
            <div className="font-bold text-[#1B2A4A] text-base sm:text-lg">{phrase.en}</div>
            <div className="text-sm text-[#475569]">{phrase.uz}</div>
          </div>
        ) : (
          <div className="animate-pulse flex flex-col gap-2 mt-1">
            <div className="h-5 bg-gray-200 rounded w-32"></div>
            <div className="h-4 bg-gray-100 rounded w-24"></div>
          </div>
        )}
      </div>

      <button
        onClick={() => phrase && speak(phrase.en)}
        disabled={!isSupported || isSpeaking || !phrase}
        className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#FEF3C7] text-[#D97706] rounded-full hover:bg-[#FDE68A] transition-colors disabled:opacity-50"
        aria-label="Eshitish"
      >
        <span className="text-2xl leading-none">🔊</span>
      </button>
    </div>
  );
}
