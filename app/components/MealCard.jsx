'use client'
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useBasket } from './BasketContext';

const MealCard = ({
    image = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    name = 'غذای نمونه',
    price = '120,000',
    score = 4.7,
    description = 'توضیحات نمونه برای غذا',
}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToBasket, removeFromBasket, basket } = useBasket();
    const basketItem = basket.find(item => item.name === name);
    const count = basketItem ? basketItem.count : 0;

    const handleFavorite = () => setIsFavorite(fav => !fav);
    const handleAdd = () => addToBasket({ name, price, image });
    const handleRemove = () => removeFromBasket({ name, price, image });

    return (
        <div className="bg-white/80 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-xs mx-auto">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-40 sm:h-48 md:h-56 lg:h-48 object-cover" />
                <button onClick={handleFavorite} className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow-md hover:bg-red-100 transition z-10">
                    <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} size={22} />
                </button>
            </div>
            <div className="p-3 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{name.length > 20 ? name.slice(0, 20) + '…' : name}</h3>
                    <span className="bg-orange-100 text-orange-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">{price} تومان</span>
                </div>
                <div className="text-gray-600 text-xs sm:text-sm mb-2 min-h-[24px]">{description.length > 20 ? description.slice(0, 20) + '…' : description}</div>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-500 font-bold flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5 inline-block"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                        {score}
                    </span>
                    <div className="flex items-center gap-2">
                        <button onClick={handleRemove} className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 transition disabled:opacity-50">
                            <IoMdRemove size={18} />
                        </button>
                        <span className="min-w-[24px] text-center font-bold">{count}</span>
                        <button onClick={handleAdd} className="bg-orange-400 hover:bg-orange-500 text-white rounded-full p-2 transition">
                            <IoMdAdd size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealCard
