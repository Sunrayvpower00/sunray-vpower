"use client";

import { motion } from "framer-motion";

export default function LightningSymbol() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <motion.svg
        width="320"
        height="700"
        viewBox="0 0 220 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [-20, 20, -20],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          opacity: 0.12,
          filter:
            "drop-shadow(0 0 20px #3b82f6) drop-shadow(0 0 40px #60a5fa)",
        }}
      >
        {/* Main Bolt */}
        <path
          d="M120 0L40 280H105L60 700L190 350H120L170 0H120Z"
          fill="url(#boltGradient)"
        />

        {/* Animated Energy Pulse */}
        <motion.rect
          x="-20"
          y="-120"
          width="260"
          height="120"
          fill="url(#pulse)"
          animate={{
            y: [-120, 700],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "linear",
          }}
          clipPath="url(#boltClip)"
        />

        <defs>
          <linearGradient id="boltGradient" x1="0" y1="0" x2="0" y2="700">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          <linearGradient id="pulse" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <clipPath id="boltClip">
            <path d="M120 0L40 280H105L60 700L190 350H120L170 0H120Z" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}