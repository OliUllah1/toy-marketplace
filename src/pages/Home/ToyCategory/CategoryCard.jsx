import React from 'react';
import { FaStar,FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {
    const {_id,rating,toyImage,toyName,toyPrice,}=toy;
    return (
        <div className=' shadow-xl bg-[#e4f6fe] px-10 py-10'>
           
                <img className='mx-auto h-40 object-center' src={toyImage} alt="" />
                <div className='space-y-1'>
                <div className='flex gap-1 mt-10 text-yellow-500'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h4 className='font-bold text-gray-500'>{toyName}</h4>
                <p className='flex items-center font-bold text-xl text-gray-600'><FaDollarSign></FaDollarSign> <span>{toyPrice}</span></p>
                </div>
                <div className='flex gap-3 mt-5'>
                <button className=' rounded-full px-3 py-2 text-white font-bold  bg-[#f379a7] hover:bg-[#73a19a] text-sm'>Shop Now</button>
                <Link to={`alltoys/${_id}`}><button className=' rounded-full px-3 py-2 text-white font-bold text-sm  bg-[#73a19a] hover:bg-[#f379a7]'>View Details</button></Link>
                </div>
            
            {/* <div className='mt-2 lg:mt-0 lg:space-y-4'>
                <h4 className='text-2xl font-semibold'>Toy Name: {toyName}</h4>
                <h5 className='text-xl font-semibold'>Price : {toyPrice} $</h5>
                <p className='flex items-center gap-2 text-xl font-semibold'>Rating : {rating} <FaStar className=' text-yellow-300'></FaStar></p>
                <Link to={`alltoys/${_id}`}><button className='btn btn-outline btn-secondary mt-3'>View Details</button></Link>
            </div> */}
        </div>
    );
};

export default CategoryCard;
