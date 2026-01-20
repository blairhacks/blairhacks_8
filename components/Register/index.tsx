"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Anta } from "next/font/google";
import {
  HiOutlineArrowRight,
  HiOutlineCalendar,
  HiOutlineClock,
} from "react-icons/hi2";

import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Register() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const benefits = [
    {
      title: "Early Access",
      description: "Be first to know when registration opens",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Exclusive Updates",
      description: "Get insider information and special announcements",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Community Access",
      description: "Join our Discord and connect with other participants",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Priority Registration",
      description: "Guaranteed spot when registration opens",
      color: "from-red-500 to-pink-500",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Join Waitlist",
      description: "Sign up to be notified when registration opens",
    },
    {
      number: "02",
      title: "Get Updates",
      description: "Receive exclusive information and announcements",
    },
    {
      number: "03",
      title: "Register Early",
      description: "Secure your spot when registration opens",
    },
    {
      number: "04",
      title: "Start Building",
      description: "Begin your BlairHacks journey",
    },
  ];

  return (
    <section
      id="register"
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
            <HiOutlineCalendar size={16} />
            <span>Registration</span>
          </div>

          <h2
            className={`${anta.className} mb-6 text-5xl font-bold sm:text-6xl`}
          >
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Registration
            </span>{" "}
            <br />
            <span className="text-gray-800">Coming Soon!</span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-800">
            Registration isn&apos;t open yet, but you can join our interest list
            to stay updated!
          </p>
        </motion.div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-2 text-sm text-red-700 backdrop-blur-sm">
                <HiOutlineClock size={16} />
                <span>Coming Soon</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                Registration{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Coming Soon!
                </span>
              </h3>
              <p className="text-xl leading-relaxed text-gray-800">
                We&apos;re still finalizing the details for BlairHacks 2026.
                Full registration will open around
                <span className="font-semibold text-red-600">
                  {" "}
                  Date TBD
                </span>{" "}
                when we have all the details finalized.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-600">
                <HiOutlineCalendar size={16} />
                <span>Expected: Date TBD</span>
              </div>
            </div>

            <div className="relative">
              {/* Creative Visual Composition */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5" />

                {/* Abstract Shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-6 right-6 h-20 w-20 rounded-full border-2 border-red-400/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-16 left-8 h-16 w-16 rotate-45 border border-pink-300/30"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-16 bottom-12 h-12 w-12 rounded-lg bg-gradient-to-br from-red-400/15 to-pink-400/15"
                />

                {/* Central Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600">
                      <HiOutlineCalendar size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        Stay in the Loop
                      </h4>
                      <p className="text-gray-600">
                        Join our waitlist to get notified as soon as
                        registration opens!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-4 h-12 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-red-400/20 to-transparent" />
                <div className="absolute top-1/2 right-4 h-12 w-0.5 -translate-y-1/2 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-4xl font-bold text-gray-800">
              Why Join the{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Waitlist?
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Get exclusive benefits and early access to BlairHacks 2026
            </p>
          </div>

          {/* Creative Benefits Layout */}
          <div className="relative">
            {/* Central Connection Pattern */}
            <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500/20 to-pink-500/20" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connection Dot */}
                  <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-red-500 to-pink-600" />

                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-4xl font-bold text-gray-800">
              How It{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Works
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Simple steps to get started with BlairHacks 2026
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-0 left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500/30 to-pink-500/30 lg:block" />

            <div className="grid gap-8 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-red-500 to-pink-600 text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  <h4 className="mb-2 text-xl font-bold text-gray-800">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 -right-4 hidden text-red-400 lg:block">
                      <HiOutlineArrowRight size={24} />
                    </div>
                  )}
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
          className="rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-800">
              Ready to Join the{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Mailing List?
              </span>
            </h3>
            <p className="mb-8 text-xl leading-relaxed text-gray-800">
              Don&apos;t miss out! Join our mailing list now and get early
              access to all the latest updates about BlairHacks 2026.
            </p>
            <Button className="group bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-pink-700">
              <a href="https://link.blairhacks.org/interest" target="_blank">
                Join Mailing List
              </a>
              <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
