'use client'
import Link from 'next/link'
import React from 'react'
import clsx from "clsx";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <div
    className='sm:px-[100px] lg:px-[300px] transition-all duration-150 px-8'
    > <section className="py-5  h-10  ">
    <nav className="flex justify-between items-center  font-semibold  w-full">
      <Link href="/">
      <h1 className="uppercase ">pratik~</h1>
      </Link>

      <div className="uppercase space-x-4">
        <Link href="/about"
        className={clsx(
          "hover:text-indigo-400-500 transition-all duration-150",
          pathname === "/about" ? "text-indigo-500" : "text-white"
        )}
        >about</Link>
        <Link href="/projects"
        className={clsx(
          "hover:text-indigo-500 transition-all duration-150",
          pathname === "/projects" ? "text-indigo-500" : "text-white"
        )}
        >projects</Link>
      </div>
    </nav>
  </section></div>
  )
}

export default Navbar