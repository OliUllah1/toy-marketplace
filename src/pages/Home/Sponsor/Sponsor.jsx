import React from 'react';
import logo1 from '../../../assets/images/logo/logo1.webp'
import logo2 from '../../../assets/images/logo/logo2.webp'
import logo3 from '../../../assets/images/logo/logo3.webp'
import logo4 from '../../../assets/images/logo/logo4.webp'
import logo5 from '../../../assets/images/logo/logo5.webp'
import logo6 from '../../../assets/images/logo/logo6.webp'
const Sponsor = () => {
    return (
        <div className='lg:p-10 p-2 bg-slate-50'>
        <div className='flex items-center pb-8' >
            <h1 className=' text-4xl font-semibold '> <span className=' lg:text-5xl text-pink-500'>O</span>urs <span className=' lg:text-5xl text-pink-500'>S</span>ponsors </h1>
            <p className='font-bold lg:text-4xl text-pink-500'>__________</p>
            </div>
        <div className='grid grid-cols-2 lg:grid-cols-6 py-5 marker: gap-5'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
        </div>
        </div>
    );
};

export default Sponsor;