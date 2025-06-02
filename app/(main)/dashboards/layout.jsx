import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const DashboardsLayout = ({ children, params }) => {
    // فرض: params.role و params.id از مسیر داینامیک گرفته می‌شود
    // اگر params وجود نداشت، fallback به customer/3
    const role = params?.role || 'customer';
    const id = params?.id || '3';
    return (
        <div dir='rtl' className="min-h-screen flex">
            <Sidebar role={role} id={id} />
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    )
}

export default DashboardsLayout