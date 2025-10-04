"use client";

import { motion } from "framer-motion";
import { SITE } from "../config/site";

export default function Hero() {
  return (
    <section className="relative sparkles">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="card p-8 sm:p-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            Happy Birthday, <span className="handwritten text-rose-600 text-5xl sm:text-7xl align-middle"> {SITE.boyfriendName} </span> 💖
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-rose-800/80"
          >
            Wishing you a day as magical as you are.
          </motion.p>

          <div aria-hidden className="mt-8 grid grid-cols-5 gap-2 text-2xl sm:text-3xl">
            {"💗 💞 💘 💝 💓".split(" ").map((h, i) => (
              <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: i*0.05 }} className="opacity-70">{h}</motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
