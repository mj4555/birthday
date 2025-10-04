"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    a.volume = 0.25;

    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));

    const onFirstTouch = () => {
      a.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("click", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { once: true });
    window.addEventListener("click", onFirstTouch, { once: true });

    return () => {
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("click", onFirstTouch);
    };
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.95 }}
        className="card px-4 py-2 text-sm flex items-center gap-2"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span>{playing ? "⏸️ Pause" : "▶️ Play"}</span>
        <span className="text-rose-700/70">music</span>
      </motion.button>
      <audio ref={ref} src="/music/romance.mp3" preload="auto" playsInline />
    </div>
  );
}
