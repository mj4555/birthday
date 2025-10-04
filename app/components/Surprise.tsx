"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Surprise() {
  const [open, setOpen] = useState(false);

  const burst = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff8fab", "#ffb3c1", "#ffc2d1", "#ffe5ec", "#fdc5f5"],
    });
  };

  const handleOpen = () => {
    setOpen(true);
    burst();
    setTimeout(() => burst(), 400);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <div className="text-center">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          className="px-6 py-3 rounded-full bg-rose-500 text-white shadow-lg hover:bg-rose-600 transition"
        >
          Click for a surprise ✨
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="card p-8 max-w-lg text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-2">💝</div>
              <h4 className="text-2xl font-semibold">You are my favorite person</h4>
              <p className="mt-2 text-rose-800/80">I’m so grateful for you—today and always.</p>
              <div className="mt-4 text-3xl animate-bounce">💗💞💘</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
