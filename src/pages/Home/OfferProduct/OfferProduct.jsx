import React from 'react';
import toy1 from '../../../assets/images/toy1.jpg'
import toy3 from '../../../assets/images/toy3.jpg'

import { FaShoppingCart } from "react-icons/fa";


const OfferProduct = () => {
    return (
        <div className='py-10 px-2 lg:px-10 bg-slate-50'>
            <div className='text-center mb-10 space-y-3'>
            <h1 className='text-4xl font-bold'> <span className=' lg:text-5xl text-pink-500'>T</span>oday <span className='lg:text-5xl text-pink-500'>O</span>ffer</h1>
            <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> incididunt ut labore et dolore magna aliqua...</p>
            </div>
        



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-5'>
            <div className="card w-full bg-[#e4f6fe] shadow-xl">
                <figure><img src={toy1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-gray-500'>Teddy Bear</h1>
                    <h2 className="card-title">
                      <span className='font-semibold text-2xl text-gray-500'>Price:</span> <span className='line-through text-gray-600 font-bold text-xl'>100$</span> 49.99 $
                     <div className="badge badge-secondary">50% off</div>
                     </h2>
                     <div className='flex justify-end mt-2'>
                        <button  className="flex items-center gap-1 main-btn">Add To Card <FaShoppingCart></FaShoppingCart></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#e4f6fe] shadow-xl">
                <figure><img src={toy3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-gray-500'>Teddy Bear</h1>
                    <h2 className="card-title">
                      <span className='font-semibold text-2xl text-gray-500'>Price:</span> <span className='line-through text-gray-600 font-bold text-xl'>100$</span> 49.99 $
                     <div className="badge badge-secondary">50% off</div>
                     </h2>
                     <div className='flex justify-end mt-2'>
                        <button  className="flex items-center gap-1 main-btn">Add To Card <FaShoppingCart></FaShoppingCart></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#e4f6fe] shadow-xl">
                <figure><img src={toy1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-gray-500'>Teddy Bear</h1>
                    <h2 className="card-title">
                      <span className='font-semibold text-2xl text-gray-500'>Price:</span> <span className='line-through text-gray-600 font-bold text-xl'>100$</span> 49.99 $
                     <div className="badge badge-secondary">50% off</div>
                     </h2>
                     <div className='flex justify-end mt-2'>
                        <button  className="flex items-center gap-1 main-btn">Add To Card <FaShoppingCart></FaShoppingCart></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#e4f6fe] shadow-xl">
                <figure><img src={toy3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-gray-500'>Teddy Bear</h1>
                    <h2 className="card-title">
                      <span className='font-semibold text-2xl text-gray-500'>Price:</span> <span className='line-through text-gray-600 font-bold text-xl'>100$</span> 49.99 $
                     <div className="badge badge-secondary">50% off</div>
                     </h2>
                     <div className='flex justify-end mt-2'>
                        <button  className="flex items-center gap-1 main-btn">Add To Card <FaShoppingCart></FaShoppingCart></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#e4f6fe] shadow-xl">
                <figure><img src={toy1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-gray-500'>Teddy Bear</h1>
                    <h2 className="card-title">
                      <span className='font-semibold text-2xl text-gray-500'>Price:</span> <span className='line-through text-gray-600 font-bold text-xl'>100$</span> 49.99 $
                     <div className="badge badge-secondary">50% off</div>
                     </h2>
                     <div className='flex justify-end mt-2'>
                        <button  className="flex items-center gap-1 main-btn">Add To Card <FaShoppingCart></FaShoppingCart></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#e4f6fe] shadow-xl">
                <figure><img src={toy3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-gray-500'>Teddy Bear</h1>
                    <h2 className="card-title">
                      <span className='font-semibold text-2xl text-gray-500'>Price:</span> <span className='line-through text-gray-600 font-bold text-xl'>100$</span> 49.99 $
                     <div className="badge badge-secondary">50% off</div>
                     </h2>
                     <div className='flex justify-end mt-2'>
                        <button  className="flex items-center gap-1 main-btn">Add To Card <FaShoppingCart></FaShoppingCart></button>
                    </div>
                </div>
            </div>
            
            </div>



        </div>
    );
};

export default OfferProduct;