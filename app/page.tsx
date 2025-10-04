import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import AudioPlayer from "./components/AudioPlayer";
import Surprise from "./components/Surprise";
import LoveLetter from "./components/LoveLetter";
import PasswordGate from "./components/PasswordGate";
import ConfettiOnLoad from "./components/ConfettiOnLoad";

export default function Page() {
  return (
    <PasswordGate>
      <ConfettiOnLoad />
      <AudioPlayer />
      <main className="min-h-screen">
        <Intro />
        <Hero />
        <Countdown />
        <Surprise />
        <LoveLetter />
        <footer className="pb-16 text-center text-sm text-rose-700/70">
          Made with 💖 using Next.js & Vercel
        </footer>
      </main>
    </PasswordGate>
  );
}
