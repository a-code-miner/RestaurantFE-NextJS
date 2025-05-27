'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdLogIn } from "react-icons/io";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='flex flex-col lg:flex-row justify-between items-center bg-white/10 backdrop-blur-md border-b-cyan-200/20 shadow-sm h-auto lg:h-20 text-[18px] font-bold p-4 fixed top-0 left-0 right-0 z-50 px-4 lg:px-20'>
            <div className='text-white mb-4 lg:mb-0 flex w-full lg:w-auto justify-between items-center'>
                <Link href={'#'}>لوگوی رستورانت</Link>
                <button className='lg:hidden text-white text-3xl' onClick={() => setMenuOpen(m => !m)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <div className={`text-white mb-4 lg:mb-0 w-full lg:w-auto ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                <ul className='flex flex-col lg:flex-row lg:space-x-4 lg:space-x-reverse items-center gap-2 lg:gap-0'>
                    <li><Link href={'#'}>خانه</Link></li>
                    <li><Link href={'#'}>منوهای غذا</Link></li>
                    <li><Link href={'#'}>گالری</Link></li>
                    <li><Link href={'#'}>تماس با ما</Link></li>
                    <li><Link href={'#'}>درباره ما</Link></li>
                    <li className='block lg:hidden w-full'>
                        <Link href="/login" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold w-full justify-center mt-2">
                            ورود
                            <IoMdLogIn className='text-2xl' />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='text-white hidden lg:block'>
                <Link href="/login" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold">
                    ورود
                    <IoMdLogIn className='text-2xl' />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
