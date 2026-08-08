"use client";

import { motion } from "framer-motion";

export default function ThunderBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black" />

      {/* Animated Lightning Glow */}
      <motion.div
        className="absolute top-0 left-1/2 h-screen w-1 bg-cyan-300 blur-xl opacity-0"
        animate={{
          opacity: [0, 1, 0, 0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 6,
        }}
      />

      {/* Blue Glow */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500 blur-[150px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Purple Glow */}
      <motion.div
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500 blur-[180px]"
        animate={{
          x: [0, -120, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
    </div>
  );
}