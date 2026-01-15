"use client";

import { Anta } from "next/font/google";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { ScrollTo } from "@/components/ScrollTo";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Join Team", id: "join" },
    { label: "Register", id: "register" },
    { label: "Sponsors", id: "sponsors" },
    { label: "Donate", id: "donate" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-red-200 bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <ScrollTo id="hero" className="flex-shrink-0">
            <div
              className={`${anta.className} cursor-pointer text-2xl font-bold text-red-700 transition-colors hover:text-red-500`}
            >
              BlairHacks
            </div>
          </ScrollTo>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <ScrollTo
                  key={item.id}
                  id={item.id}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
                >
                  {item.label}
                </ScrollTo>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 transition-colors hover:text-red-500"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg border border-red-200 bg-white/95 px-2 pt-2 pb-3 backdrop-blur-md">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <ScrollTo
                    id={item.id}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
                  >
                    {item.label}
                  </ScrollTo>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
