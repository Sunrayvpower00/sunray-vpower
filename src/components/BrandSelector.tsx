"use client";

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
    <section className="py-20">

      <h2 className="mb-12 text-center text-5xl font-bold">
        Explore By
        <span className="text-orange-500"> Brand</span>
      </h2>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

        {brands.map((brand) => (

          <motion.div
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={brand.name}
            className="group cursor-pointer rounded-3xl border border-orange-500/20 bg-white/5 p-10 backdrop-blur-xl hover:border-orange-500 hover:shadow-[0_0_60px_rgba(249,115,22,0.25)]"
          >

            <img
              src={brand.image}
              alt={brand.name}
              className="mx-auto h-36 object-contain transition duration-500 group-hover:scale-110"
            />

            <h3 className="mt-8 text-center text-3xl font-bold">
              {brand.name}
            </h3>

            <button className="mt-8 w-full rounded-xl bg-orange-500 py-4 font-semibold transition hover:bg-orange-600">
              Explore Products
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}