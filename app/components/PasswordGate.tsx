"use client";

import { useEffect, useState } from "react";
import { SITE } from "../config/site";

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\./g, "");
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState<boolean>(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!SITE.enablePasswordGate) {
      setOk(true);
      return;
    }
    const saved = localStorage.getItem("passedGate");
    if (saved === "yes") setOk(true);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = SITE.validAnswers.map(normalize);
    if (valid.includes(normalize(input))) {
      localStorage.setItem("passedGate", "yes");
      setOk(true);
    } else {
      alert("Cute try 😘 but not quite. Hint: try formats like 'October 7'.");
    }
  };

  if (!SITE.enablePasswordGate) return <>{children}</>;
  if (ok) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={submit} className="card p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-3">🔐💘</div>
        <h1 className="text-2xl font-semibold">{SITE.passwordQuestion}</h1>
        <input
          className="mt-4 w-full px-4 py-3 rounded-xl border border-rose-200 outline-none focus:ring-2 ring-rose-300 bg-white/70"
          placeholder="e.g., October 7"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="mt-4 w-full rounded-xl bg-rose-500 text-white py-3 hover:bg-rose-600 transition">
          Enter
        </button>
        <p className="mt-3 text-sm text-rose-800/70">A little love-locked door 🔒✨</p>
      </form>
    </div>
  );
}
