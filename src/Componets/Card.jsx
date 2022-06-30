import React from 'react'
import TimeAgo from './TimeAgo'

const Card = ({ post }) => {
  return (
    <div className='w-full h-[302px] lg:h-[300px] shadow-lg bg-white flex flex-col justify-between mt-4 rounded-lg'>
            {/*Card Heading */}
            <div>
                <div className='h-16 w-[80%] mx-auto flex justify-center items-center'>
                    <p className='font-semibold text-[14px] text-center'>{(post.title)}</p>
                </div>
                <hr />
                <hr />
            </div>
            {/* Card Body */}
            <div className='w-[80%] mx-auto flex justify-center items-center mt-2'>
                <p className='text-[14px] text-justify text-[#747373]'>
                    {post.content ?? post.description}
                </p>
            </div>
            {/* Card Footer */}
            <div className='flex justify-between items-center w-[80%] mx-auto mt-2 py-6'>
                <div className='flex items-center'><a className='text-[12px] lg:text-[10px] text-[#4B48FF] underline' href={post.url}>Read full story</a> <span className='text-[12px] lg:text-[10px] ml-4'><i className="lni lni-star mr-1"></i> Add to Bookmark</span></div>
                <div className='text-[12px] lg:text-[10px]'><TimeAgo timestamp={post.publishedAt}/></div>
            </div>
        </div>
  )
}

export default Card