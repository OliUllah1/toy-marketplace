import React from 'react';
import product1 from '../../../assets/images/best-products/1.webp'
import product2 from '../../../assets/images/best-products/2.webp'
import product3 from '../../../assets/images/best-products/3.webp'
const BestProducts = () => {
    return (
        <div className='p-2 lg:p-10'>
        <div className='grid py-3 gap-5 grid-cols-1 lg:grid-cols-3'>
            <div className='bg-[#fcdcea] h-72 hover:bg-emerald-200 relative'>
                <div className='p-10'>
                    <h1 className='font-extrabold text-4xl'>Baby Dress</h1>
                    <h3 className='font-extrabold text-3xl my-1'>$32.00</h3>
                    <button className='absolute left-10 bottom-10 font-extrabold text-lg hover:underline'>Shop Now</button>
                </div>
                <img className='absolute right-5 bottom-10' src={product1} alt="" />
            </div>
            <div className='bg-[#fcdcea] h-72 hover:bg-emerald-200 relative'>
                <div className='p-10'>
                    <h1 className='font-extrabold text-4xl'>Baby Toys</h1>
                    <h3 className='font-extrabold text-3xl my-1'>$25.00</h3>
                    <button className='absolute left-10 bottom-10 font-extrabold text-lg hover:underline'>Shop Now</button>
                </div>
                <img className='absolute right-5 bottom-10' src={product2} alt="" />
            </div>
            <div className='bg-[#fcdcea] h-72 hover:bg-emerald-200 relative'>
                <div className='p-10'>
                    <h1 className='font-extrabold text-4xl'>Teddy Bear</h1>
                    <h3 className='font-extrabold text-3xl my-1'>$18.00</h3>
                    <button className='absolute left-10 bottom-10 font-extrabold text-lg hover:underline'>Shop Now</button>
                </div>
                <img className='absolute right-5 bottom-10' src={product3} alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default BestProducts;