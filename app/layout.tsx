import type { Metadata } from "next";
import { Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","600"] });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-vibes" });

export const metadata: Metadata = {
  title: "Happy Birthday 💖",
  description: "A romantic birthday surprise",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${vibes.variable} bg-petal text-rose-900`}>
        {children}
      </body>
    </html>
  );
}
