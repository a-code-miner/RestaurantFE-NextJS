// components/AuthTestComponent.js
'use client'
import React from 'react';
import { useAuth } from './AuthContext';

const AuthTestComponent = () => {
    const { isLoggedIn, user, login, logout } = useAuth();

    return (
        <div className="fixed bottom-4 left-20 z-50 bg-white p-4 rounded-lg shadow-lg">
            <div className="text-sm">
                <p className="font-semibold mb-2">
                    وضعیت: {isLoggedIn ? 'وارد شده' : 'خارج شده'}
                </p>
                {isLoggedIn && user && (
                    <p className="text-gray-600 mb-2">کاربر: {user.name}</p>
                )}
                <div className="flex gap-2">
                    <button
                        onClick={login}
                        disabled={isLoggedIn}
                        className="px-3 py-1 text-xs bg-green-500 text-white rounded disabled:opacity-50"
                    >
                        ورود
                    </button>
                    <button
                        onClick={logout}
                        disabled={!isLoggedIn}
                        className="px-3 py-1 text-xs bg-red-500 text-white rounded disabled:opacity-50"
                    >
                        خروج
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthTestComponent;