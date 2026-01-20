"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Anta } from "next/font/google";
import {
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineCodeBracket,
  HiOutlineGlobeAmericas,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineUsers,
} from "react-icons/hi2";

import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function JoinTeam() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const roles = [
    {
      icon: HiOutlineLightBulb,
      title: "Graphic Designer",
      description: "Create stunning visual content for our brand",
      responsibilities: [
        "Create digital artwork for website, posters, and social media",
        "Work with web developers and outreach team",
        "Design marketing materials and event graphics",
        "Develop brand identity and visual guidelines",
      ],
    },
    {
      icon: HiOutlineCodeBracket,
      title: "UI Designer or Developer",
      description: "Shape the digital experience of BlairHacks",
      responsibilities: [
        "Design and build our website using modern tools",
        "Work with Figma, Next.js/React, and Tailwind CSS",
        "Implement UI libraries like shadcn/ui",
        "Deploy and maintain our web presence",
      ],
    },
    {
      icon: HiOutlineGlobeAmericas,
      title: "Outreach Coordinator",
      description: "Spread the word and build our community",
      responsibilities: [
        "Promote BlairHacks in schools and communities",
        "Create engaging social media content",
        "Manage participant communications",
        "Build partnerships with local organizations",
      ],
    },
  ];

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 py-24"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-red-400/10 to-pink-400/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-6 py-3 text-sm text-red-700 backdrop-blur-sm">
            <HiOutlineUsers size={16} />
            <span>Join Our Team</span>
          </div>

          <h2
            className={`${anta.className} mb-6 text-5xl font-bold sm:text-6xl`}
          >
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Be Part of
            </span>{" "}
            <br />
            <span className="text-gray-800">Something Amazing</span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-800">
            We&apos;re looking for passionate high school students to help us
            expand our impact and reach more students in the DMV. Join
            us in building something amazing!
          </p>
        </motion.div>

        {/* Why Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 grid items-center gap-12 rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
              <HiOutlineBolt size={16} />
              <span>Why Join BlairHacks?</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              Make a Real{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Impact
              </span>
            </h3>
            <p className="text-xl leading-relaxed text-gray-800">
              Be part of a team that&apos;s making a real difference in the tech
              community. Gain valuable experience, build your network, and help
              create an unforgettable experience for 100+ students.
            </p>
          </div>

          <div className="relative">
            {/* Visual */}
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-pink-500/5" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-6 h-20 w-20 rotate-45 border-2 border-red-400/30"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-12 left-8 h-16 w-16 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-12 bottom-8 h-12 w-12 rounded-lg border border-red-300/40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Gain leadership experience",
                    "Build your portfolio",
                    "Network with professionals",
                    "Learn event management",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500/10 to-pink-500/10 p-4"
                    >
                      <span className="text-center text-sm font-medium text-gray-800">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roles Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-4xl font-bold text-gray-800">
              Available{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Roles
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Choose the role that best fits your skills and interests
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500/30 to-pink-500/30" />

            <div className="space-y-16">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                    }`}
                >
                  <div className="absolute top-8 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-br from-red-500 to-pink-600 shadow-lg" />

                  <div
                    className={`space-y-6 ${index % 2 === 0 ? "lg:pr-12" : "lg:order-2 lg:pl-12"
                      }`}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                      <role.icon size={16} />
                      <span>{role.title}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      {role.title}
                    </h4>
                    <p className="text-lg leading-relaxed text-gray-800">
                      {role.description}
                    </p>
                    <div className="space-y-3">
                      <h5 className="text-lg font-semibold text-gray-800">
                        Responsibilities:
                      </h5>
                      <ul
                        className={`space-y-2 ${index % 2 === 0 ? "text-left" : "text-right"
                          }`}
                      >
                        {role.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-3 text-gray-600 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                              }`}
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`relative ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10" />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute top-6 right-6 h-16 w-16 rotate-45 border border-red-400/30"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-16 left-8 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20"
                      />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute right-16 bottom-12 h-10 w-10 rounded-lg border border-red-300/30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="space-y-4 text-center">
                          <h5 className="mb-2 text-2xl font-bold text-gray-800">
                            {role.title}
                          </h5>
                          <p className="text-lg text-gray-600">
                            {role.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-4 h-12 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-red-400/20 to-transparent" />
                      <div className="absolute top-1/2 right-4 h-12 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl border border-red-200 bg-white/80 p-12 shadow-sm backdrop-blur-sm"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                <HiOutlineSparkles size={16} />
                <span>Ready to Make an Impact?</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                Join Our{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Team
                </span>
              </h3>
              <p className="text-xl leading-relaxed text-gray-800">
                We&apos;re looking for dedicated high school students who are
                passionate about technology and community building. No prior
                experience required — just enthusiasm and commitment!
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Button className="group bg-gradient-to-r from-red-500 to-pink-600 px-10 py-5 text-lg text-white hover:from-red-600 hover:to-pink-700">
                <a href="https://link.blairhacks.org/apply" target="_blank">
                  Apply Now!
                </a>
                <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
