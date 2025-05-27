import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

const truncateComment = (comment) => {
    const words = comment.split(' ');
    if (words.length > 30) {
        return words.slice(0, 30).join(' ') + '...';
    }
    return comment;
}

const CommentBox = ({ comment }) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex items-center gap-2 mb-4'>
                <img src="https://avatar.iran.liara.run/public" alt="User Avatar" className='w-12 h-12 rounded-full' />
                <h3 className='text-lg font-semibold'>علی رضایی</h3>
            </div>
            <div className='flex items-center gap-1 mb-2'>
                <TiStarFullOutline className='text-yellow-500 text-2xl' />
                <TiStarFullOutline className='text-yellow-500 text-2xl' />
                <TiStarFullOutline className='text-yellow-500 text-2xl' />
                <TiStarFullOutline className='text-yellow-500 text-2xl' />
                <TiStarFullOutline className='text-yellow-500 text-2xl' />
            </div>
            <div className='h-[150px] mt-2 overflow-y-auto text-gray-700'>
                {truncateComment(comment)}
            </div>
            <div className='text-gray-400 text-xs mt-1'>تاریخ: 1402/05/15</div>
        </div>
    )
}

export default CommentBox
