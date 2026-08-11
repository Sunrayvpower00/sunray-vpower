"use client";

import { FaWhatsapp } from "react-icons/fa";

interface ProductProps {
  brand: string;
  model: string;
  type: string;
  warranty: string;
  mrp: string;
  image: string;
}

export default function ProductCard({
  brand,
  model,
  type,
  warranty,
  mrp,
  image,
}: ProductProps) {
  const whatsappMessage = `Hello Sunray VPower,

I want to buy this product.

Brand: ${brand}
Model: ${model}
Type: ${type}
Warranty: ${warranty}
MRP: ${mrp}

Please share today's best price and availability.

Thank you.`;

  const whatsappUrl = `https://wa.me/919811313701?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="group overflow-hidden rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]">
      
      {/* Product Image */}
      <div className="overflow-hidden bg-white p-8">
        <img
          src={image}
          alt={model}
          className="mx-auto h-60 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-6">

        {/* Brand */}
        <span className="rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
          {brand}
        </span>

        {/* Model */}
        <h3 className="text-2xl font-bold text-white">
          {model}
        </h3>

        {/* Details */}
        <div className="space-y-2 text-gray-300">

          <p>
            <span className="font-semibold text-orange-400">
              Type:
            </span>{" "}
            {type}
          </p>

          <p>
            <span className="font-semibold text-orange-400">
              Warranty:
            </span>{" "}
            {warranty}
          </p>

          <p>
            <span className="font-semibold text-orange-400">
              MRP:
            </span>{" "}
            {mrp}
          </p>

        </div>

        {/* Buy Now */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]"
        >
          <FaWhatsapp className="text-2xl" />
          Buy Now
        </a>

      </div>
    </div>
  );
}