"use client";

import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="flex items-center justify-between py-4 px-6 w-full max-w-7xl mx-auto">
      <div className="font-bold text-lg text-[#1B2A4A] flex items-center gap-2">
        <span>📖</span> Ustoz AI
      </div>
      <Link
        href="/onboarding"
        className="px-5 py-2 bg-[#D94625] hover:bg-[#C23B1D] text-white font-medium rounded-lg transition-colors text-sm"
      >
        Kirish
      </Link>
    </header>
  );
}
