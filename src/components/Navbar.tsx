
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div
    className='sm:px-[100px] lg:px-[300px] transition-all duration-150 px-8'
    > <section className="py-5  h-10  ">
    <nav className="flex justify-between items-center  font-semibold  w-full">
      <Link href="/">
      <h1 className="uppercase ">pratik~</h1>
      </Link>

      <div className="uppercase space-x-4">
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
      </div>
    </nav>
  </section></div>
  )
}

export default Navbar