// components/WalletButton.js
'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { HiOutlineWallet } from "react-icons/hi2";
import { useModal } from './ModalContext';

const WalletButton = () => {
    const { openWalletModal } = useModal();
    const router = useRouter();

    const handleClick = () => {
        router.push('/WalletPage');
        openWalletModal();
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="fixed bottom-4 right-4 z-50 bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded-full shadow-lg transition font-bold flex items-center gap-2"
            >
                <HiOutlineWallet className='text-2xl' />
                کیف پول
            </button>
        </div>
    )
}

export default WalletButton