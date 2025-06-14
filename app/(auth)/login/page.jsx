import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-200'>
            <div className='min-w-[450px] mx-auto mt-10 p-6 bg-gray-100 rounded-2xl shadow-md'>
                <h1 className="text-2xl font-bold mb-4">ورود به حساب کاربری</h1>
                <form className="bg-white shadow-md rounded-2xl p-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">ایمیل:</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">رمز عبور:</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white mt-5 px-4 py-2 rounded hover:bg-blue-600">ورود</button>
                </form>
            </div>
        </div>
    )
}

export default Login