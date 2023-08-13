import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {
    useEffect(()=>{
        Aos.init({duration:500})
    },[])
    return (

        <div className='px-10 bg-slate-50  pt-10' data-aos="fade-down">
            
            <div className='text-center space-y-3 mb-10'>
            <h1 className=' text-4xl font-bold'> <span className=' lg:text-5xl text-pink-500'>T</span>oys <span className=' lg:text-5xl text-pink-500'>G</span>allery</h1>
            <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> incididunt ut labore et dolore magna aliqua...</p>
            </div>
           
            
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10 gap-5'>
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/wNh5KGL/front-view-cute-little-baby-boy-cupcake-teddybear.jpg'  data-aos="fade-right" alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/89fvnp2/n0jn-lo29-210929.jpg' data-aos="fade-down" alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/9n3jq2g/dinosaur-with-spikes-back.jpg' data-aos="fade-down" alt="" />

            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/wNh5KGL/front-view-cute-little-baby-boy-cupcake-teddybear.jpg' data-aos="fade-left" alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/89fvnp2/n0jn-lo29-210929.jpg'  data-aos="fade-right" alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/9n3jq2g/dinosaur-with-spikes-back.jpg' data-aos="fade-up" alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/wNh5KGL/front-view-cute-little-baby-boy-cupcake-teddybear.jpg' data-aos="fade-up" alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/89fvnp2/n0jn-lo29-210929.jpg' data-aos="fade-left" alt="" />
            
            
            
            
        </div>
        </div>
    );
};

export default Gallery;