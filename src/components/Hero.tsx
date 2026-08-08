"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-6 pt-24">
      {/* Orange Glow */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            POWER SOLUTIONS YOU CAN TRUST
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Reliable Power.
            <br />

            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Uninterrupted Future.
            </span>
          </h1>
          <p className="mt-5 text-2xl font-bold text-orange-500">
  {heroSlides[currentSlide].brand}
</p>

          {/* Animated Line */}
          <motion.div
            className="mt-6 h-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ delay: 0.6, duration: 1 }}
          />

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Sunray VPower provides premium Inverter, Battery and UPS solutions
            with trusted brands and professional support.
          </p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/products">
  <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]">
    Explore Products
  </button>
</Link>

            <a
              href="https://wa.me/919811313701"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-500 px-8 py-4 font-semibold text-green-400 transition duration-300 hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              <div className="flex items-center gap-2">
                <FaWhatsapp />
                Chat on WhatsApp
              </div>
            </a>
          </motion.div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
            <span>✓ Genuine Products</span>
            <span>✓ Expert Installation</span>
            <span>✓ After Sales Support</span>
          </div>
        </motion.div>

              
           {/* Right Side Product Card */}
     <motion.div
        className="flex justify-center scale-90"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
   <AnimatePresence mode="wait">
    <motion.div
       key={currentSlide}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="w-[420px] rounded-3xl border border-orange-400/50 bg-white/10 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(249,115,22,0.25)]"
    >
    {/* Brand */}
    <h2 className="text-center text-4xl font-bold text-orange-500">
  {heroSlides[currentSlide].brand}
     </h2>

    {/* Product Image */}
    <div className="mt-6 flex justify-center">
      <img
  src={heroSlides[currentSlide].image}
  alt={heroSlides[currentSlide].brand}
  className="h-72 w-full object-contain transition-all duration-700 hover:scale-105"
       />
    </div>

    {/* Tagline */}
    <p className="mt-6 text-center text-xl font-semibold text-white">
  {heroSlides[currentSlide].tagline}
    </p>

    {/* Features */}
    <div className="mt-6 space-y-3">
  {heroSlides[currentSlide].features.map((feature) => (
    <div
      key={feature}
      className="flex items-center gap-3 text-gray-300"
    >
      <div className="h-2 w-2 rounded-full bg-orange-500"></div>

      <p>{feature}</p>
    </div>
  ))}
</div>

    {/* Button */}
    <a
  href={`https://wa.me/919811313701?text=${encodeURIComponent(
    `Hello Sunray VPower,

I am interested in ${heroSlides[currentSlide].brand} products.

Please share:
• Available Models
• Price
• Warranty
• Installation Charges

Thank you.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 py-4 font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
>
  ENQUIRE NOW
</a>

  </motion.div>
  </AnimatePresence>
</motion.div>

      </div>
    </section>
  );
}