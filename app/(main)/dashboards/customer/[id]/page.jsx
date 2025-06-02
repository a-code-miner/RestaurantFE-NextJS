import React from 'react'

const CustomerDashboard = ({ params }) => {
    // داده استاتیک فرضی برای تست
    const userId = params.id;
    // فرض: فقط اگر آیدی 3 باشد اطلاعات نمایش داده شود
    if (userId !== '3') {
        return <div className="text-red-500 text-center mt-10 font-bold">شما مجاز به مشاهده این داشبورد نیستید.</div>;
    }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">داشبورد مشتری (آیدی: {userId})</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">به داشبورد مشتری خوش آمدید!</p>
                <p className="text-gray-600 mt-2">در اینجا می‌توانید اطلاعات حساب خود را مشاهده و مدیریت کنید.</p>
            </div>
        </div>
    )
}

export default CustomerDashboard
