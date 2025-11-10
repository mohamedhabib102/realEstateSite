"use client"
import React, { JSX } from 'react';
import { FaHome, FaBullhorn, FaMoneyBillWave, FaKey, FaHandshake, FaTv, FaRegIdCard } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Service {
  title: string;
  icon: JSX.Element;
}

const services: Service[] = [
  { title: 'الوساطة العقارية', icon: <FaHome size={50} className="text-blue-500" /> },
  { title: 'وكالة التسويق', icon: <FaBullhorn size={50} className="text-green-500" /> },
  { title: 'بيع وشراء', icon: <FaMoneyBillWave size={50} className="text-yellow-500" /> },
  { title: 'تأجير واستضافة', icon: <FaKey size={50} className="text-purple-500" /> },
  { title: 'شركاؤنا', icon: <FaHandshake size={50} className="text-pink-500" /> },
  { title: 'منطقة الإعلانات', icon: <FaTv size={50} className="text-red-500" /> },
  { title: 'بطاقات الخدمات', icon: <FaRegIdCard size={50} className="text-indigo-500" /> },
];

// تعريف Variants مع TypeScript
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        خدماتنا المميزة
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-8 flex flex-col items-center shadow-md hover:shadow-xl transition cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={cardVariants}
          >
            <Link href={"/services"}>
               <div className="mb-5">{service.icon}</div>
               <h3 className="text-2xl font-semibold text-center text-gray-700">{service.title}</h3>
           </Link>
          </motion.div>
        ))}
      </div>

      <Link href={"/services"}>
      <motion.button
        // whileHover={{ scale: 1.05 }}
        className="mt-10 m-auto w-fit block text-lg border border-blue-400 cursor-pointer text-blue-400 px-6 py-3 rounded-sm font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
      >
        عرض جميع الخدمات
      </motion.button>
        </Link>
    </section>
  );
};

export default ServicesSection;
