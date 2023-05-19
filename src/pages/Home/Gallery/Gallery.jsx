import React from 'react';

const Gallery = () => {
    return (

        <div className=' bg-gray-300 rounded-lg px-5  pt-10'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' text-5xl text-pink-500'>T</span>oys <span className='font-bold text-5xl text-pink-500'>G</span>allery </h1>
            <p className='font-bold text-4xl text-pink-500'>__________</p>
            </div>
            
            
            <div className='grid grid-cols-4 pb-10 gap-5'>
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/wNh5KGL/front-view-cute-little-baby-boy-cupcake-teddybear.jpg' alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/89fvnp2/n0jn-lo29-210929.jpg' alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/9n3jq2g/dinosaur-with-spikes-back.jpg' alt="" />

            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/wNh5KGL/front-view-cute-little-baby-boy-cupcake-teddybear.jpg' alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/89fvnp2/n0jn-lo29-210929.jpg' alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/9n3jq2g/dinosaur-with-spikes-back.jpg' alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/wNh5KGL/front-view-cute-little-baby-boy-cupcake-teddybear.jpg' alt="" />
            <img className=' shadow-xl h-full rounded-lg' src='https://i.ibb.co/89fvnp2/n0jn-lo29-210929.jpg' alt="" />
            
            
            
            
        </div>
        </div>
    );
};

export default Gallery;