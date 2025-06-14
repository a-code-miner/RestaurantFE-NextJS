import React from 'react'

const Signup = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-200'>
            <div className='min-w-[450px] mx-auto mt-10 p-6 bg-gray-100 rounded-2xl shadow-md'>
                <h1 className="text-2xl font-bold mb-4">ثبت‌نام</h1>
                <form className="bg-white shadow-md rounded-2xl p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            ایمیل
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            رمز عبور
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            تکرار رمز عبور
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        ثبت‌نام
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup