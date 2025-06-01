// components/BasketContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [hasHydrated, setHasHydrated] = useState(false);

    // Hydrate state from localStorage on client-side
    useEffect(() => {
        const loadBasket = () => {
            try {
                const savedBasket = localStorage.getItem('basket');
                if (savedBasket) {
                    setBasket(JSON.parse(savedBasket));
                }
            } catch (error) {
                console.error('Failed to load basket from localStorage:', error);
            }
            setHasHydrated(true);
        };

        loadBasket();
    }, []);

    // Save to localStorage when basket changes
    useEffect(() => {
        if (hasHydrated) {
            localStorage.setItem('basket', JSON.stringify(basket));
        }
    }, [basket, hasHydrated]);

    const addToBasket = (meal) => {
        setBasket(prev => {
            const found = prev.find(item => item.name === meal.name);
            if (found) {
                return prev.map(item =>
                    item.name === meal.name
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...prev, { ...meal, count: 1 }];
        });
    };

    const removeFromBasket = (meal) => {
        setBasket(prev => {
            const found = prev.find(item => item.name === meal.name);
            if (found && found.count > 1) {
                return prev.map(item =>
                    item.name === meal.name
                        ? { ...item, count: item.count - 1 }
                        : item
                );
            }
            return prev.filter(item => item.name !== meal.name);
        });
    };

    const getTotalCount = () => basket.reduce((sum, item) => sum + item.count, 0);

    const getTotalPrice = () => {
        return basket.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/\D/g, '')) || 0;
            return sum + (price * item.count);
        }, 0);
    };

    return (
        <BasketContext.Provider
            value={{
                basket,
                addToBasket,
                removeFromBasket,
                getTotalCount,
                getTotalPrice
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};