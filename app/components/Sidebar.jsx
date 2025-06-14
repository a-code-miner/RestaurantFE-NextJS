'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { useAuth } from './AuthContext';
import { usePathname } from 'next/navigation';

// آیکون‌های ساده SVG
const Icons = {
    dashboard: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
    ),
    product: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    ),
    customers: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
    ),
    shop: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    ),
    orders: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
    wallet: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    ),
    profile: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    ),
    settings: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    chevronDown: (
        <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    ),
    circle: (
        <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
    )
};

const sideBarMenus = {
    customer: [
        {
            name: 'داشبورد',
            path: '',
            icon: 'dashboard',
            badge: null
        },
        {
            name: 'محصولات',
            path: 'products',
            icon: 'product',
            badge: null,
            submenus: [
                { name: 'نمای کلی', path: 'products' },
                { name: 'پیش‌نویس‌ها', path: 'products/drafts', badge: '3' },
                { name: 'منتشر شده', path: 'products/released' },
                { name: 'نظرات', path: 'products/comments' },
                { name: 'برنامه‌ریزی شده', path: 'products/scheduled', badge: '8' },
            ]
        },
        {
            name: 'فروشگاه',
            path: 'shop',
            icon: 'shop',
            badge: null
        },
        {
            name: 'سفارشات من',
            path: 'orders',
            icon: 'orders',
            badge: null
        },
        {
            name: 'کیف پول',
            path: 'wallet',
            icon: 'wallet',
            badge: null
        },
        {
            name: 'پروفایل',
            path: 'profile',
            icon: 'profile',
            badge: null
        },
    ],
    admin: [
        {
            name: 'داشبورد مدیر',
            path: '',
            icon: 'dashboard',
            badge: null
        },
        {
            name: 'مدیریت محصولات',
            path: 'products',
            icon: 'product',
            badge: null
        },
        {
            name: 'مدیریت سفارشات',
            path: 'orders',
            icon: 'orders',
            badge: null
        },
        {
            name: 'مدیریت کاربران',
            path: 'users',
            icon: 'customers',
            badge: null
        },
        {
            name: 'تنظیمات',
            path: 'settings',
            icon: 'settings',
            badge: null
        },
    ]
};

const Sidebar = ({ role, id }) => {
    const [openMenus, setOpenMenus] = useState({});
    const pathname = usePathname();
    const menus = sideBarMenus[role] || [];

    const toggleSubmenu = (index) => {
        setOpenMenus(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const isActiveMenu = (menuPath, submenuPath = null) => {
        const basePath = `/dashboards/${role}/${id}`;
        const fullPath = menuPath ? `${basePath}/${menuPath}` : basePath;
        const checkPath = submenuPath ? `${basePath}/${submenuPath}` : fullPath;

        if (submenuPath) {
            return pathname === checkPath;
        }

        return pathname === fullPath || (pathname.startsWith(fullPath) && menuPath !== '');
    };

    return (
        <div className="w-80 h-screen bg-white border-r border-gray-200 overflow-y-auto">
            {/* Logo Section */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-gray-400 rounded-full relative">
                            <div className="absolute inset-1 border border-gray-400"></div>
                            <div className="absolute top-1/2 left-1/2 w-px h-full bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute left-1/2 top-1/2 w-full h-px bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">لوگوی رستورانت</span>
                </div>
            </div>

            {/* Menu Items */}
            <div className="p-4">
                <ul className="space-y-1">
                    {menus.map((menu, index) => {
                        const hasSubmenu = menu.submenus && menu.submenus.length > 0;
                        const isOpen = openMenus[index];
                        const isActive = isActiveMenu(menu.path);

                        return (
                            <li key={index}>
                                {hasSubmenu ? (
                                    <button
                                        onClick={() => toggleSubmenu(index)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-right transition-all duration-200 group ${isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                                                {Icons[menu.icon]}
                                            </div>
                                            <span className="font-medium">{menu.name}</span>
                                            {menu.badge && (
                                                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-semibold">
                                                    {menu.badge}
                                                </span>
                                            )}
                                        </div>
                                        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                            {Icons.chevronDown}
                                        </div>
                                    </button>
                                ) : (
                                    <Link
                                        href={menu.path ? `/dashboards/${role}/${id}/${menu.path}` : `/dashboards/${role}/${id}`}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className={`${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                                            {Icons[menu.icon]}
                                        </div>
                                        <span className="font-medium">{menu.name}</span>
                                        {menu.badge && (
                                            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-semibold ml-auto">
                                                {menu.badge}
                                            </span>
                                        )}
                                    </Link>
                                )}

                                {/* Submenu */}
                                {hasSubmenu && (
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <ul className="mt-2 mr-6 space-y-1">
                                            {menu.submenus.map((submenu, subIndex) => {
                                                const isSubActive = isActiveMenu(menu.path, submenu.path);
                                                return (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={`/dashboards/${role}/${id}/${submenu.path}`}
                                                            className={`flex items-center justify-between px-4 py-2 rounded-md text-sm transition-all duration-200 group ${isSubActive
                                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className={`${isSubActive ? 'text-blue-600' : 'text-gray-400'}`}>
                                                                    {Icons.circle}
                                                                </div>
                                                                <span>{submenu.name}</span>
                                                            </div>
                                                            {submenu.badge && (
                                                                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${submenu.badge === '3'
                                                                    ? 'bg-orange-100 text-orange-600'
                                                                    : 'bg-green-100 text-green-600'
                                                                    }`}>
                                                                    {submenu.badge}
                                                                </span>
                                                            )}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;