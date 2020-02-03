import React from 'react';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CallToAction from '../CallToAction/CallToAction';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
