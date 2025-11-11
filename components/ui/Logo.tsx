"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

interface LogoDetails {
  color: string;
}

const Logo: React.FC<LogoDetails> = ({color}) =>{
    return (
         <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            stiffness: 300,
            duration: 0.6,
            delay: 0.2,
          }}
         >
         <Link href={"/"} 
         className="flex items-center gap-2 h-[65px]">
            <Image
            src="/images/logo.svg"
            alt="image-logo"
            title="logo"
            width={100}
            height={100}
            className="w-7 h-6"
            />
            <span className={`${color === "white" ? "text-white" : "text-(--Secondary-txt)"} text-2xl font-bold`}>HAVENIX</span>
         </Link>
         </motion.div>
    )
}

export default Logo