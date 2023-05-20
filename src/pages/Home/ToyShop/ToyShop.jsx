import React, { useContext, useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const ToyShop = () => {
    const [toysData,setToysData]=useState([]);
    const {loading}=useContext(AuthContext)
    useTitle('All Toys')
    useEffect(()=>{
        fetch('https://toy-marketplace-server-flax.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToysData(data))
    },[])
    return (
        <div className='py-10 bg-slate-50 rounded-lg lg:px-5'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>T</span>oys <span className='text-5xl text-pink-500'>H</span>ouse <span  className='text-5xl text-pink-500'>S</span>hop </h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>

            



<table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      
         {toysData.map((toy,index)=><ToyCard key={toy._id} index={index} toy={toy}></ToyCard>)}
    
     
    </tbody>
  </table>






        </div>
    );
};

export default ToyShop;