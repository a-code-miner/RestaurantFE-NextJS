'use client'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import { useAuth } from '@/app/components/AuthContext';
import Navbar from '@/app/components/Navbar';

const DashboardsLayout = ({ children, params }) => {
    // فرض: params.role و params.id از مسیر داینامیک گرفته می‌شود
    // اگر params وجود نداشت، fallback به customer/3
    const { isLoggedIn, user } = useAuth();
    if (!isLoggedIn) {
        return <div className="text-red-500 text-center mt-10 font-bold">شما مجاز به ورود نیستید!.</div>;
    }
    const role = user.role || 'customer'; // فرض: اگر نقش وجود نداشته باشد، به صورت پیش‌فرض customer
    const id = user?.id;
    return (
        <div className=''>
            <div dir='rtl' className="min-h-screen flex">
                <Sidebar role={role} id={id} />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardsLayout