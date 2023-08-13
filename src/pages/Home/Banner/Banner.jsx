import banner from '../../../assets/images/banner/banner-bg.webp';
import bannerTop from '../../../assets/images/banner/banner-top-bg.webp';
import bannerBottom from '../../../assets/images/banner/banner-bottom-bg.webp';
import bannerRight from '../../../assets/images/banner/banner-right-bg.webp';
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    
    return (
        <div className="w-full relative lg:h-[550px] h-full" style={{backgroundImage:`url(${banner})`}}>
        <img className='absolute top-0 hidden lg:block' src={bannerTop} alt="" />
        <img className='absolute bottom-0 hidden lg:block' src={bannerBottom} alt="" />
        <div className='lg:flex items-center pt-10 gap-5 px-5 lg:px-10'>
            <div className='w-full pb-10'>
                <h1 className='font-bold text-4xl lg:text-7xl text-gray-800'>Best Kinds Store & Online Shop</h1>
                <h5 className='my-2 lg:my-4 font-bold text-lg lg:text-2xl'>Give The Gift Of Your Children Everyday</h5>
                <button className='lg:mt-7 rounded-full border-0 px-5 lg:px-10 py-2 lg:text-base text-sm  lg:py-4 text-white font-bold bg-[#f379a7] hover:bg-[#547e79] '>Shop This Now</button>
            </div>
            <div className='w-full h-full'>
            <img className='h-[500px] hidden lg:block' src={bannerRight} alt="" />
            </div>
        </div>
  
        </div>
    );
};

export default Banner;