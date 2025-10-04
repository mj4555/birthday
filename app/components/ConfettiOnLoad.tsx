"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiOnLoad() {
  useEffect(() => {
    const shot = (angle: number, originX: number) =>
      confetti({ particleCount: 40, angle, spread: 55, startVelocity: 45, origin: { x: originX, y: 0.8 } });

    shot(60, 0.2);
    shot(120, 0.8);
    setTimeout(() => {
      shot(60, 0.3);
      shot(120, 0.7);
    }, 400);
  }, []);
  return null;
}
