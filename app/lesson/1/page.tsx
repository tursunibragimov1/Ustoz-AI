"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const allQuestions = [
  {
    id: 1,
    en: "Hello",
    uz: "Salom",
    distractors_en: ["Xayr", "Rahmat", "Tong"],
    distractors_uz: ["Hello", "Goodbye", "Thanks"],
  },
  {
    id: 2,
    en: "Good morning",
    uz: "Xayrli tong",
    distractors_en: ["Xayrli kech", "Qalaysan?", "Rahmat"],
    distractors_uz: ["Good evening", "How are you?", "Thank you"],
  },
  {
    id: 3,
    en: "How are you?",
    uz: "Qalaysan?",
    distractors_en: ["Salom", "Xayr", "Rahmat"],
    distractors_uz: ["Hello", "Goodbye", "Thanks"],
  },
];

const vocabulary = [
  { en: "Hello", uz: "Salom" },
  { en: "Hi", uz: "Salom (do'stona)" },
  { en: "Good morning", uz: "Xayrli tong" },
  { en: "Good evening", uz: "Xayrli kech" },
  { en: "How are you?", uz: "Qalaysan?" },
  { en: "I'm fine, thank you", uz: "Yaxshi, rahmat" },
];

interface FormattedExercise {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

function Lesson1Content() {
  const searchParams = useSearchParams();
  const isTestMode = searchParams.get("test") === "1";

  const [exercises, setExercises] = useState<FormattedExercise[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});

  useEffect(() => {
    let questionsToUse = [...allQuestions];

    if (!isTestMode) {
      // Shuffle questions
      questionsToUse.sort(() => Math.random() - 0.5);
    }

    const formatted: FormattedExercise[] = questionsToUse.map((q, index) => {
      // For test mode: 1 and 2 are en->uz, 3 is uz->en
      // For normal mode: 50% chance each
      let isEnToUz = true;
      if (isTestMode) {
        if (index === 2) isEnToUz = false; // The 3rd question (index 2) will be uz->en
      } else {
        isEnToUz = Math.random() > 0.5;
      }

      const questionText = isEnToUz
        ? `"${q.en}" so'zining tarjimasi?`
        : `"${q.uz}" so'zining inglizchasi?`;

      const correctAnswer = isEnToUz ? q.uz : q.en;
      const distractors = isEnToUz ? q.distractors_en : q.distractors_uz;

      let options = [correctAnswer, ...distractors];

      if (!isTestMode) {
        // Shuffle options
        options.sort(() => Math.random() - 0.5);
      }

      const correctIndex = options.indexOf(correctAnswer);

      return {
        id: q.id,
        question: questionText,
        options,
        correctIndex,
      };
    });

    setExercises(formatted);

    const initialAnswers: { [key: number]: number | null } = {};
    formatted.forEach((ex) => {
      initialAnswers[ex.id] = null;
    });
    setAnswers(initialAnswers);
  }, [isTestMode]);

  const handleOptionClick = (exerciseId: number, optionIndex: number) => {
    if (answers[exerciseId] === null) {
      setAnswers((prev) => ({ ...prev, [exerciseId]: optionIndex }));
    }
  };

  const handleRetry = (exerciseId: number) => {
    setAnswers((prev) => ({ ...prev, [exerciseId]: null }));
  };

  if (exercises.length === 0) {
    return <div className="p-10 text-center">Yuklanmoqda...</div>;
  }

  const isAllAnswered = Object.values(answers).every((ans) => ans !== null);

  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-4 max-w-xl mx-auto text-black bg-white">
      <div className="w-full text-center mb-6">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
          A1 · Unit 1 · Lesson 1
        </p>
        <h1 className="text-3xl font-bold mt-2">Salomlashish</h1>
      </div>

      <div className="w-full bg-gray-50 rounded-xl p-4 mb-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-center">Yangi so&apos;zlar</h2>
        <ul className="space-y-3">
          {vocabulary.map((word, idx) => (
            <li key={idx} className="flex justify-between border-b pb-2 last:border-b-0 last:pb-0">
              <span className="font-medium text-blue-900">{word.en}</span>
              <span className="text-gray-700">{word.uz}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full space-y-8">
        {exercises.map((exercise, displayIndex) => {
          const selectedIndex = answers[exercise.id];
          const showFeedback = selectedIndex !== null;
          const isCorrect = selectedIndex === exercise.correctIndex;

          return (
            <div key={exercise.id} className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="font-medium text-lg mb-4">
                Mashq {displayIndex + 1}: {exercise.question}
              </h3>
              <div className="space-y-2">
                {exercise.options.map((option, index) => {
                  let buttonClass = "w-full text-left p-3 rounded-lg border transition-colors ";

                  if (!showFeedback) {
                    buttonClass += "hover:bg-gray-50 bg-white border-gray-200";
                  } else {
                    if (index === exercise.correctIndex) {
                      buttonClass += "bg-green-100 border-green-500 font-semibold";
                    } else if (index === selectedIndex && !isCorrect) {
                      buttonClass += "bg-red-100 border-red-500 font-semibold";
                    } else {
                      buttonClass += "bg-white border-gray-200 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(exercise.id, index)}
                      disabled={showFeedback}
                      className={buttonClass}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {showFeedback && (
                <div className="mt-4 text-center text-sm font-medium">
                  {isCorrect ? (
                    <p className="text-green-600">✅ To&apos;g&apos;ri</p>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-red-600">
                        <p>❌ Xato</p>
                        <p>To&apos;g&apos;ri javob: {exercise.options[exercise.correctIndex]}</p>
                      </div>
                      <button
                        onClick={() => handleRetry(exercise.id)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-semibold"
                      >
                        Qayta urinish
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="w-full mt-10 mb-6">
        <button
          disabled={!isAllAnswered}
          className={`w-full py-4 rounded-xl text-lg font-bold transition-colors ${
            isAllAnswered
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Keyingi dars
        </button>
      </div>

      <Link href="/" className="text-blue-600 hover:underline font-medium">
        Bosh sahifaga qaytish
      </Link>
    </main>
  );
}

export default function Lesson1() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Yuklanmoqda...</div>}>
      <Lesson1Content />
    </Suspense>
  );
}
