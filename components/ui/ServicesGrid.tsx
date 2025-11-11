"use client"
import { motion } from 'framer-motion'; 
import React from 'react';
import Image from 'next/image';


interface ServiceItem {
  iconPath: string; 
  title: string;
  description: string;
}


const services: ServiceItem[] = [
  {
    iconPath: '/images/sales.svg',
    title: 'Sales',
    description: 'Seamless buying and selling experiences with professional guidance',
  },
  {
    iconPath: '/images/rentalssvg.svg',
    title: 'Rentals',
    description: 'Find your perfect rental property with our extensive portfolio',
  },
  {
    iconPath: '/images/marketing.svg', 
    title: 'Marketing',
    description: 'Strategic marketing your property’s visibility and value',
  },
  {
    iconPath: '/images/consulting.svg',
    title: 'Consulting',
    description: 'Expert advice on real estate investments and market opportunities',
  },
];

const ServicesGrid: React.FC = () => {


  return (
    <section className="py-16">
      <div className="container mx-auto px-3.5">
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          

          {services.map((service, index) => (
 
            <motion.div 
             initial={{ y: 100, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }}
              transition={{
                type: "tween",
                stiffness: 300,
                duration: 0.6,
                delay: 0.2,
              }} 
              key={index} 
              className={`p-6 rounded-[12px] bg-[#F8F8F8] border border-[#284C7E40]`}
              style={{ minHeight: '250px' }} 
            >
              

              <div className={`w-12 p-2.5 rounded-[4px] flex items-center justify-center mb-3 bg-[#D4A5741A]`}>
 
                <Image 
                  src={service.iconPath} 
                  alt={service.title} 
                  width={28} 
                  height={28} 
                />
              </div>
              

              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3.5">
                {service.title}
              </h3>
              
              <p className="text-sm text-[#4B5563] font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;