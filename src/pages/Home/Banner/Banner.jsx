import React from 'react';
import banner from '../../../assets/images/banner.jpg';
import banner2 from '../../../assets/images/banner2.avif'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="carousel w-full h-[550px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} className="w-full object-cover" />
            <div className="absolute w-full h-full text-white gap-5 transform bg-gradient-to-r from-[#616464] to-[rgba(21, 21, 21,0)]">
            <div className='px-20 pt-28'>
            <h1 className='text-[#181d4e] text-6xl font-bold lg:w-4/5 mb-5 z-10'>Pick the best toy for your beloved child from <span className='text-6xl font-bold text-pink-500'>Toys</span> <span className=' text-yellow-400'>House</span></h1>
            <p className='w-2/3 font-semibold text-xl text-gray-800'>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
            <button className='animate-bounce bg-sky-400 px-10 py-3 font-bold rounded-xl flex items-center gap-3 mt-10 hover:bg-pink-400'>SHOP NOW <FaArrowRight></FaArrowRight></button>
            </div>
            </div>
        </div> 
  
        </div>
    );
};

export default Banner;