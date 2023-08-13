import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar,FaCheck,FaDollarSign,FaMinus,FaPlus } from "react-icons/fa";
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';

const ToyDetails = () => {
    const [quantity,setQuantity]=useState(1)
    const toyData = useLoaderData()
    useTitle('Toy Details')
    const{availableQuantity,rating,sellerName,toyImage,toyPrice,toyName,detailDescription,sellerEmail} = toyData;
    const handleOrder =()=>{
         Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your order successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div className='px-10 pt-5'>
            <div className='flex gap-10'>
            <div className='bg-[#e4f7fe] w-full'>
                    <img className='w-96 h-[430px] mx-auto py-10 rounded-xl' src={toyImage} alt="" />
                </div>
                <div className='w-full items-center'>
                   <h1 className='font-bold text-2xl'>{toyName}</h1>
                   <p className='flex my-3 text-3xl text-pink-500 font-bold items-center'><FaDollarSign></FaDollarSign><span>{toyPrice}</span></p>
                   <div className='flex items-center gap-1'>
                    <span className='flex gap-1 text-yellow-500'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span><span className='text-gray-500 font-semibold'>( 5 Customer Review )</span>
                   </div>
                   <hr className='my-5' />
                   <div className='flex justify-between'>
                    <div className='flex text-lg text-gray-700 font-bold items-center gap-2'>
                        <FaCheck className='text-pink-500'></FaCheck>
                        <p>Free Shipping</p>
                    </div>
                    <div className='flex text-lg text-gray-700 font-bold items-center gap-2'>
                        <FaCheck className='text-pink-500'></FaCheck>
                        <p>Support 24/7</p>
                    </div>
                    <div className='flex text-lg text-gray-700 font-bold items-center gap-2'>
                        <FaCheck className='text-pink-500'></FaCheck>
                        <p>Money Return</p>
                    </div>
                   </div>
                   <hr className='my-5' />
                   <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisll exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisol aute irure dolor in reprehenderit.</p>
                   <div className='mt-5 flex gap-5'>
                    <div className='flex gap-3 py-3 px-10 rounded-full bg-slate-200 font-bold'>
                        <button onClick={()=>setQuantity(quantity-1)}><FaMinus></FaMinus></button>
                        <span>{quantity}</span>
                        <button onClick={()=>setQuantity(quantity+1)}><FaPlus></FaPlus></button>
                    </div>
                    <button className='px-10 py-3 text-white font-semibold bg-pink-500 rounded-full hover:bg-[#73a19a]'>Add To Cart</button>
                    <button className='px-5 py-3 underline rounded-full font-bold hover:text-pink-500'>Add to Wishlist</button>
                   </div>
                </div>



                
            </div>


            
        </div>
    );
};

export default ToyDetails;