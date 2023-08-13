import React from 'react';
import deliery from '../../../assets/images/logo/delivery.webp'
import download from '../../../assets/images/logo/download.webp'
import phone from '../../../assets/images/logo/phone.webp'

const Facility = () => {
    return (
        <div className='bg-[#f379a7] py-8 px-2 lg:px-10 grid grid-cols-2 lg:grid-cols-4'>
            
            <div className='flex items-center justify-center gap-5 lg:border-r-2'>
                <img className='text-red-500' src={deliery} alt="" />
                <div className='text-white'>
                    <h4 className='font-bold'>FAST SHIPPING</h4>
                    <p className='text-sm'>Fast Shipping</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 lg:border-r-2'>
                <img className='text-red-500' src={download} alt="" />
                <div className='text-white'>
                    <h4 className='font-bold'>ONLINE PAYMENT</h4>
                    <p className='text-sm'>Payment methods.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 lg:border-r-2'>
                <img className='text-red-500' src={phone} alt="" />
                <div className='text-white'>
                    <h4 className='font-bold'>24/7 SUPPORT</h4>
                    <p className='text-sm'>Unlimited help desk.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <img className='text-red-500' src={deliery} alt="" />
                <div className='text-white'>
                    <h4 className='font-bold'>On time Delivery.</h4>
                    <p className='text-sm'>On time Delivery.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Facility;