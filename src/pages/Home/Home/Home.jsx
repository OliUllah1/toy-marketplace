
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

const Home = () => {
    useTitle('Home')
    
    return (
        <div className=''>
            <Banner></Banner>
            <Facility></Facility>
            <BestProducts></BestProducts>
            <OfferDay></OfferDay>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <TrendingProducts></TrendingProducts>
            <OfferProduct></OfferProduct>
            <Sponsor></Sponsor>
            <ContactsUs></ContactsUs>
            
        </div>
    );
};

export default Home;