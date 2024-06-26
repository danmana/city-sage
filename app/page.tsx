import Image from "next/image";
import { ComingSoon } from "../components/ComingSoon";

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center justify-between py-16 px-8">
    <ComingSoon />
  </main>;
}
