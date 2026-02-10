"use client";

import { Anta } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCompetition = pathname === "/competition";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Competition", href: "/competition" },
    { label: "Register", id: "register" },
    { label: "Sponsors", id: "sponsors" },
    { label: "Donate", id: "donate" },
    { label: "FAQ", id: "faq" },
  ];

  const textColorClass = isCompetition && !isScrolled ? "text-white hover:text-purple-300" : "text-gray-800 hover:text-red-600";
  const logoColorClass = isCompetition && !isScrolled ? "text-purple-400 hover:text-purple-300" : "text-red-700 hover:text-red-500";

  // Use a different glass effect for competition page when scrolled
  const navClass = `fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled
    ? (isCompetition ? "border-b border-purple-900/50 bg-[#0f0b1f]/80 backdrop-blur-md" : "border-b border-red-200 bg-white/95 backdrop-blur-md")
    : "bg-transparent"
    }`;

  const NavItem = ({ item, className }: { item: any; className: string }) => {
    // If it's a direct link (like Competition page)
    if (item.href) {
      return (
        <Link href={item.href} className={className}>
          {item.label}
        </Link>
      );
    }

    // If we are on home page, use ScrollTo for anchors
    if (isHome) {
      return (
        <ScrollTo id={item.id} className={className}>
          {item.label}
        </ScrollTo>
      );
    }

    // If we are NOT on home page, link to home with anchor
    return (
      <Link href={`/#${item.id}`} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <nav className={navClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          {isHome ? (
            <ScrollTo id="hero" className="flex-shrink-0">
              <div
                className={`${anta.className} cursor-pointer text-2xl font-bold transition-colors ${logoColorClass}`}
              >
                BlairHacks
              </div>
            </ScrollTo>
          ) : (
            <Link href="/" className="flex-shrink-0">
              <div
                className={`${anta.className} cursor-pointer text-2xl font-bold transition-colors ${logoColorClass}`}
              >
                BlairHacks
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 block cursor-pointer ${textColorClass} ${!isCompetition ? "hover:bg-red-50" : "hover:bg-purple-500/10"}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${textColorClass}`}
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`mt-2 space-y-1 rounded-lg border px-2 pt-2 pb-3 backdrop-blur-md ${isCompetition ? "border-purple-500/30 bg-[#0f0b1f]/95 text-white" : "border-red-200 bg-white/95 text-gray-800"}`}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavItem
                    item={item}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${isCompetition ? "hover:bg-purple-500/20 hover:text-purple-300" : "hover:bg-red-50 hover:text-red-600"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
