"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Anta } from "next/font/google";
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineSparkles,
} from "react-icons/hi2";

import { ScrollTo } from "@/components/ScrollTo";
import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function AboutUs() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  const themeStars = [
    { left: "12%", top: "22%", size: "2px", delay: "0s", duration: "3.2s" },
    { left: "22%", top: "68%", size: "1px", delay: "0.4s", duration: "2.8s" },
    { left: "34%", top: "36%", size: "1px", delay: "0.7s", duration: "3.6s" },
    { left: "48%", top: "58%", size: "2px", delay: "0.2s", duration: "4.2s" },
    { left: "63%", top: "30%", size: "1px", delay: "0.9s", duration: "3.4s" },
    { left: "74%", top: "64%", size: "2px", delay: "0.1s", duration: "4.0s" },
    { left: "86%", top: "40%", size: "1px", delay: "0.6s", duration: "3.0s" },
  ];

  const eventDetails = [
    {
      label: "Date",
      value: "May 23rd to 25th",
      subtext: "Mark your calendars!",
    },
    {
      label: "Location",
      value: "Montgomery Blair High School",
      subtext: "Heart of innovation",
    },
    {
      label: "Capacity",
      value: "100+ Students",
      subtext: "Join the community",
    },
    {
      label: "Duration",
      value: "48 Hours",
      subtext: "Build something amazing",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 py-32"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-red-400/10 to-pink-400/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-6 py-3 text-sm text-red-700 backdrop-blur-sm">
            <HiOutlineSparkles size={16} />
            <span>About BlairHacks</span>
          </div>

          <h2
            className={`${anta.className} mb-8 text-6xl font-bold sm:text-7xl`}
          >
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Building the Future
            </span>
            <br />
            <span className="text-gray-800">Together</span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-800">
            Born from the success of{" "}
            <a
              href="https://blairhacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-red-600/50 transition-colors hover:text-red-500"
            >
              BlairHacks
            </a>
            , we&apos;re bringing innovation, collaboration, and cutting-edge
            technology to the DMV.
          </p>
        </motion.div>

        {/* Staggered Content Sections */}
        <div className="space-y-32">
          {/* Section: Empowering + Everything side by side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid items-start gap-12 lg:grid-cols-2"
          >
            {/* Left: Empowering Students */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                <HiOutlineLightBulb size={16} />
                <span>Our Mission</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-800">
                Empowering Students Through{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Technology
                </span>
              </h3>
              <p className="text-xl leading-relaxed text-gray-800">
                We believe every student deserves the opportunity to explore,
                create, and innovate with technology. BlairHacks provides a
                platform where ideas become reality and learning happens through
                doing.
              </p>
            </div>

            {/* Right: Everything You Need */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                <HiOutlineAcademicCap size={16} />
                <span>What We Offer</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-800">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Succeed
                </span>
              </h3>
              <p className="text-xl leading-relaxed text-gray-800">
                From workshops and mentorship to software
                resources, we provide the tools and support you need to bring
                your ideas to life.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                <span>Event Details</span>
              </div>
              <h3 className="mt-4 text-4xl font-bold text-gray-800">
                Everything you need to know about{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  BlairHacks 8
                </span>
              </h3>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="relative">
                <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500/30 to-pink-500/30" />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {eventDetails.map((detail, index) => (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-br from-red-500 to-pink-600 shadow-lg" />

                      <div className="mt-8 text-center">
                        <h4 className="mb-2 text-lg font-semibold text-gray-800">
                          {detail.label}
                        </h4>
                        <p className="mb-1 text-xl font-bold text-gray-800">
                          {detail.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {detail.subtext}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 4: All Skill Levels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                <HiOutlineAcademicCap size={16} />
                <span>All Skill Levels</span>
              </div>

              <h3 className="text-4xl font-bold text-gray-800">
                Everyone is{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome
                </span>
              </h3>

              <p className="text-xl leading-relaxed text-gray-800">
                Whether you&apos;re a complete beginner or an experienced
                developer, BlairHacks is designed for students of all skill
                levels. Our mentors and workshops will help you learn, grow, and
                build something amazing.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <ScrollTo id="register">
                  <Button className="bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700">
                    Register
                  </Button>
                </ScrollTo>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b1f] via-[#090510] to-[#05030a]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

                <div className="pointer-events-none absolute inset-0">
                  <svg className="absolute inset-0 h-full w-full opacity-35">
                    <defs>
                      <linearGradient id="homeThemeLine" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
                        <stop offset="60%" stopColor="#c4b5fd" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.45" />
                      </linearGradient>
                    </defs>
                    <path d="M 18% 26% L 34% 38% L 50% 60%" stroke="url(#homeThemeLine)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
                    <path d="M 50% 60% L 74% 66% L 86% 42%" stroke="url(#homeThemeLine)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
                  </svg>

                  {themeStars.map((s, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                      style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
                      animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.6, 1] }}
                      transition={{ duration: parseFloat(s.duration), delay: parseFloat(s.delay), repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-8 right-8 h-32 w-32 rounded-full border-2 border-red-300/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-20 left-12 h-20 w-20 rotate-45 border border-pink-300/30"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-20 bottom-16 h-16 w-16 rounded-lg bg-gradient-to-br from-red-400/15 to-pink-400/15"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      Theme: Constellations
                    </h4>
                    <p className="text-white/75">
                      Connect the dots — build something that shines. Bring your ideas to life under the night sky.
                    </p>
                    <Button
                      variant="outline"
                      className="border-white/20 bg-white/5 text-white/85 hover:border-white/30 hover:bg-white/10"
                    >
                      Theme prompts coming soon
                    </Button>
                  </div>
                </div>

                <div className="absolute top-1/2 left-6 h-16 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-purple-300/20 to-transparent" />
                <div className="absolute top-1/2 right-6 h-16 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
