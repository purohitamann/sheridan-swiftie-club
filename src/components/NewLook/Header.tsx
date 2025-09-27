"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ClubLogo from "./ClubLogo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md shadow-orange-500/20 py-2" : "bg-black/90 backdrop-blur-md py-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="cursor-pointer">
              <ClubLogo />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-heading font-medium text-sm uppercase">
            <li className="text-orange-400 hover:text-orange-300 transition-colors">
              <Link href="/swiftpost">Swift Post</Link>
            </li>
            <li className="text-orange-500 hover:text-orange-400 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="text-orange-400 hover:text-orange-300 transition-colors">
              <Link href="/info/executives">Executives</Link>
            </li>
            <li className="text-orange-400 hover:text-orange-300 transition-colors">
              <Link href="/info/events">Events</Link>
            </li>
            <li className="text-orange-400 hover:text-orange-300 transition-colors">
              <Link href="/raffle">Giveaway</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button - Ensure it's visible on mobile */}
        <button
          className="block md:hidden text-orange-500 focus:outline-none p-2 rounded"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Full-Screen Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed min-h-screen inset-0 bg-black flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-orange-500 text-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center space-y-8 text-2xl font-bold font-heading uppercase">
              <li className="text-orange-400 hover:text-orange-300 transition-colors">
                <Link href="/swiftpost" onClick={() => setIsMobileMenuOpen(false)}>
                  Swift Post
                </Link>
              </li>
              <li className="text-orange-500 hover:text-orange-400 transition-colors">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="text-orange-400 hover:text-orange-300 transition-colors">
                <Link href="/info/executives" onClick={() => setIsMobileMenuOpen(false)}>
                  Executives
                </Link>
              </li>
              <li className="text-orange-400 hover:text-orange-300 transition-colors">
                <Link href="/info/events" onClick={() => setIsMobileMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li className="text-orange-400 hover:text-orange-300 transition-colors">
                <Link href="/raffle" onClick={() => setIsMobileMenuOpen(false)}>
                  Giveaway
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;