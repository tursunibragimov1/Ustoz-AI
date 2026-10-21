import HeaderBar from "@/components/hero/HeaderBar";
import EmojiRow from "@/components/hero/EmojiRow";
import GoalSelector from "@/components/hero/GoalSelector";
import ListenCard from "@/components/hero/ListenCard";
import DailyPhrase from "@/components/hero/DailyPhrase";
import HowItWorksButton from "@/components/hero/HowItWorksButton";
import IllustrationZone from "@/components/hero/IllustrationZone";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#1B2A4A] font-sans overflow-x-hidden flex flex-col">
      <HeaderBar />

      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12 flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">

        {/* CHAP USTUN (Mobile: Asosiy ekran) */}
        <div className="flex flex-col w-full lg:col-span-7 z-10">
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold text-[#1B2A4A] mb-2 lg:mb-4 leading-tight">
            Ingliz tilini jonli muhitda, o&apos;z holatingizdan boshlab o&apos;rganing
          </h1>
          <p className="text-sm sm:text-base text-[#475569] mb-4 lg:mb-8">
            Holatingizni belgilang — sizga mos yo&apos;nalishni ochamiz.
          </p>

          <EmojiRow />

          {/* Mobilda scroll orqali ham ko'rinishi mumkin bo'lgan qism */}
          <div className="hidden lg:block">
            <ListenCard />
          </div>

          <GoalSelector />

          <DailyPhrase />

          <HowItWorksButton />

          <div className="mt-8 lg:hidden">
            <ListenCard />
          </div>
        </div>

        {/* O'NG USTUN (Desktop: Illustration Zone) */}
        <div className="hidden lg:block lg:col-span-5 h-full relative z-0">
          <IllustrationZone />
        </div>

      </div>

      <footer className="w-full text-center py-6 mt-auto border-t border-[#E5DEC9] bg-[#FAF6EE]">
        <p className="font-bold text-[#1B2A4A]">Ustoz AI &copy; 2026</p>
        <p className="text-xs text-[#475569] mt-1">O&apos;zbekistonda yaratilgan</p>
      </footer>
    </main>
  );
}
