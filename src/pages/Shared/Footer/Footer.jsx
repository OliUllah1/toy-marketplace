import React from 'react';
import logo from '../../../assets/images/navber-logo.webp';
import { FaMap,FaEnvelope,FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
      <div>
        <footer className="footer px-6 py-10 lg:p-10 bg-base-200 text-base-content">
        <div>
        <div className='mt-10'>
        <img className="w-full h-full object-center ml-5" src={logo} alt="" />
        
        </div>
    <p className='font-semibold mt-3 lg:mt-0 text-gray-600'>A kids toy shop is a store that  specializes<br /> in selling toys and games designed <br /> specifically for children.</p>
    <p className='flex items-center font-semibold gap-3'><FaMap className='text-xl text-pink-600'></FaMap>Address: Dhaka,Bangladesh</p>
    <p className='flex items-center font-semibold gap-3'><FaEnvelope className='text-xl text-pink-600'></FaEnvelope> Email : oliullah915@gmail.com</p>
    <p className='flex items-center font-semibold gap-3'> <FaPhoneAlt className='text-xl text-pink-600'></FaPhoneAlt>Phone : 0123587456</p>
        </div> 
        <div className='lg:mt-10 space-y-2'>
    <span className="font-bold text-3xl">Quick Links</span> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Help Center</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Redeem Voucher</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Contact Us</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Policies & Rules</a>
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Check Offer List</a>
        </div> 
        <div className='lg:mt-10 space-y-2'>
    <span className="font-bold text-3xl">Information</span> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Product Support</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Checkout</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">License Policy</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Affiliate</a>
    <a className=" text-gray-800 hover:text-sky-400 text-xl">About Us</a>
        </div> 
        <div className='lg:mt-10 space-y-2'>
    <span className="font-bold text-3xl">Follow Us On</span> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Facebook</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Twitter</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Instagram</a> 
    <a className=" text-gray-800 hover:text-sky-400 text-xl">Youtube</a> 
        </div>
        
        </footer>
        <hr/>
        <div className=' bg-slate-200 text-gray-500'>
        <p className='py-3 text-center'>Copyright 2023 by Toys House All Right Reserved.</p>
        </div>
      </div>
        
    );
};

export default Footer;