"use client";

import Navbar from "@/components/navbar";

import Image from "next/image";
import MyImage from "@/public/_.jpeg";
import { poppins } from "./ui/font";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <div className="">
      <Navbar />
      </div>

      <section
        className={`flex w-screen justify-center items-start h-[844px] ${poppins.className} relative`}
      >
        <div className="flex flex-col items-center gap-10 w-full md:w-[80%] py-[150px] md:py-[100px] px-10">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            className="w-[150px] h-[150px] md:h-[300px] md:w-[300px] "
          >
            <Image src={MyImage} alt="luffy" className="rounded-full "></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl md:text-7xl text-center tracking-tighter antialiased">
              INDEPENDENT FULL&#45;STACK WEB DEVELOPER
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <button className="border  p-2 px-4 text-sm md:text-xl">
              Resume &gt;
            </button>
          </motion.div>
        </div>

        <div className=" md:block absolute bottom-72 md:bottom-[200px] -left-16 md:-left-10  rotate-90 flex items-center gap-3">
          <span className=" uppercase md:text-xl ">scroll to see more</span>
          <HiArrowLongRight className="md:text-xl animate-ping" />
        </div>
      </section>
      <section
        className={`text-center flex flex-col gap-3 ${poppins.className} tracking-tight px-4 text-base text-pretty`}
      >
        <p>
          Hey&#33; I&#39;m Pratik, 19 years old and I am currently a senior
          studying BCA.
        </p>
        <p className="px-4">
          I am a passionate coder with a knack for problem-solving and turning
          complex ideas into clean, functional code. I am proficient in
          JavaScript, react, nodeJs, MongoDB and always eager to tackle new
          challenges
        </p>
      </section>

      <section>

      </section>
    </>
  );
}
