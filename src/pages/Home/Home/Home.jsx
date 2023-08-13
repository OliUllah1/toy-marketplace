
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import useTitle from '../../../Hooks/useTitle';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import ContactsUs from '../ContactsUs/ContactsUs';
import OfferProduct from '../OfferProduct/OfferProduct';
import Facility from '../Facility/Facility';
import BestProducts from '../BestProducts/BestProducts';
import OfferDay from '../OfferDay/OfferDay';
import Sponsor from '../Sponsor/Sponsor';
import Blog from '../Blog/Blog';

const Home = () => {
    useTitle('Home')
    
    return (
        <div className=''>
            <Banner></Banner>
            <Facility></Facility>
            <BestProducts></BestProducts>
            <Gallery></Gallery>
            <OfferDay></OfferDay>
            <ToyCategory></ToyCategory>
            <TrendingProducts></TrendingProducts>
            <OfferProduct></OfferProduct>
            <Sponsor></Sponsor>
            <ContactsUs></ContactsUs>
            <Blog></Blog>
            
        </div>
    );
};

export default Home;