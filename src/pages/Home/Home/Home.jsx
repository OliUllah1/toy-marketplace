import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    const {loading}=useContext(AuthContext)
    useTitle('Home')
    
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default Home;