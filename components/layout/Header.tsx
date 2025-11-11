"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";


export default function Header() {

  const pathname = usePathname(); 

  const isActive = (path: string): boolean => pathname === path;


const linkClass = (path: string): string =>
  `${
    isActive(path) ? "text-(--Primary) before:bg-(--Primary) " : "text-[#1A365D]"
  } block text-center text-xl capitalize font-normal transition hover:text-(--Primary) hover:before:bg-(--Primary) 
      px-2 
     relative 
     before:content-[''] 
     before:absolute 
     before:w-[calc(100%-20px)] 
     before:h-[2px] 
     before:left-1/2 
     before:bottom-[-1px] 
     before:-translate-x-1/2
     before:transition 
     before:duration-300
     `;


  return (
    <>



      <header
        className="bg-[#ffffff] overflow-hidden"
      >
        <div className="container mx-auto px-3.5">
          <motion.nav 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, }} 
            transition={{ duration: 1, ease: "easeOut" }} 
          className="flex items-center justify-between">
            <Logo 
            color="black"
            />

              <ul className="lg:flex md:flex hidden items-center gap-1.5">
              <li>
                 <Link href="/" className={linkClass("/")}>Home</Link>
              </li>
               <li>
                 <Link href="/properties" className={linkClass("/properties")}>Properties</Link>
              </li>
              <li>
                 <Link href="/brokers" className={linkClass("/brokers")}>Brokers</Link>
              </li>
              <li>
                 <Link href="/About" className={linkClass("/About")}>About</Link>
              </li>
              <li>
                 <Link href="/Contact" className={linkClass("/Contact")}>Contact</Link>
              </li>
            </ul>

            <motion.button 
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{
               type: "tween",
               stiffness: 300,
               duration: 0.6,
               delay: 0.2,
             }}
            className="lg:block md:block hidden bg-(--Primary) transition hover:bg-[#A87948] p-3 rounded-lg cursor-pointer
            text-white w-[132px]">
              Get Started
            </motion.button>
                  
                  
            <motion.button
            initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{
               type: "tween",
               stiffness: 300,
               duration: 0.6,
               delay: 0.2,
             }}
            className="lg:hidden md:hidden block w-10 h-5 relative cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
             className={`absolute bg-(--Primary) w-full h-1 left-0 top-0 transition-all`}
            ></span>
            <span
             className={`absolute bg-(--Primary) w-full h-1 left-0 top-2 transition-all`}            ></span>
            <span
            className={`absolute bg-(--Primary) w-full h-1 left-0 top-4 transition-all`}
            ></span>
          </motion.button>
        </motion.nav>
        </div>
      </header>
    </>
  );
}
