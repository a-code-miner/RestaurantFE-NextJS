// components/ModalContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const ModalContext = createContext();

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }) => {
    const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const [previousPath, setPreviousPath] = useState('/');
    const router = useRouter();
    const pathname = usePathname();

    // بررسی اینکه آیا باید مدال باز باشد بر اساس URL
    useEffect(() => {
        if (pathname === '/BasketPage') {
            setIsBasketModalOpen(true);
        } else if (pathname === '/wallet') {
            setIsWalletModalOpen(true);
        }
    }, [pathname]);

    const openBasketModal = () => {
        setPreviousPath(pathname);
        setIsBasketModalOpen(true);
    };

    const closeBasketModal = () => {
        setIsBasketModalOpen(false);
        if (pathname === '/BasketPage') {
            router.push(previousPath);
        }
    };

    const openWalletModal = () => {
        setPreviousPath(pathname);
        setIsWalletModalOpen(true);
    };

    const closeWalletModal = () => {
        setIsWalletModalOpen(false);
        if (pathname === '/wallet') {
            router.push(previousPath);
        }
    };

    return (
        <ModalContext.Provider
            value={{
                isBasketModalOpen,
                isWalletModalOpen,
                openBasketModal,
                closeBasketModal,
                openWalletModal,
                closeWalletModal
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};