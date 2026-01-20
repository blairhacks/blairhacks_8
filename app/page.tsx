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
  const particles = [
    { left: "10%", top: "20%", animationDelay: "0s", animationDuration: "3s" },
    { left: "85%", top: "15%", animationDelay: "1s", animationDuration: "4s" },
    {
      left: "45%",
      top: "80%",
      animationDelay: "0.5s",
      animationDuration: "3.5s",
    },
    { left: "25%", top: "60%", animationDelay: "2s", animationDuration: "5s" },
    {
      left: "70%",
      top: "40%",
      animationDelay: "1.5s",
      animationDuration: "4.2s",
    },
    {
      left: "5%",
      top: "90%",
      animationDelay: "0.2s",
      animationDuration: "3.8s",
    },
    {
      left: "95%",
      top: "50%",
      animationDelay: "1.2s",
      animationDuration: "4.5s",
    },
    {
      left: "40%",
      top: "10%",
      animationDelay: "0.8s",
      animationDuration: "3.2s",
    },
    {
      left: "60%",
      top: "75%",
      animationDelay: "1.8s",
      animationDuration: "4.8s",
    },
    {
      left: "30%",
      top: "35%",
      animationDelay: "0.4s",
      animationDuration: "3.6s",
    },
    {
      left: "80%",
      top: "70%",
      animationDelay: "1.1s",
      animationDuration: "4.1s",
    },
    {
      left: "15%",
      top: "45%",
      animationDelay: "1.6s",
      animationDuration: "4.4s",
    },
    {
      left: "50%",
      top: "55%",
      animationDelay: "0.3s",
      animationDuration: "3.9s",
    },
    {
      left: "35%",
      top: "95%",
      animationDelay: "1.4s",
      animationDuration: "4.7s",
    },
    {
      left: "65%",
      top: "25%",
      animationDelay: "0.9s",
      animationDuration: "3.3s",
    },
    {
      left: "20%",
      top: "15%",
      animationDelay: "1.3s",
      animationDuration: "4.6s",
    },
    {
      left: "75%",
      top: "85%",
      animationDelay: "0.6s",
      animationDuration: "3.4s",
    },
    {
      left: "55%",
      top: "30%",
      animationDelay: "1.7s",
      animationDuration: "4.3s",
    },
    {
      left: "90%",
      top: "65%",
      animationDelay: "0.1s",
      animationDuration: "3.7s",
    },
    {
      left: "12%",
      top: "75%",
      animationDelay: "1.9s",
      animationDuration: "4.9s",
    },
  ];

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
