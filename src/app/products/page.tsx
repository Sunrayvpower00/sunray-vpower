"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  

  const filteredProducts = products.filter((product) => {
  return (
    selectedBrand === "All" || product.brand === selectedBrand
  );
});

  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h1 className="text-center text-5xl font-bold">
          Explore <span className="text-orange-500">Products</span>
        </h1>

        <p className="mt-4 text-center text-gray-400">
         Explore Our Complete Range of Power Backup Solutions Built for Performance and Reliability.
        </p>

        

        {/* Brand Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          {["All", "Luminous", "Exide"].map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`rounded-full px-6 py-3 font-semibold transition ${
                selectedBrand === brand
                  ? "bg-orange-500 text-white"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-orange-500"
              }`}
            >
              {brand}
            </button>
          ))}

        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              brand={product.brand}
              model={product.model}
              type={product.type}
              warranty={product.warranty}
              mrp={product.mrp}
              image={product.image}
            />
          ))}

        </div>

      </div>

    </main>
  );
}