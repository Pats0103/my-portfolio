"use client";

import Navbar from "@/components/navbar";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import MyImage from "@/public/_.jpeg";
import Thumbnail1 from "@/public/thumbnail.png";
import { poppins, kanit } from "./ui/font";
import { HiArrowLongRight } from "react-icons/hi2";
import { TbLivePhoto } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub ,FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Change to false if you want the animation to trigger again whenever it comes in/out of view
    threshold: 0.01, // Percentage of the element that is in view before the callback triggers
  });


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
            <p
              className={`text-xl sm:text-4xl md:text-6xl text-center tracking-tighter antialiased ${kanit.className}`}
            >
              INDEPENDENT FULL&#45;STACK WEB DEVELOPER
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
           <div className="flex gap-2 flex-wrap justify-center p-1 ">
           <Link href={''} className="border  p-2 px-4 text-sm md:text-xl rounded-lg text-black bg-white">
              Resume &gt;
            </Link>
            <Link href={'https://github.com/Pats0103'} className=" border  p-2 px-4 text-sm md:text-xl rounded-lg text-black bg-white flex items-center gap-2">
            <FaGithub />  Github 
            </Link>
            <Link href={'https://www.linkedin.com/in/pratik-dobariya/'} className="border  p-2 px-4 text-sm md:text-xl rounded-lg text-black bg-white flex items-center gap-2">
            <FaLinkedin />  LikendIn 
            </Link>
            <Link href={'mailto:dobariyaompratik@gmail.com'} className="border  p-2 px-4 text-sm md:text-xl rounded-lg text-black bg-white flex items-center gap-2">
            <MdOutlineAlternateEmail />  Email 
            </Link>
           </div>
          </motion.div>
        </div>

        <div className="absolute bottom-72 md:bottom-[200px] -left-16 md:-left-10  rotate-90 flex items-center gap-3">
          <span className=" uppercase md:text-xl ">scroll to see more</span>
          <HiArrowLongRight className="md:text-xl animate-ping" />
        </div>
      </section>

      {/* aboout me */}
      <motion.section
        className="w-full flex justify-center h-[380px] md:h-[300px]"
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state of the animation
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Final state of the animation
        transition={{ duration: 1 }} // Animation options
      >
        <div
          className={`text-center flex flex-col gap-3 ${poppins.className} tracking-tight px-4 text-base text-pretty md:w-[70%] md:text-3xl`}
        >
          <h1 className="mb-6 text-2xl md:text-4xl">About Me</h1>
          <p className="text-xl">
            Hey&#33; I&#39;m Pratik, 19 years old and I am currently a senior
            studying BCA.
          </p>
          <p className="px-4 leading-tight text-xl">
            I am a passionate coder with a knack for problem-solving and turning
            complex ideas into clean, functional code. I am proficient in
            JavaScript, react, nodeJs, MongoDB and always eager to tackle new
            challenges.
          </p>
        </div>
      </motion.section>

     
      <motion.section
        className="h-[800px]"
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state of the animation
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Final state of the animation
        transition={{ duration: 2 }} // Animation options
      >
         <h1 className="text-2xl md:text-4xl text-center md:my-32 my-10">
        Projects
      </h1>
        <div className="w-full px-2  rounded-lg mx-2 flex justify-center ">
          <div className=" h-full w-full md:h-[400px]  flex flex-col items-center justify-center">
            <div className="bg-white text-black p-3 rounded-lg">
              <div className="h-[400px]  ">
                <Image
                  src={Thumbnail1}
                  alt="thumbnail"
                  className="rounded-lg object-cover  w-full h-full"
                ></Image>
              </div>
              <hr className="mt-2 "/>
              <p className="mt-4 md:text-xl text-center ">Full stack MERN blog website</p>
              <div className="flex gap-4 m-3 justify-center items-center">
                <Link
                  href="https://github.com/Pats0103/BLOG-WEBSITE"
                  className="border p-2 px-4 text-sm md:text-md rounded-lg hover:bg-black hover:text-white duration-200"
                >
                  Souce code
                </Link>
                <Link href={""} className="border p-2 px-4 text-sm md:text-md flex items-center gap-2 rounded-lg hover:bg-black hover:text-white duration-200">
                  Live link <TbLivePhoto className="animate-ping text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
