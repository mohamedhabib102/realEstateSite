"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";


export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname(); 

  const toggles = () => {
    setToggle((prev) => !prev);
  };

  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if (toggle) {
  //       const toggleButton = document.getElementById("toggle-btn");
  //       const menu = document.getElementById("menu");

  //       if (toggleButton && toggleButton.contains(e.target as Node)) return;
  //       if (menu && menu.contains(e.target as Node)) return;

  //       setToggle(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClick);
  //   return () => document.removeEventListener("click", handleClick);
  // }, [toggle]);

  // دالة لتحديد إذا كان الرابط Active
  
  const isActive = (path: string): boolean => pathname === path;


  const linkClass = (path: string): string =>
    `${isActive(path) ? "text-blue-400" : "text-white"} 
     block text-center text-xl uppercase font-semibold transition hover:text-blue-400`;

  return (
    <>

      <div
        className={`${
          toggle ? "left-0" : "-left-full"
        }  fixed top-0 z-50 p-3 w-full h-full transition-[left] duration-500 bg-[#0b1d26] flex flex-col items-start justify-center gap-3`}
      >
        <IoClose 
        size={40}
        onClick={() => toggles()}
        className="absolute top-6 right-6 cursor-pointer"
        />
        <ul
          id="menu"
          className="lg:w-[80%] m-auto w-full flex flex-col items-start justify-center gap-3"
        >
          <li className="w-full">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>

          <li className="w-full">
            <Link href="/about" className={linkClass("/about")}>
              About Us
            </Link>
          </li>

          <li className="w-full">
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>

          <li className="w-full">
            <Link href="/services" className={linkClass("/services")}>
              Services
            </Link>
          </li>
        </ul>
      </div>

      <motion.header
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          stiffness: 300,
          duration: 0.6,
          delay: 0.2,
        }}
        className="bg-[#0b1d26] backdrop-blur-[1px] z-30"
      >
        <div className="container mx-auto px-3.5">
          <nav className="flex justify-between items-center py-4 select-none">
            {/* اللوجو */}
            <Link
              href="/"
              className="lg:text-2xl text-sm text-white flex items-center gap-2"
            >
              <div>
                <span className="lg:text-[35px] text-[20px] text-blue-400">
                  Real
                </span>
                Estate
              </div>
            </Link>

            {/* زرّ الـ toggle للجوال */}
            <button
              id="toggle-btn"
              // onClick={toggles}
              className="relative w-10 h-5 cursor-pointer"
            >
              <span className="absolute left-0 h-[3px] w-full bg-blue-400 top-0 transition-all"></span>
              <span
                className={`absolute left-0 h-[3px] bg-blue-400 top-2 transition-all ${
                  toggle ? "w-full" : "w-[75%]"
                }`}
              ></span>
              <span
                className={`absolute left-0 h-[3px] bg-blue-400 top-4 transition-all ${
                  toggle ? "w-full" : "w-[45%]"
                }`}
              ></span>
            </button>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
