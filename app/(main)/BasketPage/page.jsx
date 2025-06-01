// app/BasketPage/page.jsx
'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import HomePage from '../HomePage/HomePage'
import AuthTestComponent from '../../components/AuthTestComponent' // فقط برای تست

const BasketPage = () => {
    const router = useRouter();

    // اگر کاربر مستقیماً به این آدرس آمده، به صفحه اصلی برگردان
    useEffect(() => {
        // اگر referrer صفحه اصلی نیست، به صفحه اصلی برو
        if (typeof window !== 'undefined' && !document.referrer.includes(window.location.origin)) {
            router.replace('/');
        }
    }, [router]);

    return (
        <div>
            <Navbar />
            <AuthTestComponent />
            <div>
                <HomePage />
            </div>
        </div>
    );
}

export default BasketPage;