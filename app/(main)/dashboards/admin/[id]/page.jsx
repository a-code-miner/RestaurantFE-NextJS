'use client'
import React from 'react'
import { useAuth } from '@/app/components/AuthContext';

const AdminDashboard = () => {
    const { isLoggedIn, user } = useAuth();

    if (!isLoggedIn) {
        return (
            <div className="flex items-center justify-center min-h-64">
                <div className="text-center">
                    <div className="text-red-500 text-xl font-bold mb-4">
                        شما مجاز به مشاهده این داشبورد نیستید.
                    </div>
                    <p className="text-gray-600">لطفاً ابتدا وارد حساب کاربری خود شوید.</p>
                </div>
            </div>
        );
    }

    const userId = user.id;
    const userName = user.name || user.email;

    // آیکون‌های SVG
    const Icons = {
        folder: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        ),
        trendUp: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        helpCircle: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Product <span className="text-gray-500">overview</span>
                </h1>
                <p className="text-gray-600">
                    خوش آمدید {userName} (کد کاربر: {userId})
                </p>
            </div>

            {/* Main Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side - Overview Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Overview</h2>
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                <div className="text-gray-600">
                                    {Icons.folder}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="text-gray-600">Earning</span>
                                        <div className="text-gray-400">
                                            {Icons.helpCircle}
                                        </div>
                                    </div>
                                    <div className="text-5xl font-bold text-gray-900">$128k</div>
                                    <div className="flex items-center justify-center gap-2 mt-2">
                                        <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                                            {Icons.trendUp}
                                            <span className="font-semibold">36.8%</span>
                                        </div>
                                        <span className="text-gray-500 text-sm">vs last year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Product Activity */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Product <span className="text-gray-500">activity</span>
                        </h2>

                        {/* Activity Items */}
                        <div className="space-y-6">
                            {/* Activity Item 1 */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">محصول جدید اضافه شد</h3>
                                    <p className="text-gray-600 text-sm">محصول "غذای ویژه" به منو اضافه شد</p>
                                </div>
                                <div className="text-gray-500 text-sm">2 ساعت پیش</div>
                            </div>

                            {/* Activity Item 2 */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">سفارش جدید دریافت شد</h3>
                                    <p className="text-gray-600 text-sm">سفارش #1234 برای مبلغ 85,000 تومان</p>
                                </div>
                                <div className="text-gray-500 text-sm">5 ساعت پیش</div>
                            </div>

                            {/* Activity Item 3 */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <div className="w-6 h-6 bg-orange-600 rounded-lg"></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">بروزرسانی موجودی</h3>
                                    <p className="text-gray-600 text-sm">موجودی 3 محصول بروزرسانی شد</p>
                                </div>
                                <div className="text-gray-500 text-sm">1 روز پیش</div>
                            </div>
                        </div>

                        {/* View All Button */}
                        <div className="mt-8 text-center">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                مشاهده همه فعالیت‌ها
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-600 text-sm font-medium">کل سفارشات</h3>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1,234</div>
                    <div className="text-green-600 text-sm font-medium">+12% از ماه قبل</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-600 text-sm font-medium">مشتریان جدید</h3>
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">856</div>
                    <div className="text-green-600 text-sm font-medium">+8% از ماه قبل</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-600 text-sm font-medium">درآمد روزانه</h3>
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-yellow-600 rounded-lg"></div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">12.5M</div>
                    <div className="text-red-600 text-sm font-medium">-3% از روز قبل</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-600 text-sm font-medium">محصولات فعال</h3>
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-purple-600 rounded"></div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">42</div>
                    <div className="text-green-600 text-sm font-medium">+15% از ماه قبل</div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;