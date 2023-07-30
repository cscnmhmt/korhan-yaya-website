import React from 'react';
import Header from '../Header/Header';

const Headline = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen bg-[url('../assets/headline.svg')] bg-cover bg-no-repeat">
      <Header />
      <h1 className="text-[120px] text-white font-heading font-extrabold leading-[164px]">
        Hi! Welcome :)
      </h1>
      <p className="text-2xl text-secondary-400 font-normal max-w-4xl text-center leading-10 mt-8">
        Hello! I’m <span className="text-white font-semibold">Korhan yaya</span>
        , Expert{' '}
        <span className="text-white font-semibold">
          User Interface Designer
        </span>
        . I design modern and trendy{' '}
        <span className="text-white font-semibold">mobile applications</span>{' '}
        and <span className="text-white font-semibold">websites</span> that will
        help you reach your goals.
      </p>
    </div>
  );
};

export default Headline;
