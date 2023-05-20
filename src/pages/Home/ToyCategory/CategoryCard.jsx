import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {
    const {_id,rating,toyImage,toyName,toyPrice,}=toy;
    return (
        <div className='border-2 shadow-2xl border-pink-600 p-5 lg:flex gap-5 rounded-xl items-center'>
            <div className='w-[50%] h-full'>
                <img className='w-full h-full rounded-lg object-center' src={toyImage} alt="" />
            </div>
            <div className=' space-y-4'>
                <h4 className='text-2xl font-semibold'>Toy Name: {toyName}</h4>
                <h5 className='text-xl font-semibold'>Price : {toyPrice} $</h5>
                <p className='flex items-center gap-2 text-xl font-semibold'>Rating : {rating} <FaStar className=' text-yellow-300'></FaStar></p>
                <Link to={`alltoys/${_id}`}><button className='btn btn-outline btn-secondary mt-3'>View Details</button></Link>
            </div>
        </div>
    );
};

export default CategoryCard;
