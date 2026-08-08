"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const heroSlides = [
  {
    brand: "LUMINOUS",
    image: "/products/luminous.png",
    tagline: "Advanced Power Backup Solutions",
    features: [
      "Pure Sine Wave Technology",
      "Fast Charging",
      "Official Warranty",
    ],
  },
  {
    brand: "EXIDE",
    image: "/products/exide.png",
    tagline: "Trusted Battery Technology",
    features: [
      "Long Backup",
      "Maintenance Free",
      "High Performance",
    ],
  },
  {
    brand: "LIVFAST",
    image: "/products/livfast.png",
    tagline: "Next Generation Energy Solutions",
    features: [
      "Smart Charging",
      "Fast Recovery",
      "Reliable Performance",
    ],
  },
  {
    brand: "AMARON",
    image: "/products/amaron.png",
    tagline: "Power That Lasts Longer",
    features: [
      "Zero Maintenance",
      "Long Life",
      "Premium Battery",
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* Orange Glow */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-8 sm:gap-10 sm:px-6 sm:pt-10 md:grid-cols-2 md:gap-12 md:pt-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm sm:tracking-[0.25em]">
            POWER SOLUTIONS YOU CAN TRUST
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-7xl">
            Reliable Power.
            <br />

            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Uninterrupted Future.
            </span>
          </h1>

          {/* Brand */}
          <p className="mt-3 text-xl font-bold text-orange-500 sm:mt-5 sm:text-2xl">
            {slide.brand}
          </p>

          {/* Animated Line */}
          <motion.div
            className="mt-4 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 sm:mt-6"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.6, duration: 1 }}
          />

          {/* Description */}
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg">
            Sunray VPower provides premium Inverter, Battery and UPS solutions
            with trusted brands and professional support.
          </p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Explore Products */}
            <Link
              href="/products"
              className="w-full rounded-xl bg-orange-500 px-6 py-4 text-center font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600 sm:w-auto sm:px-8"
            >
              Explore Products
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919811313701"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-green-500 px-6 py-4 font-semibold text-green-400 transition duration-300 hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] sm:w-auto sm:px-8"
            >
              <div className="flex items-center justify-center gap-2">
                <FaWhatsapp />
                Chat on WhatsApp
              </div>
            </a>
          </motion.div>

          {/* Trust Points */}
          <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-gray-300 sm:mt-10 sm:grid-cols-2 sm:gap-6">
            <span>✓ Genuine Products</span>
            <span>✓ Expert Installation</span>
            <span>✓ After Sales Support</span>
          </div>
        </motion.div>

        {/* Right Side Product Card */}
        <motion.div
          className="flex w-full min-w-0 justify-center overflow-hidden scale-90 sm:scale-90 md:scale-90"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full min-w-0 rounded-2xl">
            
            {/* Product Image */}
            <div className="mt-4 flex justify-center sm:mt-6">
              <img
                src={slide.image}
                alt={slide.brand}
                className="h-48 w-full max-w-full object-contain transition-all duration-700 hover:scale-105 sm:h-60 md:h-72"
              />
            </div>

            {/* Brand */}
            <h2 className="mt-4 text-center text-2xl font-bold text-orange-500 sm:text-3xl">
              {slide.brand}
            </h2>

            {/* Tagline */}
            <p className="mt-3 text-center text-lg font-semibold text-white sm:mt-6 sm:text-xl">
              {slide.tagline}
            </p>

            {/* Features */}
            <div className="mt-5 space-y-2 text-center text-sm text-gray-300 sm:mt-6 sm:text-base">
              {slide.features.map((feature) => (
                <p key={feature}>✓ {feature}</p>
              ))}
            </div>

            {/* Enquire Now */}
            <a
              href={`https://wa.me/919811313701?text=${encodeURIComponent(
                `Hello Sunray VPower,

I am interested in ${slide.brand} products.

Please share:
• Available Models
• Price
• Warranty
• Installation Charges

Thank you.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] sm:mt-8 sm:py-4 sm:text-base"
            >
              ENQUIRE NOW
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}