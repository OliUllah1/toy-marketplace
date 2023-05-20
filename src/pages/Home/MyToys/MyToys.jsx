import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

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
        <div>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>M</span>y <span className='text-5xl text-pink-500'>T</span>oys</h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>
        </div>
    );
};

export default MyToys;