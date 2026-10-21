"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* BO'LIM 1: HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-[70vh]">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 animate-fade-in">
          {isMounted && userName ? `Xush kelibsiz, ${userName}!` : "Ustoz AI"}
        </h1>
        {(!isMounted || !userName) && (
          <p className="text-xl text-gray-700 font-medium mb-2">
            Ingliz tilini o&apos;rganishning eng oddiy yo&apos;li.
          </p>
        )}
        <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
          O&apos;zbek tilida so&apos;zlashuvchilar uchun maxsus yaratilgan.
        </p>

        {isMounted && userName ? (
          <Link
            href="/lesson/1"
            className="py-4 px-8 bg-blue-600 text-white rounded-xl text-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Davom etish
          </Link>
        ) : (
          <div className="flex flex-col items-center">
            <Link
              href="/onboarding"
              className="py-4 px-8 bg-blue-600 text-white rounded-xl text-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Bepul boshlash
            </Link>
            <p className="mt-4 text-sm text-gray-500 font-medium">
              ✓ Reklama yo&apos;q &nbsp; ✓ Bepul &nbsp; ✓ Karta kerak emas
            </p>
          </div>
        )}
      </section>

      {/* BO'LIM 2: NIMA UCHUN USTOZ AI? */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nima uchun Ustoz AI?
        </h2>
        <div className="flex flex-col gap-6 max-w-lg mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Shaxsiy reja</h3>
            <p className="text-lg text-gray-600">
              Sizning darajangiz, maqsadingiz va vaqtingizga moslashadi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">5 daqiqa yetarli</h3>
            <p className="text-lg text-gray-600">
              Har kuni ozgina — natija katta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🇺🇿</div>
            <h3 className="text-xl font-bold mb-2">O&apos;zbek tilida</h3>
            <p className="text-lg text-gray-600">
              Tushuntirishlar o&apos;zbekcha. Ingliz tilini bilish shart emas.
            </p>
          </div>
        </div>
      </section>

      {/* BO'LIM 3: QANDAY ISHLAYDI? */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Qanday ishlaydi?
        </h2>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              1
            </div>
            <p className="text-xl font-medium text-gray-800">
              Maqsadingizni aytasiz
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              2
            </div>
            <p className="text-xl font-medium text-gray-800">
              Darajangizni aniqlaymiz
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              3
            </div>
            <p className="text-xl font-medium text-gray-800">
              Shaxsiy reja olasiz
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              4
            </div>
            <p className="text-xl font-medium text-gray-800">
              Har kuni 5 daqiqa o&apos;rganasiz
            </p>
          </div>
        </div>
      </section>

      {/* BO'LIM 4: YAKUNIY CHAQIRIQ */}
      <section className="px-6 py-20 bg-blue-50 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Hozirdan boshlang!
        </h2>
        <Link
          href="/onboarding"
          className="py-4 px-8 bg-blue-600 text-white rounded-xl text-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Bepul boshlash
        </Link>
        <p className="mt-4 text-gray-600 text-lg font-medium">
          Hech qanday to&apos;lov yo&apos;q. Karta kerak emas.
        </p>
      </section>

      {/* BO'LIM 5: FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-100">
        <p className="font-semibold text-lg">Ustoz AI &copy; 2026</p>
        <p className="text-sm mt-1">O&apos;zbekistonda yaratilgan</p>
      </footer>
    </main>
  );
}
