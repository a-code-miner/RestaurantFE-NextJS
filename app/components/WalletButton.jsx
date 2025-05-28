import React from 'react'
import { HiOutlineWallet } from "react-icons/hi2";

const WalletButton = () => {
    return (
        <div>
            {/* A wallet icon with fixed position in the right bottom of screen. */}
            <a href="/wallet" className="fixed bottom-4 right-4 z-50 bg-orange-300 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 transition font-bold flex items-center gap-2">
                {/* <img src="/wallet-icon.png" alt="Wallet Icon" className="w-6 h-6" /> */}
                <HiOutlineWallet className='text-2xl' />
                کیف پول
            </a>
        </div>
    )
}

export default WalletButton
