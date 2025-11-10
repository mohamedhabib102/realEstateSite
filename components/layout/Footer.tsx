'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1d26] text-white py-6" dir='rtl'>
      <div className="container mx-auto px-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* نص Footer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <p className="text-lg">
            {new Date().getFullYear()} &copy; شركة العقارات المتكاملة جميع الحقوق محفوظة.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex gap-4"
        >
          <a
            href="https://www.facebook.com/RealEstateCompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/RealEstateCompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://wa.me/+201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp size={25} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
