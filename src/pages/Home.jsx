import React from 'react';
import Works from '../components/Works/Works';
import Headline from '../components/Headline/Headline';

const Home = ({ projects, setter }) => {
  return (
    <>
      <Headline />
      <Works projects={projects} setter={setter} />
    </>
  );
};

export default Home;
