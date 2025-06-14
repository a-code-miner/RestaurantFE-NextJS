// components/AuthContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [hasHydrated, setHasHydrated] = useState(false);

    // داده‌های استاتیک برای تست
    const staticUserData = {
        id: '3',
        name: 'علی احمدی',
        email: 'ali@example.com',
        role: 'admin',
        phone: '09123456789'
    };

    // Hydrate state from localStorage on client-side
    useEffect(() => {
        const loadAuthState = () => {
            try {
                const savedAuthState = localStorage.getItem('isLoggedIn');
                const savedUser = localStorage.getItem('user');

                if (savedAuthState === 'true' && savedUser) {
                    setIsLoggedIn(true);
                    setUser(JSON.parse(savedUser));
                }
            } catch (error) {
                console.error('Failed to load auth state from localStorage:', error);
            }
            setHasHydrated(true);
        };

        loadAuthState();
    }, []);

    // Save to localStorage when auth state changes
    useEffect(() => {
        if (hasHydrated) {
            localStorage.setItem('isLoggedIn', isLoggedIn.toString());
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        }
    }, [isLoggedIn, user, hasHydrated]);

    const login = () => {
        setIsLoggedIn(true);
        setUser(staticUserData);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};