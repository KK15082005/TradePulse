import React from 'react';
import Hero from './hero';
import Awards from './awards';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import OpenAccount from '../OpenAccount';
import Navbar from '../navbar';
import Footer from '../footer';

function HomePage() {
    return ( 
        <>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
        </>
    );
}

export default HomePage;