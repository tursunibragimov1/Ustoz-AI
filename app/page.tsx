"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type PainType =
  | "Gapirishga qiynalaman"
  | "Grammatikani bilaman, ishlata olmayman"
  | "So'zlarni tez unutaman"
  | "Imtihonga tayyorlanyapman"
  | "Noldan boshlayapman";

const pains: PainType[] = [
  "Gapirishga qiynalaman",
  "Grammatikani bilaman, ishlata olmayman",
  "So'zlarni tez unutaman",
  "Imtihonga tayyorlanyapman",
  "Noldan boshlayapman",
];

const painEmojis: Record<PainType, string> = {
  "Gapirishga qiynalaman": "🗣️",
  "Grammatikani bilaman, ishlata olmayman": "📚",
  "So'zlarni tez unutaman": "🧠",
  "Imtihonga tayyorlanyapman": "🎯",
  "Noldan boshlayapman": "🌱",
};

const painResponses: Record<PainType, string> = {
  "Gapirishga qiynalaman":
    "Gapirishga qiynalasizmi?\nUnda sizga yana 500 ta grammatika qoidasi emas — amaliy suhbat kerak.\nUstoz AI siz bilan mashq qiladi → xatoni topadi → tushuntiradi → yana sinaydi.",
  "Grammatikani bilaman, ishlata olmayman":
    "Grammatikani bilasiz, lekin ishlata olmaysizmi?\nUnda sizga yangi qoidalar emas — mavjud bilimni amalda qo'llash kerak.\nUstoz AI sizga real vaziyatlarda mashq beradi.",
  "So'zlarni tez unutaman":
    "So'zlarni tez unutasizmi?\nUnda sizga ko'proq so'z emas — takrorlash tizimi kerak.\nUstoz AI so'zlarni to'g'ri vaqtda qaytaradi — unutish qiyinlashadi.",
  "Imtihonga tayyorlanyapman":
    "Imtihonga tayyorlanyapsizmi?\nUnda sizga umumiy kurs emas — imtihon formatiga mos mashq kerak.\nUstoz AI sizning zaif joylaringizni topadi va shu joyga e'tibor beradi.",
  "Noldan boshlayapman":
    "Noldan boshlayapsizmi?\nUnda sizga murakkab kurs emas — birinchi qadam kerak.\nUstoz AI eng oddiy joydan boshlaydi va asta-sekin olib boradi.",
};

