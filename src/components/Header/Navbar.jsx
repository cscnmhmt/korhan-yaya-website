import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to={'/about'}>About me</NavLink>
    </nav>
  );
};

export default Navbar;
