import React, { useContext, useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const ToyShop = () => {
    const [toysData,setToysData]=useState([]);
    const {loading}=useContext(AuthContext)
    useEffect(()=>{
        fetch('https://toy-marketplace-server-flax.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToysData(data))
    },[])
    return (
        <div className='py-10 bg-slate-50 rounded-lg lg:px-5'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>T</span>oys <span className='font-bold text-5xl text-pink-500'>H</span>ouse <span  className='font-bold text-5xl text-pink-500'>S</span>hop </h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {toysData.map(toy=><ToyCard key={toy._id} toy={toy}></ToyCard>)}
            </div>
        </div>
    );
};

export default ToyShop;