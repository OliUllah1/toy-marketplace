
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import useTitle from '../../../Hooks/useTitle';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import ContactsUs from '../ContactsUs/ContactsUs';
import OfferProduct from '../OfferProduct/OfferProduct';
import Facility from '../Facility/Facility';

const Home = () => {
    useTitle('Home')
    
    return (
        <div className=''>
            <Banner></Banner>
            <Facility></Facility>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <TrendingProducts></TrendingProducts>
            <OfferProduct></OfferProduct>
            <ContactsUs></ContactsUs>
        </div>
    );
};

export default Home;