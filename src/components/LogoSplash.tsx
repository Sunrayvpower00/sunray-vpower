"use client";

import { motion } from "framer-motion";

export default function LogoSplash() {

  return (

    <motion.div

      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#07182F]"

      initial={{
        opacity: 1
      }}

      animate={{
        opacity: 0,
      }}

      transition={{
        delay: 2.5,
        duration: 1
      }}

    >


      <motion.img

        src="/logo.png"

        alt="Sunray VPower"

        className="w-72"


        initial={{
          scale:0.5,
          opacity:0
        }}


        animate={{
          scale:1,
          opacity:1
        }}


        transition={{
          duration:1.2,
          ease:"easeOut"
        }}


      />


    </motion.div>

  );
}