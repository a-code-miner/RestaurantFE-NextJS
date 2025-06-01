// components/BasketModal.js
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useBasket } from './BasketContext';
import { useAuth } from './AuthContext';
import Modal from './Modal';

const BasketModal = ({ isOpen, onClose }) => {
    const { basket, getTotalPrice } = useBasket();
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    const handleOrderSubmit = () => {
        if (!isLoggedIn) {
            alert('برای ثبت سفارش باید وارد حساب کاربری خود شوید.');
            onClose(); // ابتدا مدال را ببند
            setTimeout(() => {
                router.push('/login');
            }, 300); // کمی تأخیر برای انیمیشن
        } else {
            onClose(); // ابتدا مدال را ببند
            setTimeout(() => {
                router.push('/order-submit');
            }, 300); // کمی تأخیر برای انیمیشن
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="سبد خرید شما">
            {basket.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                    سبد خرید شما خالی است.
                </div>
            ) : (
                <>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                        {basket.map(item => (
                            <div key={item.name} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>تعداد: {item.count}</span>
                                        <span>قیمت واحد: {item.price}</span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-orange-600">
                                        {(parseInt(item.price.replace(/\D/g, '')) * item.count).toLocaleString()} تومان
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-4 mt-6">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold">قیمت کل:</span>
                            <span className="text-xl font-bold text-orange-600">
                                {getTotalPrice().toLocaleString()} تومان
                            </span>
                        </div>

                        <button
                            onClick={handleOrderSubmit}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            ثبت سفارش
                        </button>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default BasketModal;