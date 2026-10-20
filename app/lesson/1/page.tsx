"use client";

import { useState } from "react";
import Link from "next/link";

interface Exercise {
  id: number;
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    question: "\"Hello\" so'zining tarjimasi?",
    options: [
      { label: "A", text: "Xayr" },
      { label: "B", text: "Salom" },
      { label: "C", text: "Rahmat" },
      { label: "D", text: "Tong" },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "\"Good morning\" tarjimasi?",
    options: [
      { label: "A", text: "Xayrli kech" },
      { label: "B", text: "Qalaysan?" },
      { label: "C", text: "Xayrli tong" },
      { label: "D", text: "Rahmat" },
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: "\"How are you?\" tarjimasi?",
    options: [
      { label: "A", text: "Qalaysan?" },
      { label: "B", text: "Salom" },
      { label: "C", text: "Xayr" },
      { label: "D", text: "Rahmat" },
    ],
    correctAnswer: "A",
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

export default function Lesson1() {
  const [answers, setAnswers] = useState<{ [key: number]: string | null }>({
    1: null,
    2: null,
    3: null,
  });

  const handleOptionClick = (exerciseId: number, optionLabel: string) => {
    if (!answers[exerciseId]) {
      setAnswers((prev) => ({ ...prev, [exerciseId]: optionLabel }));
    }
  };

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
        {exercises.map((exercise) => {
          const selectedAnswer = answers[exercise.id];
          const isCorrect = selectedAnswer === exercise.correctAnswer;
          const showFeedback = selectedAnswer !== null;

          return (
            <div key={exercise.id} className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="font-medium text-lg mb-4">
                Mashq {exercise.id}: {exercise.question}
              </h3>
              <div className="space-y-2">
                {exercise.options.map((option) => {
                  let buttonClass = "w-full text-left p-3 rounded-lg border transition-colors ";

                  if (!showFeedback) {
                    buttonClass += "hover:bg-gray-50 bg-white border-gray-200";
                  } else {
                    if (option.label === exercise.correctAnswer) {
                      buttonClass += "bg-green-100 border-green-500 font-semibold";
                    } else if (option.label === selectedAnswer && !isCorrect) {
                      buttonClass += "bg-red-100 border-red-500 font-semibold";
                    } else {
                      buttonClass += "bg-white border-gray-200 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={option.label}
                      onClick={() => handleOptionClick(exercise.id, option.label)}
                      disabled={showFeedback}
                      className={buttonClass}
                    >
                      <span className="font-medium mr-2">{option.label})</span> {option.text}
                    </button>
                  );
                })}
              </div>
              {showFeedback && !isCorrect && (
                <p className="mt-3 text-red-600 font-medium text-sm text-center">
                  Noto&apos;g&apos;ri. To&apos;g&apos;ri javob: {exercise.correctAnswer})
                </p>
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
