import React from "react";
import toy1 from '../../../assets/images/toy1.jpg'
import toy2 from '../../../assets/images/toy2.jpg'
import toy3 from '../../../assets/images/toy3.jpg'
import toy4 from '../../../assets/images/toy4.jpg'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
const TrendingProducts = () => {
  return (
    <div className="py-10 bg-slate-50 px-2 lg:px-10">
      <div className='text-center mb-10 space-y-3'>
            <h1 className='text-4xl font-bold'> <span className=' lg:text-5xl text-pink-500'>T</span>rending <span className='lg:text-5xl text-pink-500'>P</span>roducts</h1>
            <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> incididunt ut labore et dolore magna aliqua...</p>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card w-full bg-[#e4f6fe] shadow-xl">
          <figure className="p-5 pt-5">
            <img
              src={toy1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="px-5 pb-5 text-center space-y-3">
            <h1 className="font-semibold text-2xl text-gray-600">Teddy Bear</h1>
            <p className="flex items-center justify-center gap-2 text-gray-500"><span className="font-semibold text-xl">Rating : 4.8 </span><span className="flex gap-1 text-sm text-pink-600"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></p>
            <p className="text-xl font-semibold text-gray-700">Price : <span className="line-through font-bold text-gray-400">$30</span> <span className="text-pink-500">$20</span></p>
            <button className="main-btn">Shop Now</button>
          </div>
        </div>
        <div className="card w-full bg-[#e4f6fe] shadow-xl">
          <figure className="p-5 pt-5">
            <img
              src={toy3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="px-5 pb-5 text-center space-y-3">
            <h1 className="font-semibold text-2xl text-gray-600">Teddy Bear</h1>
            <p className="flex items-center justify-center gap-2 text-gray-500"><span className="font-semibold text-xl">Rating : 4.8 </span><span className="flex gap-1 text-sm text-pink-600"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></p>
            <p className="text-xl font-semibold text-gray-700">Price : <span className="line-through font-bold text-gray-400">$30</span> <span className="text-pink-500">$20</span></p>
            <button className="main-btn">Shop Now</button>
          </div>
        </div>
        <div className="card w-full bg-[#e4f6fe] shadow-xl">
          <figure className="p-5 pt-5">
            <img
              src={toy1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="px-5 pb-5 text-center space-y-3">
            <h1 className="font-semibold text-2xl text-gray-600">Teddy Bear</h1>
            <p className="flex items-center justify-center gap-2 text-gray-500"><span className="font-semibold text-xl">Rating : 4.8 </span><span className="flex gap-1 text-sm text-pink-600"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></p>
            <p className="text-xl font-semibold text-gray-700">Price : <span className="line-through font-bold text-gray-400">$30</span> <span className="text-pink-500">$20</span></p>
            <button className="main-btn">Shop Now</button>
          </div>
        </div>
        <div className="card w-full bg-[#e4f6fe] shadow-xl">
          <figure className="p-5 pt-5">
            <img
              src={toy4}
              alt="Shoes"
              className="rounded-xl h-44 object-center"
            />
          </figure>
          <div className="px-5 pb-5 text-center space-y-3">
            <h1 className="font-semibold text-2xl text-gray-600">Teddy Bear</h1>
            <p className="flex items-center justify-center gap-2 text-gray-500"><span className="font-semibold text-xl">Rating : 4.8 </span><span className="flex gap-1 text-sm text-pink-600"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></p>
            <p className="text-xl font-semibold text-gray-700">Price : <span className="line-through font-bold text-gray-400">$30</span> <span className="text-pink-500">$20</span></p>
            <button className="main-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