export default function Home() {
  const [selectedPain, setSelectedPain] = useState<PainType | null>(null);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const handleScrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      {/* === ZONA 1: QIZIQTIRISH (hero) === */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-4xl">
          Ingliz tilini o&apos;rganishni boshlamang.
          <br className="hidden md:block" /> Avval o&apos;zingizni tushunib oling.
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Ustoz AI sizning darajangiz, maqsadingiz va xatolaringizga qarab keyingi qadamni belgilaydi.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-16 w-full max-w-md md:max-w-none justify-center">
          <Link
            href="/onboarding"
            className="py-4 px-6 bg-green-600 text-white rounded-lg text-lg font-bold hover:bg-green-700 transition-colors shadow-md text-center"
          >
            Darajamni aniqlash &rarr;
          </Link>
          <button
            onClick={handleScrollToHowItWorks}
            className="py-4 px-6 bg-white text-gray-800 border-2 border-gray-200 rounded-lg text-lg font-bold hover:border-gray-300 transition-colors shadow-sm text-center"
          >
            Ustoz AI qanday ishlaydi?
          </button>
        </div>

        <div className="w-full max-w-xl border border-gray-200 rounded-2xl p-6 shadow-sm bg-gray-50">
          <h2 className="text-xl font-bold mb-6 text-center">Siz qaysi holatdasiz?</h2>
          <div className="flex flex-col gap-3">
            {pains.map((pain) => (
              <button
                key={pain}
                onClick={() => setSelectedPain(pain)}
                className={`flex items-center text-left p-4 rounded-xl border-2 transition-colors ${
                  selectedPain === pain
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="text-2xl mr-3">{painEmojis[pain]}</span>
                <span className="text-lg font-medium">{pain}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* === ZONA 2: JAVOB (tanlovga qarab) === */}
      <AnimatePresence>
        {selectedPain && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="px-6 py-16 md:py-24 bg-green-50 flex flex-col items-center text-center"
          >
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium mb-8 whitespace-pre-line">
                {painResponses[selectedPain]}
              </p>
              <Link
                href="/onboarding"
                className="inline-block py-4 px-8 bg-green-600 text-white rounded-lg text-lg font-bold hover:bg-green-700 transition-colors shadow-md"
              >
                Sinab ko&apos;rish &rarr;
              </Link>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* === ZONA 3: "NEGA USTOZ AI?" === */}
      <section id="how-it-works" className="px-6 py-16 md:py-24 bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 max-w-2xl leading-tight">
          Sizga yana bir kurs emas.
          <br />
          Sizga yo&apos;l ko&apos;rsatadigan Ustoz kerak.
        </h2>

        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="bg-gray-100 px-6 py-4 rounded-xl text-lg font-medium shadow-sm border border-gray-200">
            Siz &rarr; maqsadingizni aytasiz
          </div>
          <div className="text-2xl text-gray-400">&darr;</div>
          <div className="bg-blue-50 text-blue-900 border border-blue-200 px-6 py-4 rounded-xl text-lg font-bold shadow-sm">
            Ustoz AI &rarr; holatingizni tahlil qiladi
          </div>
          <div className="text-2xl text-gray-400">&darr;</div>
          <div className="bg-green-50 text-green-900 border border-green-200 px-6 py-4 rounded-xl text-lg font-bold shadow-sm">
            Siz &rarr; kerakli mashqni bajarasiz
          </div>
        </div>

        <button
          onClick={() => setShowHowItWorks(true)}
          className="py-3 px-6 bg-white text-gray-800 border-2 border-gray-200 rounded-lg text-base font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          Qanday ishlaydi?
        </button>
      </section>

      {/* === MODAL (Qanday ishlaydi?) === */}
      <AnimatePresence>
        {showHowItWorks && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ustoz AI qanday ishlaydi?</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
                <p>Ustoz AI — bu oddiy kurs emas. Bu sizning shaxsiy yo&apos;l ko&apos;rsatuvchingiz.</p>
                <p>Siz maqsadingizni aytasiz. Ustoz AI sizning darajangizni, xatolaringizni va qiyinchiliklaringizni tahlil qiladi.</p>
                <p>Keyin sizga aynan kerakli mashqni beradi — ortiqcha narsa yo&apos;q.</p>
                <p className="font-semibold text-gray-900">Har kuni 5 daqiqa — natija katta.</p>
              </div>
              <button
                onClick={() => setShowHowItWorks(false)}
                className="w-full py-4 bg-gray-900 text-white rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Tushundim
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* === ZONA 4: YAKUNIY CTA === */}
      <section className="px-6 py-16 md:py-24 bg-gray-50 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl leading-tight">
          Bugun 10 daqiqa ajrating.
          <br />
          Keyingi 10 kunni nima qilishni Ustoz AI o&apos;zi ko&apos;rsatadi.
        </h2>
        <Link
          href="/onboarding"
          className="py-4 px-8 bg-green-600 text-white rounded-lg text-xl font-bold hover:bg-green-700 transition-colors shadow-lg mb-6"
        >
          10 daqiqalik boshlang&apos;ich test &rarr;
        </Link>
        <p className="text-sm text-gray-500 font-medium">
          ✓ Bepul &nbsp; ✓ Karta kerak emas &nbsp; ✓ Reklama yo&apos;q
        </p>
      </section>

      {/* === FOOTER === */}
      <footer className="py-8 text-center border-t border-gray-200 bg-white">
        <p className="text-gray-900 font-bold mb-1">Ustoz AI &copy; 2026</p>
        <p className="text-gray-500 text-sm">O&apos;zbekistonda yaratilgan</p>
      </footer>
    </main>
  );
}
