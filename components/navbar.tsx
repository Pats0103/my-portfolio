"use client";

import Link from "next/link";
import React, { useState } from "react";
import { poppins } from "@/app/ui/font";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { MenuToggle } from "./menu-toggle";
function Navbar() {
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }
      const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();
 
  return (
    <>
      <nav className={`${poppins.className}  p-10`}>
        <div className="flex justify-between items-center">
          <div>Pratik~</div>
          <div className="hidden  md:flex gap-10">
            <Link
              href="/"
              className={clsx(
                "hover:border-b-blue-50 border-b border-b-transparent transition-allv duration-300 ease-in-out px-2 py-1",
                pathname === "/" && "border-b-blue-50"
              )}
            >
              Home
            </Link>

            <Link
              href="/contact"
              className={clsx(
                "hover:border-b-blue-50 border-b border-b-transparent transition-allv duration-300 ease-in-out px-2 py-1",
                pathname === "/contact" && "border-b-blue-50"
              )}
            >
              Contact
            </Link>
          </div>
          <motion.div 
           animate={isOpen ? "open" : "closed"}
           variants={variants}
              className="md:hidden flex flex-col gap-4"
         >
           <div className="space-x-1">
           <Link
              href="/"
              className={clsx(
                "hover:border-b-blue-50 border-b border-b-transparent transition-allv duration-300 ease-in-out px-2 py-1",
                pathname === "/" && "border-b-blue-50"
              )}
            >
              Home
            </Link>

            <Link
              href="/contact"
              className={clsx(
                "hover:border-b-blue-50 border-b border-b-transparent transition-allv duration-300 ease-in-out px-2 py-1",
                pathname === "/contact" && "border-b-blue-50"
              )}
            >
              Contact
            </Link>
           </div>

          </motion.div>
         <div className="md:hidden">
         <MenuToggle toggle={() => setIsOpen(!isOpen)} />
         </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
