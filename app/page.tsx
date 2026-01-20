"use client";

import { useMemo } from "react";
import { AboutUs } from "@/components/AboutUs";
import { Donate } from "@/components/Donate";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JoinTeam } from "@/components/JoinTeam";
import { Register } from "@/components/Register";
import { Sponsors } from "@/components/Sponsors";

export default function Home() {
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-red-400/10 to-pink-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-red-300/5 to-pink-300/5 blur-3xl" />
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500/3 to-transparent" />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <AboutUs />
        <JoinTeam />
        <Register />
        <Sponsors />
        <Donate />
        <FAQ />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-red-500/30"
            style={style}
          />
        ))}
      </div>

      {/* Footer - bottom left */}
      <div className="absolute bottom-2 left-2 z-10">
        <p className="text-xs text-gray-400">
          designed by Shiven Khurana with{" "}
          <span className="text-red-400">❤️</span>
        </p>
      </div>
    </div>
  );
}
