import React from 'react'

const AboutSection = () => {
    return (
        <div>
            <h2 className='text-3xl md:text-5xl font-bold text-center my-10 md:my-20'>داستان ما</h2>
            <div className='flex flex-col 2xl:flex-row items-center justify-between gap-8'>
                <section className='bg-white/15 backdrop-blur-md py-8 md:py-16 px-4 md:px-10 max-w-full md:max-w-4xl rounded-2xl shadow-[0px_0px_55px_5px_rgba(0,_0,_0,_0.1)] mt-6 md:mt-10 transition-transform duration-300 hover:scale-[1.02] w-full'>
                    <div className="container mx-auto px-0 md:px-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-right mb-4 md:mb-8">میراثی از طعم</h2>
                        <p className="text-gray-700 text-base md:text-lg text-right mb-4 md:mb-6">
                            رستوران پالمیر که در سال ۱۹۹۵ توسط سرآشپز مرتضی اخلاقی تأسیس شد، غذاهای نفیسی را با الهام از غذاهای جهانی و با چاشنی مدرن سرو می‌کند. رستوران ما بر اساس این فلسفه ساخته شده است که غذا باید یک تجربه باشد، نه فقط یک وعده غذایی. با مواد اولیه‌ای که از کشاورزان محلی و بازارهای بین‌المللی تهیه می‌شوند، تضمین می‌کنیم که هر غذا مطابق با استانداردهای بالای کیفیت و پایداری ما باشد.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg text-right">
                            ما به کیفیت مواد اولیه و خدمات عالی خود افتخار می‌کنیم و همیشه در تلاشیم تا رضایت مشتریان خود را جلب کنیم.
                        </p>
                    </div>
                </section>
                <div className='w-full md:w-1/2 mx-0 md:mx-10'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='glass-card overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]'>
                            <img className='w-full h-48 md:h-64 object-cover transition-transform duration-300 hover:scale-110' src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Restaurant interior" />
                        </div>
                        <div className='glass-card overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]'>
                            <img className='w-full h-48 md:h-64 object-cover transition-transform duration-300 hover:scale-110' src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Chef preparing food" />
                        </div>
                        <div className='glass-card overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]'>
                            <img className='w-full h-48 md:h-64 object-cover transition-transform duration-300 hover:scale-110' src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Fresh ingredients" />
                        </div>
                        <div className='glass-card overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]'>
                            <img className='w-full h-48 md:h-64 object-cover transition-transform duration-300 hover:scale-110' src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Wine selection" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
