import React from 'react';
import errorImg from '../assets/images/404.jpg'
import { Link, useRouteError } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='py-10 space-y-4'>
            <div className=' flex justify-center'>
            <img className='w-[600px]' src={errorImg} alt="" />
            </div>
            <h3 className='text-center text-xl text-red-600'>{error?.data}</h3>
            <div className='flex justify-center'>
                <Link to='/'><button className='btn btn-success btn-outline'>Back to Home <FaHome className='w-10 text-xl'></FaHome></button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;