"use client"
import { motion } from "framer-motion";



const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-[url('/images/hero.png')] h-[calc(100vh-72px)]
        bg-center bg-cover">
            <div className="absolute inset-0 bg-black/55"></div>


            <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center
            lg:w-5xl w-full">
               <motion.h1
                initial={{ opacity: 0, y: -20}} 
                animate={{ opacity: 1, y: 0}} 
                transition={{ duration: 1, ease: "easeOut" }} 
               className="lg:text-7xl text-5xl font-bold lg:leading-16 leading-10 text-white
               mb-7"
               >Building Your Dreams,
               One Property at a Time
               </motion.h1>

               <p className="lg:w-[450px] w-[350px] m-auto text-[#D1D5DB] text-lg font-light leading-7 mb-4">Discover premium properties that match your lifestyle and investment goals with HAVENIX</p>
                <div className="flex items-center justify-center gap-6">
                  <button className="cursor-pointer py-2.5 px-4 bg-(--Primary) rounded-lg text-[#D1D5DB] font-semibold transition hover:bg-[#A87948]">Explore Properties</button>
                  <button className="cursor-pointer py-2.5 px-4 rounded-lg border-white border text-white font-medium">Explore</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;