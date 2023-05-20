import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import { AuthContext } from '../../../Provider/AuthProvider';
import ToyShop from '../ToyShop/ToyShop';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {

    const {loading}=useContext(AuthContext)
    const [toysData,setToysData]=useState([]);
    useTitle('Home')
    useEffect(()=>{
        fetch('https://toy-marketplace-server-flax.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToysData(data))
    },[])
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory toysData={toysData}></ToyCategory>
        </div>
    );
};

export default Home;