"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, Search, Tag, Box } from "lucide-react";

export default function HeroSection() {
  const texts = [
    "Instant Payouts, Full Control, No Limits",
    "Sell for Free, Pay Only When You Earn",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  const { scrollYProgress } = useScroll();
  const iconY = useTransform(scrollYProgress, [0, 1], [0, 150]); 

 
  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, 70);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, 40);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-24 px-6 overflow-hidden bg-white">
  
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-linear-to-r from-pink-200 via-purple-200 to-blue-200 bg-[length:200%_200%] opacity-40 -z-10"
      />

      {/* Floating top icons */}
      <motion.div
        style={{ y: iconY }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-16 bg-white shadow-lg rounded-full p-4"
      >
        <Box className="w-6 h-6 text-purple-500" />
      </motion.div>

      <motion.div
        style={{ y: iconY }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-16 bg-white shadow-lg rounded-full p-4"
      >
        <ShoppingCart className="w-6 h-6 text-green-500" />
      </motion.div>

   
      <motion.div className="h-[130px] flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight max-w-2xl mx-auto"
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[3px] bg-black ml-1 align-middle"
          />
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-gray-600 text-xl mt-6 max-w-2xl mx-auto"
      >
        Your one-stop digital platform for 3D models and digital creations.
        <br />
        Join our community of creators and collectors today.
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        className="mt-10 bg-linear-to-r from-blue-700 to-indigo-700 hover:opacity-90 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md"
      >
        Explore all products
      </motion.button>

      {/* Bottom icons */}
      <motion.div
        style={{ y: iconY }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-24 bg-white shadow-lg rounded-full p-4"
      >
        <Tag className="w-6 h-6 text-orange-500" />
      </motion.div>

      <motion.div
        style={{ y: iconY }}
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-24 bg-white shadow-lg rounded-full p-4"
      >
        <Search className="w-6 h-6 text-blue-500" />
      </motion.div>
    </section>
  );
}
