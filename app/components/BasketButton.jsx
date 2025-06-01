// components/BasketButton.js
'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { LuShoppingBasket } from "react-icons/lu";
import { useBasket } from './BasketContext';
import { useModal } from './ModalContext';

const BasketButton = () => {
    const { getTotalCount } = useBasket();
    const { openBasketModal } = useModal();
    const router = useRouter();
    const count = getTotalCount();

    const handleClick = () => {
        router.push('/BasketPage');
        openBasketModal();
    };

    return (
        <button
            onClick={handleClick}
            className='flex gap-2 relative items-center hover:text-orange-600 transition-colors'
        >
            سبد خرید
            <LuShoppingBasket className='text-2xl' />
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                    {count}
                </span>
            )}
        </button>
    )
}

export default BasketButton