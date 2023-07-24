import React from 'react';
import Cards from '../Cards/cards';
import Banner from '../Banner/Banner';
import Galary from '../../Galary/Galary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Cards></Cards>
           <Galary></Galary>
        </div>
    );
};

export default Home;