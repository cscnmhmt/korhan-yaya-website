import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 py-11 px-20 flex items-center text-white">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
