import React from 'react';
import bg from '../../../assets/images/offer/bg1.webp'
import leftImg from '../../../assets/images/offer/offer1.webp'
import rightImg from '../../../assets/images/offer/offer2.webp'
const OfferDay = () => {
    return (
        <div className='p-2 h-[380px] relative mt-20 bg-[#fde9f1] lg:px-10'>
            <img className='absolute hidden lg:block left-10 -bottom-0 h-[450px]' src={leftImg} alt="" />
            <div className='flex justify-center gap-5'>
                <div className='text-center'>
                    <h1 className='font-extrabold mt-20 text-4xl'>Deal Of The Day</h1>
                    <h4 className='text-xl font-bold my-3'><span className='text-[#f379a7]'>UPTO 35% OFF </span>ON ALL OTHER BABY PRODUCTS</h4>
                    <button className=' rounded-full px-10 py-3 text-white font-bold  bg-[#f379a7] mt-10 hover:bg-[#73a19a]'>Shop Now</button>
                </div>
                <img className='absolute right-10 hidden lg:block -bottom-0 h-[450px]' src={rightImg} alt="" />
            </div>
        </div>
    );
};

export default OfferDay;