import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import OurServe from './OurServe/OurServe';
import PremiumProducts from './PremiumProducts/PremiumProducts';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OurServe></OurServe>
           <Categories></Categories>
           <AdvertisedItems></AdvertisedItems>
           <PremiumProducts></PremiumProducts>
        </div>
    );
};

export default Home;