
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import useTitle from '../../../Hooks/useTitle';
import TrendingProducts from '../TrendingProducts/TrendingProducts';

const Home = () => {
    useTitle('Home')
    
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;