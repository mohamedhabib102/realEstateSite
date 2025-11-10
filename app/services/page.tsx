'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaHome, FaBullhorn, FaMoneyBillWave, FaKey, FaHandshake, FaTools } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ServicesUnderDevelopment: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        className="max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* العنوان مع أيقونة من React Icons */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-8 flex items-center justify-center gap-4"
          variants={itemVariants}
        >
          <FaTools className="text-yellow-500" />
          خدماتنا تحت التطوير
        </motion.h1>

        {/* الوصف */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-6"
          variants={itemVariants}
        >
          نحن نعمل حالياً على تطوير هذا القسم لتقديم مجموعة متكاملة من الخدمات العقارية التي ستسهل حياتك
          بشكل كبير من خلال هذه الخدمات، ستتمكن من إدارة
        </motion.p>

        <motion.ul
          className="text-gray-700 mt-6 space-y-4 list-none max-w-xl mx-auto"
          variants={itemVariants}
        >
          <li className="flex items-center gap-3 text-lg flex-row-reverse">
            <FaHome className="text-blue-500 text-3xl" />
          .  الوساطة العقارية والتواصل مع المشترين والبائعين بسهولة
          </li>
          <li className="flex items-center gap-3 text-lg flex-row-reverse">
            <FaBullhorn className="text-green-500 text-2xl" />
         .  إدارة الإعلانات والتسويق للعقارات بطريقة فعالة
          </li>
          <li className="flex items-center gap-3 text-lg flex-row-reverse">
            <FaMoneyBillWave className="text-yellow-500 text-3xl" />
          .  بيع وشراء العقارات عبر حسابك الشخصي بطريقة آمنة ومباشرة
          </li>
          <li className="flex items-center gap-3 text-lg flex-row-reverse">
            <FaKey className="text-purple-500 text-3xl" />
        .    تأجير واستضافة العقارات والتحكم في كل التفاصيل من لوحة التحكم
          </li>
          <li className="flex items-center gap-3 text-lg flex-row-reverse">
            <FaHandshake className="text-pink-500 text-3xl" />
          .  الوصول إلى شركائنا والخدمات الإضافية من خلال حسابك
          </li>
        </motion.ul>

        <motion.p
          className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg"
          variants={itemVariants}
        >
          كل هذه الخدمات ستكون متاحة قريباً في حسابك الشخصي، وستتمكن من التحكم الكامل بها، إدارة كل شيء بسهولة،
          ومتابعة كل العمليات من مكان واحد. نحن نعمل على توفير تجربة سلسة ومريحة لكل مستخدم.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServicesUnderDevelopment;
