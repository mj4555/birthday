"use client";

import { SITE } from "../config/site";
import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <section id="letter" className="mx-auto max-w-3xl px-6 pb-20">
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8 sm:p-10"
      >
        <h3 className="text-center text-3xl font-bold mb-6">💌 A Letter For You</h3>
        <div className="bg-rose-50/90 rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-inner">
          <p className="handwritten text-3xl leading-snug text-rose-700/90">
            My Love,
          </p>
          <div className="mt-4 whitespace-pre-line text-rose-900/90 leading-8">
            Happy Birthday, my everything. You are truly the most incredible person I’ve ever met.
            Your kindness, smile, and heart brighten my life every single day. I’m so proud of who you are and so lucky to have you.

            {"\n\n"}I love you so, so much — more than words can ever express. I promise I’ll never leave you, and I’ll always be by your side through everything. Thank you for being you. You mean the world to me.
          </div>
          <p className="handwritten text-3xl text-right mt-6 text-rose-700/90">
            Forever yours,
            <br /> {SITE.fromName}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
