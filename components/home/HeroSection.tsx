"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] flex items-center justify-center overflow-hidden">
      {/* الخلفية الفيديو */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/real-state-video.mp4" type="video/mp4" />
      </video>


      <div className="absolute inset-0 bg-black/50"></div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4 max-w-3xl"
      >
<h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
  <span className="block">مرحباً بك في</span>
  <span className="block text-blue-400 my-2">RealEstate</span>
  <span className="block">بوابتك لعالم العقارات بسهولة وأمان</span>
</h1>


        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          موقعنا يربط بين الملاك والمستأجرين والمستثمرين في سوق العقارات من خلال منصة متكاملة تشمل خدمات البيع، الإيجار، التسويق، وإدارة العقارات.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            استكشف العقارات
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-blue-400 cursor-pointer text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            تواصل معنا
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
