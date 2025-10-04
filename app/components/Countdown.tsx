"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE } from "../config/site";

function getTargetDate(): Date {
  const now = new Date();
  const year =
    now.getMonth() + 1 > SITE.birthdayMonth ||
    (now.getMonth() + 1 === SITE.birthdayMonth && now.getDate() > SITE.birthdayDay)
      ? now.getFullYear() + 1
      : now.getFullYear();
  return new Date(year, SITE.birthdayMonth - 1, SITE.birthdayDay, 0, 0, 0);
}

function remainingParts(target: Date) {
  const ms = target.getTime() - Date.now();
  const clamp = Math.max(ms, 0);
  const days = Math.floor(clamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((clamp % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((clamp % (1000 * 60)) / 1000);
  return { ms: clamp, days, hours, mins, secs };
}

export default function Countdown() {
  const target = useMemo(() => getTargetDate(), []);
  const [time, setTime] = useState(remainingParts(target));

  useEffect(() => {
    const id = setInterval(() => setTime(remainingParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const isToday = time.ms === 0;

  return (
    <section className="mx-auto max-w-5xl px-6 pb-6">
      <div className="card p-8 text-center">
        {!isToday ? (
          <>
            <h3 className="text-2xl font-semibold">Countdown to October 7 🎉</h3>
            <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
              {[
                ["Days", time.days],
                ["Hours", time.hours],
                ["Minutes", time.mins],
                ["Seconds", time.secs],
              ].map(([label, val]) => (
                <div key={label as string} className="w-20 sm:w-24">
                  <div className="text-3xl sm:text-4xl font-bold">{val as number}</div>
                  <div className="text-xs uppercase tracking-wide text-rose-700/70">
                    {label as string}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">It’s today! 🎂💖</h3>
            <p className="mt-2 text-rose-800/80">Let’s celebrate your special day.</p>
          </div>
        )}
      </div>
    </section>
  );
}
