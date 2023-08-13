import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import blog1 from '../../../assets/images/blog/blog1.webp'
import blog2 from '../../../assets/images/blog/blog2.webp'
import blog3 from '../../../assets/images/blog/blog3.webp'

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='p-10 bg-slate-50'>
            <div className='text-center space-y-3 mb-10'>
            <h1 className=' text-4xl font-bold'> <span className=' lg:text-5xl text-pink-500'>L</span>atest <span className=' lg:text-5xl text-pink-500'>B</span>log</h1>
            <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> incididunt ut labore et dolore magna aliqua...</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div>
                    <img src={blog1} alt="" />
                    <div className='mt-5 space-y-3'>
                        <div className='flex gap-3'>
                        <p className='font-semibold text-lg'><span className='text-gray-500'>By,</span> <span className='text-pink-500'>June Cha </span></p>
                        <p className='font-semibold text-lg'>25 May, 2121</p>
                        </div>
                        <h1 className='font-semibold text-3xl text-gray-700 hover:text-pink-700'>Baby Planet's toys makes learning so easy</h1>
                        <button className='blog-btn'>Read More</button>
                    </div>
                </div>
                <div>
                    <img src={blog2} alt="" />
                    <div className='mt-5 space-y-3'>
                        <div className='flex gap-3'>
                        <p className='font-semibold text-lg'><span className='text-gray-500'>By,</span> <span className='text-pink-500'>June Cha </span></p>
                        <p className='font-semibold text-lg'>January 28, 2022</p>
                        </div>
                        <h1 className='font-semibold text-3xl text-gray-700 hover:text-pink-700'>Mother revolves around her children</h1>
                        <button className='blog-btn'>Read More</button>
                    </div>
                </div>
                <div>
                    <img src={blog3} alt="" />
                    <div className='mt-5 space-y-3'>
                        <div className='flex gap-3'>
                        <p className='font-semibold text-lg'><span className='text-gray-500'>By,</span> <span className='text-pink-500'>June Cha </span></p>
                        <p className='font-semibold text-lg'>July 24, 2022</p>
                        </div>
                        <h1 className='font-semibold text-3xl text-gray-700 hover:text-pink-700'>Learn while you grow toys Baby Planet</h1>
                        <button className='blog-btn'>Read More</button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Blog;