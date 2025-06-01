// components/WalletModal.js
'use client'
import React from 'react';
import { useAuth } from './AuthContext';
import Modal from './Modal';
import { HiOutlineWallet, HiOutlineUser, HiOutlineIdentification } from 'react-icons/hi2';

const WalletModal = ({ isOpen, onClose }) => {
    const { isLoggedIn, user } = useAuth();

    // داده‌های استاتیک کیف پول
    const walletData = {
        balance: 250000,
        walletId: 'WLT-789456123',
        transactions: [
            { id: 1, type: 'افزایش موجودی', amount: 100000, date: '1403/03/15' },
            { id: 2, type: 'خرید غذا', amount: -35000, date: '1403/03/14' },
            { id: 3, type: 'افزایش موجودی', amount: 200000, date: '1403/03/10' },
        ]
    };

    if (!isLoggedIn) {
        return (
            <Modal isOpen={isOpen} onClose={onClose} title="کیف پول">
                <div className="text-center py-8">
                    <HiOutlineWallet className="text-6xl text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        برای مشاهده کیف پول وارد شوید
                    </h3>
                    <p className="text-gray-500 mb-6">
                        برای دسترسی به کیف پول خود باید وارد حساب کاربری شوید.
                    </p>
                    <button
                        onClick={() => {
                            onClose();
                            setTimeout(() => {
                                window.location.href = '/login';
                            }, 300);
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        ورود / ثبت نام
                    </button>
                </div>
            </Modal>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="کیف پول">
            <div className="space-y-6">
                {/* موجودی کیف پول */}
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">موجودی کیف پول</h3>
                            <p className="text-3xl font-bold">
                                {walletData.balance.toLocaleString()} تومان
                            </p>
                        </div>
                        <HiOutlineWallet className="text-5xl opacity-80" />
                    </div>
                </div>

                {/* اطلاعات کیف پول و کاربر */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <HiOutlineUser className="text-lg text-gray-600" />
                            <span className="font-semibold text-gray-700">صاحب کیف پول</span>
                        </div>
                        <p className="text-gray-800">{user?.name}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <HiOutlineIdentification className="text-lg text-gray-600" />
                            <span className="font-semibold text-gray-700">آیدی صاحب کیف پول</span>
                        </div>
                        <p className="text-gray-800 font-mono text-sm">{user?.id}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                            <HiOutlineWallet className="text-lg text-gray-600" />
                            <span className="font-semibold text-gray-700">آیدی کیف پول</span>
                        </div>
                        <p className="text-gray-800 font-mono text-sm">{walletData.walletId}</p>
                    </div>
                </div>

                {/* تراکنش‌های اخیر */}
                <div>
                    <h4 className="font-semibold text-gray-700 mb-3">تراکنش‌های اخیر</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                        {walletData.transactions.map(transaction => (
                            <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-800">{transaction.type}</p>
                                    <p className="text-sm text-gray-500">{transaction.date}</p>
                                </div>
                                <div className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} تومان
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* دکمه‌های عملیات */}
                <div className="flex gap-3">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                        افزایش موجودی
                    </button>
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                        تاریخچه تراکنش‌ها
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default WalletModal;