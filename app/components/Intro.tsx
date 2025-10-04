"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const balloons = ["🎈","🎈","🎈","🎈","🎈","🎈","🎈","🎈"];

export default function Intro() {
  const [text, setText] = useState("");
  const full = "Happy Birthday";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setText(full.slice(0, i++));
      if (i > full.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-16">
      {/* Floating balloons */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {balloons.map((b, i) => (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: [-20, -80, -140 - (i*10)], opacity: [0.1, 0.6, 0] }}
            transition={{ duration: 6 + i*0.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            className="absolute text-4xl"
            style={{ left: `${(i*12)%100}%`, bottom: `${(i%3)*-20}px` }}
          >
            {b}
          </motion.div>
        ))}
      </div>

      {/* Typewriter text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold">
          <span className="align-middle">{text}</span>
          <span className="ml-1 animate-pulse">🎂</span>
        </h1>
        <p className="mt-3 text-rose-700">A little website made with love ✨</p>
      </div>
    </section>
  );
}
