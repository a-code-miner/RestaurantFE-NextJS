// components/ModalManager.js
'use client'
import React from 'react';
import { useModal } from './ModalContext';
import BasketModal from './BasketModal';
import WalletModal from './WalletModal';

const ModalManager = () => {
    const {
        isBasketModalOpen,
        closeBasketModal,
        isWalletModalOpen,
        closeWalletModal
    } = useModal();

    return (
        <>
            <BasketModal
                isOpen={isBasketModalOpen}
                onClose={closeBasketModal}
            />
            <WalletModal
                isOpen={isWalletModalOpen}
                onClose={closeWalletModal}
            />
        </>
    );
};

export default ModalManager;