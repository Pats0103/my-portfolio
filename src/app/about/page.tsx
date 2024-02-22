"use client";
import React from "react";
import img from "../../../public/pratik.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import Link from "next/link";
function Page() {
  return (
    <motion.div
     
      className=" flex justify-center transition-all duration-150"
    >
    <section className="h-[650px] flex items-center justify-center mt-[100px]">
        <div className="antialiased grid gap-3 w-full lg:w-3/4 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>

            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
                
                <div className="w-full md:w-1/2 px-10">
                    <p className="text-2xl font-semibold mb-4 text-center md:text-left">
                        I am 19-year-old from India and I am currently a senior studying
                        BCA.
                    </p>
                    <p className="text-lg text-center md:text-left">
                        I am a passionate coder with a knack for problem-solving and
                        turning complex ideas into clean, functional code. Im
                        proficient in JavaScript, react, nodeJs, MongoDB and always
                        eager to tackle new challenges
                    </p>
                    <div className="flex mt-6 justify-center md:justify-start">
                    <Link href={'https://github.com/Pats0103'}>
                    <FaGithub 
                    className="text-4xl hover:scale-110 transition-all duration-150"
                    />
                    </Link>
                   <Link href={'https://www.linkedin.com/in/pratik-dobariya/'}>
                   <FaLinkedin
                    className="text-4xl ml-4 hover:scale-110 transition-all duration-150"
                    />
                   </Link>
                    </div>
                </div>
                <div 
                 
                className="w-full hidden  md:w-1/3 md:flex justify-center md:justify-start">
                    <Image
                        src={img}
                        alt="pratik"
                        className="rounded-lg "
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    </section>
    </motion.div>
  );
}

export default Page;
