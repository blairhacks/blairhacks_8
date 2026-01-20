"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import { useState } from "react";
import {
  HiOutlineChevronDown,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is BlairHacks?",
      answer:
        "BlairHacks is a high school hackathon in the DC metro area, bringing together 100+ students for a weekend of innovation, collaboration, and building amazing projects. It's designed for students of all skill levels to learn, create, and connect.",
    },
    {
      question: "Who can participate?",
      answer:
        "BlairHacks is open to all secondary students who are 18 or younger. Whether you're a complete beginner or an experienced developer, everyone is welcome! We provide workshops, mentorship, and resources for all skill levels.",
    },
    {
      question: "When and where is BlairHacks 2026?",
      answer:
        "BlairHacks 2026's exact date and location are still yet to be determined. Stay tuned for more info!",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and enthusiasm! We'll provide food, drinks, and all the hardware and software resources you need. You can also bring any specific tools or equipment you'd like to use for your project.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "Not at all! BlairHacks is designed for students of all skill levels. We offer workshops for beginners, mentorship from experienced developers, and plenty of resources to help you learn. The focus is on creativity and problem-solving.",
    },
    {
      question: "Is there a cost to attend?",
      answer:
        "BlairHacks is completely free to attend! Thanks to our sponsors and donors, we're able to provide this incredible experience at no cost to students. This includes food, resources, workshops, and prizes.",
    },
    {
      question: "How do I form a team?",
      answer:
        "You can form a team with friends before the event, or we'll help you find teammates during the opening ceremony. Teams can be 1-4 people, and we encourage collaboration across different skill levels and schools.",
    },
    {
      question: "What kind of projects can I build?",
      answer:
        "You can build anything you're passionate about! Past projects have included mobile apps, websites, games, hardware projects, AI applications, and more. The only limit is your imagination and the 48-hour timeframe.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-6 py-3 text-sm text-red-700 backdrop-blur-sm">
            <HiOutlineQuestionMarkCircle size={16} />
            <span>Frequently Asked Questions</span>
          </div>

          <h2
            className={`${anta.className} mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl`}
          >
            Got Questions?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-800">
            Everything you need to know about BlairHacks 2026. Can&apos;t find
            what you&apos;re looking for? Contact us directly!
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Creative Visual Background */}
              <div className="relative overflow-hidden rounded-3xl border border-red-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-red-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5" />

                {/* Abstract Shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full border border-red-400/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20"
                />

                {/* Content */}
                <div className="relative z-10">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <div className="flex items-start">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-6 w-6 items-center justify-center text-red-500"
                    >
                      <HiOutlineChevronDown size={20} />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pl-16">
                      <p className="leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <div className="rounded-3xl border border-red-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                Still Have Questions?
              </h3>
              <p className="mb-8 text-xl leading-relaxed text-gray-800">
                Can&apos;t find the answer you&apos;re looking for? We&apos;re
                here to help! Contact us directly and we&apos;ll get back to you
                as soon as possible.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:blairhacks@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-pink-700"
                >
                  <HiOutlineQuestionMarkCircle size={20} />
                  Contact Us
                </a>
                <a
                  href="#join"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-300 bg-white/80 px-8 py-4 text-lg font-medium text-red-600 transition-all duration-200 hover:border-red-400 hover:bg-red-50"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
