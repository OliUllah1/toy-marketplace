import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;