import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import { AuthContext } from '../../../Provider/AuthProvider';

const Home = () => {

    const {loading}=useContext(AuthContext)
    const [toysData,setToysData]=useState([]);
    useEffect(()=>{
        fetch('https://toy-marketplace-server-flax.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToysData(data))
    },[])
    console.log(toysData)
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory toysData={toysData}></ToyCategory>
        </div>
    );
};

export default Home;