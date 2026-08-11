"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full border-b border-white/10 bg-[#07182F]">
      <div className="mx-auto flex min-h-[64px] w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:min-h-[72px]">

        {/* Logo + Company Name */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <img
            src="/sunray-vpower/logo.png"
            alt="Sunray VPower"
            className="h-9 w-auto object-contain sm:h-12"
          />

          <h1 className="whitespace-nowrap text-base font-bold sm:text-2xl">
            <span className="text-white">SUNRAY</span>{" "}
            <span className="text-orange-500">VPOWER</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="transition hover:text-orange-500"
          >
            Products
          </Link>

          <Link
            href="/services"
            className="transition hover:text-orange-500"
          >
            Services
          </Link>

          <a
            href="#about"
            className="transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>

        {/* Desktop Call Now */}
        <a
          href="tel:+919811313701"
          className="hidden rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 md:block"
        >
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          <span className="text-2xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07182F] px-4 pb-5 pt-3 md:hidden">

          <div className="flex flex-col">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 text-base text-white transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 text-base text-white transition hover:text-orange-500"
            >
              Products
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 text-base text-white transition hover:text-orange-500"
            >
              Services
            </Link>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 text-base text-white transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-3 text-base text-white transition hover:text-orange-500"
            >
              Contact
            </a>

            {/* Mobile Call Button */}
            <a
              href="tel:+919811313701"
              onClick={closeMenu}
              className="mt-4 rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Call Now
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}