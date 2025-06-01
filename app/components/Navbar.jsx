'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from './AuthContext';
import { IoMdLogIn } from "react-icons/io";
import { FiMenu, FiX } from 'react-icons/fi';
import BasketButton from './BasketButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isLoggedIn, user, logout } = useAuth();
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
                        <Link href="/BasketPage" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold justify-center mt-2">
                            <BasketButton />
                        </Link>
                        {
                            isLoggedIn ? (
                                <div className="relative group">
                                    <button
                                        className="w-full flex items-center justify-center mt-3 gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition font-bold"
                                        onClick={() => setMenuOpen(menuOpen === 'profile' ? false : 'profile')}
                                        onBlur={() => setTimeout(() => setMenuOpen(false), 200)}
                                    >
                                        <img src='https://avatar.iran.liara.run/public' alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                                        <span>{user?.email || 'پروفایل'}</span>
                                    </button>
                                    <div className={`absolute right-0 w-full bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-300 ease-in-out ${menuOpen === 'profile' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto`}>
                                        <div className="px-4 py-2 text-gray-700 text-sm border-b">کد کاربر: {user?.id || '-'}</div>
                                        <div className="px-4 py-2 text-gray-700 text-sm border-b">ایمیل: {user?.email || '-'}</div>
                                        <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">داشبورد</Link>
                                        <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">پروفایل</Link>
                                        <button onClick={logout} className="w-full text-right px-4 py-2 text-red-500 hover:bg-gray-100">خروج</button>
                                    </div>
                                </div>
                            ) : (
                                <Link href="/login" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold">
                                    ورود
                                    <IoMdLogIn className='text-2xl' />
                                </Link>
                            )
                        }

                    </li>
                </ul>
            </div>
            <div className='text-white hidden lg:block'>
                <div className='flex gap-5'>
                    <Link href="/BasketPage" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold">
                        <BasketButton />
                    </Link>

                    {
                        isLoggedIn ? (
                            <div className="relative group">
                                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition font-bold">
                                    <img src='https://avatar.iran.liara.run/public' alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <span>{user?.email || 'پروفایل'}</span>
                                </button>
                                <div className="absolute right-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
                                    <div className="px-4 py-2 text-gray-700 text-sm border-b">کد کاربر: {user?.id || '-'}</div>
                                    <div className="px-4 py-2 text-gray-700 text-sm border-b">ایمیل: {user?.email || '-'}</div>
                                    <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">داشبورد</Link>
                                    <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">پروفایل</Link>
                                    <button onClick={logout} className="w-full text-right px-4 py-2 text-red-500 hover:bg-gray-100">خروج</button>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="flex items-center gap-2 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold">
                                ورود
                                <IoMdLogIn className='text-2xl' />
                            </Link>
                        )
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar
