import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-black py-11 px-20 flex items-center text-white">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
