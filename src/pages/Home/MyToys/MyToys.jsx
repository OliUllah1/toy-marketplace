import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToyCard from './MyToyCard';

const MyToys = () => {
    const [toys,setToys]=useState([])
    const {user}=useContext(AuthContext)
    const url =`http://localhost:5000/mytoys?email=${user.email}`;
    useEffect(()=>{
        fetch(url,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
        })
    },[url])
    console.log(toys)
    return (
        <div className='pb-10'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>M</span>y <span className='text-5xl text-pink-500'>T</span>oys</h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>





            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Toy Information</th>
        <th>Seller Details</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Rating</th>
        <th>Update or delete</th>
      </tr>
    </thead>
    <tbody>
      {
        toys.map((toy,index)=><MyToyCard key={toy._id} index={index} toy={toy}></MyToyCard>)
      }
    </tbody>
    
    
  </table>
</div>










        </div>
    );
};

export default MyToys;