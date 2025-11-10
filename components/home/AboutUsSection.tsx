'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#EEE]">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >

        <motion.div className="flex-1" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-right text-gray-800 mb-6">
            اكتشف عالمنا العقاري
          </h2>
          <p className="text-lg text-right md:text-xl text-gray-700 leading-relaxed mb-6">
            نحن منصة عقارية متكاملة تهدف لربط الملاك، المستأجرين، والمستثمرين بطريقة سهلة وآمنة.
            نقدم خدمات البيع، الإيجار، التسويق، وإدارة العقارات بأسلوب عصري ومبتكر يضمن تجربة مميزة لجميع عملائنا.
          </p>
          <p className="text-lg text-right md:text-xl text-gray-700 leading-relaxed">
            التزامنا هو توفير حلول سلسة وموثوقة، مع التركيز على رضا العملاء وتقديم تجربة رقمية متكاملة.
          </p>
        </motion.div>


        <motion.div className="flex-1" variants={itemVariants}>
          <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/wallpaperflare.com_wallpaper.jpg" 
              alt="عن شركتنا"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
