'use client'
import { useState } from 'react'
import MealCard from '@/app/components/MealCard'
import React from 'react'

const MENUS = [
    {
        key: 'polos',
        title: 'پلوها',
        meals: [
            {
                name: 'چلوکباب',
                price: '180,000',
                score: 4.8,
                description: 'برنج ایرانی با کباب مخصوص',
                image:
                    'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'زرشک پلو با مرغ',
                price: '150,000',
                score: 4.6,
                description: 'برنج زعفرانی با مرغ',
                image:
                    'https://images.unsplash.com/photo-1582429058754-7af6ca025717?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ],
    },
    {
        key: 'kebabs',
        title: 'کباب‌ها',
        meals: [
            {
                name: 'کباب کوبیده',
                price: '160,000',
                score: 4.7,
                description: 'کوبیده زغالی با گوجه',
                image:
                    'https://images.unsplash.com/photo-1598298125619-ac63f5c89d90?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                name: 'کباب برگ',
                price: '200,000',
                score: 4.9,
                description: 'برگ گوسفندی با برنج',
                image:
                    'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
    {
        key: 'pizzas',
        title: 'پیتزاها',
        meals: [
            {
                name: 'کباب کوبیده',
                price: '160,000',
                score: 4.7,
                description: 'کوبیده زغالی با گوجه',
                image:
                    'https://images.unsplash.com/photo-1598298125619-ac63f5c89d90?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                name: 'کباب برگ',
                price: '200,000',
                score: 4.9,
                description: 'برگ گوسفندی با برنج',
                image:
                    'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
    {
        key: 'burgers',
        title: 'برگرها',
        meals: [
            {
                name: 'کباب کوبیده',
                price: '160,000',
                score: 4.7,
                description: 'کوبیده زغالی با گوجه',
                image:
                    'https://images.unsplash.com/photo-1598298125619-ac63f5c89d90?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                name: 'کباب برگ',
                price: '200,000',
                score: 4.9,
                description: 'برگ گوسفندی با برنج',
                image:
                    'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
]

const OtherMenus = () => {
    const [selectedMenu, setSelectedMenu] = useState(MENUS[0].key)
    const currentMenu = MENUS.find(menu => menu.key === selectedMenu)

    return (
        <div id="menu-section" className='bg-gray-50 py-15'>
            <h2 className='text-5xl font-bold text-center mb-10'>منوهای ما</h2>
            <div className='flex justify-center gap-4 mb-10'>
                {MENUS.map(menu => (
                    <button
                        key={menu.key}
                        onClick={() => setSelectedMenu(menu.key)}
                        className={`px-6 py-2 rounded-full font-bold border transition-all duration-200 ${selectedMenu === menu.key
                            ? 'bg-orange-400 text-white border-orange-400'
                            : 'bg-white/70 text-orange-500 border-orange-300 hover:bg-orange-100'
                            }`}
                    >
                        {menu.title}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8'>
                {currentMenu.meals.map((meal, idx) => (
                    <MealCard key={idx} {...meal} />
                ))}
            </div>
        </div>
    )
}

export default OtherMenus