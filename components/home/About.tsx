"use client"
import { motion } from 'framer-motion';
import CustomTitle from "../ui/CustomTitle";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-3.5">
        <div className="mt-[60px] flex flex-col lg:flex-row items-start justify-between gap-[75px]">
        
        <motion.div 
           initial={{ x: -100, opacity: 0 }} 
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }} 
           transition={{
             type: "tween",
             stiffness: 300,
             duration: 0.6,
             delay: 0.2,
           }}
                 className="flex-1">
            <CustomTitle state={true} subTitle="About Havenix" space={true}/>
            <h2 className="text-(--Secondary-txt) text-4xl md:text-4xl font-bold leading-snug mb-3">
              Building Trust Through Excellence
            </h2>

            <p className="text-[#4B5563] leading-relaxed mb-5">
              At HAVENIX, we believe that finding the perfect property is more
              than just a transaction—it’s about discovering your sanctuary.
              With years of expertise in the real estate industry, we’ve built a
              reputation for professionalism, integrity, and unparalleled
              service.
            </p>

            <p className="text-[#4B5563] leading-relaxed mb-6">
              Our vision is to transform the real estate experience by
              connecting clients with properties that truly feel like home.
              Whether you’re buying, selling, or investing, HAVENIX is your
              trusted partner every step of the way.
            </p>


            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image
                src="/images/trusted.svg"
                alt="icon"
                title="trusted"
                width={80}
                height={100}
                className="w-5"
                />
                <span className="text-(--Secondary-txt) font-semibold leading-6">
                  Trusted Partner
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                src="/images/award.svg"
                alt="icon"
                title="trusted"
                width={80}
                height={100}
                className="w-5"
                />
                <span className="text-(--Secondary-txt) font-semibold leading-6">
                  Award Winning
                </span>
              </div>
            </div>
          </motion.div>


          <motion.div 
           initial={{ x: 100, opacity: 0 }} 
           whileInView={{ x: 0, opacity: 1 }} 
           viewport={{ once: true }}
           transition={{
             type: "tween",
             stiffness: 300,
             duration: 0.6,
             delay: 0.2,
           }}          
          className="flex-1 rounded-2xl overflow-hidden lg:h-[445px] lg:w-[453px] ">
            <Image
              src="/images/about.png" 
              alt="Luxury living room"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
