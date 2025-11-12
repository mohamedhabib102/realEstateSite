"use client"
import { motion } from 'framer-motion'; 
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface SlideData {
  id: number;
  imagePath: string;
  tag: string;
  title: string;
  details: string;
  price: string;
}

const sliderData: SlideData[] = [

  {
    id: 1,
    imagePath: "/images/slider.png", 
    tag: "FEATURED",
    title: "Modern Villa Estate",
    details: "Beverly Hills • 5 Bed • 4 Bath • 5,200 sqft",
    price: "$8,200,000",
  },
  {
    id: 2,
    imagePath: "/images/hero.png", 
    tag: "EXCLUSIVE",
    title: "Luxury City Apartment",
    details: "Manhattan, NY • 3 Bed • 2 Bath • 1,800 sqft",
    price: "$3,500,000",
  },
];


const HeroSlider: React.FC = () => {
 

    return (
        <div className="container mx-auto lg:px-36 md:px-8 px-3.5">
            <motion.div 
             initial={{ y: 40, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden shadow-2xl">
                <Swiper
                    modules={[Navigation, Pagination]}

                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    
                    navigation={{
                      prevEl: '.custom-prev', 
                      nextEl: '.custom-next', 
                    }}
                    pagination={{ 
                        clickable: true,
                        el: '.custom-pagination', 
                        bulletClass: 'swiper-pagination-bullet custom-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
                    }}
                    className="w-full h-[450px] relative"
                >  
                    {sliderData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={slide.imagePath}
                                    alt={slide.title}
                                    fill={true}
                                    objectFit="cover"
                                    priority={slide.id === 1} 
                                />

                                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                                
                                <div className="left-10 absolute inset-0 flex flex-col justify-end p-10 z-20 text-white">
                                    

                                    <span 
                                        className="w-[111px] text-center rounded-full py-1 mb-6 bg-(--Primary)"
                                        
                                    >
                                        {slide.tag}
                                    </span>
                                    

                                    <h2 className="text-4xl font-bold text-white">
                                        {slide.title}
                                    </h2>

                                    <p className="text-lg text-white font-normal leading-10">
                                        {slide.details}
                                    </p>
                                    <p className="text-3xl font-bold leading-7 text-(--Primary)">
                                        {slide.price}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/50 transition z-30 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="custom-next absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/30 hover:bg-white/50 transition z-30 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>


                    <div className="custom-pagination absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">

                    </div>
                    
                </Swiper>
            </motion.div>
        </div>
    );
};

export default HeroSlider;