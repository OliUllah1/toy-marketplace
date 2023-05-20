import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ToyCard = ({toy,index}) => {
    const{_id,availableQuantity,sellerName,subCategory,toyPrice,toyName}=toy;
    return (
    
            <tr>
        <th>{index +1}</th>
        <td className='font-semibold'>{sellerName}</td>
        <td className=' text-pink-500 font-bold'>{toyName}</td>
        <td className='font-semibold'>{subCategory}</td>
        <td className=' text-pink-500 font-bold'>{toyPrice}$</td>
        <td className='font-semibold'>{availableQuantity}</td>
        <td><Link to={`/alltoys/${_id}`}><button className='link link-secondary font-semibold'>View Details</button></Link></td>
        </tr>
        





//         <div className="card full bg-base-100 shadow-xl">
//   <figure><img className='h-72 w-full object-center' src={toyImage} alt="Shoes" /></figure>
//   <div className="p-5 space-y-3">
//     <h3 className='text-2xl font-semibold'>Toy Name: <span className=' text-pink-400 font-bold'>{toyName}</span></h3>
//     <h5 className='text-xl font-semibold'>Seller Name: {sellerName}</h5>
//     <div className='text-xl font-semibold flex justify-between'>
//         <p>Category: {subCategory}</p>
//         <p>Price: <span className=' text-pink-500'>{toyPrice}$</span></p>
//     </div>
//     <div className='flex justify-between pb-5'>
//     <p className='flex items-center gap-2 text-xl font-semibold'>Rating : {rating} <FaStar className=' text-yellow-300'></FaStar></p>
//         <Link to={`alltoys/${_id}`}><button className='btn btn-outline btn-secondary'>View Details</button></Link>
//     </div>
//   </div>
// </div>
    );
};

export default ToyCard;