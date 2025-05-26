import Link from 'next/link'
import React from 'react'
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-white/10 backdrop-blur-md  border-b-cyan-200/20 shadow-sm h-20 text-[18px] font-bold p-4 fixed top-0 left-0 right-0 z-50 px-20'>
            <div className='text-white'><Link href={'#'}>لوگوی رستورانت</Link></div>
            <div className='text-white'>
                <ul className='flex space-x-4'>
                    <li><Link href={'#'}>خانه</Link></li>
                    <li><Link href={'#'}>منوهای غذا</Link></li>
                    <li><Link href={'#'}>گالری</Link></li>
                    <li><Link href={'#'}>تماس با ما</Link></li>
                    <li><Link href={'#'}>درباره ما</Link></li>
                </ul>
            </div>
            <div className='text-white'>
                <Link href="/login" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold">
                    ورود
                    <IoMdLogIn className='text-2xl' />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
