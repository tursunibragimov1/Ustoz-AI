export type GoalId = "speaking" | "grammar" | "vocabulary" | "exam" | "beginner";

export interface GoalItem {
  id: GoalId;
  icon: string;
  title: string;
  response: string;
}

export interface TooltipItem {
  id: string;
  emoji: string;
  tooltipText: string;
}

export interface PhraseItem {
  en: string;
  uz: string;
}

export const goals: GoalItem[] = [
  { id: "speaking", icon: "🗣️", title: "Gapirishga qiynalaman", response: "✨ Ajoyib tanlov: Qoidalarsiz, 1-kundan og'zaki nutq va tinglashdan boshlaymiz." },
  { id: "grammar", icon: "🧩", title: "Grammatikani bilaman, ishlata olmayman", response: "✨ To'g'ri yo'l: Grammatikani amalda qo'llaymiz — quruq qoidalar emas." },
  { id: "vocabulary", icon: "🧠", title: "So'zlarni tez unutaman", response: "✨ Xotirani qiynamaymiz: So'zlarni jonli hikoya va vaziyatlar ichida eslab qolamiz." },
  { id: "exam", icon: "🎯", title: "Imtihonga tayyorlanyapman", response: "✨ Maqsadga mos: Imtihon formatiga mos mashqlar va zaif joylarni mustahkamlash." },
  { id: "beginner", icon: "🌱", title: "Noldan boshlayapman", response: "✨ Eng yaxshi qaror: Eng oddiy joydan boshlaymiz, asta-sekin o'samiz." }
];

export const heroEmojis: TooltipItem[] = [
  { id: "book", emoji: "📖", tooltipText: "Once upon a time... — Bir bor ekan, bir yo'q ekan..." },
  { id: "coffee", emoji: "☕", tooltipText: "Tea, please — Iltimos, choy" },
  { id: "plant", emoji: "🪴", tooltipText: "Let's grow together — Birga o'samiz" }
];

export const phrases: PhraseItem[] = [
  { en: "Could I have a moment?", uz: "Bir daqiqa mumkinmi?" },
  { en: "That sounds great!", uz: "Bu ajoyib eshitiladi!" },
  { en: "I'm on my way", uz: "Men yo'ldaman" },
  { en: "Let's get started", uz: "Keling, boshlaymiz" },
  { en: "What do you think?", uz: "Siz nima deb o'ylaysiz?" },
  { en: "Take your time", uz: "Shoshilmang, bemalol" }
];
