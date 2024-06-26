import Image from "next/image";
import { ComingSoon } from "../components/ComingSoon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16 px-8">
      <ComingSoon />
      <footer className="mt-16 w-full text-center text-sm text-gray-400">
        made with <span className="text-xl align-middle">❤️</span> by <span className="text-xl align-middle">🤖</span>{" "}
        and{" "}
        <a href="https://x.com/danmana" target="_blank" rel="noopener noreferrer" className="text-base">
          @danmana
        </a>
      </footer>
    </main>
  );
}
