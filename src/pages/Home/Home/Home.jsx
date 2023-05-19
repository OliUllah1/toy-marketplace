import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import { AuthContext } from '../../../Provider/AuthProvider';
import ToyShop from '../ToyShop/ToyShop';

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
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory toysData={toysData}></ToyCategory>
            <ToyShop toysData={toysData}></ToyShop>
        </div>
    );
};

export default Home;