import React from 'react'

const CustomerDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">داشبورد مشتری</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">به داشبورد مشتری خوش آمدید!</p>
                <p className="text-gray-600 mt-2">در اینجا می‌توانید اطلاعات حساب خود را مشاهده و مدیریت کنید.</p>
            </div>
            {/* سایر بخش‌های داشبورد می‌توانند در اینجا اضافه شوند */}
        </div>
    )
}

export default CustomerDashboard