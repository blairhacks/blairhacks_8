"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import { HiArrowDown, HiCodeBracket } from "react-icons/hi2";

import { ScrollTo } from "@/components/ScrollTo";
import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Dynamic background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50" />
        <div className="absolute inset-0 bg-[url(/hero_image.png)] bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-100/80 via-transparent to-pink-50/40" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 h-32 w-32 rotate-45 border border-red-500/30"
          animate={{ rotate: [45, 405, 45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-32 h-24 w-24 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 h-16 w-16 rounded-lg border-2 border-red-400/40"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-20 bottom-20 h-20 w-20 rounded-full bg-gradient-to-br from-red-400/20 to-pink-400/20"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content with innovative layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-12 py-20 lg:grid-cols-2">
          {/* Left side - Main content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HiCodeBracket size={16} />
              <span>High School Hackathon</span>
            </motion.div>

            {/* Main heading with innovative typography */}
            <div className="space-y-4">
              <motion.h1
                className={`${anta.className} text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
                  BlairHacks
                </span>
                <br />
                <span className="text-3xl text-red-700 sm:text-4xl lg:text-5xl">
                  2026
                </span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500" />
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-pink-500 to-red-400" />
                <div className="h-1 w-4 rounded-full bg-gradient-to-r from-red-400 to-red-500" />
              </motion.div>
            </div>

            {/* Subtitle with enhanced styling */}
            <motion.p
              className="max-w-lg text-xl leading-relaxed text-gray-800 sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join{" "}
              <span className="font-semibold text-red-600">100+ students</span>{" "}
              for an unforgettable weekend of{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text font-semibold text-transparent">
                innovation, collaboration, and building the future
              </span>
            </motion.p>

            {/* Event details with modern cards */}
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  label: "Date TBD",
                  color: "from-red-500 to-pink-500",
                },
                {
                  label: "Montgomery Blair High School",
                  color: "from-red-500 to-pink-500",
                },
                {
                  label: "100+ Students",
                  color: "from-red-500 to-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex min-h-[80px] items-center rounded-2xl border border-red-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-red-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex w-full items-center justify-center">
                    <span className="text-center font-medium text-gray-800">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with enhanced design */}
            <motion.div
              className="flex flex-col gap-4 pt-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ScrollTo id="register">
                <Button
                  size="lg"
                  className="transform bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-pink-700"
                >
                  Get Started
                </Button>
              </ScrollTo>
              <ScrollTo id="join">
                <Button
                  size="lg"
                  className="transform bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-pink-700"
                >
                  Join Team
                </Button>
              </ScrollTo>
            </motion.div>
          </motion.div>

          {/* Right side - Visual elements */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Image placeholder */}
            {/*
            <div className="relative flex h-96 w-full items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 to-pink-500/20 blur-3xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 h-80 w-80 rounded-3xl border-2 border-dashed border-red-300 bg-gradient-to-br from-red-50/50 to-pink-50/50 shadow-lg backdrop-blur-sm">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Hero Image
                    </p>
                    <p className="text-xs text-gray-500">
                      800x800px recommended
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ScrollTo id="about">
            <motion.div
              className="group flex cursor-pointer flex-col items-center text-gray-600 hover:text-red-600"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-300 transition-colors group-hover:border-red-500">
                <HiArrowDown
                  size={16}
                  className="transition-colors group-hover:text-red-500"
                />
              </div>
              <span className="mt-2 text-sm transition-colors group-hover:text-red-500">
                Explore
              </span>
            </motion.div>
          </ScrollTo>
        </motion.div>
      </div>
    </section>
  );
}
