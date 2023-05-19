import React from 'react';
import { FaStar } from "react-icons/fa";
const ToyCard = ({toy}) => {
    console.log(toy)
    const{_id,availableQuantity,rating,sellerName,subCategory,toyImage,toyPrice,toyName}=toy;
    return (
        <div className="card full bg-base-100 shadow-xl">
  <figure><img className='h-72 w-full object-center' src={toyImage} alt="Shoes" /></figure>
  <div className="p-5 space-y-3">
    <h3 className='text-2xl font-semibold'>Toy Name: <span className=' text-pink-400 font-bold'>{toyName}</span></h3>
    <h5 className='text-xl font-semibold'>Seller Name: {sellerName}</h5>
    <div className='text-xl font-semibold flex justify-between'>
        <p>Category: {subCategory}</p>
        <p>Price: <span className=' text-pink-500'>{toyPrice}$</span></p>
    </div>
    <div className='flex justify-between pb-5'>
    <p className='flex items-center gap-2 text-xl font-semibold'>Rating : {rating} <FaStar className=' text-yellow-300'></FaStar></p>
        <button className='btn btn-outline btn-secondary'>View Details</button>
    </div>
  </div>
</div>
    );
};

export default ToyCard;