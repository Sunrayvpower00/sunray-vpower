"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "🔋",
    title: "Inverter Batteries",
    description:
      "Long-lasting tubular and high-performance batteries designed for dependable power backup.",
    tag: "POWER BACKUP",
  },
  {
    icon: "⚡",
    title: "Inverters",
    description:
      "Reliable inverter solutions for homes, offices and commercial power requirements.",
    tag: "RELIABLE POWER",
  },
  {
    icon: "🔌",
    title: "UPS Systems",
    description:
      "Uninterrupted power solutions designed to keep your essential equipment running.",
    tag: "UNINTERRUPTED",
  },
  {
    icon: "🛠️",
    title: "Installation & Support",
    description:
      "Professional installation and dependable after-sales support for your power solution.",
    tag: "PROFESSIONAL SERVICE",
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-[#07182F] px-6 py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            COMPLETE POWER SOLUTIONS
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Power Solutions for{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            From reliable backup power to professional installation,
            we provide complete solutions for homes and businesses.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/60 hover:bg-white/[0.09] hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]"
            >

              {/* Card Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:bg-orange-500/20">
                {item.icon}
              </div>

              {/* Tag */}
              <p className="relative mt-7 text-xs font-semibold tracking-[0.2em] text-orange-500">
                {item.tag}
              </p>

              {/* Title */}
              <h3 className="relative mt-3 text-2xl font-bold text-white transition duration-300 group-hover:text-orange-400">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 min-h-[84px] text-sm leading-6 text-gray-400">
                {item.description}
              </p>

              {/* Bottom Link */}
              <Link
                href="/products"
                className="relative mt-6 inline-flex items-center gap-2 font-semibold text-white transition-all duration-300 group-hover:gap-3 group-hover:text-orange-400"
              >
                Explore Products
                <span className="text-lg">→</span>
              </Link>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-yellow-300 transition-all duration-500 group-hover:w-full" />

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <Link
            href="/products"
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
          >
            View Complete Product Range
            <span className="text-xl">→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}