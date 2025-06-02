'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const headerImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=1374&q=80',
];

const Header = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[800px] sm:h-[300px] text-white overflow-hidden">
            <Swiper
                navigation
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                effect="fade"
                speed={1500}
                modules={[Navigation, require('swiper/modules').Autoplay, EffectFade]}
                className="w-full h-full min-h-[800px] sm:h-[300px]"
            >
                {headerImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="relative w-full h-full min-h-[800px] sm:h-[300px] flex items-center justify-center bg-no-repeat bg-cover bg-left-bottom"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] z-0"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* متن ثابت روی اسلایدر */}
            <div className='header bg-white/10 backdrop-blur-md p-4 md:p-10 rounded-2xl overflow-hidden shadow-sm w-[95vw] max-w-2xl mx-auto flex flex-col items-center absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
                <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center">به رستورانت پالمیر خوش آمدید!</h1>
                <p className="text-base md:text-lg mb-8 text-center">جایی که هر ظرف داستانی و هر لقمه‌ای ماجراجویی دارد!</p>
                <button
                    className="bg-white text-blue-500 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
                    onClick={() => {
                        const el = document.getElementById('menu-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    مشاهده منوها
                </button>
            </div>
        </div>
    )
}

export default Header
