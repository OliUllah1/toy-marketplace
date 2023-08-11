
import banner from '../../../assets/images/banner.jpg';
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    
    return (
        <div className="carousel w-full lg:h-[550px] h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} className="w-full object-cover" />
            <div className="absolute w-full h-full text-white gap-5 transform bg-gradient-to-r from-[#616464] to-[rgba(21, 21, 21,0)]">
            <div className='px-5 pt-5 lg:px-20 lg:pt-28'>
            <h1 className='text-[#181d4e] text-xl lg:text-6xl font-bold lg:w-4/5 mb-5 z-10'>Pick the best toy for your beloved child from <span className='lg:text-6xl font-bold text-pink-500'>Toys</span> <span className=' text-yellow-400'>House</span></h1>
            <p className='lg:w-2/3 font-semibold lg:text-xl text-gray-800'>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
            <button className='lg:animate-bounce mt-2 bg-sky-400 px-5 py-2 lg:px-10 lg:py-3 font-semibold lg:font-bold rounded-xl flex items-center gap-3 lg:mt-10 hover:bg-pink-400'>SHOP NOW <FaArrowRight></FaArrowRight></button>
            </div>
            </div>
        </div> 
  
        </div>
    );
};

export default Banner;