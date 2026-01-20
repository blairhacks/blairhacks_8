"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Donate() {
  const donationImpact = [
    {
      title: "Student Support",
      description: "Help 100+ students attend and participate",
    },
    {
      title: "Prizes & Awards",
      description: "Fund prizes for winning projects",
    },
    {
      title: "Venue & Resources",
      description: "Cover venue costs and equipment",
    },
    {
      title: "Learning Materials",
      description: "Provide educational resources and workshops",
    },
  ];

  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className={`${anta.className} mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl`}
          >
            Donate
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-800">
            Support the next generation of innovators and help make BlairHacks
            2026 an unforgettable experience
          </p>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="flex-shrink-0">
                {/* Creative Visual Composition */}
                <div className="relative h-32 w-32">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10" />

                  {/* Abstract Shapes */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full border border-red-400/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-12 left-6 h-6 w-6 rotate-45 border border-pink-300/20"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-8 bottom-6 h-4 w-4 rounded-lg bg-gradient-to-br from-red-400/15 to-pink-400/15"
                  />

                  {/* Central Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600">
                      <HiOutlineHeart size={40} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="mb-4 text-3xl font-bold text-gray-800">
                  Make a Direct Impact
                </h3>
                <p className="mb-6 text-xl leading-relaxed text-gray-800">
                  Your donation directly supports students in the DC metro area,
                  providing them with opportunities to build innovative
                  projects, learn new skills, and connect with peers who share
                  their passion for technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-600">
                    <HiOutlineShieldCheck size={16} />
                    <span>Tax Deductible</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-600">
                    <HiOutlineCurrencyDollar size={16} />
                    <span>Employer Matching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Areas Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="mb-12 text-center text-3xl font-bold text-gray-800">
            How Your Donation Helps
          </h3>

          {/* Creative Impact Layout */}
          <div className="relative">
            {/* Central Connection Pattern */}
            <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500/20 to-pink-500/20" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {donationImpact.map((impact, index) => (
                <motion.div
                  key={impact.title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Connection Dot */}
                  <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-red-500 to-pink-600" />

                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800">
                      {impact.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {impact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nonprofit Info */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
            <div className="text-center">
              {/* Creative Visual */}
              <div className="relative mx-auto mb-6 h-24 w-24">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10" />

                {/* Abstract Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-2 right-2 h-6 w-6 rounded-full border border-red-400/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-3 h-4 w-4 rotate-45 border border-pink-300/20"
                />

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600">
                    <HiOutlineShieldCheck size={32} className="text-white" />
                  </div>
                </div>
              </div>

              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                Tax-Deductible Donations
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-xl leading-relaxed text-gray-800">
                BlairHacks is fiscally sponsored by{" "}
                <a
                  href="https://hackclub.com/"
                  target="_blank"
                  className="underline decoration-red-600/50 transition-colors hover:text-red-500"
                >
                  The Hack Foundation
                </a>
                , a 501(c)(3) nonprofit organization. All donations are
                tax-deductible to the full extent allowed by law.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-600">
                  <HiOutlineShieldCheck size={16} />
                  <span>EIN: 81-2908499</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-600">
                  <HiOutlineCurrencyDollar size={16} />
                  <span>Employer Matching Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <div className="rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                Ready to Make a Difference?
              </h3>
              <p className="mb-8 text-xl leading-relaxed text-gray-800">
                Every contribution, no matter the size, helps us provide an
                incredible experience for students in the DC metro area. Your
                support makes innovation possible!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white hover:from-red-600 hover:to-pink-700"
              >
                <a
                  href="https://hcb.hackclub.com/donations/start/blairhacks"
                  target="_blank"
                >
                  <HiOutlineHeart size={20} className="mr-2" />
                  Donate Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
