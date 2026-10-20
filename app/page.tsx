import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center">Ustoz AI</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Ingliz tilini o&apos;rganishning eng oddiy yo&apos;li.
      </p>
      <Link
        href="/lesson/1"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Boshlash
      </Link>
    </main>
  );
}
