'use client';

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* العنوان */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          نحن هنا لمساعدتك
        </h2>

        {/* الوصف */}
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          إذا كان لديك أي سؤال أو تحتاج إلى مزيد من المعلومات عن خدماتنا العقارية، يمكنك التواصل معنا بسهولة عبر أي من الوسائل التالية. نحن دائمًا جاهزون لدعمك وتقديم الاستشارة المناسبة.
        </p>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* البريد الإلكتروني */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center"
            variants={cardVariants}
          >
            <FaEnvelope className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">البريد الإلكتروني</h3>
            <p className="text-gray-700">info@example.com</p>
          </motion.div>

          {/* الهاتف */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center"
            variants={cardVariants}
          >
            <FaPhone className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">الهاتف</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </motion.div>

          {/* الموقع */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center"
            variants={cardVariants}
          >
            <FaMapMarkerAlt className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">الموقع</h3>
            <p className="text-gray-700">شارع المثال، المدينة، الدولة</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
