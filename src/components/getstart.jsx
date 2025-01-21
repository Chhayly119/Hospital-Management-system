import React from 'react';
import Header from './header';
import HeroSection from './herosection';
import BiographySection from './biography';
import Footer from './footer';
import '../assets/getstart.css';

const GetStarted = () => {
  return (
    //  className="get-started-page"
    <div>
        <Header />
        <HeroSection />
        <BiographySection />
        <Footer />
    </div>
  );
};

export default GetStarted;
