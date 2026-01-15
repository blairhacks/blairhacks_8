"use client";

import { motion } from "framer-motion";
import { Anta } from "next/font/google";
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
  HiOutlineHeart,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import { Button } from "@/components/ui/button";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Sponsors() {
  const sponsorshipBenefits = [
    {
      title: "Reach 100+ Students",
      description: "Connect with talented high schoolers in the DC area",
    },
    {
      title: "Support Innovation",
      description: "Help students build amazing projects and learn new skills",
    },
    {
      title: "Brand Visibility",
      description:
        "Get your company name in front of the next generation of tech talent",
    },
    {
      title: "Tax Deductible",
      description:
        "All contributions are tax-deductible through our 501(c)(3) sponsor",
    },
  ];

  return (
    <section
      id="sponsors"
      className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2
                className={`${anta.className} mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl`}
              >
                Sponsors
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-800 lg:mx-0">
                Help us make BlairHacks 2026 an unforgettable experience for
                students in the DC metro area
              </p>
            </div>

            {/* Image placeholder */}
            {/* <div className="flex justify-center">
              <div className="h-64 w-80 rounded-2xl border-2 border-dashed border-red-300 bg-gradient-to-br from-red-50/50 to-pink-50/50 shadow-lg">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Sponsor Logos
                    </p>
                    <p className="text-xs text-gray-500">
                      600x400px recommended
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
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
                  Make a Real Impact
                </h3>
                <p className="mb-6 text-xl leading-relaxed text-gray-800">
                  Your sponsorship directly supports venue costs, prizes, food,
                  and resources that make BlairHacks possible. Help us provide 100+
                  students with an incredible learning experience and the tools
                  they need to build the future.
                </p>
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-600">
                    <HiOutlineCurrencyDollar size={16} />
                    <span>Tax Deductible</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-600">
                    <HiOutlineShieldCheck size={16} />
                    <span>501(c)(3) Sponsored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Why Sponsor BlairHacks?
          </h3>

          {/* Creative Benefits Layout */}
          <div className="relative">
            {/* Central Connection Pattern */}
            <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-500/20 to-pink-500/20" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {sponsorshipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                Tax-Deductible Contributions
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-xl leading-relaxed text-gray-800">
                BlairHacks is fiscally sponsored by{" "}
                <a
                  href="https://hackclub.com/"
                  target="_blank"
                  className="underline decoration-red-600/50 transition-colors hover:text-red-500"
                >
                  The Hack Foundation (d.b.a. Hack Club)
                </a>
                , a 501(c)(3) nonprofit organization (EIN: 81-2908499). All
                contributions are tax-deductible to the full extent allowed by
                law.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-600">
                <HiOutlineShieldCheck size={16} />
                <span>EIN: 81-2908499</span>
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
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                Ready to Support BlairHacks?
              </h3>
              <p className="mb-8 text-xl leading-relaxed text-gray-800">
                Download our sponsorship package to learn more about
                opportunities, or contact us directly to discuss how your
                organization can make a difference in the DC tech community.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white hover:from-red-600 hover:to-pink-700"
                >
                  <a
                    href="https://www.blairhacks.org/blairhacks_prospectus.pdf"
                    target="_blank"
                  >
                    <HiOutlineDocumentText size={20} className="mr-2" />
                    Download Prospectus
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white hover:from-red-600 hover:to-pink-700"
                >
                  <a href="mailto:blairhacks@gmail.com">
                    <HiOutlineEnvelope size={20} className="mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
