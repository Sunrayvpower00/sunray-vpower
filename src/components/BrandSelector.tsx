"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Luminous",
    image: "/brands/luminous.png",
  },
  {
    name: "Exide",
    image: "/brands/exide.png",
    
  },
];

export default function BrandSelector() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">

      <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
        Explore By
        <span className="text-orange-500"> Brand</span>
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {brands.map((brand) => (

          <motion.div
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={brand.name}
            className="group rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl hover:border-orange-500 hover:shadow-[0_0_60px_rgba(249,115,22,0.25)] sm:p-10"
          >

            <img
              src={brand.image}
              alt={brand.name}
              className="mx-auto h-28 object-contain transition duration-500 group-hover:scale-110 sm:h-36"
            />

            <h3 className="mt-6 text-center text-2xl font-bold sm:mt-8 sm:text-3xl">
              {brand.name}
            </h3>

            {/* Explore Products Button */}
            <Link
              href="/products"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-orange-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] sm:mt-8 sm:py-4"
            >
              Explore Products
            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}