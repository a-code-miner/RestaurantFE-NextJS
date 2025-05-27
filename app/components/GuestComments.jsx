import React from 'react'
import CommentBox from './CommentBox'

const GuestComments = () => {
    return (
        <div className='bg-gray-50 py-20 px-6 shadow-lg my-30'>
            {/* What our guests say section */}
            <h2 className='text-3xl md:text-5xl font-bold text-center mb-20'>نظرات مهمانان ما</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                <CommentBox comment={'بسیار خوشمزه بود. کیفیت غذا عالی بود و سرویس دهی هم بسیار خوب بود. حتماً دوباره میام.'} />
                <CommentBox comment={'بهترین رستورانت دنیا بود. این کامنت تستی است. این کامنت دوم تستی است. این کامنت سوم تستی است'} />
                <CommentBox comment={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam? Ullam perspiciatis, cum quae hic quod dignissimos perferendis animi nemo eaque, vitae eveniet corporis voluptas explicabo! Ea architecto tempore nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam? Ullam perspiciatis, cum quae hic quod dignissimos perferendis animi nemo eaque, vitae eveniet corporis voluptas explicabo! Ea architecto tempore nulla!'} />
            </div>
        </div>
    )
}

export default GuestComments
