
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ToyCategory from '../ToyCategory/ToyCategory';
import useTitle from '../../../Hooks/useTitle';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import ContactsUs from '../ContactsUs/ContactsUs';
import OfferProduct from '../OfferProduct/OfferProduct';

const Home = () => {
    useTitle('Home')
    
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <TrendingProducts></TrendingProducts>
            <ContactsUs></ContactsUs>
            <OfferProduct></OfferProduct>
        </div>
    );
};

export default Home;