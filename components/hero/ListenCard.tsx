"use client";

import { useSpeech } from "./useSpeech";

export default function ListenCard() {
  const { speak, isSpeaking, isSupported } = useSpeech();

  return (
    <div className="bg-white/85 border border-[#E5DEC9] rounded-2xl p-4 sm:p-5 shadow-sm mb-6 flex flex-col items-start w-full">
      <div className="text-sm font-semibold text-[#475569] mb-3 flex items-center gap-2">
        <span className="text-xl">🔊</span> Birinchi iborani eshiting
      </div>

      <button
        onClick={() => speak("Nice to meet you")}
        disabled={!isSupported || isSpeaking}
        className="px-5 py-3 bg-[#1B2A4A] text-white rounded-xl font-medium w-full text-left flex justify-between items-center hover:bg-[#2A3F6D] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span>Nice to meet you</span>
        <span className="text-xs bg-white/20 px-2 py-1 rounded-md">
          {isSpeaking ? "Eshityapti..." : "Eshitish"}
        </span>
      </button>

      <div className="mt-3 text-xs text-[#475569] w-full text-center">
        {!isSupported
          ? "Brauzeringiz talaffuzni qo'llab-quvvatlamaydi"
          : "Talaffuzni eshiting — 1 soniya"}
      </div>
    </div>
  );
}
