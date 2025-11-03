"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, Search, Tag, Box } from "lucide-react";

export default function HeroSection() {

  const lines = [
    "Instant Payouts, Full Control, No Limits",
    "Sell for Free, Pay Only When You Earn",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  const { scrollYProgress } = useScroll();
  const moveIcons = useTransform(scrollYProgress, [0, 1], [0, 140]);

  // text typing animation
  useEffect(() => {
    const text = lines[currentLine];
    let timer: string | number | NodeJS.Timeout | undefined;

    if (!deleting && typed.length < text.length) {
      timer = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), 70);
    } else if (deleting && typed.length > 0) {
      timer = setTimeout(() => setTyped(text.slice(0, typed.length - 1)), 35);
    } else if (!deleting && typed.length === text.length) {
      timer = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timer);
  }, [typed, deleting, currentLine]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center py-20 px-6 overflow-hidden bg-white">
     
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-[length:200%_200%] opacity-40 -z-10"
      />

      {/* top floating icons */}
      <motion.div
        style={{ y: moveIcons }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-14 bg-white shadow-md rounded-full p-3"
      >
        <Box className="w-6 h-6 text-purple-500" />
      </motion.div>

      <motion.div
        style={{ y: moveIcons }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-14 bg-white shadow-md rounded-full p-3"
      >
        <ShoppingCart className="w-6 h-6 text-green-500" />
      </motion.div>

      {/* heading text */}
      <div className="h-[120px] flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 max-w-2xl mx-auto"
        >
          {typed}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[3px] bg-black ml-1"
          />
        </motion.h1>
      </div>

      {/* subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto"
      >
        Your one-stop place for 3D models and creative assets.
        <br /> Be part of the creator community today.
      </motion.p>

     
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        onClick={() => console.log("Explore clicked")}
        className="mt-10 bg-gradient-to-r from-blue-700 to-indigo-700 hover:opacity-90 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md"
      >
        Explore Products
      </motion.button>

      {/* bottom icons */}
      <motion.div
        style={{ y: moveIcons }}
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-24 bg-white shadow-md rounded-full p-3"
      >
        <Tag className="w-6 h-6 text-orange-500" />
      </motion.div>

      <motion.div
        style={{ y: moveIcons }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-24 bg-white shadow-md rounded-full p-3"
      >
        <Search className="w-6 h-6 text-blue-500" />
      </motion.div>
    </section>
  );
}
