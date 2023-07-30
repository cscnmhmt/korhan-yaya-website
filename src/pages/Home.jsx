import React from 'react';
import Works from '../components/Works/Works';
import Headline from '../components/Headline/Headline';
import HeroShot from '../components/HeroShot/HeroShot';
import Footer from '../components/Footer/Footer';
import CallToAction from '../components/CTA/CallToAction';

const Home = ({ projects, setter }) => {
  return (
    <>
      <Headline />
      <HeroShot />
      <Works projects={projects} setter={setter} />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
