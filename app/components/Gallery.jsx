import React from 'react'

const Gallery = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-[800px] md:min-h-[600px] bg-[url('https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-no-repeat bg-cover bg-left-bottom text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] z-0"></div>
                <div className='header bg-white/10 backdrop-blur-md p-4 md:p-10 rounded-2xl overflow-hidden shadow-sm w-[95vw] max-w-2xl mx-auto'>
                    <div className="relative z-10 flex flex-col items-center">
                        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center">گالری تصاویر</h1>
                        <p className="text-base md:text-lg mb-4 text-center">لحظات خوشمزه ما را در گالری ببینید!</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2 md:px-10 my-20'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="rounded-lg overflow-hidden shadow-lg  transition-transform duration-300 hover:scale-[1.02]">
                            <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src={`https://picsum.photos/400/300?random=${i + 1}`} alt={`Gallery ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
