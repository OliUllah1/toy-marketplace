import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2';

const ToyDetails = () => {
    const toyData = useLoaderData()
    console.log(toyData)
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
        <div className='pt-5 pb-10'>


            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className='font-bold text-5xl text-pink-500'>T</span>oy <span className='font-bold text-5xl text-pink-500'>D</span>etails </h1>
            <p className='font-bold text-4xl text-pink-500'>______</p>
            </div>

            <div className='flex gap-5 items-center'>
                <div className='lg:w-[50%] space-y-5 items-center'>
                    <h3 className=' text-3xl font-semibold'><span className='font-bold'>Toy Name:</span> <span className='text-pink-500'>{toyName}</span></h3>
                    <h4 className=' text-xl font-semibold'><span className='font-bold'>Seller Name:</span> {sellerName}</h4>
                    <h5 className=' text-xl font-semibold'><span className='font-bold'>Seller Email:</span> {sellerEmail}</h5>
                    <p className=' font-semibold text-xl'><span className='font-bold'>Price:</span> <span className='text-pink-500'>{toyPrice}$</span></p>
                    <p className=' font-semibold text-xl'><span className='font-bold'>Rating:</span> {rating} <FaStar className=' text-yellow-300'></FaStar></p>
                    <p className=' font-semibold text-xl'><span className='font-bold'>Available Quantity:</span> {availableQuantity}</p>
                    <p className=' font-semibold'><span className='font-bold text-pink-600'>Products Description:</span> {detailDescription}</p>
                    <div className='w-1/2'>
                        <button onClick={handleOrder} className="btn  btn-block btn-outline btn-secondary">Order Now</button>
                    </div>
                </div>



                <div className='lg:w-[50%]'>
                    <img className='w-full rounded-xl' src={toyImage} alt="" />
                </div>
            </div>


            
        </div>
    );
};

export default ToyDetails;