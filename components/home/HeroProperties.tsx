// components/HeroProperties.tsx
import React from "react";
import Link from "next/link";

const HeroProperties: React.FC = () => {
  return (
    <section className="py-16">
        <div className="container mx-auto px-3.5">
        <div
      className="relative bg-[url('/images/properties.png')] bg-center bg-cover h-[320px] rounded-xl overflow-hidden"
    >

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 text-white max-w-lg">
        <h2 className="text-3xl sm:text-2xl font-bold mb-3 leading-9">
          Featured Properties
        </h2>
        <p className="text-lg text-white mb-6 font-normal leading-7">
          Discover our exclusive collection of luxury properties
        </p>
        <Link
          href="#"
          className="bg-[#D4A574] hover:bg-[#A87948] transition-colors text-white font-medium text-sm py-2.5 px-5 rounded-lg 
          w-[225px] text-center"
        >
          View All Properties
        </Link>
      </div>
    </div>
        </div>
    </section>
  );
};

export default HeroProperties;
