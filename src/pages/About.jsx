import React from 'react';
import Header from '../components/Header/Header';
import CallToAction from '../components/CTA/CallToAction';
import Footer from '../components/Footer/Footer';
import AboutHero from '../components/AboutHero/AboutHero';

const About = () => {
  return (
    <div className="bg-black">
      <Header />
      <AboutHero />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
