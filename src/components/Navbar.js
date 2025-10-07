
"use client";
import { useState, useEffect } from 'react';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Awards", href: "#awards" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY + 100;
    const pageBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    let found = false;

    navItems.forEach((item, idx) => {
      const section = document.querySelector(item.href);
      if (section) {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.name);
          found = true;
        }
      }

      // Force last section active if at bottom
      if (pageBottom && idx === navItems.length - 1) {
        setActive(item.name);
        found = true;
      }
    });

    if (!found) setActive("Home"); // fallback
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Profile Image → Hero */}
        <Link href="#hero" onClick={() => setActive("Home")}>
          <Image
            src="/images/nit.jpg"
            alt="Profile"
            width={45}
            height={45}
            className="rounded-full cursor-pointer border-2 border-blue-500 hover:scale-110 transition"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative pb-1 ${
                active === item.name ? "text-blue-400" : "text-gray-300"
              } hover:text-white transition`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
              {active === item.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 h-screen w-3/4 bg-gray-900 shadow-xl p-6 flex flex-col gap-6 md:hidden"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Nav Links */}
          <div className="mt-10 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg ${
                  active === item.name ? "text-blue-400" : "text-gray-200"
                } hover:text-white transition`}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
