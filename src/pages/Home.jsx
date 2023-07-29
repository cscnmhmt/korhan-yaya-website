import React from 'react';
import Works from '../components/Works/Works';
import Header from '../components/Header/Header';

const Home = ({ projects, setter }) => {
  return (
    <>
      <Header />
      <Works projects={projects} setter={setter} />
    </>
  );
};

export default Home;
