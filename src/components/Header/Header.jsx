import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='bg-black p-3 flex justify-between items-center text-white'>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
