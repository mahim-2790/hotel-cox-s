import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MapAndFAQ from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MapAndFAQ></MapAndFAQ>
        </div>
    );
};

export default Home;