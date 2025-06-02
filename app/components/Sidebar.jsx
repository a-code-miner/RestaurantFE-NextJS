import Link from 'next/link';
import React from 'react'

const sideBarMenus = {
    customer: [
        { name: 'داشبورد مشتری', path: '' },
        { name: 'سفارشات من', path: 'orders' },
        { name: 'کیف پول', path: 'wallet' },
        { name: 'تاریخچه سفارشات', path: 'order-history' },
        { name: 'پروفایل', path: 'profile' },
    ],
    admin: [
        { name: 'داشبورد مدیر', path: '' },
        { name: 'مدیریت محصولات', path: 'products' },
        { name: 'مدیریت سفارشات', path: 'orders' },
        { name: 'مدیریت کاربران', path: 'users' },
        { name: 'تنظیمات', path: 'settings' },
    ]
};

// Sidebar now receives role and id as props
const Sidebar = ({ role = 'customer', id = '3' }) => {
    const menus = sideBarMenus[role] || [];
    return (
        <div dir='rtl' className="flex">
            <div className="w-64 h-screen bg-gray-800 text-white">
                <div className="p-4">
                    <h2 className="text-xl font-bold">منو</h2>
                </div>
                <ul className="mt-4">
                    {menus.map((menu, index) => {
                        // Build path: /dashboards/role/id or /dashboards/role/id/section
                        const base = `/dashboards/${role}/${id}`;
                        const href = menu.path ? `${base}/${menu.path}` : base;
                        return (
                            <Link href={href} key={index}>
                                <li className="px-4 py-2 hover:bg-gray-700">{menu.name}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar