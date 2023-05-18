import React from 'react';
import logo from '../../../assets/images/toy-logo.png';
import { FaMap,FaEnvelope,FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
        <div className='w-28'>
        <img className="w-full h-full object-center ml-5" src={logo} alt="" />
        <h3 className=' hidden lg:flex '><span className='text-3xl font-bold text-[#ff6600]'>T</span><span className='text-3xl font-bold text-sky-500'>O</span><span className='text-3xl font-bold text-[#99cc33]'>Y</span><span className='text-3xl font-bold text-pink-500'>S</span> <span className='ml-3 font-bold text-2xl mt-1 text-yellow-300 '>House</span></h3>
        </div>
    <p className='font-semibold text-gray-600'>A kids toy shop is a store that  specializes<br /> in selling toys and games designed <br /> specifically for children.</p>
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
    );
};

export default Footer;