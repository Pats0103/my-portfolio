"use client";
import ParticlesSection from "@/components/Navbar";
import { Fredoka } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CgDarkMode } from "react-icons/cg";
import { motion } from "framer-motion";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",

  weight: "400",
});

export default function Home() {
  return (
    <main
      className={`${fredoka.className} sm:px-[100px] lg:px-[300px] transition-all duration-150`}
    >
     
      <section className=" h-[650px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ ease: "easeOut", duration: 2 }}
          className=" antialiased grid gap-3 w-full lg:w-[90%] "
        >
          <h1 className="text-4xl font-bold text-center mb-4 ">
   
            <span
            className="animate-bounce text-4xl font-bold text-center mb-4"
            >
            👋
              </span> Hi, I&#39m Pratik
          </h1>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
            <p className="text-center text-2xl font-semibold mb-4">
              A full-stack web developer with a passion for building functional
              and visually appealing websites.
            </p>
            <p className="text-center text-lg">
              I specialize in React, Node.js, MongoDB, and Express.js to deliver
              dynamic web experiences.
            </p>
          </div>
        </motion.div>
      </section>
    
    </main>
  );
}
