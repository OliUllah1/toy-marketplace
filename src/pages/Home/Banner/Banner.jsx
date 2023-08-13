import banner from '../../../assets/images/banner/banner-bg.webp';
import bannerTop from '../../../assets/images/banner/banner-top-bg.webp';
import bannerBottom from '../../../assets/images/banner/banner-bottom-bg.webp';
import bannerRight from '../../../assets/images/banner/banner-right-bg.webp';
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    
    return (
        <div className="w-full relative lg:h-[550px] h-full" style={{backgroundImage:`url(${banner})`}}>
        <img className='absolute top-0' src={bannerTop} alt="" />
        <img className='absolute bottom-0' src={bannerBottom} alt="" />
        <div className='flex items-center gap-5 px-10'>
            <div className='w-full'>
                <h1 className='font-bold text-7xl text-gray-800'>Best Kinds Store & Online Shop</h1>
                <h5 className='my-4 font-bold text-2xl'>Give The Gift Of Your Children Everyday</h5>
                <button className='mt-7 rounded-full border-0 px-10 py-4 text-white font-bold bg-[#f379a7] hover:bg-[#547e79]'>Shop This Now</button>
            </div>
            <div className='w-full h-full'>
            <img className='h-[520px]' src={bannerRight} alt="" />
            </div>
        </div>
  
        </div>
    );
};

export default Banner;