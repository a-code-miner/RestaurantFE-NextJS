import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-gray-800 text-white py-10'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-center md:text-right mb-6 md:mb-0'>
                            <h2 className='text-2xl font-bold'>رستورانت پالمیر</h2>
                            <p className='text-gray-400 mt-2'>© ۲۰۲۵ همه حقوق محفوظ است.</p>
                        </div>
                        <div className='flex space-x-4'>
                            <a href='#' className='text-gray-400 hover:text-white'>درباره ما</a>
                            <a href='#' className='text-gray-400 hover:text-white'>تماس با ما</a>
                            <a href='#' className='text-gray-400 hover:text-white'>حریم خصوصی</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
