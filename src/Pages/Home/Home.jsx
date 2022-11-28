import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import PremiumProducts from './PremiumProducts/PremiumProducts';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <AdvertisedItems></AdvertisedItems>
           <PremiumProducts></PremiumProducts>
        </div>
    );
};

export default Home;