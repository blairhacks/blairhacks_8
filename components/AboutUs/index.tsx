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

  const eventDetails = [
    {
      label: "Date",
      value: "Date TBD",
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
            technology to the DC metro area.
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
                From workshops and mentorship to hardware and software
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
                  BlairHacks 2026
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
                    Join Interest List
                  </Button>
                </ScrollTo>
                <ScrollTo id="join">
                  <Button className="bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700">
                    Join Our Team
                  </Button>
                </ScrollTo>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5" />

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
                    <h4 className="text-2xl font-bold text-gray-800">
                      Theme Coming Soon!
                    </h4>
                    <p className="text-gray-600">
                      We&apos;re finalizing the hackathon theme. Have ideas?
                      We&apos;d love to hear them!
                    </p>
                    <Button
                      variant="outline"
                      className="border-red-400/50 text-red-600 hover:border-red-500 hover:bg-red-500/10"
                    >
                      Theme Submission not out yet!
                    </Button>
                  </div>
                </div>

                <div className="absolute top-1/2 left-6 h-16 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-red-400/20 to-transparent" />
                <div className="absolute top-1/2 right-6 h-16 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
